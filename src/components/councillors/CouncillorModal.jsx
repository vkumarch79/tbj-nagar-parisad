import { useEffect } from "react";
import { createPortal } from "react-dom";
import { MessageCircle, Phone, X } from "lucide-react";
import { ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// एक पार्षद का पूरा परिचय — popup में
export default function CouncillorModal({ councillor: c, onClose }) {
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

  // खाली जानकारी वाली पंक्तियाँ न दिखें
  const rows = [
    [ui.ward, `${c.ward}`],
    [ui.area, t(c.area)],
    [ui.education, t(c.education)],
    [ui.occupation, t(c.occupation)],
    [ui.electedYear, c.electedYear],
    [ui.mobile, c.phone],
  ].filter(([, value]) => value);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="councillor-name"
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        {/* ऊपर: फोटो, नाम, पद */}
        <div className="relative flex flex-col items-center gap-5 bg-gradient-to-br from-[#0f2f50] to-[#123b63] px-6 pb-6 pt-8 text-white sm:flex-row sm:items-end">
          <button
            type="button"
            onClick={onClose}
            aria-label={t(ui.close)}
            className="absolute right-3 top-3 rounded-full p-1.5 hover:bg-white/15"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={c.photo}
            alt={t(c.name)}
            className="h-36 w-36 shrink-0 rounded-2xl border-4 border-[#f5c542] object-cover shadow-lg"
          />
          <div className="text-center sm:text-left">
            <span className="inline-block rounded-full bg-[#f5c542] px-3 py-1 text-xs font-extrabold text-[#123b63]">
              {t(ui.ward)} {c.ward}
            </span>
            <h2 id="councillor-name" className="mt-2 text-2xl font-extrabold sm:text-3xl">{t(c.name)}</h2>
            <p className="mt-1 text-white/80">{t(c.role)}</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* जानकारी की तालिका */}
          <dl className="grid gap-x-6 gap-y-3 rounded-xl bg-[#f5f7fa] p-5 sm:grid-cols-2">
            {rows.map(([label, value]) => (
              <div key={t(label)}>
                <dt className="text-xs font-semibold text-muted-foreground">{t(label)}</dt>
                <dd className="mt-0.5 font-bold text-[#123b63]">{value}</dd>
              </div>
            ))}
          </dl>

          {t(c.about) && (
            <>
              <h3 className="mt-6 text-lg font-extrabold text-[#123b63]">👤 {t(ui.profile)}</h3>
              <p className="mt-2 leading-relaxed text-foreground/85">{t(c.about)}</p>
            </>
          )}

          {c.works?.length > 0 && (
            <>
              <h3 className="mt-6 text-lg font-extrabold text-[#123b63]">✅ {t(ui.keyWorks)}</h3>
              <ul className="mt-3 space-y-2">
                {c.works.map((w, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600" aria-hidden="true">✓</span>
                    {t(w)}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* नीचे: कॉल / WhatsApp / बंद करें */}
        <div className="flex flex-wrap items-center justify-end gap-3 border-t px-6 py-4">
          {c.phone && (
            <>
              <a
                href={`https://wa.me/91${c.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#20bd5a]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={`tel:+91${c.phone}`}
                className="flex items-center gap-2 rounded-md bg-[#123b63] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#0b5c9b]"
              >
                <Phone className="h-4 w-4" /> {t(ui.call)}
              </a>
            </>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border px-4 py-2.5 text-sm font-bold text-foreground hover:bg-muted"
          >
            {t(ui.close)}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
