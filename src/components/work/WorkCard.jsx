import WorkStatusBadge from "@/components/work/WorkStatusBadge";
import { ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// एक परियोजना का कार्ड: ऊपर फोटो (न हो तो आइकन), फिर टैग, शीर्षक और विवरण
// "विवरण देखें" से उसका पूरा पेज /projects/<slug> खुलता है
export default function WorkCard({ slug, icon, image, title, desc, status }) {
  const { t } = useLanguage();

  return (
    <article className="group overflow-hidden rounded-lg border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {image ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={t(title)}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow" aria-hidden="true">
            {icon}
          </span>
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center bg-[#e6f1fb]">
          <span className="text-6xl" aria-hidden="true">{icon}</span>
        </div>
      )}
      <div className="p-6">
        <WorkStatusBadge status={status} />
        <h3 className="mt-3 text-lg font-extrabold text-[#123b63]">{t(title)}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(desc)}</p>
        <a href={`/projects/${slug}`} className="mt-4 inline-block text-sm font-bold text-[#0b5c9b] hover:underline">
          {t(ui.viewDetails)} →
        </a>
      </div>
    </article>
  );
}
