import { Link } from "wouter";
import heroImage from "../assets/images/industrial-marking.png";

export default function Industrial() {
  return (
    <div data-testid="page-industrial">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="Industrial warehouse floor markings" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Industrial Line Marking
            </h1>
            <p className="text-lg text-white/90 max-w-xl">Christchurch &amp; Canterbury</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-4">What We Offer</h2>
        <div className="space-y-4 mb-8">
          <div>
            <h3 className="font-semibold text-gray-800">Forklift lanes &amp; pedestrian zones</h3>
            <p className="text-gray-600">Clear separation for safety and efficiency</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Hazard &amp; exclusion zones</h3>
            <p className="text-gray-600">High-visibility markings for compliance and risk reduction</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Anti-skid coatings</h3>
            <p className="text-gray-600">Durable, textured finishes for wet or high-traffic areas</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Custom stenciling &amp; directional arrows</h3>
            <p className="text-gray-600">Tailored to your site layout and traffic flow</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">NZTA-approved paints</h3>
            <p className="text-gray-600">Fast-drying, long-lasting, and compliant with national standards</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Areas We Serve</h2>
        <p className="text-gray-600 mb-2">We specialize in industrial zones across:</p>
        <ul className="space-y-2 mb-8 text-gray-600">
          <li><strong className="text-gray-800">Hornby</strong> &ndash; Warehouses, logistics hubs, and distribution centers</li>
          <li><strong className="text-gray-800">Wigram</strong> &ndash; Light industrial, trades, and commercial units</li>
          <li><strong className="text-gray-800">Rolleston Izone</strong> &ndash; Heavy industry, manufacturing, and transport yards</li>
          <li><strong className="text-gray-800">Islington</strong> Industrial Line marking</li>
          <li><strong className="text-gray-800">Sockburn</strong> Warehouse Line marking</li>
          <li><strong className="text-gray-800">Middleton</strong> Factory Safety Markings</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Flexible Scheduling</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We offer night and weekend service at weekday rates to minimize disruption to your operations.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">What Clients Say</h2>
        <div className="space-y-4 mb-8">
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
            "Rogerio's team marked our forklift lanes and hazard zones in one night &mdash; clean, compliant, and professional."
          </blockquote>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
            "The anti-skid finish is perfect for our wet loading area. Highly recommend."
          </blockquote>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Book Your Free Site Visit</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Ready to upgrade your site safety and compliance? Call or message us today to lock in a quote.
        </p>
        <div className="space-y-2 text-gray-600 mb-4">
          <p><a href="tel:0224393344" className="text-blue-600 hover:underline">022 439 3344</a></p>
          <p><a href="mailto:info@workspacesafety.co.nz" className="text-blue-600 hover:underline">info@workspacesafety.co.nz</a></p>
          <p>
            <Link href="/Our-Services/Industrial/">
              <span className="text-blue-600 hover:underline cursor-pointer">www.line-marking.co.nz/industrial</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
