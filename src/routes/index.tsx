import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Clock, Award, Wrench, CheckCircle2, Star } from "lucide-react";
import heroImg from "@/assets/hero-roof.jpg";
import tileImg from "@/assets/tile-roof.jpg";
import metalImg from "@/assets/metal-roof.jpg";
import commercialImg from "@/assets/commercial-roof.jpg";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBar } from "@/components/TrustBar";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE, SERVICES, SUBURBS, REVIEWS, PROJECTS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Perth Roofing Specialists | Apex Roofing Perth — Free Quotes" },
      { name: "description", content: "Perth's trusted roofing contractors. Roof repairs, restoration, re-roofing & replacement across Perth metro. Licensed, insured, locally owned. ★★★★★ rated." },
      { property: "og:title", content: "Perth Roofing Specialists | Apex Roofing Perth" },
      { property: "og:description", content: "Roof repairs, restoration & replacement across Perth. Free quotes, workmanship warranty." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Beautifully restored Colorbond metal roof on a modern Perth home" className="w-full h-full object-cover" width={1920} height={1280} fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/65 to-charcoal/20" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-white">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Perth's #1 Local Roofing Team
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              Perth's Trusted <span className="text-primary">Roofing</span> Specialists.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Roof Repairs, Roof Restoration, Re-Roofing & Roof Replacement across Perth — done right, on time, with a written workmanship warranty.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-cta hover:bg-primary-hover transition">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-white text-charcoal px-6 py-3.5 text-base font-semibold hover:bg-cream transition">
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </div>
            <div className="mt-8"><TrustBar light /></div>
          </div>

          <div className="lg:col-span-5">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: "1,800+", l: "Projects Completed" },
            { v: "15+", l: "Years Experience" },
            { v: "99%", l: "Customer Satisfaction" },
            { v: "24/7", l: "Emergency Response" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-3xl md:text-4xl font-bold text-charcoal font-display">{s.v}</p>
              <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Roofing services built for Perth conditions"
            subtitle="From a single cracked tile to a complete commercial re-roof — one local team, one written warranty."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => {
              const img = [tileImg, metalImg, commercialImg][i % 3];
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group rounded-2xl border border-border bg-white p-6 hover:border-primary/40 hover:shadow-card transition"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-secondary">
                    <img src={img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Why Choose Apex</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Local. Licensed. Built on referrals.</h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              We're not a franchise and we're not a call centre. Every job is run by an experienced Perth roofer who owns the outcome from first quote to final clean-up.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
                { i: ShieldCheck, t: "Licensed & Insured", d: "$20M public liability and a written workmanship warranty on every job." },
                { i: Award, t: "Premium Materials", d: "Genuine Colorbond, Bristile and Australian-made membrane systems." },
                { i: Clock, t: "On Time, Every Time", d: "We turn up when we say we will. If we don't, we tell you why." },
                { i: Wrench, t: "Real Roofers", d: "Tradespeople with decades on Perth roofs — no fly-by-night labour." },
              ].map((b) => (
                <div key={b.t} className="flex gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/15 text-primary grid place-items-center"><b.i className="w-5 h-5" /></div>
                  <div>
                    <h3 className="font-semibold text-white">{b.t}</h3>
                    <p className="text-sm text-white/70 mt-1 leading-relaxed">{b.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src={metalImg} alt="Premium Colorbond roof installation" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-primary text-primary-foreground rounded-2xl p-6 shadow-cta max-w-[240px]">
              <p className="text-3xl font-bold">10 yr</p>
              <p className="text-sm mt-1 leading-snug">Workmanship warranty on every restoration & replacement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading eyebrow="Recent Work" title="Projects across Perth" />
            <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">View all projects <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 6).map((p, i) => (
              <article key={p.title} className="rounded-2xl bg-white border border-border overflow-hidden shadow-card">
                <div className="aspect-[16/10] bg-secondary">
                  <img src={[tileImg, metalImg, commercialImg, heroImg, tileImg, metalImg][i]} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{p.location}</p>
                  <h3 className="mt-1 text-lg font-bold text-charcoal">{p.title}</h3>
                  <dl className="mt-3 space-y-1.5 text-sm">
                    <div className="flex gap-2"><dt className="font-semibold text-charcoal min-w-16">Problem:</dt><dd className="text-muted-foreground">{p.problem}</dd></div>
                    <div className="flex gap-2"><dt className="font-semibold text-charcoal min-w-16">Outcome:</dt><dd className="text-muted-foreground">{p.outcome}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Perth Says"
            title={`${SITE.rating}/5 from ${SITE.reviewCount}+ homeowners`}
            subtitle="The reviews you'd hope to read before letting someone on your roof."
            center
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        </div>
      </section>

      {/* Service areas */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Service Areas" title="Roofing across the Perth metro" subtitle="Click your suburb for local examples and pricing guidance." />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SUBURBS.map((s) => (
              <Link key={s.slug} to="/areas/$slug" params={{ slug: s.slug }} className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-charcoal hover:border-primary hover:text-primary transition text-center">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 grid md:grid-cols-[1fr_auto] items-center gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">24/7 Emergency Roofing</p>
              <h2 className="mt-2 text-2xl md:text-4xl font-bold">Storm damage? Active leak? We're on the way.</h2>
              <p className="mt-2 opacity-90 max-w-xl">Same-day make-safe across the Perth metro. Tarp, board-up and full insurance reports.</p>
            </div>
            <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-charcoal px-6 py-4 text-base font-bold hover:bg-cream whitespace-nowrap">
              <Phone className="w-5 h-5" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Final quote */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Get Started" title="Request your free quote today" subtitle="Tell us a little about your roof — a Perth specialist will be in touch within 2 business hours." center />
          <div className="mt-10"><QuoteForm /></div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Free on-site inspection", "Fixed-price written quote", "No obligation", "Workmanship warranty"].map((x) => (
              <li key={x} className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" />{x}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
