import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding !pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-foreground rounded-xl flex items-center justify-center">
                <span className="text-foreground font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-bold text-xl">MobilityFirst</span>
                <span className="text-xs opacity-70">Prosthetics & Orthotics</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Restoring mobility and rebuilding lives across India with advanced
              prosthetic and orthotic solutions tailored for Indian patients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Solutions", path: "/solutions" },
                { name: "Patient Stories", path: "/stories" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Solutions</h4>
            <ul className="space-y-3">
              {[
                "Prosthetic Limbs",
                "Orthotic Supports",
                "Pediatric Solutions",
                "Diabetic Foot Care",
                "Spinal Supports",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/solutions"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <span className="text-primary-foreground/70">
                  123 Healthcare Complex, Bandra West, Mumbai, Maharashtra 400050
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a
                  href="tel:+911234567890"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:care@mobilityfirst.in"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  care@mobilityfirst.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-accent" />
                <span className="text-primary-foreground/70">
                  Mon - Sat: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} MobilityFirst India. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="/privacy"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
