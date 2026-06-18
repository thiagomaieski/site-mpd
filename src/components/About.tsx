import { motion } from 'framer-motion'
import fotoAbout from '../assets/foto-2-drmarcos.jpeg'

const PILLARS = [
  'Formação jurídica de excelência e atualização contínua',
  'Atuação pessoal em todas as fases do processo',
  'Comunicação clara, sem jargão, com retorno garantido',
  'Sigilo absoluto como premissa inegociável',
]

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#FDFDFD]">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Portrait */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[380px] lg:max-w-none mx-auto aspect-[3/4]"
            >
              {/* Gold offset frame */}
              <div className="absolute bottom-0 right-0 w-[calc(100%-16px)] h-[calc(100%-16px)] border border-[#C59C47]/40 translate-x-2 translate-y-2 pointer-events-none" />

              {/* Photo */}
              <div className="relative w-[calc(100%-16px)] h-[calc(100%-16px)] overflow-hidden bg-[#F0EDE8] shadow-[0_20px_48px_rgba(0,0,0,0.08)]">
                <img
                  src={fotoAbout}
                  alt="Dr. Marcos P. Dias — Atendimento Personalizado"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-9"
          >
            <div>
              <p className="text-xs md:text-sm font-sans font-bold tracking-[0.25em] text-[#C59C47] uppercase mb-4">
                O Fundador
              </p>
              <h2 className="font-serif font-light text-[#1A1A1A] text-[2.2rem] lg:text-[2.8rem] leading-[1.1] tracking-tight mb-5">
                O Dr. Marcos e a<br />
                <em className="italic text-[#C59C47] font-normal">MPD&nbsp;Advocacia</em>
              </h2>
              <div className="w-9 h-[2px] bg-[#C59C47] mb-6" />
            </div>

            <div className="space-y-6 font-sans font-light text-[#1A1A1A]/80 text-base sm:text-lg leading-[1.85]">
              <p>
                A <strong className="font-medium text-[#1A1A1A]">MPD Advocacia</strong> nasceu da convicção de que defesa de qualidade exige envolvimento real. Não a presença simbólica de um sócio em uma reunião inicial e o restante delegado a quem ainda está aprendendo — mas a presença efetiva de quem compreende os riscos e sabe como enfrentá-los.
              </p>
              <p>
                O <strong className="font-medium text-[#1A1A1A]">Dr. Marcos</strong> conduz pessoalmente a análise, a estratégia e a execução de cada mandato. Acesso direto, respostas rápidas e a certeza de que seus direitos estão nas mãos de quem assina cada peça.
              </p>
            </div>

            {/* Pillars */}
            <div className="border-t border-[#EDEDED] pt-8">
              <p className="font-sans font-bold text-xs md:text-sm uppercase tracking-[0.25em] text-[#1A1A1A]/50 mb-5">
                Fundamentos
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PILLARS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[9px] w-3.5 h-px bg-[#C59C47] flex-shrink-0" />
                    <span className="font-sans font-light text-sm md:text-base text-[#1A1A1A]/80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}
