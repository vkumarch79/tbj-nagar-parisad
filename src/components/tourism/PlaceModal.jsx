import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Check, MapPin, Plus, X } from "lucide-react";
import Lightbox from "@/components/shared/Lightbox";
import { ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// एक पर्यटन स्थल की पूरी जानकारी — popup में
export default function PlaceModal({ place: p, inTrip, onToggleTrip, onClose, mapUrl }) {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState(null);
  const images = p.photos.map((src) => ({ src, title: t(p.name) }));

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && lightbox === null && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, lightbox]);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="place-name"
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        {/* ऊपर फोटो या आइकन */}
        <div className="relative h-56 shrink-0 sm:h-72">
          {images.length ? (
            <button type="button" onClick={() => setLightbox(0)} className="h-full w-full">
              <img src={images[0].src} alt={t(p.name)} className="h-full w-full object-cover" />
            </button>
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#123b63] to-[#0b5c9b] text-8xl">
              {p.icon}
            </div>
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
            <p className="flex items-center gap-1 text-sm text-white/85">
              <MapPin className="h-4 w-4" /> {t(p.location)}
            </p>
            <h2 id="place-name" className="mt-1 text-2xl font-extrabold sm:text-3xl">{t(p.name)}</h2>
            {p.distance && <p className="mt-1 text-sm font-semibold text-[#f5c542]">🚗 {t(p.distance)}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t(ui.close)}
            className="absolute right-3 top-3 rounded-full bg-black/40 p-1.5 text-white hover:bg-black/60"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <p className="leading-relaxed text-foreground/85">{t(p.desc)}</p>

          {images.length > 1 && (
            <div className="mt-5 grid grid-cols-3 gap-3">
              {images.map((img, i) => (
                <button key={i} type="button" onClick={() => setLightbox(i)} className="overflow-hidden rounded-lg">
                  <img src={img.src} alt={img.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition hover:scale-105" />
                </button>
              ))}
            </div>
          )}

          <h3 className="mt-6 text-lg font-extrabold text-[#123b63]">✨ {t(ui.highlightsLabel)}</h3>
          <ul className="mt-3 space-y-2">
            {p.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/85">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600" aria-hidden="true">✓</span>
                {t(h)}
              </li>
            ))}
          </ul>

          {p.tip && (
            <div className="mt-6 rounded-lg border-l-4 border-[#f5c542] bg-[#fdf6e3] p-4">
              <p className="text-sm font-extrabold text-[#9b5c00]">💡 {t(ui.travelTip)}</p>
              <p className="mt-1 text-sm text-foreground/85">{t(p.tip)}</p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 border-t px-6 py-4">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border-2 border-[#123b63] px-4 py-2 text-sm font-bold text-[#123b63] hover:bg-[#123b63] hover:text-white"
          >
            <MapPin className="h-4 w-4" /> {t(ui.viewOnMap)}
          </a>
          <button
            type="button"
            onClick={onToggleTrip}
            className={`flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold text-white ${
              inTrip ? "bg-emerald-600 hover:bg-emerald-700" : "bg-[#123b63] hover:bg-[#0b5c9b]"
            }`}
          >
            {inTrip ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {t(inTrip ? ui.inTrip : ui.addToTrip)}
          </button>
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox images={images} index={lightbox} onChange={setLightbox} onClose={() => setLightbox(null)} />
      )}
    </div>,
    document.body
  );
}
