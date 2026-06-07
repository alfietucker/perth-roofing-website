import { Star, ShieldCheck, BadgeCheck, MapPin } from "lucide-react";

const items = [
  { icon: Star, label: "★★★★★ Rated" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "Workmanship Warranty" },
  { icon: MapPin, label: "Locally Owned" },
];

export function TrustBar({ light }: { light?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${light ? "text-white/90" : "text-charcoal-soft"}`}>
      {items.map((i) => (
        <div key={i.label} className="flex items-center gap-2 text-sm font-medium">
          <i.icon className={`w-4 h-4 ${light ? "text-primary" : "text-primary"}`} />
          {i.label}
        </div>
      ))}
    </div>
  );
}
