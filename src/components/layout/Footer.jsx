import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/elleworks.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="Elleworks" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Connect | grow | thrive
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">Resources</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Services
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Financial Planning</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Training</Link>
              <Link to="/workshops" className="text-sm text-muted-foreground hover:text-primary transition-colors">Workshops</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="/workshops" className="text-sm text-muted-foreground hover:text-primary transition-colors">EW Collective</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Elleworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
