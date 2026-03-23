import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import heroImage from "../assets/images/regional-nz.png";
import aucklandHeroImage from "../assets/images/auckland-skyline.png";

interface RegionalProps {
  location: string;
  region?: "canterbury" | "auckland";
}

const regionContent: Record<string, { intro: string; whyChoose: string[]; services: string[]; seo?: { title: string; description: string } }> = {
  Rolleston: {
    seo: {
      title: "Line Marking Rolleston | Car Parks, Warehouses & Safety Markings",
      description: "Professional line marking in Rolleston. Car parks, warehouses, sports courts, playgrounds, epoxy flooring and safety markings. Local Canterbury service.",
    },
    intro: "At line-marking.co.nz, we offer comprehensive line marking services in Rolleston, ensuring top-quality results for every project. Our expert team is ready to meet your specific needs with precision and efficiency.",
    whyChoose: [
      "Proven Expertise: With extensive experience in Rolleston, we understand local requirements and provide bespoke solutions.",
      "High-Quality Materials: We use the best materials to ensure long-lasting and visible markings.",
      "Customer-Centric Approach: Our services are designed to meet your unique needs and schedule.",
    ],
    services: [
      "Road Line Marking: Safe and clear markings for better road safety.",
      "Car Park Marking: Optimise your parking area with strategic markings.",
      "Industrial Safety Markings: Enhance workplace safety with clear, compliant industrial markings.",
      "Sports Court Marking: High-quality markings for all types of sports facilities.",
    ],
  },
  Rangiora: {
    intro: "line-marking.co.nz is your go-to source for professional line-marking services in Rangiora. We pride ourselves on delivering high-quality, durable line markings tailored to enhance safety and organisation.",
    whyChoose: [
      "Local Knowledge: Our local presence in Rangiora means we are quick to respond and adapt to your needs.",
      "Versatile Services: We offer a wide range of line marking services to suit any requirement.",
      "Attention to Detail: Every line we mark is applied with the utmost precision for optimal results.",
    ],
    services: [
      "Road Line Marking: Essential markings to guide and protect road users.",
      "Car Park Marking: Smart solutions to maximise parking efficiency and safety.",
      "Industrial Safety Markings: Custom safety markings for industrial environments.",
      "Sports Court Marking: Accurate and vibrant line markings for sports courts.",
    ],
  },
  Auckland: {
    intro: "Line-marking.co.nz is now proudly serving the greater Auckland region with professional line marking and industrial flooring services. From the CBD to the suburbs, our experienced team delivers precision line marking solutions for car parks, warehouses, factories, schools, and sports courts across Auckland.",
    whyChoose: [
      "Expanding to Auckland: We're bringing our proven Canterbury expertise to the Auckland market, offering the same high standard of workmanship.",
      "Full-Service Provider: From car park markings to industrial flooring, epoxy coatings, and sports courts — we handle it all.",
      "Competitive Pricing: We offer Auckland businesses great value without compromising on quality or materials.",
      "Flexible Scheduling: Night and weekend work available at standard rates to minimise disruption to your business.",
    ],
    services: [
      "Car Park Line Marking: Professional markings for commercial and retail car parks across Auckland.",
      "Industrial Safety Markings: Warehouse and factory floor markings to meet health and safety compliance.",
      "Sports Court Marking: Basketball, tennis, pickleball, netball, and multi-sport court markings for schools and clubs.",
      "Playground & School Games: Painted educational games and activities for Auckland schools.",
      "Epoxy & Protective Coatings: Durable flooring solutions for garages, warehouses, and commercial spaces.",
      "Line Removals: Professional removal and updating of existing line markings.",
    ],
  },
  "North Shore": {
    intro: "Looking for professional line marking services on Auckland's North Shore? Line-marking.co.nz provides expert car park marking, warehouse safety markings, and sports court line marking across the North Shore — from Takapuna and Devonport to Albany and the Hibiscus Coast.",
    whyChoose: [
      "North Shore Coverage: We service all North Shore suburbs including Takapuna, Milford, Albany, Browns Bay, and surrounding areas.",
      "Commercial Expertise: The North Shore has a thriving business district with plenty of car parks, offices, and retail centres — we keep them all clearly marked.",
      "Quality Materials: NZTA-approved paints and durable epoxy coatings that withstand Auckland's weather conditions.",
      "Fast Turnaround: We understand that businesses on the North Shore need minimal downtime — we work efficiently to get the job done.",
    ],
    services: [
      "Car Park Line Marking: Clear, compliant markings for shopping centres, offices, and apartment complexes.",
      "Warehouse & Factory Markings: Safety line marking for North Shore industrial and commercial spaces.",
      "Sports Court Marking: Multi-sport court markings for schools, parks, and private facilities.",
      "Non-Slip Flooring: Protective coatings for commercial kitchens, walkways, and wet areas.",
    ],
  },
  "South Auckland": {
    intro: "Line-marking.co.nz delivers professional line marking services across South Auckland's busy industrial and commercial zones. From Manukau and Otara to Papakura and Pukekohe, we provide high-quality car park markings, warehouse safety lines, and industrial flooring solutions tailored to South Auckland businesses.",
    whyChoose: [
      "Industrial Focus: South Auckland is home to some of New Zealand's busiest warehouses and distribution centres — we specialise in keeping these facilities safe and compliant.",
      "Large-Scale Projects: Our team is equipped to handle major industrial line marking projects across Manukau, East Tamaki, and Wiri.",
      "Health & Safety Compliance: We ensure your facility meets all New Zealand workplace safety standards with clear, durable markings.",
      "Cost-Effective Solutions: Competitive pricing for South Auckland businesses, with no compromise on quality.",
    ],
    services: [
      "Warehouse Safety Markings: Pedestrian walkways, forklift zones, and hazard markings for distribution centres.",
      "Car Park Line Marking: Professional markings for retail centres, business parks, and public car parks.",
      "Industrial Floor Coatings: Epoxy and polyurethane coatings for factory and warehouse floors.",
      "Sports Court & Playground Markings: Line marking for schools and community sports facilities in South Auckland.",
    ],
  },
  Hamilton: {
    intro: "Line-marking.co.nz is extending our professional line marking services to Hamilton and the greater Waikato region. Whether you need car park markings, warehouse safety lines, or sports court markings, our experienced team delivers high-quality results throughout Hamilton, Cambridge, Te Awamutu, and surrounding areas.",
    whyChoose: [
      "Waikato Reach: We cover Hamilton city and surrounding towns including Cambridge, Te Awamutu, Huntly, and Matamata.",
      "Proven Track Record: Our team brings years of experience from Canterbury's busiest commercial and industrial sites.",
      "All-in-One Service: Line marking, industrial flooring, protective coatings, and sports court markings — all from one provider.",
      "Weekend & After-Hours Service: We work around your schedule to avoid disrupting your business operations.",
    ],
    services: [
      "Car Park Line Marking: Clear markings for Hamilton's commercial centres, retail parks, and public facilities.",
      "Industrial Safety Markings: Compliant safety markings for factories, warehouses, and distribution centres in the Waikato.",
      "Sports Court Marking: Professional markings for basketball, tennis, netball, and multi-sport courts.",
      "Epoxy Flooring: Durable epoxy and polyurethane coatings for garages, workshops, and commercial floors.",
    ],
  },
};

