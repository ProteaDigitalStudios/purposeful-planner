import { createFileRoute, Link } from "@tanstack/react-router";
import { PiggyBank, TrendingUp, Shield, Scroll, LineChart, Car, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Declan Smit | Financial Planner" },
      {
        name: "description",
        content:
          "Retirement, tax-free investments, risk cover, estate planning, linked investments and short-term insurance — comprehensive financial planning in Hermanus.",
      },
      { property: "og:title", content: "Services — Declan Smit" },
      {
        property: "og:description",
        content: "The six pillars of a complete financial plan.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: PiggyBank, title: "Retirement Planning", desc: "Build a retirement strategy that compounds quietly in the background of your life." },
  { icon: TrendingUp, title: "Tax-Free Investments", desc: "Make full use of your annual TFSA allowance with growth-focused unit trusts." },
  { icon: Shield, title: "Risk Cover", desc: "Life, disability and severe illness cover sized to your real obligations." },
  { icon: Scroll, title: "Estate Planning", desc: "A valid will, beneficiary structure and liquidity plan that protects your family." },
  { icon: LineChart, title: "Linked Investments", desc: "Discretionary portfolios across local and offshore unit trusts and ETFs." },
  { icon: Car, title: "Short-Term Insurance", desc: "Protect the assets you've worked hard for — vehicle, home and contents cover." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-subtle-gradient">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-foreground md:text-6xl">
            Comprehensive planning,<br />tailored to your life.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Six core areas of financial planning — used together to build a stable, growing
            and protected financial life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-serif text-xl text-foreground">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl geo-pattern p-10 md:p-14">
          <h2 className="max-w-2xl font-serif text-3xl text-white md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mt-3 max-w-xl text-white/80">
            A free 30-minute consultation is the simplest way to find out what your plan
            actually needs.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-medium text-gold-foreground shadow-gold hover:brightness-105"
          >
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
