import { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "./ContactForm";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  children: ReactNode;
}

export function ServiceLayout({ title, subtitle, heroImage, children }: ServiceLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10"></div>
        <div className="container-wide relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display uppercase text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl text-primary font-medium tracking-wide max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="container-wide py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 prose prose-lg prose-slate max-w-none">
            {children}
            
            <div className="mt-12 p-8 bg-muted rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold font-display uppercase m-0 text-secondary">Need a Quote?</h3>
              <p className="mt-2 mb-6">Contact us today to discuss your requirements. We offer free on-site assessments.</p>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 font-bold text-primary hover:text-secondary cursor-pointer uppercase">
                  Contact Us Now <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold font-display uppercase mb-4 border-b pb-2">Our Services</h3>
              <ul className="space-y-2">
                <SidebarLink href="/Our-Services/Line-Marking/" label="Line Marking" />
                <SidebarLink href="/Our-Services/Industrial/" label="Industrial Safety" />
                <SidebarLink href="/Our-Services/Non-Slip-Flooring/" label="Non-Slip Flooring" />
                <SidebarLink href="/Our-Services/Protective-Concrete-Coatings/" label="Concrete Coatings" />
                <SidebarLink href="/line-marking-epoxy-flooring/" label="Epoxy Flooring" />
                <SidebarLink href="/line-marking-pedestrian-walkways/" label="Pedestrian Walkways" />
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ href, label }: { href: string, label: string }) {
  return (
    <li>
      <Link href={href}>
        <span className="block p-2 rounded hover:bg-muted text-foreground hover:text-primary transition-colors cursor-pointer font-medium">
          {label}
        </span>
      </Link>
    </li>
  );
}
