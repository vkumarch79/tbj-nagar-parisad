import { useCallback, useEffect, useState } from "react";
import { Check, MapPin, Navigation, Plus, X } from "lucide-react";
import PlaceModal from "@/components/tourism/PlaceModal";
import SectionHeading from "@/components/shared/SectionHeading";
import { ui } from "@/data/content";
import { places, tourismOrigin, tourismRibbon, tourismTypes, travelTips } from "@/data/tourism";
import { useLanguage } from "@/i18n/LanguageContext";

const mapSearchUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

// चुनी हुई जगहों का Google Maps रूट — त्रिवेणीगंज से शुरू, आखिरी जगह पर खत्म
function routeUrl(selected) {
  const stops = selected.map((p) => p.mapQuery);
  const params = new URLSearchParams({
    api: "1",
    origin: tourismOrigin,
    destination: stops[stops.length - 1],
    travelmode: "driving",
  });
  if (stops.length > 1) params.set("waypoints", stops.slice(0, -1).join("|"));
  return `https://www.google.com/maps/dir/?${params}`;
}

// चुनी हुई जगहें इस ब्राउज़र में याद रहें
function loadTrip() {
  try {
    return JSON.parse(localStorage.getItem("trip") ?? "[]");
  } catch {
    return [];
  }
}

