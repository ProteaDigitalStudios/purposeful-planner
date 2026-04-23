import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-charcoal text-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-serif text-lg font-bold text-primary-foreground">
                DS
              </span>
              <span className="font-serif text-lg">Declan Smit</span>
            </div>
            <p className="mt-3 text-sm text-background/70">
              Financial Planner based in the Overberg, servicing the whole Western Cape.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/in/declan-smit-a85365271"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 text-background/80 transition hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576378898104"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 text-background/80 transition hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/declansmit_financialplanner/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 text-background/80 transition hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base text-background">Navigate</h4>
            <ul className="mt-3 space-y-2 text-sm text-background/70">
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base text-background">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-background/70">
              <li>Based in the Overberg</li>
              <li>Servicing the Western Cape</li>
              <li>
                <a href="tel:+27792803854" className="hover:text-gold">079 280 3854</a>
              </li>
              <li>
                <a href="mailto:declan.smit@oldmutual.com" className="hover:text-gold">
                  declan.smit@oldmutual.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-6">
          <p className="text-xs leading-relaxed text-background/55">
            Declan Smit is an accredited financial adviser representative of Old Mutual.
            This website is for informational purposes only and does not constitute financial advice.
            FSP licence details available on request.
          </p>
          <p className="mt-3 text-xs text-background/40">
            © {new Date().getFullYear()} Declan Smit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
