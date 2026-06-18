import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import heroImage from "../assets/images/regional-nz.png";
import heroImageWebp from "../assets/images/regional-nz.webp";
import aucklandHeroImage from "../assets/images/auckland-car-park-line-marking.webp";
import aucklandWarehouseImg from "../assets/images/auckland-warehouse.jpg";
import aucklandCarparkNightImg from "../assets/images/auckland-carpark-night.jpg";
import aucklandPedestrianImg from "../assets/images/auckland-pedestrian-crossing.jpg";
import aucklandFactoryImg from "../assets/images/auckland-factory-safety.jpg";
import aucklandArrowsImg from "../assets/images/auckland-arrows-mobility.jpg";
import aucklandHazardImg from "../assets/images/auckland-hazard-zones.jpg";
import aucklandLogisticsImg from "../assets/images/auckland-logistics-stencil.jpg";
import aucklandStencilImg from "../assets/images/auckland-stencil-visitor.jpg";
import aucklandSportsCourtImg from "../assets/images/auckland-sports-court.jpg";

const aucklandProjectImages: Record<number, string> = {
  0: aucklandHeroImage,
  1: aucklandWarehouseImg,
  2: aucklandCarparkNightImg,
  3: aucklandPedestrianImg,
  4: aucklandFactoryImg,
  5: aucklandArrowsImg,
  6: aucklandHazardImg,
  7: aucklandLogisticsImg,
  8: aucklandSportsCourtImg,
  9: aucklandStencilImg,
};

interface RegionalProps {
  location: string;
  region?: "canterbury" | "auckland";
}

interface RegionData {
  intro: string;
  whyChoose: string[];
  services: string[];
  seo?: { title: string; description: string };
  customWhyChoose?: string[];
  operationsNote?: string;
  projectsNote?: string;
  customFaqs?: Array<{ q: string; a: string }>;
  serviceSchema?: object | object[];
  suburbs?: string[];
  industries?: string[];
  projects?: string[];
}

