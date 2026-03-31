import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { registerRedirects } from "./redirects";
import nodemailer from "nodemailer";

function createTransporter() {
  if (!process.env.GMAIL_APP_PASSWORD) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NOTIFY_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

async function sendInquiryNotification(inquiry: { name: string; email: string; phone?: string | null; message: string }) {
  const transporter = createTransporter();
  if (!transporter || !process.env.NOTIFY_EMAIL) {
    console.error("Email not configured: missing GMAIL_APP_PASSWORD or NOTIFY_EMAIL");
    return;
  }

  console.log(`Sending enquiry notification to ${process.env.NOTIFY_EMAIL} for ${inquiry.name}`);
  try {
    await transporter.sendMail({
      from: `"Line-Marking.co.nz" <${process.env.NOTIFY_EMAIL}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `New Enquiry from ${inquiry.name} — Line-Marking.co.nz`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #2563eb;">New Contact Form Enquiry</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; width: 120px;">Name:</td><td style="padding: 8px;">${inquiry.name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${inquiry.email}">${inquiry.email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${inquiry.phone || "Not provided"}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold; vertical-align:top;">Message:</td><td style="padding: 8px;">${inquiry.message.replace(/\n/g, "<br>")}</td></tr>
          </table>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">This enquiry was submitted via the contact form on line-marking.co.nz</p>
        </div>
      `,
    });
    console.log("Enquiry notification email sent successfully");
  } catch (err) {
    console.error("Failed to send enquiry notification email:", err);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  registerRedirects(app);
  
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      await sendInquiryNotification(inquiry);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
