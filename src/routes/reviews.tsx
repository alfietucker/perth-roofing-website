import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { REVIEWS, SITE } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Roofing Reviews Perth | Apex Roofing Customer Feedback" },
      { name: "description", content: `Read ${SITE.reviewCount}+ five-star roofing reviews from Perth homeowners — Hillarys, Morley, Fremantle, Canning Vale and more.` },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <section className="py-16 md:py-24 bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="Customer Reviews" title={`${SITE.rating}/5 from ${SITE.reviewCount}+ Perth homeowners`} subtitle="The reviews you'd want to read before letting a roofer near your home." center />
          <div className="mt-6 flex justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-7 h-7 fill-current" />)}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="flex gap-0.5 text-primary mb-3">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <blockquote className="text-charcoal-soft leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-4 text-sm">
                <p className="font-semibold text-charcoal">{r.name} <span className="text-muted-foreground font-normal">· {r.suburb}</span></p>
                <p className="text-muted-foreground">{r.service}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><QuoteForm /></div>
      </section>
    </>
  );
}
