import { Link } from "wouter";
import heroImage from "../assets/images/line-removal.png";

export default function LineAndMarkingRemovals() {
  return (
    <div data-testid="page-line-removals">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="Line removal and concrete grinding" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Line and Marking Removals
            </h1>
            <p className="text-lg text-white/90 max-w-xl">Professional Removal and Surface Preparation</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-6 leading-relaxed">
          At Line-Marking.co.nz, we provide comprehensive line and marking removal services for car parks, warehouses, factories, and commercial spaces. Whether you need to update your layout, remove obsolete markings, or prepare surfaces for new line marking, our team has the expertise and equipment to get the job done right.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Our Removal Services Include:</h3>
        <div className="space-y-4 mb-8">
          <p className="text-gray-600">
            <strong className="text-gray-800">Blacking Out Obsolete Lines:</strong> Quick and effective method to cover outdated markings with black paint, ideal for temporary or budget-conscious solutions.
          </p>
          <p className="text-gray-600">
            <strong className="text-gray-800">Total Line Removal:</strong> Complete removal of existing markings using industrial grinding equipment, leaving a clean surface ready for new markings.
          </p>
          <p className="text-gray-600">
            <strong className="text-gray-800">Concrete Grinding:</strong> Surface preparation and grinding to remove paint, coatings, and imperfections from concrete floors.
          </p>
          <p className="text-gray-600">
            <strong className="text-gray-800">Surface Preparation:</strong> Thorough preparation of surfaces to ensure optimal adhesion for new coatings and markings.
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Contact Us</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          For professional line and marking removal services, contact Line-Marking.co.nz today for a free quote.
        </p>

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
