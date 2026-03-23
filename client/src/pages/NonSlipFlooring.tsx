import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { RelatedServices } from "@/components/RelatedServices";
import heroImage from "../assets/images/non-slip-flooring.png";

export default function NonSlipFlooring() {
  usePageTitle({
    title: "Non-Slip Flooring Solutions | Line-Marking.co.nz",
    description: "Industrial-grade non-slip flooring coatings for workshops, warehouses, loading areas, and walkways. Epoxy, polyurethane, and acrylic solutions across New Zealand.",
    path: "/non-slip-flooring/"
  });
  return (
    <div data-testid="page-non-slip-flooring">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="Non-slip textured floor coating" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Non-Slip Flooring Solutions
            </h1>
            <p className="text-lg text-white/90 max-w-xl mb-4">Professional, compliant and long-lasting non-slip flooring using premium industrial coatings. Serving Christchurch, Auckland and nationwide.</p>
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
          At Line-Marking.co.nz, we offer a wide range of non-slip flooring products designed to enhance safety and durability across various surfaces. Whether you're improving walkways, concrete floors, or asphalt areas, we have the right solution for your environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-md p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Our Products:</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• <Link href="/epoxy-flooring/"><span className="text-blue-600 hover:underline cursor-pointer">Concrete epoxy floor paint</span></Link></li>
              <li>• Epoxy concrete sealer</li>
              <li>• Acrylic concrete paint</li>
              <li>• Polyurethane floor coating</li>
              <li>• Asphalt sealer</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-md p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Ideal For:</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Workshops</li>
              <li>• Warehouses</li>
              <li>• Loading areas</li>
              <li>• Walkways</li>
              <li>• Car parks</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["Slip-resistant", "Chemical-resistant", "Easy to clean", "Long-lasting"].map((benefit) => (
            <div key={benefit} className="bg-blue-50 border border-blue-100 rounded-md p-3 text-gray-700 text-sm font-medium text-center">
              {benefit}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Specialist MMA Resin</h2>
          <p className="text-gray-600 leading-relaxed">
            Line-Marking.co.nz collaborates with Civil Works Construction Ltd, the only licensed MMA resin applicators in the South Island. Approved across the UK and Europe, MMA resin is known for its versatility and durability in all conditions — widely used on public roads, cycleways, bus lanes, and decorative footpaths.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tailored Solutions</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Our non-slip acrylic concrete paint is excellent for asphalt walkways, while our concrete epoxy floor paint and polyurethane floor coating are ideal for concrete floors. Our team will help you choose the best product for your specific project.
        </p>

        <RelatedServices />

        <div className="bg-blue-600 rounded-md p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Get Expert Advice & a Free Quote</h3>
          <p className="text-white/90 mb-4">Contact us today to discuss your non-slip flooring needs.</p>
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
