import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-page-title";
import { RelatedServices } from "@/components/RelatedServices";
import heroImage from "../assets/images/sports-court-real.jpg";

export default function SportsCourtLineMarking() {
  usePageTitle({
    title: "Sports Court Line Marking NZ | Basketball, Tennis, Pickleball",
    description: "Professional sports court line marking for schools, clubs and homes. Basketball, tennis, pickleball, netball and multi-sport courts. UV-resistant paints.",
    path: "/sports-court-line-marking/"
  });
  return (
    <div data-testid="page-sports-court">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="Basketball court line marking" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3" data-testid="text-hero-title">
              Sports Court Line Marking
            </h1>
            <p className="text-lg text-white/90 max-w-xl mb-4" data-testid="text-hero-subtitle">Professional, compliant and long-lasting sports court markings using UV-resistant paints. Serving schools, clubs and homes nationwide.</p>
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
          Line-Marking.co.nz provides professional sports court line marking for schools, clubs, and private homes across New Zealand. Our experienced team delivers precise, durable markings that meet official standards — indoors and outdoors.
        </p>

        <div className="my-6 rounded-md overflow-hidden shadow-sm">
          <img src={heroImage} alt="Indoor basketball and volleyball court lined by Line-Marking.co.nz" className="w-full" data-testid="img-showcase" />
          <p className="text-sm text-gray-500 mt-2 italic px-1" data-testid="text-showcase-caption">Indoor multi-sport court with basketball and volleyball line markings completed by our team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-md p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">We Mark:</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Basketball courts</li>
              <li>• Pickleball courts</li>
              <li>• Tennis courts</li>
              <li>• Netball courts</li>
              <li>• Multi-sport courts</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-md p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Why Our Courts Last Longer:</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Non-slip sports paints</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> UV-resistant colours</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Accurate measurements</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Professional equipment</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Sports Court Services</h2>
        <div className="space-y-4 mb-10">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Basketball Court Line Marking</h3>
            <p className="text-gray-600">Accurate and durable markings to meet official standards, ensuring optimal play conditions for schools and clubs.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Pickleball Court Line Marking</h3>
            <p className="text-gray-600">Precise line marking for this rapidly growing sport, tailored to your specific indoor or outdoor surface.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Tennis Court Line Marking</h3>
            <p className="text-gray-600">Professional tennis court markings that enhance both playability and the appearance of your court.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Netball Court Line Marking</h3>
            <p className="text-gray-600">Clear and compliant markings to support safe and enjoyable netball games for schools and clubs.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Multi-Sport Courts</h3>
            <p className="text-gray-600">Combined court layouts for shared spaces — multiple sports, one surface, clearly marked for each.</p>
          </div>
        </div>

        <RelatedServices />

        <div className="bg-blue-600 rounded-md p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Get a Free Quote</h3>
          <p className="text-white/90 mb-4">Contact us today to discuss your sports court project. Free on-site assessments and competitive pricing.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:0224393344">
              <Button variant="outline" className="bg-white text-blue-600 border-white hover:bg-blue-50" data-testid="button-call-us">
                Call 022 439 3344
              </Button>
            </a>
            <Link href="/Contact/">
              <Button className="bg-blue-700 hover:bg-blue-800 border border-white/30" data-testid="button-contact-us">
                Submit an Enquiry
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
