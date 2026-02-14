import { Link, useLocation } from "wouter";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImage from "../assets/images/logo.png";

const serviceLinks = [
  { href: "/Our-Services/Line-Marking/", label: "Line Marking and Symbols" },
  { href: "/Our-Services/Industrial/", label: "Industrial Line Marking" },
  { href: "/Our-Services/Non-Slip-Flooring/", label: "Non-Slip Flooring" },
  { href: "/Our-Services/Protective-Concrete-Coatings/", label: "Protective Concrete Coatings" },
  { href: "/Our-Services/Line-And-Marking-Removals/", label: "Line and Marking Removals" },
  { href: "/Our-Services/sports-court-line-marking/", label: "Sports Court Line Marking" },
  { href: "/Our-Services/playground-games/", label: "Playground & School Games" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm" data-testid="navigation">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <span className="flex items-center gap-2 cursor-pointer">
              <img src={logoImage} alt="Line-Marking.co.nz logo" className="h-10 w-10" data-testid="img-logo" />
              <span className="text-xl font-bold text-gray-800">Line-Marking.co.nz</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link href="/">
              <span className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition-colors" data-testid="nav-home">
                Home
              </span>
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                data-testid="nav-services"
              >
                Our Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  {serviceLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 cursor-pointer"
                        data-testid={`nav-service-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/About-Us/">
              <span className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition-colors" data-testid="nav-about">
                About Us
              </span>
            </Link>

            <Link href="/Contact/">
              <span className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition-colors" data-testid="nav-contact">
                Contact
              </span>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-2 space-y-1">
            <Link href="/">
              <span className="block py-2 text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>Home</span>
            </Link>

            <button
              className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Our Services
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1">
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span className="block py-2 text-sm text-gray-600" onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            <Link href="/About-Us/">
              <span className="block py-2 text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>About Us</span>
            </Link>
            <Link href="/Contact/">
              <span className="block py-2 text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
