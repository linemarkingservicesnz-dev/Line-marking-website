import { Link } from "wouter";

interface RegionalProps {
  location: string;
}

const regionContent: Record<string, { intro: string; whyChoose: string[]; services: string[] }> = {
  Rolleston: {
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
};

export default function RegionalLanding({ location }: RegionalProps) {
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

  return (
    <div className="max-w-4xl mx-auto px-4 py-10" data-testid={`page-regional-${location.toLowerCase()}`}>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        {location === "Rangiora"
          ? `Expert Line Marking Services in ${location}`
          : `Line Marking Services in ${location} | line-marking.co.nz`}
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">{content.intro}</p>

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
        {location === "Rangiora"
          ? `Looking for dependable line marking services in ${location}?`
          : `For top-tier line marking services in ${location}, contact us on`}
        {" "}
        <a href="tel:0224393344" className="text-blue-600 hover:underline">022 439 3344</a>
        {" "}or{" "}
        <Link href="/Contact/">
          <span className="text-blue-600 hover:underline cursor-pointer">click here to submit an enquiry</span>
        </Link>
        . We're here to help!
      </p>
    </div>
  );
}
