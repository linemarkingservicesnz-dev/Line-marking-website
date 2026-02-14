import { Link } from "wouter";
import heroImage from "../assets/images/non-slip-flooring.png";

export default function NonSlipFlooring() {
  return (
    <div data-testid="page-non-slip-flooring">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="Non-slip textured floor coating" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Non-Slip Flooring Solutions
            </h1>
            <p className="text-lg text-white/90 max-w-xl">Safe and Durable Surfaces for Every Environment</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-6 leading-relaxed">
          At Line-Marking.co.nz, we offer a wide range of non-slip flooring products designed to enhance safety and durability for various surfaces. Whether you're looking to improve the safety of walkways, concrete floors, or asphalt areas, we have the perfect solution for you.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Our Non-Slip Flooring Products Include:</h3>
        <div className="space-y-4 mb-8">
          <p className="text-gray-600">
            <Link href="/line-marking-epoxy-flooring/">
              <strong className="text-blue-600 hover:underline cursor-pointer">Concrete Epoxy Floor Paint:</strong>
            </Link>{" "}
            Ideal for creating a durable and slip-resistant surface on concrete floors.
          </p>
          <p className="text-gray-600">
            <strong className="text-gray-800">Epoxy Concrete Sealer:</strong> Provides a strong seal and enhances the longevity of concrete surfaces while offering non-slip properties.
          </p>
          <p className="text-gray-600">
            <strong className="text-gray-800">Acrylic Concrete Paint:</strong> Perfect for asphalt walkways, providing a non-slip, durable finish.
          </p>
          <p className="text-gray-600">
            <strong className="text-gray-800">Polyurethane Floor Coating:</strong> Excellent for high-traffic concrete floors, offering a resilient and non-slip surface.
          </p>
          <p className="text-gray-600">
            <strong className="text-gray-800">Asphalt Sealer:</strong> Protects and extends the life of asphalt surfaces while providing a non-slip finish.
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Choose Line-Marking.co.nz for Non-Slip Flooring?</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Line-Marking.co.nz collaborates with Civil Works Construction Ltd, the only licensed applicators in the South Island of New Zealand for a specific type of MMA resin. Approved in the U.K and other European countries, MMA resin is known for its versatility and durability, even in low temperatures. It has been widely used on public roads, cycleways, bus lanes, and decorative footpaths across Europe, proving to be a long-lasting and high-quality product.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Tailored Solutions for Your Non-Slip Flooring Needs</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Your requirements will vary depending on your specific situation. Our non-slip acrylic concrete paint is excellent for asphalt walkways, while our concrete epoxy floor paint and polyurethane floor coating are perfect for concrete floors. Our team is here to help you choose the best product for your non-slip floor project.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Contact Us for Expert Advice and Solutions</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          For professional non-slip flooring solutions, including concrete epoxy floor paint, epoxy concrete sealer, acrylic concrete paint, polyurethane floor coating, and asphalt sealer, trust Line-Marking.co.nz. Get in touch with us today to discuss your needs and receive expert advice on the best non-slip floor options for your project.
        </p>

        <div className="mt-8">
          <Link href="/Contact/">
            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors cursor-pointer" data-testid="button-contact-us">
              CONTACT US NOW
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
