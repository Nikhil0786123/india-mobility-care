import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Doctor", path: "/doctor" },
  {
    name: "Solutions",
    path: "/solutions",
    submenu: [
      { name: "Prosthetic Solutions", path: "/solutions/prosthetics" },
      { name: "Orthotic Solutions", path: "/solutions/orthotics" },
      { name: "Pediatric Care", path: "/solutions/pediatric" },
      { name: "Diabetic Foot Care", path: "/solutions/diabetic-footcare" },
    ],
  },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "Patient Stories", path: "/stories" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white via-blue-50/50 to-blue-100/30 shadow-lg border-b border-primary/10">
      {/* Banner Section - Large Logo & Brand (centered) */}
      <div className="bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 py-5 md:py-8 border-b border-primary/5">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex flex-col items-center justify-center gap-3 md:gap-4">
            <img 
              src={logo} 
              alt="P&O Robotics Artificial Limbs Solutions LLP" 
              className="h-24 sm:h-28 md:h-36 lg:h-44 w-auto object-contain drop-shadow-md"
            />
            <div className="flex flex-col items-center text-center leading-tight">
              <span className="font-outfit font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary tracking-tight">
                P&O ROBOTICS
              </span>
              <span className="font-outfit font-semibold text-sm sm:text-base md:text-lg text-foreground/80 uppercase tracking-wider mt-1 md:mt-2">
                Artificial Limbs Solutions LLP
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-3 bg-white/90 backdrop-blur-sm relative">
        <div className="flex items-center justify-center lg:justify-between">
          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.submenu ? (
                <DropdownMenu key={link.path}>
                  <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-sm text-foreground hover:text-primary transition-colors outline-none">
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-white border border-border shadow-lg">
                    {link.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.path} asChild>
                        <Link
                          to={subItem.path}
                          className={`w-full cursor-pointer ${
                            location.pathname === subItem.path
                              ? "text-primary font-semibold"
                              : "text-foreground hover:text-primary"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium text-sm transition-colors hover:text-primary relative ${
                    location.pathname === link.path
                      ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919717661811"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm">+91 97176 61811</span>
            </a>
            <Button variant="cta" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border bg-white rounded-lg shadow-inner">
            <nav className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.path}>
                    <button
                      className="w-full flex items-center justify-between font-medium py-3 px-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                      onClick={() =>
                        setOpenSubmenu(openSubmenu === link.path ? null : link.path)
                      }
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openSubmenu === link.path ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSubmenu === link.path && (
                      <div className="pl-4 space-y-1 bg-muted/50 rounded-lg py-2 mt-1">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block py-2 px-3 text-sm rounded-md transition-colors ${
                              location.pathname === subItem.path
                                ? "text-primary font-medium bg-primary/10"
                                : "text-foreground hover:bg-muted"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-medium py-3 px-3 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              {/* Mobile Phone Link */}
              <a
                href="tel:+919717661811"
                className="flex items-center gap-2 font-medium py-3 px-3 text-primary hover:bg-muted rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 97176 61811</span>
              </a>
              <Button variant="cta" className="mt-3 mx-3" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
