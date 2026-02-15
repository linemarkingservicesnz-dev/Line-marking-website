import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import heroImage from "../assets/images/about-team.png";

export default function About() {
  usePageTitle({
    title: "About Us | Line-Marking.co.nz",
    description: "Learn about Line-Marking.co.nz - professional line marking and industrial flooring services based in Christchurch, now serving Auckland and all of New Zealand.",
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
              About Us
            </h1>
            <p className="text-lg text-white/90 max-w-xl">Expert Line Marking &amp; Safety Solutions</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          We are expert facilitators in floor markings informing visitors, machine operators and workers where to safely walk or drive, making them aware of potential hazards.
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          With vast experience with resin and composites, also with health and safety in the construction sector including warehouses, manufacturing and transport.
        </p>

        <p className="text-gray-600 mb-8 leading-relaxed">
          We not only help to keep your site safe, but can also help your company to avoid future incidents by bringing it up to compliance levels.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/Our-Services/Line-Marking/">
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
