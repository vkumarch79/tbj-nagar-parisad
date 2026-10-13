import { ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// एक छोटा कार्ड: आइकन, शीर्षक, विवरण — दबाने पर popup खुलता है
export default function FeatureCard({ icon, title, desc, onOpen }) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex flex-col items-center rounded-lg border bg-white p-5 text-center shadow-md transition hover:-translate-y-1 hover:border-[#123b63] hover:shadow-lg sm:p-7"
    >
      <span className="text-4xl sm:text-5xl" aria-hidden="true">{icon}</span>
      <h3 className="mt-4 text-base font-extrabold text-[#123b63] sm:text-xl">{t(title)}</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{t(desc)}</p>
      <span className="mt-4 text-sm font-bold text-[#123b63]">{t(ui.viewDetails)} →</span>
    </button>
  );
}
