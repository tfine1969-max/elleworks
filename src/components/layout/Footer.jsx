import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
            src="https://media.base44.com/images/public/69f3412ade1e350134cfae3e/288089ee0_elleworks.png"
            alt="Elleworks"
            className="h-6 w-auto mb-4"
          />
            <p className="text-sm text-secondary-foreground/60 leading-relaxed max-w-xs">
              Structured financial planning and education for women who seek clarity and control.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-secondary-foreground/40 mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Home</Link>
              <Link to="/programmes" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Programmes</Link>
              <Link to="/about" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-secondary-foreground/40 mb-4">
              Get Started
            </p>
            <a
              href="https://wealth-works-flow.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Start Your Journey →
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="border border-secondary-foreground/10 rounded-lg p-4 mb-6">
            <p className="text-xs text-secondary-foreground/50 leading-relaxed">
              Financial advice is provided through licensed entities within the Wealth Works group. 
              Elleworks is an initiative of Wealth Works and does not provide financial advice directly.
            </p>
          </div>
          <p className="text-xs text-secondary-foreground/40">
            © {new Date().getFullYear()} Elleworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}