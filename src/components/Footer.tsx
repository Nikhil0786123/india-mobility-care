import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding !pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-3">
              <img 
                src={logo} 
                alt="P&O Robotics Artificial Limbs Solutions" 
                className="h-24 w-auto object-contain bg-white rounded-xl p-3 shadow-lg"
              />
              <div className="flex flex-col">
                <span className="font-outfit font-bold text-lg text-primary-foreground">
                  P&O ROBOTICS
                </span>
                <span className="font-outfit font-medium text-sm text-primary-foreground/80 uppercase tracking-wide">
                  Artificial Limbs Solutions
                </span>
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
                { name: "Our Doctor", path: "/doctor" },
                { name: "Why Choose Us", path: "/why-choose-us" },
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
                { name: "Prosthetic Limbs", path: "/solutions/prosthetics" },
                { name: "Orthotic Supports", path: "/solutions/orthotics" },
                { name: "Pediatric Solutions", path: "/solutions/pediatric" },
                { name: "Diabetic Foot Care", path: "/solutions/diabetic-footcare" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
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
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  1679, Begumpur, Near MCD School,
                  <br />
                  Delhi – 110086
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919717661811"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +91 97176 61811
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:care@porobotics.in"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  care@porobotics.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
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
            © {new Date().getFullYear()} P&O ROBOTICS ARTIFICIAL LIMBS SOLUTIONS. All rights reserved.
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
