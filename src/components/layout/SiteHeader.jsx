import { chairperson, site } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// लोगो, अध्यक्ष का नाम और दाईं ओर टैगलाइन
export default function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="border-b bg-white">
      <div className="container flex items-center gap-4 py-4">
        {/* लोगो content.js में site.logo से बदलें */}
        <img
          src={site.logo}
          alt={t(site.name)}
          className="h-16 w-16 shrink-0 rounded-full border-2 border-[#123b63]/20 object-cover sm:h-20 sm:w-20"
        />

        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-extrabold leading-tight text-[#123b63] sm:text-3xl">
            {t(chairperson.name)}
          </h1>
          <p className="mt-1 text-xs text-muted-foreground sm:text-base">{t(chairperson.title)}</p>
        </div>

        <div className="hidden text-right md:block">
          <p className="text-sm text-muted-foreground">{t(site.tagline)}</p>
          <p className="mt-1 text-lg font-bold text-[#123b63]">{t(site.taglineSub)}</p>
        </div>
      </div>
    </header>
  );
}
