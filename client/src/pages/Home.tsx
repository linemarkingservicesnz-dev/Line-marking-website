import { Link } from "wouter";

const regionLinks = [
  { href: "/line-marking-ashburton/", label: "Ashburton" },
  { href: "/line-marking-blenheim/", label: "Blenheim" },
  { href: "/line-marking-greymouth/", label: "Greymouth" },
  { href: "/line-marking-kaiapoi/", label: "Kaiapoi" },
  { href: "/line-marking-nelson/", label: "Nelson" },
  { href: "/line-marking-rangiora/", label: "Rangiora" },
  { href: "/line-marking-richmond/", label: "Richmond" },
  { href: "/line-marking-rolleston/", label: "Rolleston" },
  { href: "/line-marking-timaru/", label: "Timaru" },
  { href: "/line-marking-westport/", label: "Westport" },
];

export default function Home() {
  return (
    <div data-testid="page-home">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" data-testid="text-hero-title">
          Welcome to Line-Marking Christchurch
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Your premier provider of precision line marking services in Christchurch. We specialise in delivering bespoke, compliant, and clear line marking solutions tailored to enhance safety and efficiency across various workplaces and sports venues.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Why Choose Line-Marking.co.nz?</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Our Christchurch-based team ensures your workplace communicates with absolute clarity through expertly applied line markings. We help everyone on-site navigate safely, effectively integrating pedestrian and machinery traffic.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Our flexible scheduling includes night and weekend services at standard weekday rates to ensure minimal disruption to your operations.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Our Comprehensive Line Marking Services</h2>
        
        <div className="space-y-6 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Line Marking</h3>
            <p className="text-gray-600 leading-relaxed">
              We offer professional line marking for car parks in Christchurch, catering to both new markings and updates to existing ones using high-quality, NZTA-approved paints for durability and visibility.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Directional and Safety Markings</h3>
            <p className="text-gray-600 leading-relaxed">
              Enhance on-site safety with our directional arrows, zebra crossings, and safety line markings, crucial for factories, warehouses, and other industrial settings.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Resilient Flooring Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Choose from epoxy and polyurethane resins, non-slip aggregates, and non-skid paints to improve wear resistance and prolong the lifespan of floor markings.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Site Safety Enhancements</h3>
            <p className="text-gray-600 leading-relaxed">
              Our range of safety enhancements, including Walk Safe handrails and robust car park systems with wheel stops, speed humps, and bollards, are designed to manage traffic flow and increase safety in Christchurch locations.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">New: Sports Court Line Marking Services</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We are excited to announce the addition of{" "}
          <Link href="/Our-Services/sports-court-line-marking/">
            <span className="text-blue-600 hover:underline cursor-pointer">sports court line marking</span>
          </Link>{" "}
          to our services, available for schools, clubs, and private homes. Our offerings include:
        </p>

        <div className="space-y-4 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Basketball Court Line Marking</h3>
            <p className="text-gray-600">Accurate and durable markings to meet official standards, ensuring optimal play conditions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Pickleball Court Line Marking</h3>
            <p className="text-gray-600">Precise line marking for this rapidly growing sport, tailored to your specific requirements.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Tennis Court Line Marking</h3>
            <p className="text-gray-600">Professional line marking for tennis courts, enhancing playability and aesthetics.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Netball Court Line Marking</h3>
            <p className="text-gray-600">Clear and compliant markings to support safe and enjoyable netball games.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Additional Services</h2>
        <div className="space-y-4 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Maintenance and Removals</h3>
            <p className="text-gray-600 leading-relaxed">
              We provide services like blacking out obsolete lines, total line removal, concrete grinding, and protective coatings to keep your facility compliant and up-to-date.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Customised Colour and Material Options</h3>
            <p className="text-gray-600 leading-relaxed">
              Our material and colour choices are tailored to meet specific needs, ensuring clear markings for various traffic types across Christchurch &mdash; from pedestrian-only zones to mixed-use paths and vehicle-only areas.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Durability of Line Markings</h3>
            <p className="text-gray-600 leading-relaxed">
              Typically, our line markings last from 18 to 24 months, depending on traffic volumes, with areas subjected to heavy traffic requiring more frequent maintenance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Choice of Resins for Durability</h3>
            <p className="text-gray-600 leading-relaxed">
              We offer both epoxy and polyurethane resins. Epoxies are suited for concrete and indoor use, while polyurethanes are UV resistant, keeping colours vibrant outdoors.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Use of MMA Resin</h3>
            <p className="text-gray-600 leading-relaxed">
              We recommend applying MMA resin outdoors due to its strong odour, ensuring it is used in well-ventilated areas only.
            </p>
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Contact Us: For a free quote and tailored advice, contact our Christchurch team at Line-Marking.co.nz. We are dedicated to helping you maintain a safe, compliant, and clearly marked environment.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-md p-6 my-8">
          <p className="text-gray-700 font-medium mb-2">
            Choose Line-Marking.co.nz as your trusted line marking partner in Christchurch, dedicated to enhancing workplace safety and efficiency with high-quality solutions.
          </p>
          <p className="text-gray-700 font-medium">
            Call Rogerio now on{" "}
            <a href="tel:0224393344" className="text-blue-600 hover:underline" data-testid="link-phone">022 439 3344</a>
            {" "}or{" "}
            <Link href="/Contact/">
              <span className="text-blue-600 hover:underline cursor-pointer" data-testid="link-contact-cta">click here to submit an enquiry</span>
            </Link>
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-10">
          <p className="text-center text-gray-700 font-medium mb-4">We Serve All Of New Zealand, Including:</p>
          <div className="flex flex-wrap justify-center gap-2 text-sm" data-testid="region-links">
            {regionLinks.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <Link href={link.href}>
                  <span className="text-blue-600 hover:underline cursor-pointer">{link.label}</span>
                </Link>
                {index < regionLinks.length - 1 && <span className="mx-2 text-gray-400">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
