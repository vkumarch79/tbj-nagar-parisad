import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// बड़ी फोटो का viewer — ‹ › से आगे-पीछे, Esc या बाहर क्लिक से बंद
// images: [{ src, title }], index: अभी कौन-सी फोटो, onChange(नया index), onClose()
export default function Lightbox({ images, index, onChange, onClose }) {
  const { t } = useLanguage();
  const count = images.length;
  const prev = () => onChange((index - 1 + count) % count);
  const next = () => onChange((index + 1) % count);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  const current = images[index];
  const arrow = "absolute top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/25";

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button type="button" aria-label={t(ui.close)} className="absolute right-4 top-4 rounded-full p-2 text-white hover:bg-white/15" onClick={onClose}>
        <X className="h-8 w-8" />
      </button>

      {count > 1 && (
        <button type="button" className={`${arrow} left-2 sm:left-6`} onClick={(e) => { e.stopPropagation(); prev(); }}>
          <ChevronLeft className="h-9 w-9" />
        </button>
      )}

      <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img src={current.src} alt={current.title} className="max-h-[82vh] w-full rounded-lg object-contain" />
        <figcaption className="mt-3 flex justify-center gap-3 text-center font-bold text-white">
          {current.title && <span>{current.title}</span>}
          {count > 1 && <span className="font-normal text-white/70">{index + 1} / {count}</span>}
        </figcaption>
      </figure>

      {count > 1 && (
        <button type="button" className={`${arrow} right-2 sm:right-6`} onClick={(e) => { e.stopPropagation(); next(); }}>
          <ChevronRight className="h-9 w-9" />
        </button>
      )}
    </div>,
    document.body
  );
}
