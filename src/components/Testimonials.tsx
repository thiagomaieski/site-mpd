import { motion } from 'framer-motion'

const REVIEWS = [
  {
    text: 'A condução da minha rescisão executiva foi cirúrgica. O Dr. Marcos dominou cada detalhe e o resultado superou o esperado.',
    author: 'F. A.',
    initials: 'FA'
  },
  {
    text: 'Estruturamos a holding familiar com a MPD. Trabalho rigoroso, comunicação clara, entrega no prazo. Experiência muito acima do padrão.',
    author: 'M. S.',
    initials: 'MS'
  },
  {
    text: 'Causa complexa com acúmulo de funções e stock options. O Dr. Marcos conhecia cada nuance. Estratégia precisa, resultado excelente.',
    author: 'Dr. L. R.',
    initials: 'LR'
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-[#F8F9FA] border-y border-[#EDEDED]">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-0">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-5">
          <div>
            <p className="text-xs md:text-sm font-sans font-bold tracking-[0.25em] text-[#C59C47] uppercase mb-3">
              Depoimentos
            </p>
            <h2 className="font-serif font-light text-[#1A1A1A] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight">
              O que dizem quem <em className="italic text-[#C59C47] font-normal">confiou</em>.
            </h2>
          </div>
          <p className="font-sans font-light text-[#1A1A1A]/60 text-xs md:text-sm max-w-[280px] lg:text-right leading-relaxed">
            Identidades preservadas conforme diretrizes éticas da OAB.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-[#E5E5E3] hover:border-[#C59C47] hover:shadow-[0_8px_32px_rgba(197,156,71,0.08)] transition-all duration-300 p-8 lg:p-10 flex flex-col justify-between"
            >
              {/* Quote */}
              <div className="mb-2">
                <span className="font-serif text-[5.5rem] text-[#C59C47]/25 leading-none select-none block -mb-10 -mt-4">“</span>
              </div>

              <p className="font-sans font-light text-[#1A1A1A]/85 text-sm md:text-base leading-relaxed mb-7 flex-1">
                {r.text}
              </p>

              <div className="border-t border-[#EDEDED] pt-5 flex items-center gap-3.5">
                {/* Initials Avatar Monogram */}
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-[#C59C47] font-sans font-bold text-xs flex items-center justify-center tracking-wider select-none shrink-0 border border-[#C59C47]/20">
                  {r.initials}
                </div>
                <div>
                  <p className="font-serif text-base text-[#1A1A1A] font-semibold">{r.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
