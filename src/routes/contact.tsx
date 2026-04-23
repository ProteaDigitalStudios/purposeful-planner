import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Mail, MessageCircle, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Declan Smit | Financial Planner Overberg" },
      {
        name: "description",
        content:
          "Book a free consultation with Declan Smit. Based in the Overberg, servicing the whole Western Cape. WhatsApp, call, email or contact form.",
      },
      { property: "og:title", content: "Contact Declan Smit" },
      { property: "og:description", content: "Book a free 30-minute financial planning consultation." },
    ],
  }),
  component: ContactPage,
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqkkyjz";
const WHATSAPP_URL =
  "https://wa.me/27792803854?text=Hi%20Declan%2C%20I%27d%20like%20to%20book%20a%20consultation.";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again or reach out via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SiteLayout>
      <section className="bg-subtle-gradient">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-3 font-serif text-4xl text-foreground md:text-6xl">
            Let's start the conversation.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Based in the Overberg | Servicing the whole Western Cape. Reply within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_360px]">
          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h2 className="mt-5 font-serif text-2xl">Thank you</h2>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Your message is on its way. I'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Phone" name="phone" type="tel" />
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={2000}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell me a little about what you'd like to plan for…"
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow-sm transition hover:bg-primary-glow disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      Sending… <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-primary p-5 text-primary-foreground shadow-elegant transition hover:bg-primary-glow"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                <MessageCircle className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-serif text-lg">Chat on WhatsApp</span>
                <span className="block text-sm text-primary-foreground/80">
                  079 280 3854 — fastest way to reach me
                </span>
              </span>
            </a>

            <div className="space-y-4 rounded-xl border border-border bg-card p-6">
              <InfoRow
                icon={Phone}
                title="Phone"
                body={<a href="tel:+27792803854" className="hover:text-primary">079 280 3854</a>}
              />
              <InfoRow
                icon={Mail}
                title="Email"
                body={
                  <a href="mailto:declan.smit@oldmutual.com" className="hover:text-primary">
                    declan.smit@oldmutual.com
                  </a>
                }
              />
              <InfoRow
                icon={MapPin}
                title="Location"
                body="Based in the Overberg — Servicing the whole Western Cape"
              />
            </div>

            <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
              <h3 className="font-serif text-lg text-foreground">Office hours</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Mon–Fri · 08:30–17:00<br />By appointment Saturdays
              </p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={200}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof MapPin;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <div className="text-sm text-muted-foreground">{body}</div>
      </div>
    </div>
  );
}
