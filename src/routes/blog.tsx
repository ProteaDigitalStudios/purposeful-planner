import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import postsData from "@/data/posts.json";

type Post = {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
  content: string;
};

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Declan Smit | Financial Planner" },
      {
        name: "description",
        content:
          "Plain-language articles on retirement, investing, risk and estate planning by Hermanus financial planner Declan Smit.",
      },
      { property: "og:title", content: "Blog — Declan Smit" },
      { property: "og:description", content: "Honest financial planning insights." },
    ],
  }),
  component: BlogPage,
});

const categoryColor: Record<string, string> = {
  Retirement: "bg-primary/10 text-primary",
  Investing: "bg-gold/15 text-gold-foreground",
  Estate: "bg-charcoal/10 text-charcoal",
  Risk: "bg-destructive/10 text-destructive",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPage() {
  const posts = [...postsData].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <SiteLayout>
      <section className="bg-subtle-gradient">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Insights</p>
          <h1 className="mt-3 font-serif text-4xl text-foreground md:text-6xl">
            Notes on planning, investing<br />and the long game.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Plain-language articles on the financial decisions that compound the most.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <h2 className="font-serif text-2xl text-foreground">New articles coming soon</h2>
            <p className="mt-3 text-muted-foreground">
              I'm working on the first set of insights. Check back shortly — or get in touch in the meantime.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-glow"
            >
              Book a Consultation
            </Link>
          </div>
        ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    categoryColor[p.category] ?? "bg-muted text-muted-foreground"
                  }`}
                >
                  {p.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(p.date)}
                </span>
              </div>

              <h2 className="mt-5 font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-primary">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.excerpt}
              </p>

              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
        )}
      </section>
    </SiteLayout>
  );
}
