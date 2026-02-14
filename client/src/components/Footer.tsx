import { Link } from "wouter";

const serviceLinks = [
  { href: "/Our-Services/Non-Slip-Flooring/", label: "Non-Slip Flooring" },
  { href: "/Our-Services/Protective-Concrete-Coatings/", label: "Protective Concrete Coatings" },
  { href: "/Our-Services/Line-Marking/", label: "Line Marking and Symbols" },
  { href: "/Our-Services/Line-And-Marking-Removals/", label: "Line and Marking Removals" },
  { href: "/Our-Services/sports-court-line-marking/", label: "Sports Court Line Marking" },
];

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {serviceLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          <p>&copy; Copyright - Workspace Safety</p>
        </div>
      </div>
    </footer>
  );
}
