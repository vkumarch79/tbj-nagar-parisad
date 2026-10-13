import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// नीली पट्टी में चार आँकड़े — स्क्रीन पर आते ही 0 से गिनती चलती है
export default function StatsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / 900, 1);
          setProgress(1 - (1 - p) ** 3);
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} className="bg-[#123b63] py-12">
      <div className="container grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <article key={i} className="rounded-lg bg-white/10 p-6 text-center text-white">
            <div className="text-4xl" aria-hidden="true">{s.icon}</div>
            <h3 className="mt-3 text-sm font-semibold text-white/80">{t(s.label)}</h3>
            <strong className="mt-1 block text-4xl font-extrabold text-[#f5c542]">
              {Math.round(s.value * progress)}
              {s.suffix}
            </strong>
            <p className="mt-1 text-xs text-white/70">{t(s.desc)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
