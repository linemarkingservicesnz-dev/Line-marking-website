import { Link } from "wouter";

export default function SportsCourtLineMarking() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10" data-testid="page-sports-court">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Sports Court Line Marking
      </h1>

      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Professional Sports Court Line Marking Services</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Line-Marking.co.nz provides professional sports court line marking services for schools, clubs, and private homes across Christchurch and the wider Canterbury region. Our experienced team delivers precise, durable markings that meet official standards.
      </p>

      <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Our Sports Court Services Include:</h3>
      <div className="space-y-4 mb-8">
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Basketball Court Line Marking</h4>
          <p className="text-gray-600">Accurate and durable markings to meet official standards, ensuring optimal play conditions.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Pickleball Court Line Marking</h4>
          <p className="text-gray-600">Precise line marking for this rapidly growing sport, tailored to your specific requirements.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Tennis Court Line Marking</h4>
          <p className="text-gray-600">Professional line marking for tennis courts, enhancing playability and aesthetics.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Netball Court Line Marking</h4>
          <p className="text-gray-600">Clear and compliant markings to support safe and enjoyable netball games.</p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Choose Line-Marking.co.nz for Sports Courts?</h3>
      <ul className="space-y-3 mb-8">
        <li className="text-gray-600">
          <strong className="text-gray-800">Precision:</strong> We use professional equipment to ensure accurate, straight lines that meet official court dimensions.
        </li>
        <li className="text-gray-600">
          <strong className="text-gray-800">Durability:</strong> Our specialised sports paints are designed to withstand heavy use and weather conditions.
        </li>
        <li className="text-gray-600">
          <strong className="text-gray-800">Non-Slip:</strong> Safety is paramount &mdash; our paints include non-slip properties suitable for sports surfaces.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Get a Free Quote</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Contact us today to discuss your sports court line marking project. We offer free on-site assessments and competitive pricing.
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
