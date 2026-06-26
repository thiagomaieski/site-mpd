import { motion } from 'framer-motion'
import bgHero from '../assets/background-hero-mpd-dark-v2.avif'

const WA_URL = "https://wa.me/5519988884886?text=Ol%C3%A1%2C%20Dr.%20Marcos.%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica."

const WA_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}


export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[100dvh] lg:min-h-screen flex items-end lg:items-center bg-[#0B0B0B] overflow-hidden bg-top lg:bg-center bg-cover bg-no-repeat hero-bg-responsive"
      style={{
        '--bg-desktop': `url(${bgHero})`,
        '--bg-mobile': `url(${bgHero})`
      } as React.CSSProperties}
    >
      <style>{`
        .hero-bg-responsive {
          background-image: var(--bg-mobile);
        }
        @media (min-width: 1024px) {
          .hero-bg-responsive {
            background-image: var(--bg-desktop);
          }
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-6 xl:px-0 w-full pt-28 pb-12 lg:pt-0 lg:pb-0 grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-10 lg:gap-16 xl:gap-20 items-end lg:items-center h-[100dvh] lg:min-h-screen relative z-10">

        {/* ── LEFT: Text ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-end lg:justify-center py-0 lg:py-20 order-2 lg:order-1"
        >
          {/* Eyebrow & Online service badge */}
          <motion.div variants={fadeUp} className="hidden sm:inline-flex items-center gap-2 bg-[#C59C47]/10 px-3.5 py-1.5 mb-6 self-start">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C59C47] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C59C47]"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.18em] text-white">
              Atendimento Online & Presencial · Contratação 100% Remota
            </span>
          </motion.div>

          {/* Headline — 2 lines, max impact */}
          <motion.h1 variants={fadeUp} className="font-serif font-medium text-white leading-[1.0] tracking-tight mb-5 sm:mb-8">
            <span className="block text-[clamp(1.8rem,9.15vw,2.2rem)] sm:text-[3rem] lg:text-[4.2rem] xl:text-[4.8rem]">
              Seu patrimônio e seus direitos
            </span>
            <span className="block text-[clamp(1.8rem,9.15vw,2.2rem)] sm:text-[3rem] lg:text-[4.2rem] xl:text-[4.8rem]">
              merecem <em className="italic text-[#C59C47] font-normal">atenção pessoal</em>.
            </span>
          </motion.h1>

          {/* Separator */}
          <motion.div variants={fadeUp} className="w-10 h-px bg-[#C59C47] mb-5 sm:mb-6" />

          {/* Subline */}
          <motion.p variants={fadeUp} className="font-sans font-light text-white/80 text-base sm:text-lg leading-[1.8] max-w-[36rem] mb-5 sm:mb-9">
            O <strong className="font-medium text-[#C59C47]">Dr. Marcos Dias</strong> coordena uma equipe de especialistas dedicados a oferecer soluções jurídicas integradas e assertivas nas áreas Trabalhista, Previdenciária, Cível e Criminal, com a conveniência do atendimento digital e à distância.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[#C59C47] text-[#0B0B0B] hover:bg-[#d4b573] hover:text-black px-8 py-4 text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_4px_20px_rgba(197,156,71,0.2)] hover:shadow-[0_8px_24px_rgba(197,156,71,0.35)]"
            >
              {WA_ICON}
              Agendar Consulta
            </a>

            <a
              href="#areas"
              className="hidden sm:inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.18em] text-white/70 hover:text-[#C59C47] transition-colors duration-200 py-3 sm:py-0"
            >
              Ver áreas de atuação
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Empty spacer for the right column to preserve grid layout */}
        <div className="hidden lg:block order-1 lg:order-2" />
      </div>
    </section>
  )
}
