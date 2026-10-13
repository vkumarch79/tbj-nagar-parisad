import { ArrowRight } from "lucide-react";
import NoticeDate from "@/components/notices/NoticeDate";
import { ui } from "@/data/content";
import { isNewNotice } from "@/data/notices";
import { useLanguage } from "@/i18n/LanguageContext";

// सूचना की एक पंक्ति — पूरी पंक्ति पर क्लिक से सूचना का पेज /notices/<slug> खुलता है
export default function NoticeItem({ notice }) {
  const { t } = useLanguage();

  return (
    <li>
      <a
        href={`/notices/${notice.slug}`}
        aria-label={`${t(ui.readNotice)}: ${t(notice.title)}`}
        className="group flex items-center gap-5 rounded-lg border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#123b63] hover:shadow-md sm:p-5"
      >
        <NoticeDate date={notice.date} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {isNewNotice(notice) && (
              <span className="animate-pulse rounded bg-[#e85d3c] px-2 py-0.5 text-[11px] font-bold text-white">
                {t(ui.newBadge)}
              </span>
            )}
            <span className="text-xs font-semibold text-[#0b5c9b]">{t(notice.category)}</span>
          </div>
          <h3 className="mt-1 font-bold text-[#123b63]">{t(notice.title)}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{t(notice.desc)}</p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef3f8] text-[#123b63] transition group-hover:bg-[#123b63] group-hover:text-white">
          <ArrowRight className="h-5 w-5" />
        </span>
      </a>
    </li>
  );
}
