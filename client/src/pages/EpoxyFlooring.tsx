import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { RelatedServices } from "@/components/RelatedServices";
import heroImage from "../assets/images/epoxy-flooring-page.png";

export default function EpoxyFlooring() {
  usePageTitle({
    title: "Epoxy Flooring | Line-Marking.co.nz",
    description: "Professional epoxy flooring for garages, workshops, and commercial spaces. Durable, chemical-resistant floor coatings in Christchurch and Auckland.",
    path: "/epoxy-flooring/"
  });
  return (
    <div data-testid="page-epoxy-flooring">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="Glossy epoxy flooring in garage" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Epoxy Flooring Solutions
            </h1>
            <p className="text-lg text-white/90 max-w-xl mb-4">Professional, compliant and long-lasting epoxy flooring using premium industrial coatings. Serving Christchurch, Auckland and nationwide.</p>
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
          At Line-Marking.co.nz, we provide high-quality epoxy flooring that combines durability with aesthetic appeal, making it ideal for a variety of applications. Our expert team specialises in concrete epoxy flooring, residential epoxy flooring, and garage floor epoxy, delivering long-lasting and resilient surfaces.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Choose Epoxy Flooring?</h3>
        <ul className="space-y-3 mb-8">
          <li className="text-gray-600">
            <strong className="text-gray-800">Exceptional Durability:</strong> Epoxy flooring is highly resistant to wear, chemicals, and stains, making it perfect for high-traffic areas and industrial environments.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Aesthetic Versatility:</strong> Available in a range of colours and finishes, epoxy flooring enhances the visual appeal of any space, from sleek modern homes to industrial settings.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Low Maintenance:</strong> Epoxy surfaces are easy to clean and maintain, requiring minimal effort to keep them looking pristine.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Safety Benefits:</strong> Epoxy flooring can be formulated with non-slip properties, improving safety in both residential and commercial spaces.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Our Epoxy Flooring Services Include:</h3>
        <ul className="space-y-3 mb-8">
          <li className="text-gray-600">
            <strong className="text-gray-800">Concrete Epoxy Flooring:</strong> Durable solutions designed for industrial and commercial environments.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Residential Epoxy Flooring:</strong> Stylish and resilient flooring options for homes.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Garage Floor Epoxy:</strong> Tough, long-lasting surfaces specifically for garages.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Contact Us for Expert Epoxy Flooring</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          For professional epoxy flooring solutions that enhance both durability and style, trust Line-Marking.co.nz. Contact us today for more information and a free quote, and transform your space with our high-quality epoxy flooring.
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
