import { ServiceLayout } from "@/components/ServiceLayout";

export default function NonSlipFlooring() {
  return (
    <ServiceLayout
      title="Non-Slip Flooring"
      subtitle="Safety Solutions for Wet & Hazardous Areas"
      heroImage="https://images.unsplash.com/photo-1621255562768-4a5695022e11?auto=format&fit=crop&q=80" // concrete texture
    >
      <div className="space-y-6 text-slate-600">
        <p className="lead text-xl font-medium text-slate-800">
          Slips and trips are a leading cause of workplace injuries. Our non-slip flooring solutions provide aggressive traction for ramps, steps, kitchens, and wet processing areas.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Anti-Slip Coatings</h2>
        <p>
          We apply specialized epoxy and polyurethane coatings infused with industrial-grade aggregates (bauxite, aluminum oxide, or quartz) to create a textured surface that maintains grip even when wet or oily.
        </p>

        <h3 className="text-xl font-bold text-secondary mt-6">Applications</h3>
        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
          <li>Food processing plants & commercial kitchens</li>
          <li>Loading docks and ramps</li>
          <li>Pedestrian walkways in wet environments</li>
          <li>Vehicle workshops and wash bays</li>
          <li>School & public facility steps</li>
        </ul>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Compliance Ratings</h2>
        <p>
          Our systems are designed to meet New Zealand slip resistance standards (AS/NZS 4586). We can tailor the level of "grit" to balance cleanability with safety, offering ratings from R9 to R13 depending on your specific requirements.
        </p>

        <div className="mt-8">
           <img 
             src="https://pixabay.com/get/g0da0a29a3630558f6577cd8bce7495f056d03b22603290e66f466ca60aecc6973e71202d99660b3357e1e2c4145a8fcaf111261c923891b4635d6de40f0bde88_1280.jpg" 
             alt="Safety Flooring Detail" 
             className="w-full h-64 object-cover rounded-lg shadow-md"
           />
           <p className="text-sm text-muted-foreground mt-2 italic">High-traction safety coating on industrial stairs</p>
        </div>
      </div>
    </ServiceLayout>
  );
}
