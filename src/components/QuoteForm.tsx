import { useState } from "react";
import { z } from "zod";
import { SERVICES } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(8, "Please enter a valid phone").max(20),
  email: z.string().trim().email("Please enter a valid email").max(120),
  suburb: z.string().trim().min(2, "Please enter your suburb").max(60),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

type Props = { compact?: boolean; title?: string };

export function QuoteForm({ compact, title = "Get Your Free Quote" }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white border border-border p-8 shadow-card text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 text-primary grid place-items-center text-2xl">✓</div>
        <h3 className="mt-4 text-xl font-bold text-charcoal">Thanks — we've got your details.</h3>
        <p className="mt-2 text-sm text-muted-foreground">A Perth roofing specialist will call you within 2 business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-card">
      <div className="flex items-start justify-between gap-3 mb-5">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-charcoal">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">No obligation. Free on-site inspection.</p>
        </div>
        <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">2 min</span>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        <Field label="Name" name="name" error={errors.name} />
        <Field label="Phone" name="phone" type="tel" error={errors.phone} />
        <Field label="Email" name="email" type="email" error={errors.email} />
        <Field label="Suburb" name="suburb" error={errors.suburb} />
        <div className={compact ? "" : "md:col-span-2"}>
          <label className="block text-sm font-semibold text-charcoal mb-1.5">Service needed</label>
          <select name="service" defaultValue="" className="w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="Other">Other / Not sure</option>
          </select>
          {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
        </div>
        <div className={compact ? "" : "md:col-span-2"}>
          <label className="block text-sm font-semibold text-charcoal mb-1.5">Message (optional)</label>
          <textarea name="message" rows={3} className="w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us about the roof and any issues you've noticed…" />
        </div>
      </div>

      <button type="submit" className="mt-5 w-full rounded-md bg-primary px-4 py-3.5 text-base font-semibold text-primary-foreground shadow-cta hover:bg-primary-hover transition-colors">
        Get My Free Quote
      </button>
      <p className="mt-3 text-xs text-muted-foreground text-center">★★★★★ Rated by 280+ Perth homeowners</p>
    </form>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-charcoal mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={120}
        className="w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
