import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { RelatedServices } from "@/components/RelatedServices";
import heroImage from "../assets/images/line-marking-service.png";

export default function LineMarking() {
  usePageTitle({
    title: "Car Park Line Marking NZ | NZTA-Approved, Fast & Durable",
    description: "Professional car park line marking across NZ. Parking bays, EV bays, arrows, loading zones, accessible parking. NZTA-approved paints. Christchurch & Auckland.",
    path: "/car-park-line-marking/",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long do line markings last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically 18–24 months depending on traffic volume and surface preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work after hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer night and weekend scheduling at standard rates."
          }
        },
        {
          "@type": "Question",
          "name": "Which resin is best for car park durability?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Epoxy resin is ideal for concrete and indoor areas. Polyurethane is UV-resistant and best for outdoor car parks exposed to sunlight."
          }
        }
      ]
    }
  });
  return (
    <div data-testid="page-line-marking">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="Professional car park line marking services" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Car Park Line Marking Across New Zealand
            </h1>
            <p className="text-lg text-white/90 max-w-xl mb-4">Professional, compliant and long-lasting car park markings using NZTA-approved paints and premium coatings. Serving Christchurch, Auckland and nationwide.</p>
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
          At Line-Marking.co.nz, we deliver top-quality car park and site markings tailored to your specific needs. Whether you're updating existing markings or implementing new layouts, our professional team ensures your site is safe, clear, and fully compliant.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-md p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Our Car Park Marking Services</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Standard parking bays</li>
              <li>• Accessible parking</li>
              <li>• Directional arrows</li>
              <li>• Give-way and stop lines</li>
              <li>• Numbered bays</li>
              <li>• Loading zones</li>
              <li>• Keep-clear areas</li>
              <li>• EV charging bays</li>
              <li>• Visitor and staff parking layouts</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-md p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Why Choose Us?</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> NZTA-approved paints</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> UV-resistant outdoor coatings</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Fast-drying materials</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Clean, sharp, accurate lines</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Night and weekend work available</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Perfect For:</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {["Shopping centres", "Commercial buildings", "Schools", "Industrial sites", "Apartment complexes", "Public car parks"].map((item) => (
            <div key={item} className="bg-blue-50 border border-blue-100 rounded-md p-3 text-gray-700 text-sm font-medium text-center">
              {item}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">How long will the lines last?</h3>
            <p className="text-gray-600 leading-relaxed">
              Typically <strong>18–24 months</strong>, depending on traffic volume. High-traffic areas may require maintenance every <strong>4–8 months</strong>.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Can I choose epoxy resin markings for durability?</h3>
            <p className="text-gray-600 leading-relaxed">
              Epoxy resins are ideal for concrete and indoor areas. For outdoor use, polyurethane resins are recommended for their superior UV resistance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Can MMA resin be used indoors?</h3>
            <p className="text-gray-600 leading-relaxed">
              We recommend outdoor use only due to strong odour and ventilation requirements.
            </p>
          </div>
        </div>

        <RelatedServices />

        <div className="bg-blue-600 rounded-md p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Get a Free Quote Today</h3>
          <p className="text-white/90 mb-4">Contact us for professional line marking services that enhance safety and efficiency.</p>
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
