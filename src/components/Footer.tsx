import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook } from "lucide-react";

// TikTok inline SVG (Lucide doesn't ship one)
function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.86a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z" />
    </svg>
  );
}

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
              Financial Planner serving Hermanus and the Overberg region.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 text-background/80 transition hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 text-background/80 transition hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 text-background/80 transition hover:bg-primary hover:text-primary-foreground"
              >
                <TiktokIcon className="h-4 w-4" />
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
              <li>Hermanus, Western Cape</li>
              <li>Serving the Overberg Region</li>
              <li><a href="mailto:declan@example.co.za" className="hover:text-gold">declan@example.co.za</a></li>
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