const regionContent: Record<string, RegionData> = {
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
    seo: {
      title: "Line Marking Auckland | Car Parks, Warehouses & Safety Markings",
      description: "Professional line marking in Auckland. Car parks, warehouses, factories, sports courts and safety markings. NZTA-approved paints. Fast turnaround. Free quotes.",
    },
    intro: "We provide professional line marking services across Auckland, delivering durable, high-visibility markings for car parks, warehouses, factories, schools, logistics hubs and commercial sites. Our team uses NZTA-approved paints and industry-standard equipment to ensure clean, accurate lines that improve safety, traffic flow and compliance. Whether you need new markings, re-marking, safety lines, walkways or custom stencilling, we offer fast turnaround, competitive pricing and reliable workmanship across the entire Auckland region.",
    whyChoose: [
      "NZTA-approved paints & coatings",
      "Fast turnaround with minimal disruption",
      "Night & weekend work at standard rates",
      "Industrial-grade durability",
      "Clear, compliant markings for safety",
      "Trusted subcontractor network across Auckland",
    ],
    customWhyChoose: [
      "NZTA-approved paints: Durable, high-visibility markings built for Auckland weather and heavy traffic.",
      "Fast turnaround: Most jobs completed within 24–48 hours, including after-hours and weekend work.",
      "Industrial-grade accuracy: Clean, sharp lines using professional equipment and surface prep.",
      "Full commercial capability: Warehouses, logistics hubs, factories, retail centres, schools and car parks.",
      "Safety-focused: Walkways, forklift lanes, hazard zones, pedestrian crossings and compliance markings.",
      "Minimal disruption: We work around your schedule — nights, early mornings, or weekends.",
      "Local Auckland team: Fast response times across the entire region.",
    ],
    services: [
      "Car Park Line Marking: Professional markings for commercial and retail car parks across Auckland.",
      "Warehouse & Factory Line Marking: Pedestrian walkways, forklift lanes, and hazard zone markings.",
      "Forklift Lanes & Pedestrian Walkways: Clear separation of foot and vehicle traffic.",
      "Safety & Hazard Zone Markings: Compliant markings to meet WorkSafe NZ requirements.",
      "Sports Court Line Marking: Basketball, tennis, pickleball, netball, and multi-sport courts.",
      "Playground Markings: Painted educational games and activities for Auckland schools.",
      "Line Removal & Repainting: Professional removal and replacement of existing markings.",
    ],
    operationsNote: "We service Auckland through our trusted network of professional subcontractors. All work is completed to our strict quality standards, ensuring consistent results across Christchurch and Auckland.",
    projects: [
      "Car park re-marking completed overnight in Manukau using NZTA-approved paints.",
      "Warehouse safety walkways and forklift lanes installed in East Tamaki.",
      "Directional arrows and loading bay markings refreshed for a logistics hub in Albany.",
      "Pedestrian crossings and hazard zones completed for a retail centre in Henderson.",
      "Factory floor safety markings and exclusion zones installed in Onehunga.",
      "Directional arrows, mobility bays and disability symbols marked at a commercial car park.",
      "Red exclusion and hazard zone markings installed at an industrial site.",
      "Stencilled bay numbers and letters with safety lines completed at a logistics hub.",
      "Sports court line marking for schools and recreation facilities across Auckland.",
      "Custom stencilling, numbering and lettering for commercial car parks and industrial sites.",
    ],
    customFaqs: [
      { q: "How long does line marking last in Auckland conditions?", a: "With NZTA-approved paints and proper surface preparation, line marking typically lasts 12–36 months depending on traffic volume, weather exposure and surface type." },
      { q: "Do you work after hours to avoid disrupting business?", a: "Yes. We regularly complete work overnight, early mornings and weekends to minimise disruption for warehouses, retail sites and car parks." },
      { q: "What areas of Auckland do you service?", a: "We cover the entire Auckland region including Manukau, East Tamaki, Albany, Henderson, Onehunga, Penrose, Silverdale, Westgate and surrounding suburbs." },
      { q: "Can you re-mark faded or damaged lines?", a: "Absolutely. We remove loose paint, clean the surface and re-apply fresh, high-visibility markings that meet safety and compliance standards." },
      { q: "Do you offer safety and warehouse markings?", a: "Yes. We install walkways, forklift lanes, hazard zones, pedestrian crossings, loading bays, directional arrows and custom stencils for industrial sites." },
      { q: "How quickly can you complete a job?", a: "Most small to medium jobs are completed within 24–48 hours of booking. Larger commercial sites may require staged work over multiple days." },
    ],
    suburbs: [
      "Manukau", "East Tamaki", "Albany", "Henderson", "Onehunga",
      "Penrose", "Silverdale", "Westgate", "Mt Wellington", "New Lynn",
      "Takapuna", "Pakuranga", "Botany", "Glenfield", "Avondale",
    ],
    industries: [
      "Warehouses & Logistics Centres – forklift lanes, walkways, hazard zones, loading bays.",
      "Retail & Shopping Centres – car parks, pedestrian crossings, directional arrows.",
      "Factories & Manufacturing Sites – safety lines, machinery zones, exclusion areas.",
      "Schools & Education Facilities – courts, play areas, drop-off zones.",
      "Commercial Car Parks – re-marking, numbering, mobility bays, EV bays.",
      "Transport & Distribution Hubs – traffic flow markings, staging lanes, safety routes.",
      "Sports & Recreation Facilities – courts, fields, multi-use markings.",
      "Construction Sites – temporary markings, safety zones, access routes.",
    ],
    serviceSchema: [
      {
        "@type": "Service",
        "name": "Line Marking Auckland",
        "areaServed": "Auckland, New Zealand",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Line Marking NZ",
          "url": "https://line-marking.co.nz",
          "telephone": "+64224393344",
        },
        "serviceType": "Line Marking",
        "url": "https://line-marking.co.nz/auckland-line-marking/",
      },
      {
        "@type": "LocalBusiness",
        "name": "Line Marking NZ",
        "url": "https://line-marking.co.nz",
        "telephone": "+64224393344",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Auckland",
          "addressCountry": "NZ",
        },
        "areaServed": "Auckland, New Zealand",
        "priceRange": "$$",
      },
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

  const displayWhyChoose = content.customWhyChoose ?? null;
  const faqs = content.customFaqs ?? [
    { q: "How long does it last?", a: "18–24 months depending on traffic volume and surface preparation." },
    { q: "Do you work after hours?", a: "Yes — night and weekend scheduling is available at standard rates, so your operations stay uninterrupted." },
    { q: `Do you service ${location}?`, a: `Yes. We provide professional line marking throughout ${location} and the surrounding ${regionLabel} region.` },
  ];

  usePageTitle({
    title: content.seo?.title ?? `Professional Line Marking in ${location} | Line-Marking.co.nz`,
    description: content.seo?.description ?? `Professional line marking services in ${location}. Car park marking, industrial safety lines, sports courts, and more across ${regionLabel}. Call 022 439 3344.`,
    path: `/${location.toLowerCase().replace(/\s+/g, '-')}-line-marking/`,
    schema: content.serviceSchema
      ? {
          "@context": "https://schema.org",
          "@graph": [
            ...(Array.isArray(content.serviceSchema) ? content.serviceSchema : [content.serviceSchema]),
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": { "@type": "Answer", "text": faq.a },
              })),
            },
          ],
        }
      : {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a },
          })),
        }
  });

  return (
    <div data-testid={`page-regional-${location.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative w-full h-[250px] md:h-[320px] overflow-hidden">
        <picture>
          <source type="image/webp" srcSet={isAuckland ? aucklandHeroImage : heroImageWebp} />
          <img
            src={isAuckland ? aucklandHeroImage : heroImage}
            alt={`Line marking services in ${location}`}
            className="w-full h-full object-cover"
            width={1408}
            height={768}
            fetchpriority="high"
            data-testid="img-hero"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3" data-testid="text-hero-title">
              Professional Line Marking in {location}
            </h1>
            <p className="text-lg text-white/90 max-w-xl mb-4" data-testid="text-hero-subtitle">
              Professional, compliant and long-lasting line marking in {location} using NZTA-approved paints and premium industrial coatings.
            </p>
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
        <p className="text-gray-600 mb-8 leading-relaxed" data-testid="text-intro">{content.intro}</p>

        {content.suburbs && (
          <div className="bg-gray-50 border border-gray-200 rounded-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Areas We Service Across {location}</h2>
            <p className="text-gray-600 mb-4">We provide professional line marking services across the entire {location} region, including:</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-gray-700 text-sm mb-4">
              {content.suburbs.map((suburb, i) => (
                <li key={i} className="flex items-center gap-1">
                  <span className="text-blue-600 font-bold">·</span> {suburb}
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm">If your site is outside these areas, we can still help — just <a href="tel:0224393344" className="text-blue-600 hover:underline">contact us</a> for availability.</p>
          </div>
        )}

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
          {location === "Auckland" ? "Our Auckland Line Marking Services" : "Services We Offer:"}
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-8 text-gray-600">
          {content.services.map((item, i) => {
            const [label, ...rest] = item.split(": ");
            return (
              <li key={i}>
                <strong className="text-gray-800">{label}</strong>
                {rest.length > 0 && <>: {rest.join(": ")}</>}
              </li>
            );
          })}
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
          {location === "Auckland" ? "Why Auckland Clients Choose Us" : "Why Choose Us?"}
        </h2>
        {displayWhyChoose ? (
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-600">
            {displayWhyChoose.map((item, i) => {
              const colonIdx = item.indexOf(": ");
              if (colonIdx !== -1) {
                return (
                  <li key={i}>
                    <strong className="text-gray-800">{item.slice(0, colonIdx)}</strong>: {item.slice(colonIdx + 2)}
                  </li>
                );
              }
              return <li key={i}>{item}</li>;
            })}
          </ul>
        ) : (
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-600">
            <li>NZTA-approved paints</li>
            <li>Night &amp; weekend work at standard rates</li>
            <li>Industrial-grade durability</li>
            <li>Clear, compliant markings</li>
          </ul>
        )}

        {content.industries && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-2">Industries We Serve Across {location}</h2>
            <p className="text-gray-600 mb-4">We provide professional line marking for a wide range of commercial and industrial environments throughout {location}, including:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
              {content.industries.map((item, i) => {
                const dashIdx = item.indexOf(" – ");
                if (dashIdx !== -1) {
                  return (
                    <li key={i}>
                      <strong className="text-gray-800">{item.slice(0, dashIdx)}</strong> – {item.slice(dashIdx + 3)}
                    </li>
                  );
                }
                return <li key={i}>{item}</li>;
              })}
            </ul>
            <p className="text-gray-600 mb-8">Our team works with businesses of all sizes — from small local operators to large national brands — delivering clean, accurate and compliant markings every time.</p>
          </>
        )}

        {content.operationsNote && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How We Operate in {location}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">{content.operationsNote}</p>
          </>
        )}

        {content.projectsNote && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Recent {location} Projects</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">{content.projectsNote}</p>
          </>
        )}

        {content.projects && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Recent Line Marking Projects in {location}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {content.projects.map((project, i) => {
                const img = aucklandProjectImages[i];
                return img ? (
                  <div key={i} className="rounded-md overflow-hidden border border-gray-200">
                    <img src={img} alt={project} className="w-full h-40 object-cover" loading="lazy" />
                    <div className="bg-gray-50 p-3">
                      <p className="text-gray-700 text-sm">{project}</p>
                    </div>
                  </div>
                ) : (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded-md p-4 flex items-start gap-3">
                    <span className="mt-1 text-blue-600 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <p className="text-gray-700 text-sm">{project}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {!content.customFaqs && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Process</h2>
            <ol className="list-decimal list-inside space-y-2 mb-8 text-gray-600">
              <li>Site assessment &amp; layout planning</li>
              <li>Surface preparation</li>
              <li>Professional line marking application</li>
            </ol>
          </>
        )}

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">FAQs</h2>
        <div className="space-y-4 mb-8">
          {faqs.map((faq, i) => (
            <div key={i}>
              <p className="font-semibold text-gray-800">{faq.q}</p>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>

        {content.projects && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Line Marking Services</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { href: "/", label: "Home – Line Marking NZ" },
                { href: "/car-park-line-marking/", label: "Car Park Line Marking" },
                { href: "/warehouse-line-marking/", label: "Warehouse & Safety Markings" },
                { href: "/warehouse-line-marking/", label: "Factory Floor Markings" },
                { href: "/sports-court-line-marking/", label: "Sports Court Marking" },
                { href: "/Contact/", label: "Contact Us" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>
                    <span className="text-blue-600 hover:underline cursor-pointer text-sm">→ {link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-blue-600 rounded-md p-6 text-white text-center mb-8">
          <h2 className="text-xl font-bold mb-2">Get a Free {location} Quote</h2>
          <p className="text-white/90 mb-4">Contact us today for fast, professional line marking anywhere in {location}.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/Contact/">
              <span className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors cursor-pointer" data-testid="button-cta-quote">Get a Free Quote</span>
            </Link>
            <a href="tel:0224393344" className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors" data-testid="link-cta-phone">Call: 022 439 3344</a>
          </div>
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
