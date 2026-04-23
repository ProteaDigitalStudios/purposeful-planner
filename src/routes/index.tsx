import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  PiggyBank,
  TrendingUp,
  Shield,
  Scroll,
  LineChart,
  Car,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import declanPortrait from "@/assets/declan-portrait.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Declan Smit | Financial Planner — Overberg & Western Cape" },
      {
        name: "description",
        content:
          "Your financial future, planned with purpose. Old Mutual accredited financial adviser based in the Overberg, servicing the whole Western Cape.",
      },
      { property: "og:title", content: "Declan Smit | Financial Planner" },
      {
        property: "og:description",
        content:
          "Personalised financial planning — retirement, investments, risk cover and estate planning. Overberg & Western Cape.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: PiggyBank, title: "Retirement Planning", desc: "Build a retirement strategy that compounds quietly in the background of your life." },
  { icon: TrendingUp, title: "Advanced Investments", desc: "Discretionary portfolios across local and offshore unit trusts and ETFs." },
  { icon: Shield, title: "Risk Cover", desc: "Life, disability and severe illness cover sized to your real obligations." },
  { icon: Scroll, title: "Estate Planning", desc: "A valid will, beneficiary structure and liquidity plan that protects your family." },
  { icon: LineChart, title: "Tax-Free Investments", desc: "Make full use of your annual TFSA allowance with growth-focused unit trusts." },
  { icon: Car, title: "Short-Term Insurance", desc: "Protect the assets you've worked hard for — vehicle, home and contents cover." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-[1fr_auto] md:py-32">
          <div className="flex flex-col items-start gap-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Old Mutual Accredited Adviser
            </span>
            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Your Financial Future,
              <span className="block text-gold">Planned with Purpose.</span>
            </h1>
            <p className="max-w-2xl text-lg text-white/80">
              Financial Planner&nbsp;&nbsp;|&nbsp;&nbsp;Overberg &amp; the Western Cape&nbsp;&nbsp;|&nbsp;&nbsp;Old Mutual
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 font-medium text-gold-foreground shadow-gold transition-all hover:translate-y-[-1px] hover:brightness-105"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-gold/40 via-primary-glow/30 to-transparent blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-gold/60 shadow-elegant md:h-80 md:w-80">
              <img
                src={declanPortrait}
                alt="Declan Smit, financial planner"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-12">
          <div className="grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              ["Old Mutual", "Accredited"],
              ["Overberg", "Based"],
              ["Western Cape", "Servicing"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-serif text-xl text-gold">{k}</div>
                <div className="text-xs uppercase tracking-wider text-white/60">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO BAND */}
      <section className="bg-subtle-gradient">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">About</p>
              <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
                Warm authority. Real advice. Long-term thinking.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                I'm Declan — a 23-year-old financial planner based in the Overberg,
                servicing clients across the whole Western Cape. I help individuals
                and families build long-term plans that are clear, honest and quietly
                powerful. No jargon, no pressure — just good advice grounded in your
                real life.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                {[
                  "Old Mutual accredited — risk, short-term insurance, advanced investments, retirement & estate planning",
                  "Comprehensive needs analysis before any recommendation",
                  "Annual reviews to keep your plan aligned with your life",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 hover:text-primary-glow"
              >
                Read more about me <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 via-gold/10 to-primary/5 blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-card">
                <Quote className="h-10 w-10 text-gold" />
                <p className="mt-4 font-serif text-2xl leading-snug text-foreground">
                  "Good financial planning isn't about beating the market — it's about
                  designing a life you don't have to escape from."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-serif font-bold text-primary-foreground">
                    DS
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Declan Smit</div>
                    <div className="text-xs text-muted-foreground">Financial Planner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Six pillars of a complete plan
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each pillar works on its own. Together, they form a financial life that
            quietly takes care of itself.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
          >
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="relative overflow-hidden rounded-2xl geo-pattern p-10 md:p-16">
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="max-w-2xl font-serif text-3xl text-white md:text-4xl">
                Ready to plan with purpose?
              </h2>
              <p className="mt-3 max-w-xl text-white/80">
                Let's start with a free 30-minute consultation — in person across the
                Overberg, or online anywhere in the Western Cape.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start rounded-md bg-gold px-6 py-3.5 font-medium text-gold-foreground shadow-gold transition hover:brightness-105"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
