import { useState } from "react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-primary/10">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo + Brand Name - Premium Display */}
          <Link to="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="P&O ROBOTICS Artificial Limbs Solutions" 
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full -z-10"></div>
            </div>
            <div className="hidden md:flex flex-col leading-tight">
              <span className="font-outfit font-bold text-xl lg:text-2xl text-primary tracking-tight drop-shadow-sm">
                P&O ROBOTICS
              </span>
              <span className="font-outfit font-semibold text-xs lg:text-sm text-foreground/80 uppercase tracking-wider">
                Artificial Limbs Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
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
                  className={`font-medium text-sm transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
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
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border bg-white">
            <nav className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.path}>
                    <button
                      className="w-full flex items-center justify-between font-medium py-3 px-2 text-foreground hover:bg-muted rounded-lg transition-colors"
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
                    className={`font-medium py-3 px-2 rounded-lg transition-colors ${
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
              <a
                href="tel:+919717661811"
                className="flex items-center gap-2 font-medium py-3 px-2 text-primary hover:bg-muted rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 97176 61811</span>
              </a>
              <Button variant="cta" className="mt-3" asChild>
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