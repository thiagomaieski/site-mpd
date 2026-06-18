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
  },
  {
    num: '02',
    title: 'Previdenciário',
    sub: 'Planejamento e Concessão de Benefícios',
    desc: 'Planejamento previdenciário para aposentadorias de alto valor. Atuação nas revisões, aposentadoria especial e transições pós-reforma, na via administrativa e judicial.',
    tags: ['Aposentadoria Especial', 'Revisão da Vida Toda', 'Regras de Transição', 'Planejamento'],
  },
  {
    num: '03',
    title: 'Cível',
    sub: 'Patrimônio, Contratos e Sucessão',
    desc: 'Contratos civis e comerciais, planejamento sucessório via holding familiar e defesa em disputas patrimoniais e societárias de alta complexidade.',
    tags: ['Planejamento Sucessório', 'Holdings Familiares', 'Contratos', 'Disputas Societárias'],
  },
  {
    num: '04',
    title: 'Criminal',
    sub: 'Defesa Penal e Compliance',
    desc: 'Atuação discreta em Direito Penal Econômico. Defesa em crimes tributários, financeiros e lavagem de capitais, com visão integrada de compliance.',
    tags: ['Crimes Financeiros', 'Penal Tributário', 'Inquéritos', 'Compliance'],
  },
]

export default function Areas() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="areas" className="py-24 lg:py-32 bg-[#F8F9FA] border-y border-[#EDEDED]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 lg:mb-16 gap-5">
          <div>
            <p className="text-[0.62rem] font-sans font-semibold tracking-[0.3em] text-[#C59C47] uppercase mb-3">
              Áreas de Atuação
            </p>
            <h2 className="font-serif font-light text-[#1A1A1A] text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.1] tracking-tight">
              Expertise além<br className="hidden sm:block" />
              da <em className="italic text-[#C59C47] font-normal">norma</em>.
            </h2>
          </div>
          <p className="font-sans font-light text-[#1A1A1A]/50 text-[0.82rem] max-w-[280px] leading-relaxed lg:text-right">
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
              className={`group relative bg-white border p-8 lg:p-10 transition-all duration-300 ${
                active === i
                  ? 'border-[#C59C47]/60 shadow-[0_6px_32px_rgba(197,156,71,0.10)]'
                  : 'border-[#EDEDED] shadow-[0_1px_8px_rgba(0,0,0,0.03)] hover:border-[#C59C47]/40'
              }`}
            >
              {/* Watermark number */}
              <span className={`absolute top-6 right-7 font-serif text-[3rem] font-light leading-none select-none pointer-events-none transition-colors duration-400 ${
                active === i ? 'text-[#C59C47]/12' : 'text-[#1A1A1A]/[0.04]'
              }`}>{area.num}</span>

              {/* Top line */}
              <div className={`absolute top-0 left-0 h-[2px] transition-all duration-500 ease-out ${
                active === i ? 'w-full bg-[#C59C47]' : 'w-7 bg-[#C59C47]/40'
              }`} />

              <div className="relative z-10">
                <h3 className="font-serif font-light text-[#1A1A1A] text-[1.45rem] lg:text-[1.7rem] leading-none mb-1">
                  {area.title}
                </h3>
                <p className="text-[0.56rem] font-sans font-semibold uppercase tracking-[0.2em] text-[#C59C47] mb-5">
                  {area.sub}
                </p>
                <p className="font-sans font-light text-[#1A1A1A]/60 text-[0.84rem] leading-[1.75] mb-6">
                  {area.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-7">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.55rem] font-sans font-medium uppercase tracking-[0.08em] text-[#1A1A1A]/40 border border-[#EDEDED] group-hover:border-[#C59C47]/20 px-2.5 py-0.5 transition-colors duration-300"
                    >{tag}</span>
                  ))}
                </div>

                <a
                  href={`${WA_URL} — Área: Direito ${area.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.64rem] font-sans font-semibold uppercase tracking-[0.16em] text-[#1A1A1A]/50 group-hover:text-[#C59C47] transition-colors duration-200"
                >
                  Consultar sobre esta área
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-[0.76rem] font-sans font-light text-[#1A1A1A]/40">
            Situação diferente?{' '}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-[#C59C47] font-medium hover:underline underline-offset-4 transition-all">
              Descreva pelo WhatsApp para uma triagem
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
