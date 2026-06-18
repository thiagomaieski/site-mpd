import { motion } from 'framer-motion'
import drMarcos from '../assets/dr_marcos.png'

const WA_URL = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dr.%20Marcos.%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica."

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
const fadeIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.25 } }
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-[#FDFDFD] overflow-hidden"
    >
      {/* Subtle editorial vertical rules */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-[#1A1A1A]/[0.035]" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-[#1A1A1A]/[0.035] hidden md:block" />
      </div>

      {/* Gold top-left accent */}
      <div className="absolute top-0 left-0 w-24 lg:w-32 h-[2px] bg-[#C59C47]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-12 lg:pt-0 lg:pb-0 grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-10 lg:gap-16 xl:gap-20 items-center min-h-screen">

        {/* ── LEFT: Text ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center py-10 lg:py-20 order-2 lg:order-1"
        >
          {/* Eyebrow */}
          <motion.p variants={fadeUp} className="text-[0.62rem] font-sans font-semibold tracking-[0.3em] text-[#C59C47] uppercase mb-7">
            Advocacia de Alto Padrão&nbsp;&nbsp;·&nbsp;&nbsp;São Paulo
          </motion.p>

          {/* Headline — 2 lines, max impact */}
          <motion.h1 variants={fadeUp} className="font-serif font-light text-[#1A1A1A] leading-[1.06] tracking-[-0.02em] mb-6">
            <span className="block text-[2.4rem] sm:text-[3.2rem] lg:text-[4.2rem] xl:text-[5rem]">
              Seu patrimônio e seus
            </span>
            <span className="block text-[2.4rem] sm:text-[3.2rem] lg:text-[4.2rem] xl:text-[5rem]">
              direitos merecem <em className="italic text-[#C59C47] font-normal">atenção pessoal</em>.
            </span>
          </motion.h1>

          {/* Separator */}
          <motion.div variants={fadeUp} className="w-10 h-px bg-[#C59C47] mb-6" />

          {/* Subline */}
          <motion.p variants={fadeUp} className="font-sans font-light text-[#1A1A1A]/60 text-[0.92rem] sm:text-[0.95rem] leading-[1.8] max-w-[36rem] mb-9">
            O <strong className="font-medium text-[#1A1A1A]/80">Dr. Marcos</strong> conduz pessoalmente cada causa — da análise inicial à sentença. Sem intermediários, sem delegação. Atuação em Direito Trabalhista, Previdenciário, Cível e Criminal.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[#1A1A1A] text-white hover:bg-[#C59C47] px-8 py-4 text-[0.68rem] font-sans font-semibold uppercase tracking-[0.18em] transition-all duration-300"
            >
              {WA_ICON}
              Agendar Consulta
            </a>

            <a
              href="#areas"
              className="inline-flex items-center justify-center gap-2 text-[0.68rem] font-sans font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]/50 hover:text-[#C59C47] transition-colors duration-200 py-3 sm:py-0"
            >
              Ver áreas de atuação
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>

          {/* Trust */}
          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-5 flex-wrap">
            {['15+ anos de atuação', 'Atendimento pessoal e direto', 'OAB/SP ativo'].map((t) => (
              <span key={t} className="flex items-center gap-2 text-[0.6rem] font-sans font-medium text-[#1A1A1A]/40 uppercase tracking-[0.15em]">
                <span className="w-1 h-1 bg-[#C59C47] rounded-full flex-shrink-0" />
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Portrait ── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative w-full flex items-end justify-center lg:justify-end order-1 lg:order-2 pt-20 lg:pt-0"
        >
          {/* Gold offset frame */}
          <div className="absolute bottom-0 right-0 w-[calc(100%-20px)] lg:w-full max-w-[380px] xl:max-w-[440px] aspect-[3/4] border border-[#C59C47]/30 translate-x-2.5 translate-y-2.5 pointer-events-none" />

          {/* Photo */}
          <div className="relative w-full max-w-[380px] xl:max-w-[440px] aspect-[3/4] overflow-hidden bg-[#F0EDE8] shadow-[0_24px_64px_rgba(0,0,0,0.10)]">
            <img
              src={drMarcos}
              alt="Dr. Marcos P. Dias — MPD Advocacia"
              className="w-full h-full object-cover object-[center_20%]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/25 via-transparent to-transparent pointer-events-none" />

            {/* Name badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-white/95 border border-[#EDEDED] px-3.5 py-2 shadow-sm">
              <p className="text-[0.6rem] font-sans font-semibold tracking-[0.16em] text-[#1A1A1A] uppercase leading-none">
                Dr. Marcos P. Dias
              </p>
              <p className="text-[0.5rem] font-sans tracking-[0.2em] text-[#C59C47] uppercase mt-0.5 leading-none">
                Sócio Fundador · OAB/SP
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[0.5rem] uppercase tracking-[0.3em] text-[#1A1A1A]/25 font-sans font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-7 bg-gradient-to-b from-[#1A1A1A]/15 to-transparent"
        />
      </motion.div>
    </section>
  )
}
