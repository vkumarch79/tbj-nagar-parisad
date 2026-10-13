import { useState } from "react";
import { Expand } from "lucide-react";
import Lightbox from "@/components/shared/Lightbox";
import WorkStatusBadge from "@/components/work/WorkStatusBadge";
import { ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// एक विकास परियोजना का पूरा पेज: ऊपर शीर्षक, फिर फोटो (क्लिक पर बड़ी), फिर कामों की सूची
export default function ProjectPage({ project }) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(null);
  const images = project.photos.map((src, i) => ({ src, title: `${t(project.title)} — ${i + 1}` }));

  return (
    <main>
      <section className="border-b bg-[#eef3f8] py-14 sm:py-20">
        <div className="container">
          <WorkStatusBadge status={project.status} />
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#123b63] sm:text-6xl">{t(project.title)}</h1>
          <p className="mt-5 max-w-3xl text-base text-foreground/75 sm:text-lg">{t(project.desc)}</p>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={img.src}
                alt={img.title}
                loading={i < 3 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white opacity-0 transition group-hover:opacity-100" aria-hidden="true">
                <Expand className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-lg border-l-[6px] border-[#e8a33c] bg-white p-6 shadow-sm sm:p-10">
          <h2 className="text-2xl font-extrabold text-[#123b63] sm:text-3xl">{t(ui.sectionWork)}</h2>
          <ul className="mt-6 space-y-2">
            {project.items.map((item, i) => (
              <li key={i} className="flex gap-3 rounded-md px-3 py-3 text-base text-foreground/85 transition hover:bg-[#eef3f8]">
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#123b63]" aria-hidden="true" />
                {t(item)}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <a href="/#work" className="inline-block rounded-md bg-[#123b63] px-6 py-3 text-sm font-bold text-white hover:bg-[#0b5c9b]">
            {t(ui.backHome)}
          </a>
        </div>
      </section>

      {index !== null && (
        <Lightbox images={images} index={index} onChange={setIndex} onClose={() => setIndex(null)} />
      )}
    </main>
  );
}