// पर्यटन — ऊपर चलती फोटो-पट्टी, जगहों के कार्ड (फ़िल्टर के साथ), यात्रा की योजना और यात्रा की जानकारी
export default function TourismSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [trip, setTrip] = useState(loadTrip);
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    try {
      localStorage.setItem("trip", JSON.stringify(trip));
    } catch {
      // storage न मिले तो कोई बात नहीं
    }
  }, [trip]);

  // नीचे की यात्रा पट्टी फुटर को न ढके — उतनी जगह पेज के नीचे छोड़ें
  const hasTrip = trip.length > 0;
  useEffect(() => {
    document.body.style.paddingBottom = hasTrip ? "76px" : "";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [hasTrip]);

  const toggleTrip = (slug) => setTrip((tr) => (tr.includes(slug) ? tr.filter((s) => s !== slug) : [...tr, slug]));
  const selected = trip.map((slug) => places.find((p) => p.slug === slug)).filter(Boolean);
  const shown = filter === "all" ? places : places.filter((p) => p.type === filter);
  const typeLabel = (type) => t(tourismTypes.find((x) => x.value === type)?.label);

  return (
    <section id="tourism" className="scroll-mt-16 bg-white pb-14 pt-0">
      {/* चलती फोटो-पट्टी */}
      <div className="relative mb-12 overflow-hidden border-y-4 border-[#0b5c9b] bg-[#0b5c9b]">
        {/* सूची दो बार — आधा खिसकते ही शुरुआत जैसी दिखती है */}
        <div className="flex w-max animate-marquee-loop gap-1 motion-reduce:animate-none" style={{ animationDuration: "70s" }}>
          {[...tourismRibbon, ...tourismRibbon].map((src, i) => (
            <img key={i} src={src} alt="" aria-hidden="true" className="h-28 w-auto max-w-none object-cover sm:h-40" />
          ))}
        </div>
      </div>

      <div className="container">
        <SectionHeading label={ui.sectionTourism} title={ui.sectionTourismTitle} />
        <p className="-mt-6 mb-8 text-center text-sm text-muted-foreground sm:text-base">{t(ui.tourismIntro)}</p>

        {/* फ़िल्टर */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tourismTypes.map((ty) => (
            <button
              key={ty.value}
              type="button"
              onClick={() => setFilter(ty.value)}
              aria-pressed={filter === ty.value}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                filter === ty.value ? "bg-[#123b63] text-white shadow" : "bg-[#eef3f8] text-[#123b63] hover:bg-[#dce7f2]"
              }`}
            >
              {t(ty.label)}
            </button>
          ))}
        </div>

        {/* जगहों के कार्ड */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => {
            const inTrip = trip.includes(p.slug);
            return (
              <article
                key={p.slug}
                className={`group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  inTrip ? "ring-2 ring-emerald-500" : ""
                }`}
              >
                <button type="button" onClick={() => setOpen(p)} className="relative h-48 overflow-hidden text-left">
                  {p.photos.length ? (
                    <img
                      src={p.photos[0]}
                      alt={t(p.name)}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#123b63] via-[#1d5a91] to-[#0b5c9b] text-7xl transition duration-500 group-hover:scale-105">
                      {p.icon}
                    </div>
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#123b63] shadow">
                    {typeLabel(p.type)}
                  </span>
                  {p.local && (
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#f5c542] px-3 py-1 text-xs font-extrabold text-[#123b63] shadow">
                      ⭐ {t(ui.inTriveniganj)}
                    </span>
                  )}
                  {inTrip && (
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white shadow">
                      <Check className="h-3 w-3" /> {t(ui.inTrip)}
                    </span>
                  )}
                </button>

                <div className="flex flex-1 flex-col p-5">
                  <p className="flex items-center gap-1 text-xs font-semibold text-[#0b5c9b]">
                    <MapPin className="h-3.5 w-3.5" /> {t(p.location)}
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-[#123b63]">{t(p.name)}</h3>
                  {p.distance && (
                    <p className="mt-1.5 inline-flex w-fit items-center gap-1 rounded-full bg-[#eef3f8] px-2.5 py-0.5 text-xs font-bold text-[#123b63]">
                      🚗 {t(p.distance)}
                    </p>
                  )}
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{t(p.desc)}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                    <button
                      type="button"
                      onClick={() => setOpen(p)}
                      className="text-sm font-bold text-[#0b5c9b] hover:underline"
                    >
                      {t(ui.details)} →
                    </button>
                    <span className="flex-1" />
                    <a
                      href={mapSearchUrl(p.mapQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t(ui.viewOnMap)}: ${t(p.name)}`}
                      className="rounded-full border p-2 text-[#123b63] hover:bg-[#eef3f8]"
                    >
                      <MapPin className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() => toggleTrip(p.slug)}
                      className={`flex items-center gap-1 rounded-full px-3 py-2 text-xs font-bold text-white ${
                        inTrip ? "bg-emerald-600 hover:bg-emerald-700" : "bg-[#123b63] hover:bg-[#0b5c9b]"
                      }`}
                    >
                      {inTrip ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                      {t(inTrip ? ui.inTrip : ui.addToTrip)}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* यात्रा की जानकारी */}
        <h3 className="mb-6 mt-14 text-center text-2xl font-extrabold text-[#123b63]">🧭 {t(ui.planYourTrip)}</h3>
        <div className="grid gap-5 md:grid-cols-3">
          {travelTips.map((tip, i) => (
            <div key={i} className="rounded-2xl bg-[#f5f7fa] p-6">
              <div className="text-3xl" aria-hidden="true">{tip.icon}</div>
              <h4 className="mt-2 text-lg font-extrabold text-[#123b63]">{t(tip.title)}</h4>
              <ul className="mt-3 space-y-2">
                {tip.points.map((pt, j) => (
                  <li key={j} className="flex gap-2 text-sm text-foreground/85">
                    <span className="text-[#0b5c9b]" aria-hidden="true">•</span>
                    {t(pt)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* नीचे चिपकी यात्रा पट्टी — जब कोई जगह चुनी हो */}
      {selected.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t-4 border-[#f5c542] bg-[#123b63] text-white shadow-2xl">
          <div className="container flex flex-wrap items-center gap-3 py-3">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-extrabold">
                🧳 {t(ui.yourTrip)}: {selected.length} {t(ui.places)}
              </p>
              <p className="truncate text-xs text-white/75">
                {t({ hi: "त्रिवेणीगंज", en: "Triveniganj" })} → {selected.map((p) => t(p.name)).join(" → ")}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setTrip([])}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-xs font-bold text-white/80 hover:bg-white/10"
            >
              <X className="h-4 w-4" /> {t(ui.clearTrip)}
            </button>
            <a
              href={routeUrl(selected)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-[#f5c542] px-4 py-2.5 text-sm font-extrabold text-[#123b63] hover:bg-[#f5c542]/90"
            >
              <Navigation className="h-4 w-4" /> {t(ui.seeRoute)}
            </a>
          </div>
        </div>
      )}

      {open && (
        <PlaceModal
          place={open}
          inTrip={trip.includes(open.slug)}
          onToggleTrip={() => toggleTrip(open.slug)}
          onClose={close}
          mapUrl={mapSearchUrl(open.mapQuery)}
        />
      )}
    </section>
  );
}