const aucklandLocations = ["Auckland", "North Shore", "South Auckland", "Hamilton"];

export default function RegionalLanding({ location, region = "canterbury" }: RegionalProps) {
  const isAuckland = region === "auckland" || aucklandLocations.includes(location);
  const regionLabel = isAuckland ? "Auckland & Waikato" : "Canterbury";

  const content = regionContent[location] || {
    intro: `At line-marking.co.nz, we offer comprehensive line marking services in ${location}, ensuring top-quality results for every project. Our expert team is ready to meet your specific needs with precision and efficiency.`,
    whyChoose: [
      `Proven Expertise: With extensive experience in ${location}, we understand local requirements and provide bespoke solutions.`,
      "High-Quality Materials: We use the best materials to ensure long-lasting and visible markings.",
      "Customer-Centric Approach: Our services are designed to meet your unique needs and schedule.",
    ],
    services: [
      "Road Line Marking: Safe and clear markings for better road safety.",
      "Car Park Marking: Optimise your parking area with strategic markings.",
      "Industrial Safety Markings: Enhance workplace safety with clear, compliant industrial markings.",
      "Sports Court Marking: High-quality markings for all types of sports facilities.",
    ],
  };

  usePageTitle({
    title: content.seo?.title ?? `Line Marking in ${location} | Line-Marking.co.nz`,
    description: content.seo?.description ?? `Professional line marking services in ${location}. Car park marking, industrial safety lines, sports courts, and more across ${regionLabel}. Call 022 439 3344.`,
    path: `/${location.toLowerCase().replace(/\s+/g, '-')}-line-marking/`
  });

  return (
    <div data-testid={`page-regional-${location.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative w-full h-[250px] md:h-[320px] overflow-hidden">
        <img
          src={isAuckland ? aucklandHeroImage : heroImage}
          alt={`Line marking services in ${location}`}
          className="w-full h-full object-cover"
          data-testid="img-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3" data-testid="text-hero-title">
              Line Marking Services in {location}
            </h1>
            <p className="text-lg text-white/90 max-w-xl" data-testid="text-hero-subtitle">
              Professional Line Marking Across {regionLabel}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-8 leading-relaxed" data-testid="text-intro">{content.intro}</p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Why Choose Us?</h2>
        <div className="space-y-3 mb-8">
          {content.whyChoose.map((item, i) => {
            const [label, ...rest] = item.split(": ");
            return (
              <p key={i} className="text-gray-600">
                <strong className="text-gray-800">{label}:</strong> {rest.join(": ")}
              </p>
            );
          })}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Services We Offer:</h2>
        <div className="space-y-3 mb-8">
          {content.services.map((item, i) => {
            const [label, ...rest] = item.split(": ");
            return (
              <p key={i} className="text-gray-600">
                <strong className="text-gray-800">{label}:</strong> {rest.join(": ")}
              </p>
            );
          })}
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          For top-tier line marking services in {location}, contact us on{" "}
          <a href="tel:0224393344" className="text-blue-600 hover:underline" data-testid="link-phone">022 439 3344</a>
          {" "}or{" "}
          <Link href="/Contact/">
            <span className="text-blue-600 hover:underline cursor-pointer" data-testid="link-contact">click here to submit an enquiry</span>
          </Link>
          . We're here to help!
        </p>

        {isAuckland && (
          <div className="border-t border-gray-200 pt-8 mt-8">
            <p className="text-center text-gray-700 font-medium mb-4">Other Auckland & Waikato Areas We Serve:</p>
            <div className="flex flex-wrap justify-center gap-2 text-sm" data-testid="region-links-auckland">
              {[
                { href: "/auckland-line-marking/", label: "Auckland" },
                { href: "/north-shore-line-marking/", label: "North Shore" },
                { href: "/south-auckland-line-marking/", label: "South Auckland" },
                { href: "/hamilton-line-marking/", label: "Hamilton" },
              ]
                .filter((link) => link.label !== location)
                .map((link, index, arr) => (
                  <span key={link.href} className="flex items-center">
                    <Link href={link.href}>
                      <span className="text-blue-600 hover:underline cursor-pointer">{link.label}</span>
                    </Link>
                    {index < arr.length - 1 && <span className="mx-2 text-gray-400">|</span>}
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
