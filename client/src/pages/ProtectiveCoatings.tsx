import { ServiceLayout } from "@/components/ServiceLayout";

export default function ProtectiveCoatings() {
  return (
    <ServiceLayout
      title="Protective Concrete Coatings"
      subtitle="Sealing, Dust-Proofing & Chemical Resistance"
      heroImage="https://images.unsplash.com/photo-1594916320325-14f77732a39c?auto=format&fit=crop&q=80" // clean concrete floor
    >
      <div className="space-y-6 text-slate-600">
        <p className="lead text-xl font-medium text-slate-800">
          Raw concrete is porous and prone to dusting, staining, and chemical damage. Our protective coatings extend the life of your slab while making it easier to clean and maintain.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Concrete Sealing</h2>
        <p>
          A cost-effective solution for large warehouses and factories. Penetrating sealers harden the concrete surface and prevent dusting, while clear topical sealers provide a semi-gloss finish that repels oil and water.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-muted/50 p-4 rounded border-l-2 border-primary">
            <h4 className="font-bold text-secondary">Hygiene</h4>
            <p className="text-sm">Sealed floors don't harbor bacteria and are easy to mop or scrub.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded border-l-2 border-primary">
            <h4 className="font-bold text-secondary">Durability</h4>
            <p className="text-sm">Resists abrasion from forklifts and foot traffic.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded border-l-2 border-primary">
            <h4 className="font-bold text-secondary">Aesthetics</h4>
            <p className="text-sm">Brightens up the workspace by reflecting light.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded border-l-2 border-primary">
            <h4 className="font-bold text-secondary">Protection</h4>
            <p className="text-sm">Stops oil, grease, and chemicals from penetrating the slab.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Preparation is Key</h2>
        <p>
          The success of any coating lies in the prep. We use industrial diamond grinders and shot blasters to remove contaminants and open the concrete pores, ensuring a mechanical bond that won't peel or flake.
        </p>
      </div>
    </ServiceLayout>
  );
}
