import { useLanguage } from "@/i18n/LanguageContext";

// तारीख का नीला बॉक्स: ऊपर दिन, नीचे महीना
export default function NoticeDate({ date, className = "" }) {
  const { lang } = useLanguage();
  const d = new Date(date);
  const month = d.toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { month: "long" });

  return (
    <div className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-[#123b63] text-white ${className}`}>
      <span className="text-2xl font-extrabold leading-none">{d.getDate()}</span>
      <small className="mt-1 text-[11px]">{month}</small>
    </div>
  );
}
