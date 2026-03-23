import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { RelatedServices } from "@/components/RelatedServices";
import heroImage from "../assets/images/pedestrian-walkway.png";

export default function PedestrianWalkways() {
  usePageTitle({
    title: "Pedestrian Walkways | Line-Marking.co.nz",
    description: "Pedestrian walkway markings for warehouses, factories, and commercial buildings. Clear safety lines to separate foot and vehicle traffic.",
    path: "/pedestrian-walkways/"
  });
  return (
    <div data-testid="page-pedestrian-walkways">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="Pedestrian walkway markings in warehouse" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Pedestrian Walkways
            </h1>
            <p className="text-lg text-white/90 max-w-xl mb-4">Professional, compliant and long-lasting pedestrian walkway markings using NZTA-approved paints and premium industrial coatings. Serving Christchurch, Auckland and nationwide.</p>
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
        <p className="text-gray-600 mb-6 leading-relaxed">
          At Line-Marking.co.nz, we specialise in providing high-quality line marking and non-slip paint solutions for pedestrian walkways. Our services ensure safe, visible, and compliant walkways that protect pedestrians and enhance the overall safety of your site.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Choose Line-Marking.co.nz for Pedestrian Walkways?</h3>
        <ul className="space-y-3 mb-8">
          <li className="text-gray-600">
            <strong className="text-gray-800">Enhanced Safety:</strong> Our non-slip paint provides a secure surface, reducing the risk of slips and falls.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">High Visibility:</strong> Bright, clear line markings make pedestrian walkways easily identifiable, guiding foot traffic safely.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Durable Solutions:</strong> We use top-tier materials to ensure long-lasting and resilient markings that withstand heavy use.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Our Services Include:</h3>
        <ul className="space-y-3 mb-8">
          <li className="text-gray-600">
            <strong className="text-gray-800">Pedestrian Walkway Marking:</strong> Create safe and organised walkways with precise line markings.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Non-Slip Paint Application:</strong> Improve traction on walkways with high-quality non-slip paint, ideal for both indoor and outdoor surfaces.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Safety Signage:</strong> Enhance visibility with well-placed pedestrian crossing signs and directional arrows.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Compliance Markings:</strong> Ensure your walkways meet all safety standards with clear and compliant markings.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Contact Us for Professional Walkway Marking</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          For expert line marking and non-slip paint solutions for pedestrian walkways, trust Line-Marking.co.nz. Contact us today for more information and a free quote, and ensure your pedestrian areas are safe, visible, and compliant.
        </p>

        <RelatedServices />

        <div className="mt-8">
          <Link href="/Contact/">
            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors cursor-pointer" data-testid="button-contact-us">
              CONTACT US NOW
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
