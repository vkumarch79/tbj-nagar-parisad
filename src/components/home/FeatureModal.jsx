import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Check, X } from "lucide-react";
import FeedbackForm from "@/components/contact/FeedbackForm";
import { ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// कार्ड का popup (body में portal से, ताकि मेन्यू के ऊपर दिखे) — नीला हेडर, ✓ वाली सूची (या सुझाव फ़ॉर्म) और "बंद करें" बटन
export default function FeatureModal({ modal, onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="feature-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between bg-[#123b63] px-6 py-5 text-white">
          <h2 id="feature-modal-title" className="text-xl font-extrabold sm:text-2xl">{t(modal.title)}</h2>
          <button type="button" onClick={onClose} aria-label={t(ui.close)} className="rounded p-1 hover:bg-white/10">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {modal.form ? (
            <FeedbackForm />
          ) : (
            <>
              <ul className="divide-y">
                {modal.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 py-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600" aria-hidden="true">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/85">{t(item)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-[#eef4fa] p-4 text-sm font-semibold text-[#123b63]">
                {t(ui.modalFooter)}
              </p>
            </>
          )}
        </div>

        <div className="flex justify-end border-t px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md bg-[#123b63] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#0b5c9b]"
          >
            {t(ui.close)}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
