import { useState } from 'react'
import { motion } from 'framer-motion'

const WA_URL = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dr.%20Marcos.%20Gostaria%20de%20consultar%20sobre%20um%20caso%20jur%C3%ADdico."

const AREAS = [
  {
    num: '01',
    title: 'Trabalhista',
    sub: 'Direito Individual e Executivo',
    desc: 'Representação em rescisões de alto valor, acúmulo de funções, stock options e disputas de cargos de confiança. Foco em resultados e na reputação profissional do cliente.',
    tags: ['Rescisão Indireta', 'Stock Options', 'Cargos de Diretoria', 'Indenizações'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#C59C47] mb-6 transition-transform duration-300 group-hover:scale-110">
        <rect width="20" height="13" x="2" y="7" rx="2" ry="2"/>
        <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3"/>
        <path d="M8 7v13M16 7v13"/>
        <circle cx="8" cy="11" r="0.75" fill="currentColor"/>
        <circle cx="16" cy="11" r="0.75" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Previdenciário',
    sub: 'Planejamento e Concessão de Benefícios',
    desc: 'Planejamento previdenciário para aposentadorias de alto valor. Atuação nas revisões, aposentadoria especial e transições pós-reforma, na via administrativa e judicial.',
    tags: ['Aposentadoria Especial', 'Revisão da Vida Toda', 'Regras de Transição', 'Planejamento'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#C59C47] mb-6 transition-transform duration-300 group-hover:scale-110">
        {/* Shield */}
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        {/* Hourglass inside */}
        <path d="M9 8h6M9 16h6"/>
        <path d="M9 8c0 1.5 1 3 3 4 2-1 3-2.5 3-4"/>
        <path d="M9 16c0-1.5 1-3 3-4 2 1 3 2.5 3 4"/>
        <line x1="12" y1="10" x2="12" y2="14" strokeDasharray="1 2"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Cível',
    sub: 'Patrimônio, Contratos e Sucessão',
    desc: 'Contratos civis e comerciais, planejamento sucessório via holding familiar e defense em disputas patrimoniais e societárias de alta complexidade.',
    tags: ['Planejamento Sucessório', 'Holdings Familiares', 'Contratos', 'Disputas Societárias'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#C59C47] mb-6 transition-transform duration-300 group-hover:scale-110">
        {/* Back Page */}
        <path d="M9 3h7a2 2 0 0 1 2 2v12"/>
        {/* Front Page */}
        <rect x="4" y="7" width="11" height="14" rx="1.5" ry="1.5"/>
        {/* Text Lines */}
        <path d="M7 11h5M7 14h5M7 17h3"/>
        {/* Wax Seal */}
        <circle cx="12" cy="14" r="2.5"/>
        <path d="M12 16.5v2.5M13.5 16.2l1.2 1.8"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Criminal',
    sub: 'Defesa Penal e Compliance',
    desc: 'Atuação discreta em Direito Penal Econômico. Defesa em crimes tributários, financeiros e lavagem de capitais, com visão integrada de compliance.',
    tags: ['Crimes Financeiros', 'Penal Tributário', 'Inquéritos', 'Compliance'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#C59C47] mb-6 transition-transform duration-300 group-hover:scale-110">
        {/* Left Ring */}
        <circle cx="6.5" cy="13.5" r="4.5"/>
        {/* Left hinge locking bar */}
        <path d="M10 9.5a1.5 1.5 0 0 1 1 1.5v3"/>
        {/* Right Ring */}
        <circle cx="17.5" cy="13.5" r="4.5"/>
        {/* Right hinge locking bar */}
        <path d="M14 9.5a1.5 1.5 0 0 0-1 1.5v3"/>
        {/* Chain Link between */}
        <path d="M9 13.5h6"/>
        {/* Keyholes inside */}
        <circle cx="6.5" cy="13.5" r="1"/>
        <path d="M6.5 14.5v1.5"/>
        <circle cx="17.5" cy="13.5" r="1"/>
        <path d="M17.5 14.5v1.5"/>
      </svg>
    ),
  },
]

export default function Areas() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="areas" className="py-24 lg:py-32 bg-[#F8F9FA] border-y border-[#EDEDED]">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-0">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 lg:mb-16 gap-5">
          <div>
            <p className="text-xs md:text-sm font-sans font-bold tracking-[0.25em] text-[#C59C47] uppercase mb-3">
              Áreas de Atuação
            </p>
            <h2 className="font-serif font-light text-[#1A1A1A] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight">
              Expertise além<br className="hidden sm:block" />
              da <em className="italic text-[#C59C47] font-normal">norma</em>.
            </h2>
          </div>
          <p className="font-sans font-light text-[#1A1A1A]/70 text-sm md:text-base max-w-[320px] leading-relaxed lg:text-right">
            Cada área conduzida com o mesmo rigor técnico. Sem hierarquia de causas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AREAS.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`group relative bg-white border-2 p-10 lg:p-12 transition-all duration-300 ${
                active === i
                  ? 'border-[#C59C47] shadow-[0_8px_36px_rgba(197,156,71,0.12)]'
                  : 'border-[#E5E5E3] shadow-[0_1px_10px_rgba(0,0,0,0.03)] hover:border-[#C59C47]/60'
              }`}
            >
              {/* Visible index number */}
              <span className={`absolute top-8 right-8 font-serif text-3xl font-light leading-none select-none pointer-events-none transition-colors duration-300 ${
                active === i ? 'text-[#C59C47]' : 'text-[#C59C47]/60'
              }`}>{area.num}</span>

              {/* Top line */}
              <div className={`absolute top-0 left-0 h-[3px] transition-all duration-500 ease-out ${
                active === i ? 'w-full bg-[#C59C47]' : 'w-10 bg-[#C59C47]/60'
              }`} />

              <div className="relative z-10">
                {area.icon}
                <h3 className="font-serif font-medium text-[#1A1A1A] text-xl lg:text-2xl leading-tight mb-2">
                  {area.title}
                </h3>
                <p className="text-xs md:text-sm font-sans font-bold uppercase tracking-[0.2em] text-[#C59C47] mb-5">
                  {area.sub}
                </p>
                <p className="font-sans font-light text-[#1A1A1A]/85 text-sm md:text-base leading-relaxed mb-6">
                  {area.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-sans font-semibold uppercase tracking-[0.08em] text-[#1A1A1A]/70 border border-[#DDDCDA] group-hover:border-[#C59C47]/30 px-3 py-1 transition-colors duration-300"
                    >{tag}</span>
                  ))}
                </div>

                <a
                  href={`${WA_URL} — Área: Direito ${area.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-sans font-bold uppercase tracking-[0.16em] text-[#1A1A1A]/70 group-hover:text-[#C59C47] transition-colors duration-200"
                >
                  Consultar sobre esta área
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm md:text-base font-sans font-light text-[#1A1A1A]/60">
            Situação diferente?{' '}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-[#C59C47] font-bold hover:underline underline-offset-4 transition-all">
              Descreva pelo WhatsApp para uma triagem
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
