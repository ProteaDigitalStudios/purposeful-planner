import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar } from "lucide-react";
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

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = (postsData as Post[]).find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Declan Smit` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Article not found" }],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-serif text-4xl">Article not found</h1>
        <p className="mt-3 text-muted-foreground">That post doesn't exist or has been moved.</p>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>
    </SiteLayout>
  ),
  component: PostPage,
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostPage() {
  const post = Route.useLoaderData();

  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
        >
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}
          </span>
        </div>

        <h1 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-subtle-gradient p-8">
          <h2 className="font-serif text-2xl text-foreground">Want to talk about your plan?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Free 30-minute consultation, in person in Hermanus or online.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-glow"
          >
            Book a Consultation
          </Link>
        </div>
      </article>
    </SiteLayout>
  );
}
