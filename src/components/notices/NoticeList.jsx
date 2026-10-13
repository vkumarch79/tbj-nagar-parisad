import SectionHeading from "@/components/shared/SectionHeading";
import NoticeItem from "@/components/notices/NoticeItem";
import { ui } from "@/data/content";
import { sortedNotices } from "@/data/notices";

// नवीनतम सूचनाओं की सूची — सबसे नई सबसे ऊपर, नई सूचना पर "New" टैग
export default function NoticeList() {
  return (
    <section id="notices" className="container scroll-mt-16 py-14">
      <SectionHeading label={ui.sectionNotices} title={ui.sectionNoticesTitle} />
      <ul className="grid gap-4 lg:grid-cols-2">
        {sortedNotices.map((n) => (
          <NoticeItem key={n.slug} notice={n} />
        ))}
      </ul>
    </section>
  );
}
