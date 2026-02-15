import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import heroImage from "../assets/images/line-marking-service.png";

export default function LineMarking() {
  usePageTitle({
    title: "Line Marking & Symbols | Line-Marking.co.nz",
    description: "Professional line marking and symbol painting for car parks, roads, and commercial premises across Christchurch and Auckland. NZTA-approved materials.",
    path: "/Our-Services/Line-Marking/"
  });
  return (
    <div data-testid="page-line-marking">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="Professional car park line marking services" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Your Specialist in Line Marking
            </h1>
            <p className="text-lg text-white/90 max-w-xl">Expert Line Marking for Safer, More Efficient Workspaces</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-6 leading-relaxed">
          At Line-Marking.co.nz, we excel in providing top-quality line marking services tailored to your specific needs. Whether you're updating existing markings or implementing new layouts, our professional team ensures your workspace is both safe and compliant.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Choose Line-Marking.co.nz for Line Marking?</h3>
        <ul className="space-y-3 mb-6">
          <li className="text-gray-600">
            <strong className="text-gray-800">Precision and Quality:</strong> We use only the highest quality materials, including NZTA-approved road paint, epoxies, and polyurethane resins, to deliver clear, durable, and vibrant markings.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Health and Safety Compliance:</strong> Proper line marking enhances safety for both pedestrians and drivers, reducing accidents and improving overall site organisation.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Custom Solutions:</strong> Every site is unique. We tailor our line marking services to meet the specific requirements of your car park, factory, warehouse, or commercial space.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Our Line Marking Services Include:</h3>
        <ul className="space-y-3 mb-6">
          <li className="text-gray-600">
            <strong className="text-gray-800">Car Park Line Marking:</strong> Ensure clear and organised parking with precise line markings, directional arrows, and signage.
          </li>
          <li className="text-gray-600">
            <Link href="/line-marking-pedestrian-walkways/">
              <strong className="text-blue-600 hover:underline cursor-pointer">Pedestrian Walkways:</strong>
            </Link>{" "}
            Create safe pathways for pedestrians with bright, easily visible walkways and crossings.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Accessibility Markings:</strong> Provide designated parking and access points for visitors with mobility issues, ensuring full compliance with accessibility standards.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Safety Markings:</strong> Mark fire exits, keep clear zones, and hazardous areas to maintain a safe environment for all site users.
          </li>
          <li className="text-gray-600">
            <strong className="text-gray-800">Directional Signage:</strong> Improve site navigation with clear directional markings, including arrows, stop signs, and give-way lines.
          </li>
          <li className="text-gray-600">
            <Link href="/Our-Services/sports-court-line-marking/">
              <strong className="text-blue-600 hover:underline cursor-pointer">Sports Court Line Marking:</strong>
            </Link>{" "}
            Enhance aesthetics and playability with precise, professional, and durable markings, ensuring optimal play conditions.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Frequently Asked Questions:</h3>

        <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">How long will the lines last?</h4>
        <p className="text-gray-600 mb-4 leading-relaxed">
          The longevity of line markings depends on traffic volume. Typically, they last between 18 to 24 months. High-traffic areas may require more frequent maintenance, approximately every 4 to 8 months.
        </p>

        <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Can I choose epoxy resin markings for durability?</h4>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Epoxy resins are ideal for concrete surfaces and indoor areas. For outdoor applications, especially those exposed to sunlight, polyurethane resins are recommended due to their superior UV resistance.
        </p>

        <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Can we use MMA resin indoors?</h4>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We do not recommend using MMA resin indoors due to its strong odour and high VOC content. It is best applied in well-ventilated outdoor areas where safety protocols can be strictly followed.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Contact Us for More Information and Free Quotes</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          For professional line marking services that enhance safety and efficiency,{" "}
          <Link href="/Contact/">
            <span className="text-blue-600 hover:underline cursor-pointer">contact Line-Marking.co.nz today</span>
          </Link>
          . Ensure your workspace is optimally organised and compliant with our expert line marking solutions.
        </p>
      </div>
    </div>
  );
}
