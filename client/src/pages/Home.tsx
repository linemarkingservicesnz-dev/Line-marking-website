import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import heroImage from "../assets/images/hero-carpark.png";
import warehouseImage from "../assets/images/warehouse-safety.png";
import epoxyImage from "../assets/images/epoxy-floor.png";
import sportsImage from "../assets/images/sports-court.png";

const canterburyLinks = [
  { href: "/ashburton-line-marking/", label: "Ashburton" },
  { href: "/blenheim-line-marking/", label: "Blenheim" },
  { href: "/greymouth-line-marking/", label: "Greymouth" },
  { href: "/kaiapoi-line-marking/", label: "Kaiapoi" },
  { href: "/nelson-line-marking/", label: "Nelson" },
  { href: "/rangiora-line-marking/", label: "Rangiora" },
  { href: "/richmond-line-marking/", label: "Richmond" },
  { href: "/rolleston-line-marking/", label: "Rolleston" },
  { href: "/timaru-line-marking/", label: "Timaru" },
  { href: "/westport-line-marking/", label: "Westport" },
];

const aucklandLinks = [
  { href: "/auckland-line-marking/", label: "Auckland" },
  { href: "/north-shore-line-marking/", label: "North Shore" },
  { href: "/south-auckland-line-marking/", label: "South Auckland" },
  { href: "/hamilton-line-marking/", label: "Hamilton" },
];

