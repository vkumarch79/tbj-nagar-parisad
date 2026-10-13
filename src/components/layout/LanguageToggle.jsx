import { useLanguage } from "@/i18n/LanguageContext";

// हिन्दी | English बटन — दबाने पर पूरी साइट की भाषा बदलती है
export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const btn = (code, label) => (
    <button
      type="button"
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      className={
        lang === code
          ? "font-bold text-white underline underline-offset-4"
          : "text-white/75 hover:text-white"
      }
    >
      {label}
    </button>
  );

  return (
    <div className="flex items-center gap-3 text-sm">
      {btn("hi", "हिन्दी")}
      <span className="text-white/50">|</span>
      {btn("en", "English")}
    </div>
  );
}
