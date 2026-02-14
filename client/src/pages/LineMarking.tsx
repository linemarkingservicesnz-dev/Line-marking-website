import { ServiceLayout } from "@/components/ServiceLayout";
import { CheckCircle2 } from "lucide-react";

export default function LineMarking() {
  return (
    <ServiceLayout
      title="Line Marking Services"
      subtitle="Professional Road, Car Park & Safety Markings"
      heroImage="https://images.unsplash.com/photo-1625246333195-09d9b4b9b942?auto=format&fit=crop&q=80" // road marking
    >
      <div className="space-y-6 text-slate-600">
        <p className="lead text-xl font-medium text-slate-800">
          We provide comprehensive line marking solutions for commercial and industrial clients across Christchurch and the South Island. Our experienced team uses NZTA-approved paints and modern equipment to ensure crisp, durable, and compliant markings.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Car Park Line Marking</h2>
        <p>
          A well-marked car park improves safety, maximizes space, and creates a positive first impression for your customers. We handle everything from new layouts to re-marking existing lines.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <FeatureItem text="Parking Bays & numbering" />
          <FeatureItem text="Disabled & Parent Parking Symbols" />
          <FeatureItem text="Directional Arrows & Stop Bars" />
          <FeatureItem text="Pedestrian Crossings" />
          <FeatureItem text="Loading Zones & No Parking Areas" />
          <FeatureItem text="EV Charging Station Markings" />
        </ul>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Road & Transport Markings</h2>
        <p>
          We work with civil contractors, councils, and private developments to apply road markings that meet strict New Zealand regulatory standards. Our high-performance road paints are designed to withstand heavy traffic and variable weather conditions.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Sports Courts</h2>
        <p>
          Precision marking for indoor and outdoor sports facilities, including tennis, netball, basketball, and multi-use courts. We use specialized non-slip paints suitable for sports surfaces.
        </p>

        <div className="my-8 p-6 bg-secondary text-white rounded-lg">
          <h3 className="text-xl font-bold font-display uppercase text-primary mb-2">Why Quality Matters</h3>
          <p className="text-gray-300">
            Cheap paint fades quickly and can become slippery when wet. We strictly use industrial-grade, chlorinated rubber or waterborne road marking paints that offer superior adhesion, reflectivity, and longevity.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2">
      <CheckCircle2 className="w-5 h-5 text-primary" />
      <span>{text}</span>
    </li>
  );
}
