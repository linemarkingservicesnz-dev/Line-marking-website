import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/Our-Services/Line-Marking/", label: "Line Marking" },
  { href: "/Our-Services/Industrial/", label: "Industrial" },
  { href: "/Our-Services/Non-Slip-Flooring/", label: "Flooring" },
  { href: "/About-Us/", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      {/* Top Bar - Contact Info */}
      <div className="bg-secondary text-secondary-foreground py-2 hidden md:block">
        <div className="container-wide flex justify-between items-center text-sm font-medium">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              022 439 3344
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              rogeriotc2@gmail.com
            </span>
          </div>
          <div className="text-primary font-bold tracking-wider">
            SERVING CHRISTCHURCH & SOUTH ISLAND
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container-wide py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex flex-col cursor-pointer group">
              <h1 className="text-2xl font-bold font-display uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
                Line Marking
              </h1>
              <span className="text-xs font-semibold tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                & FLOORING CHRISTCHURCH
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide cursor-pointer transition-all hover:text-primary ${
                    isActive(link.href) ? "text-primary border-b-2 border-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="ml-4 font-bold uppercase bg-primary text-primary-foreground hover:bg-primary/90">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container-wide py-4 flex flex-col gap-2">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className={`p-3 text-lg font-bold uppercase tracking-wide cursor-pointer hover:bg-muted ${
                      isActive(link.href) ? "text-primary bg-muted/50" : ""
                    }`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                 <a href="tel:0224393344" className="flex items-center gap-2 font-medium">
                    <Phone className="w-5 h-5 text-primary" />
                    022 439 3344
                 </a>
                 <a href="mailto:rogeriotc2@gmail.com" className="flex items-center gap-2 font-medium">
                    <Mail className="w-5 h-5 text-primary" />
                    rogeriotc2@gmail.com
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
