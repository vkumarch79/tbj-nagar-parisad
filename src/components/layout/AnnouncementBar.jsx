import { site, ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// "New" टैग के साथ चलती हुई घोषणा पट्टी
export default function AnnouncementBar() {
  const { t } = useLanguage();

  return (
    <div className="border-b border-[#f0dca6] bg-[#fdf6e3]">
      <div className="container flex items-center gap-4 py-2.5">
        <span className="shrink-0 rounded bg-[#e85d3c] px-3 py-1 text-xs font-bold text-white">
          {t(ui.newBadge)} 📢
        </span>
        <div className="relative flex-1 overflow-hidden">
          <p className="animate-marquee whitespace-nowrap text-sm font-bold text-[#9b1c1c] sm:text-base">
            {t(site.announcement)}
          </p>
        </div>
      </div>
    </div>
  );
}
