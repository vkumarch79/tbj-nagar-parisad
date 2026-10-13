import { hero, heroButtons, site } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// बड़ी फोटो के ऊपर स्वागत संदेश और दो बटन
// फोटो content.js में site.heroImage से बदलें
export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-[420px] items-center overflow-hidden sm:min-h-[560px]">
      <img
        src={site.heroImage}
        alt={t(site.name)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" aria-hidden="true" />

      <div className="container relative z-10 flex flex-col items-center pb-20 pt-10 text-center text-white">
        <p className="border-l-4 border-white bg-white/15 px-5 py-2 text-sm font-bold backdrop-blur sm:text-base">
          {t(hero.welcome)}
        </p>
        <h2 className="mt-5 text-3xl font-extrabold drop-shadow-lg sm:text-6xl">{t(hero.title)}</h2>
        <p className="mt-4 text-xl font-bold text-[#f5c542] drop-shadow sm:text-3xl">{t(hero.subtitle)}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {heroButtons.map((b) => (
            <a
              key={b.href}
              href={b.href}
              className={
                b.variant === "solid"
                  ? "min-w-[10rem] rounded-md bg-white px-6 py-3 text-base font-bold text-[#123b63] shadow-lg hover:bg-white/90"
                  : "min-w-[10rem] rounded-md border-2 border-white/80 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur hover:bg-white/20"
              }
            >
              {t(b.label)}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
