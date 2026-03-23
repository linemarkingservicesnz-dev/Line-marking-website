import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-page-title";
import heroImage from "../assets/images/real-hero-playground.jpg";
import hopscotchImage from "../assets/images/real-hopscotch.jpg";
import snakesLaddersImage from "../assets/images/real-snakes-ladders.jpg";
import numberGridImage from "../assets/images/real-number-grid.jpg";
import compassImage from "../assets/images/real-compass.jpg";
import spaceTrackImage from "../assets/images/real-space-track.jpg";
import targetImage from "../assets/images/real-target.jpg";

const games = [
  {
    title: "Space Track",
    image: spaceTrackImage,
    alt: "Painted space track with colourful stars, aliens, and balance trail on school playground",
    description: "One of our most popular designs, the Space Track is a colourful fitness trail painted directly onto the playground surface. Featuring bright painted stars, planets, aliens, a moon, and a balance trail, children follow the winding path completing activities at each station. Great for PE lessons, break-time fun, and encouraging active play.",
  },
  {
    title: "Hopscotch",
    image: hopscotchImage,
    alt: "Rainbow hopscotch with clouds and stars painted on school playground",
    description: "Our rainbow hopscotch designs are bright, durable, and perfectly sized for children of all ages. This design features colourful numbered squares with rainbow arches, painted clouds, and stars - turning a classic playground game into a work of art. Painted directly onto concrete or asphalt using hard-wearing floor paint that lasts through years of play and weather.",
  },
  {
    title: "Snakes & Ladders",
    image: snakesLaddersImage,
    alt: "Colourful snakes and ladders hopscotch painted on school playground with number grid in background",
    description: "Bring classic games to life on your playground surface. Our hand-painted designs feature vibrant colours and clear numbering, encouraging interactive play and early maths skills during break times. We can paint multiple games across your playground to create a full activity zone.",
  },
  {
    title: "Number Grids (1-100)",
    image: numberGridImage,
    alt: "Rainbow coloured number grid 1 to 100 painted on school playground",
    description: "Our painted number grids are a fantastic educational resource, helping children with counting, number recognition, and basic maths. Each square is clearly numbered and painted in vibrant rainbow colours for easy visibility. This stunning 10x10 grid is one of our most popular school playground markings.",
  },
  {
    title: "Compass Rose & Clock",
    image: compassImage,
    alt: "Pink green and yellow compass rose with clock face painted on school playground",
    description: "Teach children about directions, geography, and telling time with our beautifully painted compass rose and clock face design. Featuring bright pink, green, and yellow points with cardinal and intermediate directions, plus a central clock face - perfect for outdoor learning activities and cross-curricular lessons.",
  },
  {
    title: "Target & Bullseye Games",
    image: targetImage,
    alt: "Painted dartboard target game with scoring zones on school playground",
    description: "Our painted dartboard target features numbered scoring zones from 1 to 20, with concentric rings in red, yellow, and orange. Perfect for throwing games, maths activities, and PE lessons. Children love the competitive element of aiming for the bullseye 20-point centre.",
  },
];

