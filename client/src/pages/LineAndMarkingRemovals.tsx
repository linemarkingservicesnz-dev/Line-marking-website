import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { RelatedServices } from "@/components/RelatedServices";
import heroImage from "../assets/images/line-removal.png";

export default function LineAndMarkingRemovals() {
  usePageTitle({
    title: "Line & Marking Removals | Line-Marking.co.nz",
    description: "Fast, clean line and marking removal for layout changes or upgrades. Blackout, total removal, concrete grinding, and surface preparation across New Zealand.",
    path: "/line-removal/"
  });
  return (
    <div data-testid="page-line-removals">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="Line removal and concrete grinding" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Line &amp; Marking Removal Services
            </h1>
            <p className="text-lg text-white/90 max-w-xl mb-4">Professional, fast and clean line removal for layout changes, refurbishments and safety upgrades. Serving Christchurch, Auckland and nationwide.</p>
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
          At Line-Marking.co.nz, we provide comprehensive line and marking removal services for car parks, warehouses, factories, and commercial spaces. Whether you're updating your layout, removing obsolete markings, or preparing surfaces for new line marking, our team has the expertise and equipment to get the job done right.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-md p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Our Removal Methods:</h2>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <strong className="text-gray-800 block">Blacking Out Obsolete Lines</strong>
                Quick and effective method to cover outdated markings — ideal for temporary or budget-conscious solutions.
              </li>
              <li>
                <strong className="text-gray-800 block">Total Line Removal</strong>
                Complete removal using industrial grinding equipment, leaving a clean surface ready for new markings.
              </li>
              <li>
                <strong className="text-gray-800 block">Concrete Grinding</strong>
                Surface preparation and grinding to remove paint, coatings, and imperfections from concrete floors.
              </li>
              <li>
                <strong className="text-gray-800 block">Surface Preparation</strong>
                Thorough preparation to ensure optimal adhesion for new coatings and markings.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-md p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Perfect For:</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Warehouse re-layouts</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Car park redesigns</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Safety upgrades</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> New coatings or markings</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Refurbishments</li>
            </ul>
          </div>
        </div>

        <RelatedServices />

        <div className="bg-blue-600 rounded-md p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Get a Free Quote</h3>
          <p className="text-white/90 mb-4">Contact us today for professional line removal and surface preparation services.</p>
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
