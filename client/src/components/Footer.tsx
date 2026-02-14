import { Link } from "wouter";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t-4 border-primary">
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold font-display uppercase tracking-tighter leading-none text-white">
              Line Marking
            </h3>
            <span className="text-xs font-semibold tracking-widest text-primary">
              & FLOORING CHRISTCHURCH
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Professional line marking and flooring solutions for industrial, commercial, and safety applications across the South Island.
          </p>
          <div className="flex gap-4">
            {/* Social icons could go here */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold font-display uppercase mb-6 text-white">Services</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/Our-Services/Line-Marking/" className="text-gray-400 hover:text-primary transition-colors">Line Marking</Link>
            </li>
            <li>
              <Link href="/Our-Services/Industrial/" className="text-gray-400 hover:text-primary transition-colors">Industrial Safety</Link>
            </li>
            <li>
              <Link href="/Our-Services/Non-Slip-Flooring/" className="text-gray-400 hover:text-primary transition-colors">Non-Slip Flooring</Link>
            </li>
            <li>
              <Link href="/line-marking-epoxy-flooring/" className="text-gray-400 hover:text-primary transition-colors">Epoxy Systems</Link>
            </li>
            <li>
              <Link href="/Our-Services/Protective-Concrete-Coatings/" className="text-gray-400 hover:text-primary transition-colors">Concrete Protection</Link>
            </li>
          </ul>
        </div>

        {/* Areas */}
        <div>
          <h4 className="text-lg font-bold font-display uppercase mb-6 text-white">Service Areas</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-gray-400 hover:text-primary transition-colors">Christchurch</Link>
            </li>
            <li>
              <Link href="/line-marking-rolleston/" className="text-gray-400 hover:text-primary transition-colors">Rolleston</Link>
            </li>
            <li>
              <Link href="/line-marking-rangiora" className="text-gray-400 hover:text-primary transition-colors">Rangiora</Link>
            </li>
            <li>
              <Link href="/line-marking-greymouth/" className="text-gray-400 hover:text-primary transition-colors">Greymouth</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold font-display uppercase mb-6 text-white">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium">Phone</span>
                <a href="tel:0224393344" className="hover:text-primary">022 439 3344</a>
              </div>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium">Email</span>
                <a href="mailto:rogeriotc2@gmail.com" className="hover:text-primary">rogeriotc2@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium">Location</span>
                <span>Christchurch, New Zealand</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-wide pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Line Marking & Flooring Christchurch. All rights reserved.</p>
      </div>
    </footer>
  );
}
