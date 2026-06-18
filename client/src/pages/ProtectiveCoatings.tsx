import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { RelatedServices } from "@/components/RelatedServices";
import { servicePageSchema } from "@/lib/schemas";
import heroImage from "../assets/images/protective-coatings.webp";
import heroImageWebp from "../assets/images/protective-coatings.webp";

export default function ProtectiveCoatings() {
  usePageTitle({
    title: "Protective Concrete Coatings | Line-Marking.co.nz",
    description: "Extend the life of your concrete with epoxy flooring, polyurethane coatings, resin flooring, concrete sealing, and driveway sealing. Christchurch and Auckland.",
    path: "/protective-concrete-coatings/",
    schema: servicePageSchema(
      "Protective Concrete Coatings",
      "Extend the life of your concrete with epoxy flooring, polyurethane coatings, resin flooring, concrete sealing, and driveway sealing. Christchurch and Auckland.",
      "/protective-concrete-coatings/",
      [{ question: "How long does a concrete coating last?", answer: "Properly applied epoxy or polyurethane coatings typically last 5–10 years depending on traffic, UV exposure, and surface preparation." }]
    )
  });
  return (
    <div data-testid="page-protective-coatings">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <picture>
          <source type="image/webp" srcSet={heroImageWebp} />
          <img src={heroImage} alt="Protective concrete floor coating" className="w-full h-full object-cover" width={1408} height={768} fetchpriority="high" data-testid="img-hero" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Protective Concrete Coatings
            </h1>
            <p className="text-lg text-white/90 max-w-xl mb-4">Professional, compliant and long-lasting concrete coatings using premium protective systems. Serving Christchurch, Auckland and nationwide.</p>
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
          At Line-Marking.co.nz, we specialise in high-quality protective concrete coatings that enhance and extend the life of your floors. Our expert team applies advanced systems that offer superior protection, durability, and appearance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-md p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">We Provide:</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• <Link href="/epoxy-flooring/"><span className="text-blue-600 hover:underline cursor-pointer">Epoxy flooring</span></Link></li>
              <li>• Polyurethane coatings</li>
              <li>• Resin flooring</li>
              <li>• Garage floor epoxy</li>
              <li>• Commercial kitchen flooring</li>
              <li>• Concrete sealing</li>
              <li>• Driveway sealing</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-md p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Why It Matters:</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Prevents wear and damage</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Improves hygiene</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Enhances appearance</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Increases durability</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Chemical-resistant surfaces</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Line-Marking.co.nz?</h2>
        <div className="space-y-3 mb-10">
          <div className="flex items-start gap-3 text-gray-600">
            <span className="text-blue-600 font-bold mt-0.5">✓</span>
            <div><strong className="text-gray-800">Premium Materials</strong> — We use top-quality coatings for long-lasting, professional results.</div>
          </div>
          <div className="flex items-start gap-3 text-gray-600">
            <span className="text-blue-600 font-bold mt-0.5">✓</span>
            <div><strong className="text-gray-800">Expert Application</strong> — Our skilled team ensures precise and effective surface preparation and coating.</div>
          </div>
          <div className="flex items-start gap-3 text-gray-600">
            <span className="text-blue-600 font-bold mt-0.5">✓</span>
            <div><strong className="text-gray-800">Custom Solutions</strong> — Tailored to meet your specific environment, traffic levels, and requirements.</div>
          </div>
        </div>

        <RelatedServices />

        <div className="bg-blue-600 rounded-md p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Protect Your Concrete Today</h3>
          <p className="text-white/90 mb-4">Contact us for a free quote and expert advice on the best coating solution for your project.</p>
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
