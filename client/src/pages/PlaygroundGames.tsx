import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "../assets/images/playground-hero.png";
import hopscotchImage from "../assets/images/playground-hopscotch.png";
import snakesLaddersImage from "../assets/images/playground-snakes-ladders.png";
import numberGridImage from "../assets/images/playground-number-grid.png";
import compassImage from "../assets/images/playground-compass.png";
import targetImage from "../assets/images/playground-target.png";
import spaceTrackImage from "../assets/images/playground-space-track.png";

const games = [
  {
    title: "Hopscotch",
    image: hopscotchImage,
    alt: "Painted hopscotch game on school playground concrete",
    description: "A timeless playground favourite, our painted hopscotch designs are bright, durable, and perfectly sized for children of all ages. We paint directly onto concrete or asphalt using hard-wearing floor paint that lasts through years of play and weather.",
  },
  {
    title: "Snakes & Ladders",
    image: snakesLaddersImage,
    alt: "Painted snakes and ladders board game on school playground",
    description: "Bring the classic board game to life on your playground surface. Our hand-painted snakes and ladders games feature vibrant colours and clear numbering, encouraging interactive play and early maths skills during break times.",
  },
  {
    title: "Number Grids (1-100)",
    image: numberGridImage,
    alt: "Painted number grid on school playground concrete",
    description: "Our painted number grids are a fantastic educational resource, helping children with counting, number recognition, and basic maths. Each square is clearly numbered and painted in alternating colours for easy visibility on the playground surface.",
  },
  {
    title: "Compass Rose",
    image: compassImage,
    alt: "Painted compass rose design on school playground",
    description: "Teach children about directions and geography with a beautifully painted compass rose. Our designs include clear cardinal and intermediate directions, perfect for outdoor learning activities and orienteering exercises.",
  },
  {
    title: "Target & Bullseye Games",
    image: targetImage,
    alt: "Painted target circle game on school playground",
    description: "Painted target circles with scoring zones make excellent additions to any playground. Great for throwing games, coordination activities, and PE lessons. Our concentric ring designs are painted with bright, contrasting colours for maximum fun.",
  },
  {
    title: "Space Track",
    image: spaceTrackImage,
    alt: "Painted space track fitness game on school playground",
    description: "A favourite with schools, the Space Track is a painted fitness trail with a space and solar system theme. Planets are painted at stations around the track where children perform activities like star jumps, lunges, or balancing. The colourful orbit path encourages running, skipping, and active play while learning about the solar system. Perfect for PE lessons and break-time fun.",
  },
];

export default function PlaygroundGames() {
  return (
    <div data-testid="page-playground-games">
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img src={heroImage} alt="School playground with painted floor games" className="w-full h-full object-cover" data-testid="img-hero" />
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
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Painted Playground Games for Schools Across Canterbury</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At Line-Marking.co.nz, we specialise in painting colourful, durable playground games directly onto concrete and asphalt surfaces. Unlike thermoplastic stickers that can peel, crack, and fade, our painted games are applied using high-quality floor paints that bond to the surface and withstand years of play, foot traffic, and New Zealand weather.
        </p>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Our hand-painted playground markings bring colour, fun, and learning to school yards across Christchurch and Canterbury. From classic hopscotch to educational number grids, every design is carefully measured and painted on-site by our experienced team.
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
          We work with primary schools, intermediate schools, early childhood centres, and local councils across Christchurch and Canterbury. Whether you need a single hopscotch or a full playground makeover with multiple games, our team can design and paint a layout that works for your space and budget.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Get a Free Quote for Your School</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Ready to brighten up your playground with colourful painted games? Contact us today for a free on-site assessment and quote. We'll work with you to choose the best games and designs for your space.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/Contact/">
            <Button data-testid="button-contact-us">
              CONTACT US NOW
            </Button>
          </Link>
          <a href="tel:0224393344">
            <Button variant="outline" data-testid="button-call-us">
              CALL 022 439 3344
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
