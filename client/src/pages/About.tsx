import { ServiceLayout } from "@/components/ServiceLayout";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <ServiceLayout
      title="About Us"
      subtitle="Your Trusted Partner in Industrial Safety"
      heroImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80" // construction worker
    >
      <div className="space-y-6 text-slate-600">
        <p className="lead text-xl font-medium text-slate-800">
          Line Marking & Flooring Christchurch is a locally owned and operated business dedicated to improving safety and efficiency in workplaces across the South Island.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Our Mission</h2>
        <p>
          To provide high-quality, durable, and compliant marking and flooring solutions that protect people and assets. We believe that a safe workplace is a productive workplace.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Expertise You Can Trust</h2>
        <p>
          With years of experience in the civil and industrial sectors, we understand the specific challenges of New Zealand environments. From freezing cold coolstores to hot asphalt car parks, we know which products work and which don't.
        </p>

        <h3 className="text-xl font-bold text-secondary mt-6">We Are Committed To:</h3>
        <ul className="space-y-3 mt-4">
          <ListItem text="Using only NZTA-approved road marking paints and industrial-grade resins." />
          <ListItem text="Strict adherence to Health & Safety protocols on every site." />
          <ListItem text="Providing clear, honest advice and accurate quotes." />
          <ListItem text="Delivering projects on time and within budget." />
          <ListItem text="Flexible scheduling to minimize operational downtime." />
        </ul>

        <div className="mt-8 p-6 bg-slate-100 rounded-lg border border-slate-200">
          <h3 className="text-lg font-bold font-display uppercase text-secondary mb-2">Service Areas</h3>
          <p className="text-sm">
            Based in Christchurch, we service the entire Canterbury region including Rolleston, Rangiora, Ashburton, and Timaru. We also travel to the West Coast (Greymouth, Westport) and Nelson for larger projects.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}
