import { ServiceLayout } from "@/components/ServiceLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface RegionalProps {
  location: string;
}

// This reusable component handles all regional landing pages
export default function RegionalLanding({ location }: RegionalProps) {
  return (
    <ServiceLayout
      title={`Line Marking ${location}`}
      subtitle={`Your Local Safety Marking Experts in ${location}`}
      heroImage="https://images.unsplash.com/photo-1566671077334-a744265cb843?auto=format&fit=crop&q=80" // nz landscape/road
    >
      <div className="space-y-6 text-slate-600">
        <p className="lead text-xl font-medium text-slate-800">
          Looking for professional line marking in {location}? We provide expert road marking, car park layout, and industrial safety painting services specifically for the {location} area.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Local Service, World-Class Standards</h2>
        <p>
          Our team regularly services {location}, providing the same high standard of work we deliver in Christchurch. We don't charge excessive travel fees because we group our jobs efficiently.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Services Available in {location}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <li className="bg-white p-3 border border-border rounded shadow-sm">Car Park Re-marking & New Layouts</li>
          <li className="bg-white p-3 border border-border rounded shadow-sm">Factory & Warehouse Safety Lines</li>
          <li className="bg-white p-3 border border-border rounded shadow-sm">School Playgrounds & Sports Courts</li>
          <li className="bg-white p-3 border border-border rounded shadow-sm">Road Markings & Stencils</li>
        </ul>

        <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
          <h3 className="text-xl font-bold font-display uppercase text-secondary mb-2">Regular Visits to {location}</h3>
          <p className="mb-4">
            We have crews in {location} regularly. Contact us today to find out when we're next in town and book your job to save on mobilization costs.
          </p>
          <Link href="/contact">
            <Button className="bg-secondary text-white hover:bg-secondary/90 font-bold uppercase">
              Check Schedule
            </Button>
          </Link>
        </div>
      </div>
    </ServiceLayout>
  );
}
