import { useCallback, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Phone, Search } from "lucide-react";
import CouncillorModal from "@/components/councillors/CouncillorModal";
import SectionHeading from "@/components/shared/SectionHeading";
import { ui } from "@/data/content";
import { councillors } from "@/data/councillors";
import { useLanguage } from "@/i18n/LanguageContext";

const INITIAL = 12; // शुरू में कितने वार्ड दिखें

// सभी वार्ड पार्षदों के फोटो कार्ड — नाम या वार्ड नंबर से खोजें, कार्ड पर क्लिक से पूरा परिचय
// शुरू में 12 दिखते हैं, "और देखें" से बाकी; खोजने पर सभी मिलते-जुलते दिखते हैं
export default function CouncillorsSection() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);
  const close = useCallback(() => setSelected(null), []);

  const q = query.trim().toLowerCase();
  const list = councillors.filter(
    (c) =>
      !q ||
      String(c.ward) === q.replace(/\D/g, "") ||
      c.name.hi.toLowerCase().includes(q) ||
      c.name.en.toLowerCase().includes(q)
  );
  const searching = q.length > 0;
  const visible = searching || expanded ? list : list.slice(0, INITIAL);
  const hiddenCount = list.length - visible.length;

  const collapse = () => {
    setExpanded(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="councillors" className="scroll-mt-16 py-14">
      <div className="container">
        <SectionHeading label={ui.sectionCouncillors} title={ui.sectionCouncillorsTitle} />
        <p className="-mt-6 mb-8 text-center text-sm text-muted-foreground sm:text-base">{t(ui.councillorsIntro)}</p>

        <div className="relative mx-auto mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(ui.searchCouncillor)}
            aria-label={t(ui.searchCouncillor)}
            className="w-full rounded-full border border-input bg-white py-3 pl-10 pr-4 text-sm shadow-sm focus:border-[#123b63] focus:outline-none focus:ring-2 focus:ring-[#123b63]/20"
          />
        </div>

        {list.length === 0 ? (
          <p className="text-center text-muted-foreground">{t(ui.noResults)}</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {visible.map((c) => (
              <button
                key={c.ward}
                type="button"
                onClick={() => setSelected(c)}
                className="group flex flex-col overflow-hidden rounded-xl border bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-[#123b63] hover:shadow-lg"
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-[#e6eef7]">
                  <img
                    src={c.photo}
                    alt={t(c.name)}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-[#123b63] px-2.5 py-1 text-xs font-extrabold text-white shadow">
                    {t(ui.ward)} {c.ward}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-2.5 sm:p-3">
                  <h3 className="text-sm font-extrabold leading-snug text-[#123b63]">{t(c.name)}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{t(c.role)}</p>
                  {c.phone && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-foreground/80">
                      <Phone className="h-3 w-3" /> {c.phone}
                    </p>
                  )}
                  <span className="mt-auto pt-2 text-xs font-bold text-[#0b5c9b] group-hover:underline">
                    {t(ui.viewProfile)} →
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* और देखें / कम दिखाएँ */}
        {!searching && list.length > INITIAL && (
          <div className="mt-8 text-center">
            {hiddenCount > 0 ? (
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#123b63] px-7 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#0b5c9b]"
              >
                {t(ui.showMore)} ({hiddenCount}) <ChevronDown className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={collapse}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#123b63] px-7 py-3 text-sm font-bold text-[#123b63] transition hover:bg-[#123b63] hover:text-white"
              >
                {t(ui.showLess)} <ChevronUp className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {selected && <CouncillorModal councillor={selected} onClose={close} />}
    </section>
  );
}
