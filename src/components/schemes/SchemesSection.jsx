import SectionHeading from "@/components/shared/SectionHeading";
import { ui } from "@/data/content";
import { schemes } from "@/data/schemes";
import { useLanguage } from "@/i18n/LanguageContext";

// सरकारी योजनाओं के कार्ड — "और जानें" से योजना का पूरा पेज /schemes/<slug> खुलता है
export default function SchemesSection() {
  const { t } = useLanguage();

  return (
    <section id="schemes" className="scroll-mt-16 bg-white py-14">
      <div className="container">
        <SectionHeading label={ui.sectionSchemes} title={ui.sectionSchemesTitle} />
        <div className="grid gap-6 md:grid-cols-3">
          {schemes.map((s) => (
            <a
              key={s.slug}
              href={`/schemes/${s.slug}`}
              className="group flex flex-col gap-4 rounded-lg border-t-4 border-[#123b63] bg-[#f5f7fa] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl shadow-sm" aria-hidden="true">
                {s.icon}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-extrabold text-[#123b63]">{t(s.title)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(s.desc)}</p>
              </div>
              <span className="text-sm font-bold text-[#0b5c9b] group-hover:underline">{t(ui.learnMore)}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
