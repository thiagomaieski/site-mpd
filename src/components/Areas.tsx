import { useState } from 'react'
import { motion } from 'framer-motion'

import trabalhistaIcon from '../assets/trabalhista.svg'
import previdenciarioIcon from '../assets/previdenciario.svg'
import civelIcon from '../assets/civel.svg'
import criminalIcon from '../assets/criminal.svg'

const WA_URL = "https://wa.me/5519988884886?text=Ol%C3%A1%2C%20Dr.%20Marcos.%20Gostaria%20de%20consultar%20sobre%20um%20caso%20jur%C3%ADdico."
 
const AREAS = [
  {
    num: '01',
    title: 'Trabalhista',
    sub: 'Consultivo e Contencioso Trabalhista',
    desc: 'Atuação em demandas trabalhistas, abrangendo o âmbito consultivo e preventivo, ações judiciais, contratos de trabalho, análises documentais e assessoria na relação entre empregado e empregador.',
    tags: ['Demandas trabalhistas', 'Consultivo / preventivo', 'Ações judiciais', 'Relação empregado / empregador', 'Contratos de trabalho', 'Análises de documentos diversos'],
    icon: trabalhistaIcon,
  },
  {
    num: '02',
    title: 'Previdenciário',
    sub: 'Previdência Social',
    desc: 'Consultoria e contencioso em benefícios da Previdência Social, como Salário Maternidade, Auxílio Doença e Acidente, Pensão por Morte, além de Planejamento Previdenciário, revisões e BPC-LOAS.',
    tags: ['Salário Maternidade', 'Auxílio Doença e Acidente', 'Pensão por Morte', 'Revisão de benefício', 'Planejamento Previdenciário', 'BPC - LOAS'],
    icon: previdenciarioIcon,
  },
  {
    num: '03',
    title: 'Cível',
    sub: 'Direito Civil',
    desc: 'Assessoria completa em relações civis, englobando cobranças judiciais e extrajudiciais, elaboração e análise de contratos, ações indenizatórias, revisões e rescisões contratuais, defesas em geral e acidentes de trânsito.',
    tags: ['Contratos', 'Cobranças Extrajudiciais', 'Cobranças Judiciais', 'Revisões e rescisões contratuais', 'Ações, defesas', 'Indenizações', 'Acidentes de trânsito'],
    icon: civelIcon,
  },
  {
    num: '04',
    title: 'Criminal',
    sub: 'Defesa Penal',
    desc: 'Defesa criminal estratégica com atuação ágil e discreta em prisão em flagrante, inquérito policial, audiência de custódia, ações penais, habeas corpus, recursos em tribunais, execução penal, revisão criminal e crimes de natureza sexual.',
    tags: ['Prisão em Flagrante', 'Inquérito Policial', 'Audiência de Custódia', 'Ação Penal', 'Habeas Corpus', 'Recursos nos Tribunais', 'Execução Penal', 'Revisão Criminal', 'Crimes de Natureza Sexual'],
    icon: criminalIcon,
  },
]

export default function Areas() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="areas" className="py-24 lg:py-32 bg-[#0B0B0B] border-y border-[#C59C47]/10">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-0">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 lg:mb-16 gap-5">
          <div>
            <p className="text-xs md:text-sm font-sans font-bold tracking-[0.25em] text-[#C59C47] uppercase mb-3">
              Áreas de Atuação
            </p>
            <h2 className="font-serif font-light text-white text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight">
              Expertise além<br className="hidden sm:block" />
              da <em className="italic text-[#C59C47] font-normal">norma</em>.
            </h2>
          </div>
          <p className="font-sans font-light text-white/70 text-sm md:text-base max-w-[320px] leading-relaxed lg:text-right">
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
              className={`group relative p-10 lg:p-12 transition-all duration-500 ease-out border ${
                active === i
                  ? 'bg-[#C59C47] border-[#C59C47] shadow-[0_20px_48px_rgba(197,156,71,0.25)]'
                  : 'bg-[#121212] border-[#C59C47]/15 shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:border-[#C59C47]/50'
              }`}
            >
              {/* Visible index number */}
              <span className={`absolute top-8 right-8 font-serif text-3xl font-light leading-none select-none pointer-events-none transition-colors duration-500 ${
                active === i ? 'text-[#0B0B0B]/20' : 'text-[#C59C47]/40'
              }`}>{area.num}</span>

              {/* Top line */}
              <div className={`absolute top-0 left-0 h-[3px] transition-all duration-500 ease-out ${
                active === i ? 'w-full bg-[#0B0B0B]/30' : 'w-10 bg-[#C59C47]'
              }`} />

              <div className="relative z-10">
                <img
                  src={area.icon}
                  alt={area.title}
                  className="w-12 h-12 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:brightness-0 object-contain"
                />
                <h3 className={`font-serif font-medium text-xl lg:text-2xl leading-tight mb-2 transition-colors duration-500 ${
                  active === i ? 'text-[#0B0B0B]' : 'text-white'
                }`}>
                  {area.title}
                </h3>
                <p className={`text-xs md:text-sm font-sans font-bold uppercase tracking-[0.2em] mb-5 transition-colors duration-500 ${
                  active === i ? 'text-[#0B0B0B]/75' : 'text-[#C59C47]'
                }`}>
                  {area.sub}
                </p>
                <p className={`font-sans font-light text-sm md:text-base leading-relaxed mb-8 transition-colors duration-500 ${
                  active === i ? 'text-[#0B0B0B]/90' : 'text-white/80'
                }`}>
                  {area.desc}
                </p>

                <a
                  href={`${WA_URL} — Área: Direito ${area.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-xs md:text-sm font-sans font-bold uppercase tracking-[0.16em] transition-colors duration-500 ${
                    active === i ? 'text-[#0B0B0B]' : 'text-white/70 hover:text-[#C59C47]'
                  }`}
                >
                  Consultar sobre esta área
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm md:text-base font-sans font-light text-white/60">
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
