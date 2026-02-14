import { Link } from "wouter";

export default function ProtectiveCoatings() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10" data-testid="page-protective-coatings">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Line-Marking.co.nz: Protective Concrete Coatings
      </h1>

      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Enhance and Protect with Expert Concrete Coatings</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        At Line-Marking.co.nz, we specialise in providing high-quality protective concrete coatings to enhance and extend the life of your concrete surfaces. Our expert team applies advanced coatings that offer superior protection and durability.
      </p>

      <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Our Protective Concrete Coating Services Include:</h3>
      <div className="space-y-4 mb-8">
        <p className="text-gray-600">
          <Link href="/line-marking-epoxy-flooring/">
            <strong className="text-blue-600 hover:underline cursor-pointer">Epoxy Flooring:</strong>
          </Link>{" "}
          Durable concrete epoxy solutions for high-traffic areas.
        </p>
        <p className="text-gray-600">
          <strong className="text-gray-800">Residential Epoxy Flooring:</strong> Perfect for homes, offering a seamless and stylish finish.
        </p>
        <p className="text-gray-600">
          <strong className="text-gray-800">Garage Floor Epoxy:</strong> Provides a tough, long-lasting surface for garage floors.
        </p>
        <p className="text-gray-600">
          <strong className="text-gray-800">Commercial Kitchen Flooring:</strong> Hygienic and slip-resistant resin flooring for commercial kitchens.
        </p>
        <p className="text-gray-600">
          <strong className="text-gray-800">Resin Flooring:</strong> Versatile and durable, ideal for various applications.
        </p>
        <p className="text-gray-600">
          <strong className="text-gray-800">Concrete Sealing:</strong> Protects and extends the life of your concrete surfaces.
        </p>
        <p className="text-gray-600">
          <strong className="text-gray-800">Driveway Sealing:</strong> Enhances the appearance and durability of driveways.
        </p>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Choose Line-Marking.co.nz?</h3>
      <div className="space-y-3 mb-8">
        <p className="text-gray-600">
          <strong className="text-gray-800">Premium Materials:</strong> We use top-quality materials for long-lasting results.
        </p>
        <p className="text-gray-600">
          <strong className="text-gray-800">Expert Application:</strong> Our skilled team ensures precise and effective application.
        </p>
        <p className="text-gray-600">
          <strong className="text-gray-800">Custom Solutions:</strong> Tailored to meet your specific needs and conditions.
        </p>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Contact Us for Expert Protective Concrete Coatings</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        For professional protective concrete coatings, trust Line-Marking.co.nz. Contact us today for more information and a free quote, and protect your concrete surfaces with our durable and reliable coatings.
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
