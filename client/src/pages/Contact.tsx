import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-secondary py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold font-display uppercase mb-4">Contact Us</h1>
        <p className="text-xl text-primary">Get a Free, No-Obligation Quote</p>
      </div>

      <div className="container-wide py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-display uppercase text-secondary mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you need a small car park re-marked or a full warehouse safety system designed from scratch, we're here to help. Contact us using the form or the details below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Phone</h4>
                  <a href="tel:0224393344" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                    022 439 3344
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Available 7am - 6pm, Mon-Sat</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Email</h4>
                  <a href="mailto:rogeriotc2@gmail.com" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                    rogeriotc2@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">We typically reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Location</h4>
                  <p className="text-lg text-muted-foreground">Christchurch, New Zealand</p>
                  <p className="text-sm text-muted-foreground mt-1">Servicing the entire South Island</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Hours</h4>
                  <p className="text-lg text-muted-foreground">Flexible Scheduling</p>
                  <p className="text-sm text-muted-foreground mt-1">Night & Weekend work available by appointment</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
