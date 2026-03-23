import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import heroImage from "../assets/images/about-team.png";

export default function About() {
  usePageTitle({
    title: "About Us | Line-Marking.co.nz",
    description: "Line-Marking.co.nz are experts in industrial line marking, safety markings, and durable flooring solutions across Christchurch, Auckland and New Zealand.",
    path: "/About-Us/"
  });
  return (
    <div data-testid="page-about">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="Line marking team at work" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              About Line-Marking.co.nz
            </h1>
            <p className="text-lg text-white/90 max-w-xl">Your Experts in Industrial Line Marking &amp; Safety Solutions</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          At Line-Marking.co.nz, we specialise in creating safer, more efficient workplaces through precise, durable, and compliant line marking solutions. With extensive experience across warehouses, factories, logistics hubs, commercial sites, and public spaces, we help organisations clearly communicate movement, hazards, and safe pathways.
        </p>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Our team brings deep knowledge of <strong>resins, coatings, industrial safety, and traffic management</strong>, ensuring every project meets the highest standards of clarity and compliance.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To improve workplace safety and efficiency through high-quality line marking, durable flooring systems, and clear visual communication.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Values</h2>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2 text-gray-600"><span className="text-blue-600 font-bold mt-0.5">✓</span><span><strong className="text-gray-800">Safety First</strong> — Every marking is designed to reduce risk and prevent incidents.</span></li>
          <li className="flex items-start gap-2 text-gray-600"><span className="text-blue-600 font-bold mt-0.5">✓</span><span><strong className="text-gray-800">Precision</strong> — Straight lines, accurate measurements, and professional finishes.</span></li>
          <li className="flex items-start gap-2 text-gray-600"><span className="text-blue-600 font-bold mt-0.5">✓</span><span><strong className="text-gray-800">Durability</strong> — We use NZTA-approved paints, premium resins, and industrial coatings.</span></li>
          <li className="flex items-start gap-2 text-gray-600"><span className="text-blue-600 font-bold mt-0.5">✓</span><span><strong className="text-gray-800">Reliability</strong> — Night and weekend scheduling available at standard rates.</span></li>
          <li className="flex items-start gap-2 text-gray-600"><span className="text-blue-600 font-bold mt-0.5">✓</span><span><strong className="text-gray-800">Custom Solutions</strong> — Every site is unique; we tailor our work to your environment.</span></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Who We Work With</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {[
            "Warehouses & distribution centres",
            "Manufacturing plants",
            "Transport yards",
            "Schools & sports facilities",
            "Commercial car parks",
            "Councils & public spaces",
          ].map((client) => (
            <div key={client} className="bg-gray-50 border border-gray-100 rounded-md p-3 text-gray-700 text-sm font-medium">
              {client}
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-md p-6 text-white mb-8">
          <h2 className="text-xl font-bold mb-2">Our Commitment</h2>
          <p className="text-white/90 leading-relaxed">
            We don't just mark lines — we help you create a safer, more organised, and more compliant workplace.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/car-park-line-marking/">
            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors cursor-pointer" data-testid="button-view-services">
              View Our Services
            </span>
          </Link>
          <Link href="/Contact/">
            <span className="inline-block bg-gray-600 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 transition-colors cursor-pointer" data-testid="button-get-quote">
              Get a Free Quote
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
