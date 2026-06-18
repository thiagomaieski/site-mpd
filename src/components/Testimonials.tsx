import { motion } from 'framer-motion'

const REVIEWS = [
  {
    text: 'A condução da minha rescisão executiva foi cirúrgica. O Dr. Marcos dominou cada detalhe e o resultado superou o esperado.',
    author: 'F. A.',
    role: 'Ex-Diretor de Tecnologia · Multinacional',
  },
  {
    text: 'Estruturamos a holding familiar com a MPD. Trabalho rigoroso, comunicação clara, entrega no prazo. Experiência muito acima do padrão.',
    author: 'M. S.',
    role: 'Fundadora · Holding Familiar',
  },
  {
    text: 'Causa complexa com acúmulo de funções e stock options. O Dr. Marcos conhecia cada nuance. Estratégia precisa, resultado excelente.',
    author: 'Dr. L. R.',
    role: 'Médico · Diretor Clínico',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-[#F8F9FA] border-y border-[#EDEDED]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-5">
          <div>
            <p className="text-[0.62rem] font-sans font-semibold tracking-[0.3em] text-[#C59C47] uppercase mb-3">
              Depoimentos
            </p>
            <h2 className="font-serif font-light text-[#1A1A1A] text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.1] tracking-tight">
              O que dizem quem <em className="italic text-[#C59C47] font-normal">confiou</em>.
            </h2>
          </div>
          <p className="font-sans font-light text-[#1A1A1A]/40 text-[0.74rem] max-w-[240px] lg:text-right leading-relaxed">
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
              className="bg-white border border-[#EDEDED] hover:border-[#C59C47]/35 hover:shadow-[0_4px_24px_rgba(197,156,71,0.06)] transition-all duration-300 p-7 lg:p-8 flex flex-col justify-between"
            >
              {/* Quote */}
              <div className="mb-4">
                <span className="font-serif text-[2.8rem] text-[#C59C47]/15 leading-none select-none block -mb-3">"</span>
              </div>

              <p className="font-sans font-light text-[#1A1A1A]/65 text-[0.84rem] leading-[1.8] mb-7 flex-1">
                {r.text}
              </p>

              <div className="border-t border-[#EDEDED] pt-4">
                <p className="font-serif text-[0.9rem] text-[#1A1A1A] font-normal">{r.author}</p>
                <p className="text-[0.55rem] font-sans font-semibold uppercase tracking-[0.18em] text-[#C59C47] mt-0.5">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
