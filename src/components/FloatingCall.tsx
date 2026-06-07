import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingCall() {
  return (
    <a
      href={SITE.phoneHref}
      aria-label="Call Apex Roofing now"
      className="lg:hidden fixed bottom-4 right-4 z-40 inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2.5 shadow-cta font-semibold text-sm"
    >
      <Phone className="w-4 h-4" /> Call Now
    </a>
  );
}
