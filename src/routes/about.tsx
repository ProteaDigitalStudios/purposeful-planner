import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, GraduationCap, Award, MapPin, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Declan Smit | Financial Planner" },
      {
        name: "description",
        content:
          "Meet Declan Smit — a young, RE5-qualified, Old Mutual accredited financial planner based in Hermanus, serving clients across the Overberg.",
      },
      { property: "og:title", content: "About Declan Smit" },
      {
        property: "og:description",
        content: "Personal bio, credentials and approach of financial planner Declan Smit.",
      },
    ],
  }),
  component: AboutPage,
});

const credentials = [
  { icon: GraduationCap, label: "RE5 Regulatory Exam", desc: "Qualified representative under FAIS" },
  { icon: Award, label: "Old Mutual Accredited", desc: "Authorised adviser representative" },
  { icon: MapPin, label: "Hermanus-Based", desc: "Serving the Overberg region" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-subtle-gradient">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
            {/* Photo placeholder */}
            <div className="relative mx-auto md:mx-0">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary via-primary-glow to-gold opacity-30 blur-xl" />
              <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-background bg-gradient-to-br from-primary to-primary-glow shadow-elegant">
                <span className="font-serif text-7xl font-semibold text-primary-foreground">DS</span>
              </div>
              <div className="absolute -bottom-2 right-4 rounded-full border-4 border-background bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground shadow-card">
                Hermanus
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">About</p>
              <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
                Hello, I'm Declan.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                I'm a 22-year-old financial planner based in Hermanus, working with
                individuals, families and small business owners across the Overberg.
                I joined the industry because I believe most people don't need more
                financial products — they need a clear plan, explained honestly, by
                someone who actually listens.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                As a younger adviser, I bring fresh energy, modern tools and a long-term
                perspective. As an Old Mutual accredited representative, I bring the
                backing of one of South Africa's most established financial institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">Credentials</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {credentials.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-foreground">{label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-subtle-gradient">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">My approach</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Listen first", d: "A proper plan starts with understanding your life, not your products." },
              { n: "02", t: "Plan honestly", d: "Recommendations grounded in your real numbers — no upsell, no jargon." },
              { n: "03", t: "Review annually", d: "Life changes. Your plan should evolve with it, not gather dust." },
            ].map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-card p-7">
                <div className="font-serif text-3xl text-gold">{s.n}</div>
                <h3 className="mt-3 font-serif text-xl text-foreground">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary-glow"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              See services <CheckCircle2 className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
