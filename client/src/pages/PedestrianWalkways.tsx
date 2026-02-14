import { ServiceLayout } from "@/components/ServiceLayout";

export default function PedestrianWalkways() {
  return (
    <ServiceLayout
      title="Pedestrian Walkways"
      subtitle="Keeping People & Machinery Separated"
      heroImage="https://images.unsplash.com/photo-1628135804593-3d069b1220a5?auto=format&fit=crop&q=80" // warehouse walkway
    >
      <div className="space-y-6 text-slate-600">
        <p className="lead text-xl font-medium text-slate-800">
          The most effective way to prevent accidents in a shared workspace is to physically and visually separate pedestrian traffic from mobile plant equipment.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">The "Safety Green" Standard</h2>
        <p>
          We typically recommend painting pedestrian walkways in a solid Safety Green color, often bordered by yellow safety lines. This creates an unmistakable safe zone that stands out against the grey concrete.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Crossing Points</h2>
        <p>
          Where walkways intersect with forklift routes, we install high-impact zebra crossings and "LOOK" stencils to force pedestrians to pause and check for traffic.
        </p>

        <div className="bg-hazard h-4 w-full my-8 rounded"></div>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Anti-Slip Additives</h2>
        <p>
          Smooth painted lines can be slippery. We add fine anti-slip aggregate to our walkway paints to ensure staff have safe footing, even when wearing work boots in wet conditions.
        </p>
      </div>
    </ServiceLayout>
  );
}
