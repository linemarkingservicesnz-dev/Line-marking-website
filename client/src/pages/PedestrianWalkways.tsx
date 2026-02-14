import { Link } from "wouter";

export default function PedestrianWalkways() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10" data-testid="page-pedestrian-walkways">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Line-Marking.co.nz: Line Marking &amp; Non-Slip Paint for Pedestrian Walkway
      </h1>

      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Ensure Safety and Visibility with Expert Pedestrian Walkway Marking</h2>
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

      <div className="mt-8">
        <Link href="/Contact/">
          <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors cursor-pointer" data-testid="button-contact-us">
            CONTACT US NOW
          </span>
        </Link>
      </div>
    </div>
  );
}
