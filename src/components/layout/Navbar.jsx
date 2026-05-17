import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../assets/elleworks.png";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Workshops", path: "/workshops" },
  { label: "Resources", path: "/resources" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Quiz", path: "/quiz" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center p-3">
          <img
            src={logo}
            alt="Elleworks"
            className="w-[142px] h-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex gap-4">
          <button
            onClick={() => window.location.href = "/auth/login"}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 px-4"
          >
            Log in
          </button>
          <Link
            to="/register"
            className="text-sm font-medium text-white bg-primary hover:bg-primary/90 px-6 py-2 rounded-lg transition-colors"
          >
            Register
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border pt-4 mt-2 flex flex-col gap-3">
                <button
                  onClick={() => window.location.href = "/auth/login"}
                  className="text-sm font-medium text-foreground text-center py-2"
                >
                  Log in
                </button>
                <Link
                  to="/register"
                  className="text-sm font-medium text-white bg-primary hover:bg-primary/90 px-6 py-2 rounded-lg text-center"
                >
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
