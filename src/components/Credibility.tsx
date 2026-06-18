import { motion } from 'framer-motion'

const STATS = [
  { number: '15+',    label: 'Anos de Atuação',     detail: 'Litígios de alta complexidade' },
  { number: '1.200+', label: 'Causas Conduzidas',   detail: 'Instâncias administrativas e judiciais' },
  { number: '4',      label: 'Áreas de Excelência', detail: 'Trabalhista · Prev. · Cível · Criminal' },
  { number: '100%',   label: 'Atendimento Direto',  detail: 'Dr. Marcos em cada etapa do caso' },
]

export default function Credibility() {
  return (
    <section id="diferenciais" className="bg-[#1A1A1A] py-14 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x lg:divide-white/10">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="px-4 sm:px-6 lg:px-10 first:lg:pl-0 last:lg:pr-0"
            >
              <p className="font-serif font-light text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] text-white leading-none mb-2">
                {s.number}
              </p>
              <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#C59C47] mb-2">
                {s.label}
              </p>
              <p className="font-sans font-light text-xs sm:text-sm text-white/60 leading-relaxed">
                {s.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
