import { useLanguage } from "@/i18n/LanguageContext";

// हर सेक्शन का शीर्षक — छोटा नीला लेबल + बड़ा शीर्षक + नीचे लाइन
// label और title { hi, en } या सामान्य string दोनों हो सकते हैं
export default function SectionHeading({ label, title, light = false }) {
  const { t } = useLanguage();

  return (
    <div className="mb-10 text-center">
      {label && (
        <p className={`text-sm font-semibold ${light ? "text-[#f5c542]" : "text-[#0b5c9b]"}`}>
          {t(label)}
        </p>
      )}
      <h2 className={`mt-2 text-2xl font-extrabold sm:text-4xl ${light ? "text-white" : "text-[#123b63]"}`}>
        {t(title)}
      </h2>
      <div className={`mx-auto mt-4 h-1 w-20 rounded-full ${light ? "bg-[#f5c542]" : "bg-[#123b63]"}`} />
    </div>
  );
}
