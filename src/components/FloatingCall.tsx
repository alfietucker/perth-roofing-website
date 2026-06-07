import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingCall() {
  return (
    <a
      href={SITE.phoneHref}
      aria-label="Call Apex Roofing now"
      className="lg:hidden fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3.5 shadow-cta font-semibold"
    >
      <Phone className="w-5 h-5" /> Call Now
    </a>
  );
}
