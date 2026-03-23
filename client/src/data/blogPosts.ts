export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: {
    heading: string;
    content: string;
    list?: string[];
  }[];
  conclusion: string;
  resources?: {
    label: string;
    url: string;
    description: string;
  }[];
}

import durabilityImg from "../assets/images/blog-line-marking-durability.png";
import epoxyImg from "../assets/images/blog-epoxy-vs-polyurethane.png";
import warehouseImg from "../assets/images/blog-warehouse-walkways.png";
import playgroundImg from "../assets/images/blog-playground-markings.png";
import preparingImg from "../assets/images/blog-preparing-for-marking.png";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-long-does-line-marking-last",
    title: "How Long Does Car Park Line Marking Last in New Zealand?",
    metaDescription: "Wondering how long car park line marking lasts in NZ? Learn what affects durability, when to re-mark, and how to get the most from your investment.",
    date: "March 2025",
    readTime: "4 min read",
    category: "Line Marking",
    image: durabilityImg,
    imageAlt: "Fresh car park line marking on asphalt in New Zealand",
    intro: "One of the most common questions we get from facilities managers and property owners is: how long will my line marking actually last? The honest answer depends on several factors — but understanding them helps you plan maintenance, budget correctly, and avoid the safety risks that come with faded markings.",
    sections: [
      {
        heading: "Typical Lifespan: 18 to 24 Months",
        content: "Under normal conditions, car park line marking lasts between 18 and 24 months. This applies to standard road paint applied to asphalt or concrete surfaces in a typical commercial or industrial setting. After this point, lines begin to fade and lose visibility — which creates both safety issues and compliance risks."
      },
      {
        heading: "What Affects How Long Markings Last?",
        content: "Several factors can shorten or extend the life of your line marking:",
        list: [
          "Traffic volume — High-traffic car parks and warehouse floors wear faster. Busy sites may need re-marking every 6 to 12 months.",
          "Surface type — Concrete holds paint longer than asphalt. Rough or porous surfaces absorb more paint and can extend adhesion.",
          "Paint or resin quality — NZTA-approved road paints last significantly longer than budget alternatives. Epoxy and polyurethane resins outlast standard paints by years.",
          "UV exposure — Outdoor markings fade faster due to New Zealand's high UV index. UV-resistant polyurethane coatings help maintain colour outdoors.",
          "Surface preparation — Properly cleaned and primed surfaces hold paint far better. Poor prep is one of the most common causes of early failure.",
          "Weather — Freeze-thaw cycles, heavy rain, and heat all affect longevity."
        ]
      },
      {
        heading: "When Should You Re-Mark?",
        content: "Don't wait until lines are completely invisible. Faded markings create real safety risks — drivers can't see bay boundaries, pedestrian zones become unclear, and forklift lanes lose definition. As a rule of thumb:",
        list: [
          "Schedule a re-mark when lines are noticeably faded but still visible — it's cheaper to paint over existing markings than to grind and start fresh.",
          "Include line marking in your annual site safety review.",
          "High-traffic areas like loading zones, intersections, and pedestrian crossings should be checked every 6 months."
        ]
      },
      {
        heading: "Choosing the Right Material for Longer Life",
        content: "If you want markings that last well beyond the standard 18–24 months, consider upgrading your material:",
        list: [
          "Epoxy resin — Ideal for indoor concrete floors (warehouses, factories). Extremely durable, chemical-resistant, and long-lasting.",
          "Polyurethane — Best for outdoor surfaces. UV-resistant and flexible, making it ideal for New Zealand's climate.",
          "MMA resin — Fast-setting and extremely hard-wearing. Best for high-traffic outdoor areas."
        ]
      }
    ],
    conclusion: "The right marking material, applied to a properly prepared surface, can last significantly longer and save you money in the long run. If your car park markings are looking tired, get in touch with our team for a free assessment and quote."
  },
  {
    slug: "epoxy-vs-polyurethane-floor-coatings",
    title: "Epoxy vs Polyurethane Floor Coatings: Which is Right for Your Warehouse?",
    metaDescription: "Epoxy or polyurethane — which floor coating should you choose for your warehouse or factory? Compare durability, cost, and ideal applications in New Zealand.",
    date: "February 2025",
    readTime: "5 min read",
    category: "Flooring",
    image: epoxyImg,
    imageAlt: "Industrial warehouse floor with epoxy coating",
    intro: "When it comes to industrial floor coatings, two products dominate: epoxy and polyurethane. Both offer excellent durability, but they perform differently depending on your environment. Choosing the wrong one can mean premature failure, costly repairs, and unnecessary downtime. Here's how to choose correctly.",
    sections: [
      {
        heading: "What is Epoxy Flooring?",
        content: "Epoxy is a two-part coating — a resin and a hardener — that chemically bonds to concrete to create an extremely hard, seamless surface. It's one of the most widely used industrial floor coatings in New Zealand for good reason:",
        list: [
          "Exceptional hardness and impact resistance",
          "Highly resistant to chemicals, oils, and solvents",
          "Easy to clean and maintain",
          "Can be applied with non-slip aggregates for safety",
          "Excellent adhesion to concrete when properly prepared"
        ]
      },
      {
        heading: "What is Polyurethane Flooring?",
        content: "Polyurethane (PU) is a more flexible coating that sits slightly softer than epoxy. This flexibility is actually one of its key advantages in certain environments:",
        list: [
          "UV-resistant — does not yellow or degrade in sunlight",
          "More flexible, handles thermal movement better",
          "Better resistance to abrasion over time",
          "Suitable for outdoor and exposed areas",
          "Resistant to staining and chemical attack"
        ]
      },
      {
        heading: "Epoxy: Best For",
        content: "Choose epoxy when you need maximum hardness and chemical resistance in an indoor setting:",
        list: [
          "Warehouses and distribution centres",
          "Manufacturing plant floors",
          "Workshops and garages",
          "Commercial kitchens (with food-safe epoxy)",
          "Any indoor high-traffic concrete floor"
        ]
      },
      {
        heading: "Polyurethane: Best For",
        content: "Choose polyurethane when UV exposure, flexibility, or outdoor use is a factor:",
        list: [
          "Outdoor yards and loading areas",
          "Car parks with sun exposure",
          "Areas subject to temperature fluctuation",
          "Facilities in coastal or high-UV environments",
          "As a topcoat over epoxy for enhanced protection"
        ]
      },
      {
        heading: "Can You Use Both Together?",
        content: "Yes — and many of our clients do. A common approach is to apply epoxy as a base coat for its hardness and adhesion, then top it with polyurethane for UV resistance and abrasion protection. This combination gives you the best of both products and is particularly effective for outdoor or semi-exposed areas."
      },
      {
        heading: "Cost Comparison",
        content: "Epoxy is generally more affordable than polyurethane as a standalone product. However, when you factor in longevity and the cost of reapplication, polyurethane often delivers better long-term value in outdoor settings. The right choice depends on your surface, environment, and how long you need it to last."
      }
    ],
    conclusion: "Not sure which coating is right for your facility? We assess every site individually and recommend the best product for your specific conditions. Contact us for a free site visit and quote."
  },
  {
    slug: "warehouse-pedestrian-walkway-markings",
    title: "Why Every Warehouse Needs Clear Pedestrian Walkway Markings",
    metaDescription: "Pedestrian walkway markings in warehouses reduce accidents, improve compliance, and protect workers. Learn what's required and how to get it right in NZ.",
    date: "January 2025",
    readTime: "4 min read",
    category: "Safety",
    image: warehouseImg,
    imageAlt: "Warehouse floor with clear pedestrian walkway and forklift lane markings",
    intro: "Warehouses are one of the highest-risk work environments in New Zealand. Forklifts, pallet jacks, and heavy machinery share the same space as workers on foot — and when the movement of people and vehicles isn't clearly defined, accidents happen. Clear pedestrian walkway markings are one of the most cost-effective safety investments a warehouse can make.",
    sections: [
      {
        heading: "The Risk: People and Machinery in the Same Space",
        content: "WorkSafe New Zealand consistently identifies pedestrian/vehicle interaction as a leading cause of serious harm in warehouses and distribution centres. When workers and forklifts share undefined space, the consequences can be severe. The solution isn't complicated — but it does need to be visible, consistent, and maintained."
      },
      {
        heading: "What the Law Says",
        content: "Under the Health and Safety at Work Act 2015, employers have a duty to manage risks in the workplace. For warehouses and factories, this includes:",
        list: [
          "Separating pedestrian and vehicle traffic where practicable",
          "Clearly marking safe walking routes for workers",
          "Ensuring visitors and contractors can safely navigate your site",
          "Maintaining markings so they remain clear and visible"
        ]
      },
      {
        heading: "What Good Walkway Marking Looks Like",
        content: "Effective warehouse walkway markings go beyond painting a few white lines. A well-marked facility includes:",
        list: [
          "Clearly defined pedestrian corridors at least 1 metre wide",
          "Forklift lanes marked separately from pedestrian zones",
          "Zebra crossing markings at vehicle crossing points",
          "Hazard zones around blind corners, loading docks, and intersections",
          "Keep-clear zones in front of emergency exits and fire equipment",
          "High-visibility colours — yellow for pedestrian zones, blue or orange for vehicle routes is common practice"
        ]
      },
      {
        heading: "The Right Paint for Warehouse Floors",
        content: "Not all floor paints hold up in a warehouse. The best options for high-traffic industrial floors are:",
        list: [
          "Epoxy — Bonds to concrete, extremely durable, chemical-resistant",
          "Polyurethane — More flexible, good for areas with temperature fluctuation",
          "Non-slip aggregates — Can be added to any coating for wet or high-risk areas"
        ]
      },
      {
        heading: "How Often Should Warehouse Markings Be Refreshed?",
        content: "In busy warehouses, floor markings can fade within 6 to 12 months due to forklift traffic, pallet movement, and cleaning chemicals. We recommend:",
        list: [
          "Annual inspection of all floor markings",
          "Immediate repainting of any markings that are faded or damaged",
          "Proactive scheduling of re-marking during shutdowns or quiet periods"
        ]
      }
    ],
    conclusion: "Clear walkway markings are a straightforward, affordable way to reduce risk, meet your legal obligations, and protect your team. We offer night and weekend marking to minimise disruption to your operations. Get in touch for a free site assessment.",
    resources: [
      {
        label: "WorkSafe NZ — Traffic Management in Workplaces",
        url: "https://www.worksafe.govt.nz/topic-and-industry/vehicles-and-mobile-plant/traffic-management/",
        description: "Official WorkSafe New Zealand guidance on managing vehicle and pedestrian traffic in workplaces."
      },
      {
        label: "Health and Safety at Work Act 2015 — NZ Legislation",
        url: "https://www.legislation.govt.nz/act/public/2015/0070/latest/whole.html",
        description: "The primary workplace health and safety legislation in New Zealand."
      },
      {
        label: "WorkSafe NZ — Forklifts and Pedestrian Safety",
        url: "https://www.worksafe.govt.nz/topic-and-industry/vehicles-and-mobile-plant/forklifts/",
        description: "WorkSafe guidance on managing the risk of forklifts and pedestrian interaction."
      }
    ]
  },
  {
    slug: "painted-vs-thermoplastic-playground-markings",
    title: "Painted vs Thermoplastic Playground Markings: What's Better for NZ Schools?",
    metaDescription: "Painted or thermoplastic playground markings — which is better for New Zealand schools? Compare cost, durability, safety, and value for primary schools.",
    date: "December 2024",
    readTime: "4 min read",
    category: "Playground",
    image: playgroundImg,
    imageAlt: "Colourful painted playground games on school asphalt in New Zealand",
    intro: "If you're planning new playground markings for your school, you've likely come across two main options: painted markings or thermoplastic stickers. Both have their place, but for most New Zealand primary schools, painted markings offer better value, safety, and longevity. Here's an honest comparison to help you decide.",
    sections: [
      {
        heading: "What Are Thermoplastic Markings?",
        content: "Thermoplastic markings are pre-cut plastic shapes that are heat-bonded onto the playground surface. They're quick to install, come in bright colours, and look great when new. However, there are some significant drawbacks for school environments:",
        list: [
          "They sit on top of the surface, creating a raised edge that can be a trip hazard",
          "Edges lift over time, particularly in areas with temperature fluctuation",
          "Once lifted, they can peel completely and leave adhesive residue",
          "They're significantly more expensive than painted alternatives",
          "Replacement requires removing the old thermoplastic before reapplying"
        ]
      },
      {
        heading: "What Are Painted Playground Markings?",
        content: "Painted markings use high-quality, hard-wearing floor paints applied directly onto concrete or asphalt. The paint bonds into the surface, creating a seamless, flush finish. Key advantages for schools:",
        list: [
          "No raised edges — completely flush with the surface, eliminating trip hazards",
          "More affordable upfront and much cheaper to refresh",
          "Fully customisable — any design, size, colour, or school theme",
          "Easier to modify or update as the school's needs change",
          "Can include non-slip properties for wet conditions",
          "Designed to withstand NZ's UV, rain, and temperature variations"
        ]
      },
      {
        heading: "Which Lasts Longer?",
        content: "This is where it gets interesting. Thermoplastic looks more durable because of its thickness, but in practice, painted markings often outlast thermoplastic in high-activity areas. Once thermoplastic starts to lift at the edges — which happens in NZ's climate — it deteriorates quickly. Painted markings simply fade gradually and can be refreshed with a top coat without any removal required."
      },
      {
        heading: "Cost Comparison",
        content: "Thermoplastic markings typically cost 3–5 times more than equivalent painted markings. For a school on a tight budget, painted markings allow you to cover more of the playground for the same investment. And when it's time to refresh, repainting is a fraction of the cost of replacing thermoplastic."
      },
      {
        heading: "When Thermoplastic Makes Sense",
        content: "Thermoplastic does have some specific advantages. It works well for temporary markings, road-style signage that needs to be very thick and highly visible, and situations where painting isn't practical. For decorative playground games and educational markings, however, painted solutions are almost always the better choice."
      },
      {
        heading: "What We Recommend for NZ Schools",
        content: "Based on our experience working with primary schools, intermediate schools, and early childhood centres across New Zealand, we recommend painted markings for playground games. They're safer, more affordable, more customisable, and easier to maintain — making them the practical choice for school budgets."
      }
    ],
    conclusion: "We offer free site visits and design planning for school playground markings across Christchurch, Auckland, and the wider New Zealand region. Get in touch to discuss your playground project."
  },
  {
    slug: "how-to-prepare-for-line-marking",
    title: "How to Prepare Your Site for Line Marking — and Why It Matters",
    metaDescription: "Good preparation is the key to long-lasting line marking. Learn how to get your car park or warehouse floor ready for line marking in New Zealand.",
    date: "November 2024",
    readTime: "3 min read",
    category: "Tips",
    image: preparingImg,
    imageAlt: "Professional line marking being applied to a clean asphalt car park",
    intro: "One of the most common reasons line marking fails early isn't the paint — it's the preparation. Properly preparing your surface before marking is the single most important factor in how long your lines last. Here's what you need to know before we arrive on-site.",
    sections: [
      {
        heading: "Why Preparation Matters",
        content: "Paint needs a clean, dry, sound surface to bond properly. Contaminants like oil, grease, dust, rubber, and moisture all reduce adhesion — meaning your marking can start to lift, fade, or peel much earlier than it should. Good prep can be the difference between markings lasting 12 months and markings lasting 3 years."
      },
      {
        heading: "For Car Parks: What We Need From You",
        content: "Before we arrive to mark your car park, please ensure:",
        list: [
          "The surface is dry — we can't paint on wet asphalt or concrete. Ideally, no rain for 24 hours before the job.",
          "The area is cleared of vehicles — all cars need to be moved out before we begin.",
          "Oil stains are treated — if there are heavy oil deposits, these need to be cleaned or we can arrange surface preparation as part of the job.",
          "Any existing markings you want removed are flagged — we can black out or grind old lines as part of the process.",
          "You've approved a layout plan — for new markings, we'll provide a plan beforehand so there are no surprises."
        ]
      },
      {
        heading: "For Warehouses: Key Considerations",
        content: "Warehouse floors have additional prep requirements due to the coatings involved:",
        list: [
          "The floor must be clean and free of oils, chemicals, and dust",
          "Any damaged concrete should be repaired before coating is applied",
          "The area being marked should be free of machinery and stock",
          "For epoxy coatings, we typically need to grind or acid-etch the concrete to ensure proper adhesion",
          "Curing time must be factored in — some coatings require 24–48 hours before foot traffic"
        ]
      },
      {
        heading: "What We Handle On Our End",
        content: "Our team arrives with all the equipment, materials, and protective gear needed for the job. We handle:",
        list: [
          "Surface cleaning and preparation (if included in scope)",
          "Measuring and layout before any paint is applied",
          "Masking and taping for clean, sharp lines",
          "Application using professional line marking equipment",
          "Clean-up and removal of all masking materials"
        ]
      },
      {
        heading: "Scheduling: Night and Weekend Work",
        content: "Many of our clients prefer night or weekend marking to avoid disrupting business operations. We offer after-hours scheduling at standard weekday rates — so there's no premium for working around your hours."
      }
    ],
    conclusion: "The better prepared your site, the better your result. If you're unsure about anything before your job, just call us — we're happy to advise. Contact our team on 022 439 3344 or submit an enquiry online."
  }
];
