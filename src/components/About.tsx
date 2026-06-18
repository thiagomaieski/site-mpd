import { motion } from 'framer-motion'

const PILLARS = [
  'Formação jurídica de excelência e atualização contínua',
  'Atuação pessoal em todas as fases do processo',
  'Comunicação clara, sem jargão, com retorno garantido',
  'Sigilo absoluto como premissa inegociável',
]

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <p className="text-[0.62rem] font-sans font-semibold tracking-[0.3em] text-[#C59C47] uppercase mb-4">
              O Fundador
            </p>
            <h2 className="font-serif font-light text-[#1A1A1A] text-[2.2rem] lg:text-[2.8rem] leading-[1.1] tracking-tight mb-5">
              O Dr. Marcos e a<br />
              <em className="italic text-[#C59C47] font-normal">MPD&nbsp;Advocacia</em>
            </h2>
            <div className="w-9 h-[2px] bg-[#C59C47] mb-6" />
            <p className="font-sans font-light text-[#1A1A1A]/45 text-[0.78rem] leading-relaxed max-w-xs">
              Um escritório que existe para quem não aceita ser mais um número em uma fila.
            </p>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="space-y-5 font-sans font-light text-[#1A1A1A]/70 text-[0.92rem] leading-[1.85]">
              <p>
                A <strong className="font-medium text-[#1A1A1A]/85">MPD Advocacia</strong> nasceu da convicção de que defesa de qualidade exige envolvimento real. Não a presença simbólica de um sócio em uma reunião inicial e o restante delegado a quem ainda está aprendendo — mas a presença efetiva de quem compreende os riscos e sabe como enfrentá-los.
              </p>
              <p>
                O <strong className="font-medium text-[#1A1A1A]/85">Dr. Marcos</strong> conduz pessoalmente a análise, a estratégia e a execução de cada mandato. Acesso direto, respostas rápidas e a certeza de que seus direitos estão nas mãos de quem assina cada peça.
              </p>
            </div>

            {/* Pillars */}
            <div className="border-t border-[#EDEDED] pt-7">
              <p className="font-sans font-semibold text-[0.6rem] uppercase tracking-[0.25em] text-[#1A1A1A]/35 mb-5">
                Fundamentos
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PILLARS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[7px] w-3.5 h-px bg-[#C59C47] flex-shrink-0" />
                    <span className="font-sans font-light text-[0.84rem] text-[#1A1A1A]/65 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <div className="border-l border-[#C59C47] pl-6 py-0.5">
              <blockquote className="font-serif italic text-[1.08rem] lg:text-[1.2rem] text-[#1A1A1A]/80 leading-[1.55]">
                "Cada causa que assumo carrega meu nome. Isso é a maior garantia que posso oferecer."
              </blockquote>
              <p className="mt-3 text-[0.58rem] font-sans font-semibold uppercase tracking-[0.22em] text-[#1A1A1A]/35">
                Dr. Marcos P. Dias — Sócio Fundador
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
