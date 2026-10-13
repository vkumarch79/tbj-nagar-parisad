import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, Pause, Play } from "lucide-react";
import Lightbox from "@/components/shared/Lightbox";
import SectionHeading from "@/components/shared/SectionHeading";
import { gallery, ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

const INTERVAL = 3500; // कितने मिलीसेकंड में अगली फोटो
const VISIBLE = 3; // बीच की फोटो के दोनों ओर कितनी फोटो दिखें

// फोटो गैलरी — coverflow: बीच में बड़ी फोटो, दोनों ओर 3D में मुड़ी फोटो
// अपने-आप आगे बढ़ती है; माउस ऊपर लाने पर रुकती है। बगल की फोटो पर क्लिक → बीच में आती है,
// बीच की फोटो पर क्लिक → बड़ी खुलती है। मोबाइल पर स्वाइप करें।
export default function GallerySection() {
  const { t } = useLanguage();
  const images = gallery.map((g) => ({ src: g.image, title: t(g.title) }));
  const count = images.length;

  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [lightbox, setLightbox] = useState(null);
  const touchX = useRef(null);

  const running = playing && !hovered && lightbox === null;
  const go = (i) => setCurrent(((i % count) + count) % count);

  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(() => go(current + 1), INTERVAL);
    return () => clearTimeout(timer);
  }, [running, current]);

  // बीच से कितनी दूर (गोल घूमते हुए): -7 … 0 … 7
  const offsetOf = (i) => {
    let d = i - current;
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  const arrow =
    "absolute top-1/2 z-[60] -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur transition hover:bg-white hover:text-[#123b63] sm:p-3";

  return (
    <section
      id="gallery"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-[#0b2440] via-[#123b63] to-[#0b2440] py-16"
    >
      {/* बीच में हल्की रोशनी */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5c542]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative">
        <SectionHeading label={ui.sectionGallery} title={ui.sectionGalleryTitle} light />
      </div>

      <div
        className="relative mx-auto h-[260px] [--card:78vw] [--step:46vw] [perspective:1200px] sm:h-[360px] md:h-[440px] md:[--card:min(46vw,620px)] md:[--step:min(25vw,340px)]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        {images.map((img, i) => {
          const d = offsetOf(i);
          const dist = Math.abs(d);
          if (dist > VISIBLE) return null;
          const isCenter = d === 0;
          return (
            <button
              key={i}
              type="button"
              onClick={() => (isCenter ? setLightbox(i) : go(i))}
              aria-label={img.title}
              tabIndex={isCenter ? 0 : -1}
              className="group absolute left-1/2 top-0 aspect-[16/10] w-[var(--card)] transition-all duration-700 ease-out [margin-left:calc(var(--card)/-2)]"
              style={{
                transform: `translateX(calc(${d} * var(--step))) translateZ(${-dist * 160}px) rotateY(${d === 0 ? 0 : d > 0 ? -38 : 38}deg)`,
                zIndex: 50 - dist,
                opacity: dist === VISIBLE ? 0 : 1,
                filter: isCenter ? "none" : `brightness(${1 - dist * 0.22}) saturate(${1 - dist * 0.2})`,
              }}
            >
              <div
                className={`relative h-full w-full overflow-hidden rounded-xl ${
                  isCenter
                    ? "shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7),0_0_50px_-5px_rgba(245,197,66,0.35)] ring-2 ring-[#f5c542]/80"
                    : "shadow-xl"
                }`}
              >
                <img src={img.src} alt={img.title} loading="lazy" className="h-full w-full object-cover" />
                {isCenter && (
                  <>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-left sm:p-6">
                      <p className="text-xs font-semibold text-[#f5c542] sm:text-sm">
                        {current + 1} / {count}
                      </p>
                      <h3 className="mt-1 text-lg font-extrabold text-white drop-shadow sm:text-2xl">{img.title}</h3>
                    </div>
                    <span className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white opacity-0 transition group-hover:opacity-100" aria-hidden="true">
                      <Expand className="h-4 w-4" />
                    </span>
                  </>
                )}
              </div>
            </button>
          );
        })}

        <button type="button" onClick={() => go(current - 1)} aria-label="Previous" className={`${arrow} left-3 sm:left-8`}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button type="button" onClick={() => go(current + 1)} aria-label="Next" className={`${arrow} right-3 sm:right-8`}>
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* नीचे: चलाएँ/रोकें, बिंदु और समय-पट्टी */}
      <div className="container relative mt-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause" : "Play"}
            className="rounded-full border border-white/25 p-2 text-white transition hover:bg-white hover:text-[#123b63]"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <div className="flex flex-wrap justify-center gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={img.title}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-[#f5c542]" : "w-2.5 bg-white/35 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-white/15">
          <div
            // रुककर दोबारा चलने पर पट्टी भी शुरू से भरे, ताकि टाइमर से मेल खाए
            key={`${current}-${running}`}
            className="h-full origin-left bg-[#f5c542]"
            style={{
              animation: `gallery-progress ${INTERVAL}ms linear forwards`,
              animationPlayState: running ? "running" : "paused",
            }}
          />
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox images={images} index={lightbox} onChange={setLightbox} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
