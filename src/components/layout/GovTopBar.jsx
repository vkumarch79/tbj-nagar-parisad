import LanguageToggle from "@/components/layout/LanguageToggle";
import { site, ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// सबसे ऊपर नीली सरकारी पट्टी
export default function GovTopBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#123b63] text-white">
      <div className="container flex h-11 items-center justify-between text-xs font-semibold sm:text-sm">
        <span>{t(ui.govBihar)}</span>
        <LanguageToggle />
        <span className="hidden sm:inline">
          {t(site.district)} {t({ hi: "जिला", en: "District" })} | {t(site.state)}
        </span>
        <span className="sm:hidden">{t(site.district)}</span>
      </div>
    </div>
  );
}