export default function Home() {
  usePageTitle({
    title: "Line Marking NZ | Car Parks, Warehouses, Sports Courts & Safety Markings",
    description: "Professional line marking across New Zealand. Car parks, warehouses, sports courts, playgrounds, epoxy flooring and safety markings. NZTA-approved materials. Nationwide service.",
    path: "/"
  });
  return (
    <div data-testid="page-home">
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Professional car park line marking in New Zealand"
          className="w-full h-full object-cover"
          data-testid="img-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2" data-testid="text-hero-title">
              Professional Car Park & Industrial Line Marking Across New Zealand
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-2">
              Welcome to Line-Marking.co.nz — your nationwide specialists in precision line marking, safety markings, and durable industrial flooring solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/Contact/">
                <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors cursor-pointer" data-testid="button-hero-contact">
                  Get a Free Quote
                </span>
              </Link>
              <a href="tel:0224393344">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-md font-medium hover:bg-white/30 transition-colors cursor-pointer" data-testid="button-hero-phone">
                  Call 022 439 3344
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-4">Why Choose Line-Marking.co.nz?</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Based in Christchurch and now serving Auckland, we deliver high-quality, compliant, and long-lasting line marking solutions for industrial, commercial, and public environments.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Our team helps your workplace communicate clearly — ensuring pedestrians, vehicles, and machinery move safely and efficiently through your site.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-md p-6 mb-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">What Sets Us Apart</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">✓</span><span><strong>NZTA-approved paints and premium resins</strong></span></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">✓</span><span><strong>Industrial-grade durability</strong> for warehouses, factories, and car parks</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">✓</span><span><strong>Flexible scheduling</strong>, including nights and weekends at standard rates</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">✓</span><span><strong>Clear, compliant markings</strong> that meet safety and accessibility standards</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">✓</span><span><strong>Trusted by logistics hubs, manufacturing plants, schools, and councils</strong></span></li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Core Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <img
              src={warehouseImage}
              alt="Warehouse safety floor markings with pedestrian walkways"
              className="w-full h-48 object-cover rounded-md mb-4"
              data-testid="img-warehouse"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Line Marking</h3>
            <p className="text-gray-600 leading-relaxed">
              Professional line marking for car parks, warehouses, factories, and commercial sites across Christchurch, Auckland, and the wider regions. We use <strong>NZTA-approved paints</strong>, epoxies, and polyurethane resins for maximum visibility and durability.
            </p>
          </div>

          <div>
            <img
              src={epoxyImage}
              alt="Epoxy coated concrete floor in modern workshop"
              className="w-full h-48 object-cover rounded-md mb-4"
              data-testid="img-epoxy"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Resilient Flooring Solutions</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Enhance the lifespan and safety of your floors with industrial-grade coatings:
            </p>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Epoxy flooring</li>
              <li>• Polyurethane coatings</li>
              <li>• Non-slip aggregates</li>
              <li>• Anti-skid paints</li>
              <li>• Protective concrete sealers</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-50 rounded-md p-5 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Directional & Safety Markings</h3>
            <p className="text-gray-600 leading-relaxed mb-3">Clear, compliant markings for safer workplaces:</p>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Pedestrian walkways</li>
              <li>• Zebra crossings</li>
              <li>• Forklift lanes</li>
              <li>• Hazard zones</li>
              <li>• Keep-clear areas</li>
              <li>• Emergency exit markings</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-md p-5 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Site Safety Enhancements</h3>
            <p className="text-gray-600 leading-relaxed mb-3">We supply and install:</p>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Walk Safe handrails</li>
              <li>• Wheel stops</li>
              <li>• Speed humps</li>
              <li>• Bollards</li>
              <li>• Car park safety systems</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">New: Sports Court Line Marking</h2>
        <p className="text-gray-600 mb-4">Now available for schools, clubs, and private homes.</p>

        <div className="md:flex gap-6 mb-6">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={sportsImage}
              alt="Sports court with fresh line markings"
              className="w-full h-56 object-cover rounded-md"
              data-testid="img-sports"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-4 leading-relaxed">
              We provide accurate, durable, and non-slip{" "}
              <Link href="/sports-court-line-marking/">
                <span className="text-blue-600 hover:underline cursor-pointer">sports court line markings</span>
              </Link>{" "}
              for schools, clubs, and private homes. Our specialist sports paints ensure long-lasting performance indoors and outdoors.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li><strong className="text-gray-800">Basketball</strong> — Accurate markings to meet official standards</li>
              <li><strong className="text-gray-800">Pickleball</strong> — Precise marking for this growing sport</li>
              <li><strong className="text-gray-800">Tennis</strong> — Professional markings enhancing playability</li>
              <li><strong className="text-gray-800">Netball</strong> — Clear, compliant court markings</li>
              <li><strong className="text-gray-800">Multi-sport courts</strong> — Combined layouts for shared spaces</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Additional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Maintenance & Line Removals</h3>
            <p className="text-gray-600 leading-relaxed">
              Keep your facility compliant and up-to-date with blacking out obsolete lines, total line removal, concrete grinding, surface preparation, and protective coatings. Perfect for layout changes, refurbishments, and safety upgrades.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Custom Colours & Materials</h3>
            <p className="text-gray-600 leading-relaxed">
              We tailor every project to your environment with high-visibility colours, UV-resistant outdoor coatings, non-slip finishes, and heavy-duty industrial resins. Suitable for pedestrian zones, mixed-use areas, and vehicle-only routes.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">How long do line markings last?</h3>
            <p className="text-gray-600 leading-relaxed">
              Typically <strong>18–24 months</strong>, depending on traffic volume. High-traffic areas may require maintenance every <strong>4–8 months</strong>.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Which resin is best for durability?</h3>
            <p className="text-gray-600 leading-relaxed">
              <strong>Epoxy</strong> is ideal for concrete and indoor areas. <strong>Polyurethane</strong> is UV-resistant and perfect for outdoor use, keeping colours vibrant in all weather.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Can MMA resin be used indoors?</h3>
            <p className="text-gray-600 leading-relaxed">
              We recommend <strong>outdoor use only</strong> due to strong odour and ventilation requirements.
            </p>
          </div>
        </div>

        <div className="bg-blue-600 rounded-md p-6 my-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Get a Free Quote Today</h3>
          <p className="mb-4 text-white/90">
            For expert advice, free quotes, and fast turnaround times, contact our team today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:0224393344" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors" data-testid="link-phone">
              Call Rogerio: 022 439 3344
            </a>
            <Link href="/Contact/">
              <span className="inline-block bg-blue-700 text-white border border-white/30 px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors cursor-pointer" data-testid="link-contact-cta">
                Submit an Enquiry
              </span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-10">
          <p className="text-center text-gray-700 font-medium mb-4">We Serve All of New Zealand, Including:</p>

          <p className="text-center text-sm text-gray-500 font-medium mb-2">Canterbury & South Island</p>
          <div className="flex flex-wrap justify-center gap-2 text-sm mb-6" data-testid="region-links-canterbury">
            {canterburyLinks.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <Link href={link.href}>
                  <span className="text-blue-600 hover:underline cursor-pointer">{link.label}</span>
                </Link>
                {index < canterburyLinks.length - 1 && <span className="mx-2 text-gray-400">|</span>}
              </span>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 font-medium mb-2">Auckland & Waikato</p>
          <div className="flex flex-wrap justify-center gap-2 text-sm" data-testid="region-links-auckland">
            {aucklandLinks.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <Link href={link.href}>
                  <span className="text-blue-600 hover:underline cursor-pointer">{link.label}</span>
                </Link>
                {index < aucklandLinks.length - 1 && <span className="mx-2 text-gray-400">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
