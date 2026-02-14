import { ServiceLayout } from "@/components/ServiceLayout";

export default function Industrial() {
  return (
    <ServiceLayout
      title="Industrial Safety Markings"
      subtitle="Warehouse, Factory & Distribution Center Solutions"
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" // warehouse
    >
      <div className="space-y-6 text-slate-600">
        <p className="lead text-xl font-medium text-slate-800">
          In busy industrial environments, clear visual communication is critical for Health & Safety compliance. We specialize in creating logical, high-visibility floor marking systems that separate pedestrians from forklifts and identify hazards.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Warehouse Safety Solutions</h2>
        <p>
          We design and install comprehensive safety marking schemes tailored to your operational workflow.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border border-border p-4 rounded bg-white">
            <h4 className="font-bold text-lg mb-2 text-secondary">Walkways</h4>
            <p>clearly defined safe paths for staff and visitors, often marked in safety green or with yellow borders.</p>
          </div>
          <div className="border border-border p-4 rounded bg-white">
            <h4 className="font-bold text-lg mb-2 text-secondary">Forklift Lanes</h4>
            <p>Designated travel routes for machinery to minimize collision risks.</p>
          </div>
          <div className="border border-border p-4 rounded bg-white">
            <h4 className="font-bold text-lg mb-2 text-secondary">Exclusion Zones</h4>
            <p>Hatched markings around electrical panels, fire exits, and machinery.</p>
          </div>
          <div className="border border-border p-4 rounded bg-white">
            <h4 className="font-bold text-lg mb-2 text-secondary">Staging Areas</h4>
            <p>Marked zones for inbound/outbound goods, pallets, and quality control.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Custom Stenciling</h2>
        <p>
          We can create custom stencils for any requirement, including safety messages ("STOP", "SLOW", "LOOK"), numbering, logos, or specific operational instructions directly on the floor.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Minimizing Downtime</h2>
        <p>
          We understand that you can't just shut down your warehouse for painting. We offer:
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
          <li><strong>Fast-drying paints:</strong> Walkable in as little as 30 minutes.</li>
          <li><strong>After-hours service:</strong> We work nights and weekends at no extra penalty rate.</li>
          <li><strong>Dust-free preparation:</strong> Using vacuum-attached grinding equipment to prepare the surface without contaminating your stock.</li>
        </ul>
      </div>
    </ServiceLayout>
  );
}
