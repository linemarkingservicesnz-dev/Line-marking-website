import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { RelatedServices } from "@/components/RelatedServices";
import { servicePageSchema } from "@/lib/schemas";
import heroImage from "../assets/images/industrial-marking.png";
import projectImg1 from "../assets/images/warehouse-exclusion-zones-1.jpg";
import projectImg2 from "../assets/images/warehouse-exclusion-zones-2.jpg";
import projectImg3 from "../assets/images/warehouse-exclusion-zones-3.jpg";

export default function Industrial() {
  usePageTitle({
    title: "Warehouse Line Marking NZ | Safety Walkways & Forklift Lanes",
    description: "Warehouse & factory line marking. Pedestrian walkways, forklift lanes, hazard zones, emergency exits. Epoxy & polyurethane coatings. WorkSafe compliant.",
    path: "/warehouse-line-marking/",
    schema: servicePageSchema(
      "Warehouse Line Marking",
      "Warehouse & factory line marking. Pedestrian walkways, forklift lanes, hazard zones, emergency exits. Epoxy & polyurethane coatings. WorkSafe compliant.",
      "/warehouse-line-marking/",
      [{ question: "What colour are pedestrian walkways in NZ warehouses?", answer: "Yellow is the standard colour for pedestrian walkways in NZ workplaces, as recommended by WorkSafe NZ." }]
    )
  });
  return (
    <div data-testid="page-industrial">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="Warehouse pedestrian walkway marking" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Warehouse &amp; Factory Line Marking
            </h1>
            <p className="text-lg text-white/90 max-w-xl mb-4">Professional, compliant and long-lasting warehouse safety markings using NZTA-approved paints and premium industrial coatings. Serving Christchurch, Auckland and nationwide.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/Contact/">
                <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors cursor-pointer" data-testid="button-hero-quote">Get a Free Quote</span>
              </Link>
              <a href="tel:0224393344" className="text-white font-semibold hover:text-blue-200 transition-colors" data-testid="link-hero-phone">Call: 022 439 3344</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-8 leading-relaxed">
          We deliver industrial line marking solutions for warehouses, factories, distribution centres, and transport yards across New Zealand. Every marking is designed to reduce accidents, improve traffic flow, and keep your site compliant.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-md p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">We Mark:</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Pedestrian walkways</li>
              <li>• Forklift lanes</li>
              <li>• Hazard zones</li>
              <li>• No-go areas</li>
              <li>• Emergency exits</li>
              <li>• Fire extinguisher zones</li>
              <li>• Storage bays</li>
              <li>• Racking boundaries</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-md p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Materials Available:</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Epoxy</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Polyurethane</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Non-slip coatings</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> High-visibility paints</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> NZTA-approved materials</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["Reduced accidents", "Improved traffic flow", "Better compliance", "Clear separation of people and machinery"].map((benefit) => (
            <div key={benefit} className="bg-blue-50 border border-blue-100 rounded-md p-3 text-gray-700 text-sm font-medium text-center">
              {benefit}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Project — Warehouse Safety Marking</h2>
        <p className="text-gray-600 mb-4">Red exclusion zones and yellow pedestrian walkways around truck bays — a full warehouse safety layout for a Christchurch distribution centre.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          <img src={projectImg1} alt="Warehouse red exclusion zones and yellow walkways around truck bays" className="w-full h-52 object-cover rounded-md" data-testid="img-project-1" />
          <img src={projectImg2} alt="Looking down warehouse aisle with red and yellow safety markings" className="w-full h-52 object-cover rounded-md" data-testid="img-project-2" />
          <img src={projectImg3} alt="Ground-level view of red and yellow floor markings at warehouse entrance" className="w-full h-52 object-cover rounded-md" data-testid="img-project-3" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Areas We Serve</h2>
        <p className="text-gray-600 mb-4">We specialise in industrial zones across:</p>
        <ul className="space-y-2 mb-8 text-gray-600">
          <li><strong className="text-gray-800">Hornby</strong> — Warehouses, logistics hubs, and distribution centres</li>
          <li><strong className="text-gray-800">Wigram</strong> — Light industrial, trades, and commercial units</li>
          <li><strong className="text-gray-800">Rolleston iZone</strong> — Heavy industry, manufacturing, and transport yards</li>
          <li><strong className="text-gray-800">Islington</strong> — Industrial line marking</li>
          <li><strong className="text-gray-800">Sockburn</strong> — Warehouse line marking</li>
          <li><strong className="text-gray-800">Middleton</strong> — Factory safety markings</li>
        </ul>

        <div className="bg-gray-800 rounded-md p-5 mb-8 text-white">
          <h2 className="text-lg font-bold mb-2">Flexible Scheduling</h2>
          <p className="text-white/90">Night and weekend service available at standard weekday rates — minimal disruption to your operations.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">What Clients Say</h2>
        <div className="space-y-4 mb-8">
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600">
            "Rogerio's team marked our forklift lanes and hazard zones in one night — clean, compliant, and professional."
          </blockquote>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600">
            "The anti-skid finish is perfect for our wet loading area. Highly recommend."
          </blockquote>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-md p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span>📋</span> Official NZ Workplace Safety Resources
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-0.5 flex-shrink-0">→</span>
              <div>
                <a href="https://www.worksafe.govt.nz/topic-and-industry/vehicles-and-mobile-plant/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline text-sm" data-testid="link-worksafe-traffic">
                  WorkSafe NZ — Vehicles &amp; Mobile Plant Safety
                </a>
                <p className="text-gray-500 text-sm mt-0.5">Official guidance on managing vehicle and pedestrian traffic safely in NZ workplaces.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-0.5 flex-shrink-0">→</span>
              <div>
                <a href="https://www.worksafe.govt.nz/topic-and-industry/vehicles-and-mobile-plant/forklifts/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline text-sm" data-testid="link-worksafe-forklifts">
                  WorkSafe NZ — Forklifts and Pedestrian Safety
                </a>
                <p className="text-gray-500 text-sm mt-0.5">WorkSafe guidance on managing the risk of forklift and pedestrian interaction in warehouses.</p>
              </div>
            </li>
          </ul>
        </div>

        <RelatedServices />

        <div className="bg-blue-600 rounded-md p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Book Your Free Site Visit</h3>
          <p className="text-white/90 mb-4">Ready to upgrade your site safety and compliance? Call or message us today.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:0224393344" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors" data-testid="link-phone">
              Call 022 439 3344
            </a>
            <Link href="/Contact/">
              <span className="inline-block bg-blue-700 text-white border border-white/30 px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors cursor-pointer" data-testid="button-contact-us">
                Submit an Enquiry
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
