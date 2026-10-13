import { useState } from "react";
import { Expand } from "lucide-react";
import Lightbox from "@/components/shared/Lightbox";
import NoticeDate from "@/components/notices/NoticeDate";
import NoticeItem from "@/components/notices/NoticeItem";
import { site, ui } from "@/data/content";
import { isNewNotice, sortedNotices } from "@/data/notices";
import { useLanguage } from "@/i18n/LanguageContext";

// एक सूचना का पूरा पेज: शीर्षक → बड़ी फोटो → पॉइंट-बाय-पॉइंट जानकारी → फोटो → अन्य सूचनाएँ
export default function NoticePage({ notice }) {
  const { t, lang } = useLanguage();
  const [lightbox, setLightbox] = useState(null);
  const images = [notice.image, ...(notice.photos ?? [])].filter(Boolean).map((src, i) => ({
    src,
    title: `${t(notice.title)} — ${i + 1}`,
  }));
  const others = sortedNotices.filter((n) => n.slug !== notice.slug);
  const fullDate = new Date(notice.date).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const photo = (img, i, className) => (
    <button
      key={i}
      type="button"
      onClick={() => setLightbox(i)}
      className={`group relative overflow-hidden rounded-xl shadow-md ${className}`}
    >
      <img src={img.src} alt={img.title} loading={i === 0 ? "eager" : "lazy"} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <span className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white opacity-0 transition group-hover:opacity-100" aria-hidden="true">
        <Expand className="h-4 w-4" />
      </span>
    </button>
  );

  return (
    <main>
      <section className="border-b bg-[#eef3f8] py-10 sm:py-14">
        <div className="container max-w-4xl">
          <a href="/#notices" className="text-sm font-bold text-[#0b5c9b] hover:underline">{t(ui.allNotices)}</a>
          <div className="mt-6 flex items-start gap-5">
            <NoticeDate date={notice.date} className="hidden sm:flex" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {isNewNotice(notice) && (
                  <span className="rounded bg-[#e85d3c] px-2 py-0.5 text-xs font-bold text-white">{t(ui.newBadge)}</span>
                )}
                <span className="rounded bg-[#123b63] px-2.5 py-0.5 text-xs font-bold text-white">{t(notice.category)}</span>
              </div>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#123b63] sm:text-4xl">{t(notice.title)}</h1>
              <p className="mt-3 text-base text-foreground/75 sm:text-lg">{t(notice.desc)}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                📅 {t(ui.publishedOn)}: <strong className="text-foreground">{fullDate}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <article className="container max-w-4xl py-10">
        {images[0] && photo(images[0], 0, "block aspect-[2/1] w-full")}

        <div className="mt-10 rounded-xl border-l-[6px] border-[#e8a33c] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-extrabold text-[#123b63]">📋 {t(ui.noticeDetails)}</h2>
          <ol className="mt-6 space-y-4">
            {notice.points.map((p, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#123b63] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1 leading-relaxed text-foreground/85">{t(p)}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 border-t pt-5 text-sm text-muted-foreground">
            — {t(site.name)} · 📞{" "}
            <a href={`tel:+${site.phoneRaw}`} className="font-bold text-[#123b63] hover:underline">{site.phone}</a>
          </p>
        </div>

        {images.length > 1 && (
          <div className="mt-10">
            <h2 className="mb-5 text-2xl font-extrabold text-[#123b63]">📷 {t(ui.noticePhotos)}</h2>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {images.slice(1).map((img, i) => photo(img, i + 1, "aspect-[4/3]"))}
            </div>
          </div>
        )}

        {others.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-5 text-2xl font-extrabold text-[#123b63]">{t(ui.otherNotices)}</h2>
            <ul className="space-y-4">
              {others.map((n) => (
                <NoticeItem key={n.slug} notice={n} />
              ))}
            </ul>
          </div>
        )}
      </article>

      {lightbox !== null && (
        <Lightbox images={images} index={lightbox} onChange={setLightbox} onClose={() => setLightbox(null)} />
      )}
    </main>
  );
}
