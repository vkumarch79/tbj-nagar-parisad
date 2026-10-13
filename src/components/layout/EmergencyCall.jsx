import { Phone } from "lucide-react";
import { emergency } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// स्क्रीन के ऊपर दाईं ओर हमेशा दिखने वाले आपातकालीन नंबर (108, 102)
// हल्का तैरते और चमकते रहते हैं; क्लिक करते ही फ़ोन पर कॉल लगती है
export default function EmergencyCall() {
  const { t } = useLanguage();

  return (
    <aside
      aria-label={t(emergency.title)}
      className="emergency-float fixed right-2 top-[260px] z-[45] flex flex-col items-end gap-2 sm:right-4 sm:top-44"
    >
      <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-red-700 shadow sm:text-xs">
        🚨 {t(emergency.title)}
      </span>

      {emergency.numbers.map((e) => (
        <a
          key={e.number}
          href={`tel:${e.number}`}
          title={`${t(e.label)} — ${t(e.desc)}`}
          className={`group relative flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3 text-white shadow-lg ring-2 ring-white transition hover:scale-105 sm:gap-3 sm:pr-4 ${e.color}`}
        >
          {/* चमकती लहर */}
          <span className={`absolute inset-0 -z-10 animate-ping rounded-full opacity-40 ${e.color}`} aria-hidden="true" />
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 sm:h-9 sm:w-9">
            <Phone className="h-4 w-4 animate-pulse sm:h-5 sm:w-5" />
          </span>
          <span className="text-left leading-tight">
            <strong className="block text-lg font-extrabold sm:text-xl">{e.number}</strong>
            <small className="hidden text-[11px] font-semibold text-white/90 sm:block">{t(e.label)}</small>
          </span>
        </a>
      ))}
    </aside>
  );
}