export default function PlaygroundGames() {
  usePageTitle({
    title: "Playground & School Games | Line-Marking.co.nz",
    description: "Painted playground games for schools including hopscotch, snakes and ladders, number grids, and more. Durable outdoor markings across New Zealand.",
    path: "/Our-Services/playground-games/"
  });
  return (
    <div data-testid="page-playground-games">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="School playground with painted floor games by Line-Marking.co.nz" className="w-full h-full object-cover" data-testid="img-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3" data-testid="text-hero-title">
              Playground &amp; School Games
            </h1>
            <p className="text-lg text-white/90 max-w-xl" data-testid="text-hero-subtitle">Hand-Painted Floor Games for Schools &amp; Playgrounds</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Painted Playground Games for Schools Across New Zealand</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At Line-Marking.co.nz, we specialise in painting colourful, durable playground games directly onto concrete and asphalt surfaces. Unlike thermoplastic stickers that can peel, crack, and fade, our painted games are applied using high-quality floor paints that bond to the surface and withstand years of play, foot traffic, and New Zealand weather.
        </p>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Our hand-painted playground markings bring colour, fun, and learning to school yards across Christchurch, Auckland, and all of New Zealand. From classic hopscotch to educational number grids, every design is carefully measured and painted on-site by our experienced team.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-6">Our Painted Playground Games</h2>

        <div className="space-y-12 mb-12">
          {games.map((game, index) => (
            <div key={game.title} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}>
              <div className="w-full md:w-1/2">
                <img
                  src={game.image}
                  alt={game.alt}
                  className="w-full rounded-md shadow-sm"
                  data-testid={`img-game-${game.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{game.title}</h3>
                <p className="text-gray-600 leading-relaxed">{game.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Why Painted Games Instead of Thermoplastic?</h2>
        <div className="space-y-4 mb-8">
          <p className="text-gray-600">
            <strong className="text-gray-800">Superior Adhesion:</strong> Paint bonds directly into the concrete or asphalt surface, creating a seamless finish that won't lift or peel like thermoplastic stickers.
          </p>
          <p className="text-gray-600">
            <strong className="text-gray-800">Cost-Effective:</strong> Painted playground markings are more affordable than thermoplastic alternatives, making them ideal for schools and councils on a budget.
          </p>
          <p className="text-gray-600">
            <strong className="text-gray-800">Smooth Surface:</strong> Unlike thermoplastic which sits on top of the surface and can become a trip hazard, painted games are flush with the ground.
          </p>
          <p className="text-gray-600">
            <strong className="text-gray-800">Easy to Refresh:</strong> When colours fade after years of use, painted markings are simple and affordable to repaint without removing the old surface.
          </p>
          <p className="text-gray-600">
            <strong className="text-gray-800">Custom Designs:</strong> Paint allows for fully custom designs, colours, and sizes to suit any playground layout or school branding.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Additional Playground Markings We Offer</h2>
        <ul className="space-y-2 mb-8 text-gray-600">
          <li><strong className="text-gray-800">Alphabet Trails</strong> &ndash; Letters painted in a winding path for literacy activities</li>
          <li><strong className="text-gray-800">Four Square Courts</strong> &ndash; Classic ball game courts with clear boundary lines</li>
          <li><strong className="text-gray-800">Fitness Trails</strong> &ndash; Activity stations with painted instructions for PE</li>
          <li><strong className="text-gray-800">Maze &amp; Labyrinth</strong> &ndash; Fun painted mazes for children to explore</li>
          <li><strong className="text-gray-800">Clock Faces</strong> &ndash; Large painted clocks for teaching time</li>
          <li><strong className="text-gray-800">Shapes &amp; Colour Wheels</strong> &ndash; Educational designs for younger children</li>
          <li><strong className="text-gray-800">Custom School Logos</strong> &ndash; Your school crest or mascot painted onto the playground</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Schools &amp; Councils We Work With</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We work with primary schools, intermediate schools, early childhood centres, and local councils across Christchurch, Auckland, and New Zealand. Whether you need a single hopscotch or a full playground makeover with multiple games, our team can design and paint a layout that works for your space and budget.
        </p>

        <div className="bg-blue-600 rounded-md p-6 text-white text-center mt-10">
          <h3 className="text-xl font-bold mb-2">Get a Free Quote for Your School</h3>
          <p className="text-white/90 mb-4">Ready to brighten up your playground with colourful painted games? Contact us today for a free on-site assessment and quote.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:0224393344" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors" data-testid="button-call-us">
              Call 022 439 3344
            </a>
            <Link href="/Contact/">
              <span className="inline-block bg-blue-700 text-white border border-white/30 px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors cursor-pointer" data-testid="button-contact-us">
                Submit an Enquiry
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
