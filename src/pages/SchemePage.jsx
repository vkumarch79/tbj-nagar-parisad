import { useState } from "react";
import { Expand } from "lucide-react";
import Lightbox from "@/components/shared/Lightbox";
import { site, ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// एक सरकारी योजना का पूरा पेज:
// hero → फोटो (बड़ी फोटो + छोटी फोटो) → मुख्य बातें → पूरी जानकारी के कार्ड → सहायता कार्ड
export default function SchemePage({ scheme }) {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const images = scheme.images.map((img) => ({ src: img.src, title: t(img.title) }));

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      {/* hero */}
      <section className="relative overflow-hidden">
        <img src={images[0].src} alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2f50]/95 via-[#123b63]/85 to-[#123b63]/50" aria-hidden="true" />
        <div className="container relative py-16 text-white sm:py-24">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            🏛️ {t(scheme.badge)}
          </span>
          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">{t(scheme.heading)}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">{t(scheme.intro)}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo("scheme-info")}
              className="rounded-md bg-[#f5c542] px-6 py-3 text-sm font-bold text-[#123b63] hover:bg-[#f5c542]/90"
            >
              {t(ui.schemeDetails)}
            </button>
            <button
              type="button"
              onClick={() => scrollTo("scheme-help")}
              className="rounded-md border-2 border-white/80 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              {t(ui.getHelp)}
            </button>
          </div>
        </div>
      </section>

      {/* फोटो: बड़ी फोटो + नीचे छोटी फोटो */}
      <section className="container py-12">
        <h2 className="mb-6 text-2xl font-extrabold text-[#123b63] sm:text-3xl">📷 {t(scheme.galleryTitle)}</h2>
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <button
            type="button"
            onClick={() => setLightbox(current)}
            className="group relative aspect-[16/10] overflow-hidden rounded-xl shadow-md"
          >
            <img src={images[current].src} alt={images[current].title} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 to-transparent p-4 text-white">
              <strong className="text-lg">{images[current].title}</strong>
              <span className="text-sm">{current + 1} / {images.length}</span>
            </div>
            <span className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white opacity-0 transition group-hover:opacity-100" aria-hidden="true">
              <Expand className="h-4 w-4" />
            </span>
          </button>
          <div className="grid grid-cols-4 gap-3 lg:grid-cols-2">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-pressed={current === i}
                className={`relative overflow-hidden rounded-lg border-4 transition ${
                  current === i ? "border-[#f5c542]" : "border-transparent opacity-75 hover:opacity-100"
                }`}
              >
                <img src={img.src} alt={img.title} loading="lazy" className="aspect-square h-full w-full object-cover lg:aspect-auto" />
                <span className="absolute inset-x-0 bottom-0 hidden bg-black/60 p-1.5 text-xs font-semibold text-white sm:block">
                  {img.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* मुख्य बातें */}
      <section className="bg-white py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-[#123b63] sm:text-3xl">✨ {t(scheme.highlightsTitle)}</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {scheme.highlights.map((h, i) => (
              <article key={i} className="rounded-lg border bg-[#f5f7fa] p-5 text-center">
                <div className="text-4xl" aria-hidden="true">{h.icon}</div>
                <h3 className="mt-3 font-extrabold text-[#123b63]">{t(h.title)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t(h.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* पूरी जानकारी */}
      <section id="scheme-info" className="container scroll-mt-16 py-12">
        <p className="text-sm font-semibold text-[#0b5c9b]">📚 {t(ui.importantInfo)}</p>
        <h2 className="mt-1 text-2xl font-extrabold text-[#123b63] sm:text-3xl">{t(scheme.infoTitle)}</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {scheme.sections.map((sec, i) => (
            <article
              key={i}
              className={`rounded-xl border bg-white p-6 shadow-sm ${i === 0 ? "border-l-[6px] border-l-[#123b63] lg:col-span-2" : ""}`}
            >
              <h3 className="flex items-center gap-3 text-lg font-extrabold text-[#123b63] sm:text-xl">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef3f8] text-xl" aria-hidden="true">
                  {sec.icon}
                </span>
                {t(sec.title)}
              </h3>

              {sec.content && <p className="mt-4 leading-relaxed text-foreground/85">{t(sec.content)}</p>}

              {sec.points && (
                <ul className="mt-4 space-y-2.5">
                  {sec.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600" aria-hidden="true">✓</span>
                      {t(p)}
                    </li>
                  ))}
                </ul>
              )}

              {sec.steps && (
                <ol className="mt-4 space-y-3">
                  {sec.steps.map((s, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#123b63] text-xs font-bold text-white">{j + 1}</span>
                      <span className="pt-1">{t(s)}</span>
                    </li>
                  ))}
                </ol>
              )}

              {sec.table && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#123b63] text-white">
                        {sec.table[0].map((c, j) => (
                          <th key={j} className="px-4 py-2.5 font-bold">{t(c)}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sec.table.slice(1).map((row, r) => (
                        <tr key={r} className="border-b odd:bg-[#f5f7fa]">
                          {row.map((c, j) => (
                            <td key={j} className={`px-4 py-2.5 ${j === 0 ? "font-bold text-[#123b63]" : ""}`}>{t(c)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </article>
          ))}
        </div>

        {scheme.note && (
          <div className="mt-6 rounded-lg border-l-4 border-[#e8a33c] bg-[#fdf6e3] p-5">
            <h3 className="font-extrabold text-[#9b5c00]">⚠️ {t(scheme.note.title)}</h3>
            <p className="mt-1 text-sm leading-relaxed text-foreground/85">{t(scheme.note.text)}</p>
          </div>
        )}
      </section>

      {/* सहायता */}
      <section id="scheme-help" className="container scroll-mt-16 pb-14">
        <div className="flex flex-col items-start gap-5 rounded-xl bg-[#123b63] p-6 text-white sm:flex-row sm:items-center sm:p-8">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-3xl" aria-hidden="true">📞</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#f5c542]">{t(scheme.help.label)}</p>
            <h2 className="mt-1 text-xl font-extrabold sm:text-2xl">{t(scheme.help.title)}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{t(scheme.help.text)}</p>
            <p className="mt-2 text-sm text-white/80">
              📍 {t(site.address)} · 📞{" "}
              <a href={`tel:+${site.phoneRaw}`} className="font-bold text-white hover:underline">{site.phone}</a>
            </p>
          </div>
          <a
            href={scheme.help.link.href}
            {...(scheme.help.link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="shrink-0 rounded-md bg-[#f5c542] px-5 py-3 text-sm font-bold text-[#123b63] hover:bg-[#f5c542]/90"
          >
            {t(scheme.help.link.label)}
          </a>
        </div>

        <div className="mt-10 text-center">
          <a href="/#schemes" className="inline-block rounded-md border-2 border-[#123b63] px-6 py-3 text-sm font-bold text-[#123b63] hover:bg-[#123b63] hover:text-white">
            {t(ui.backHome)}
          </a>
        </div>
      </section>

      {lightbox !== null && (
        <Lightbox images={images} index={lightbox} onChange={setLightbox} onClose={() => setLightbox(null)} />
      )}
    </main>
  );
}
