import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  { q: 'Como é dividida a atuação nos casos do escritório?', a: 'O Dr. Marcos Dias supervisiona e coordena estrategicamente todas as causas. A execução é realizada de forma integrada através de nossa equipe de advogados especialistas e escritórios parceiros, garantindo excelência e assertividade em cada ramo do direito.' },
  { q: 'Como funciona a primeira consulta?', a: 'O contato inicial começa pelo WhatsApp. Nossa equipe realiza uma triagem técnica inicial e, havendo viabilidade, agenda-se uma reunião online por videoconferência com os profissionais especialistas no seu caso.' },
  { q: 'O escritório realiza atendimento fora de São Paulo?', a: 'Sim. Com a advocacia moderna e o atendimento 100% digital e a distância, representamos clientes em tribunais de todo o país com a mesma agilidade e proximidade, sem necessidade de deslocamento físico.' },
  { q: 'Que documentos preciso reunir?', a: 'Depende da área de atuação. Para causas trabalhistas: carteira de trabalho, holerites e contrato. Para previdenciário: extrato do CNIS. No primeiro contato por WhatsApp, nossa equipe informará a lista exata.' },
  { q: 'Como são calculados os honorários?', a: 'Os honorários são pactuados de forma transparente em contrato escrito, em estrita observância ao Código de Ética da OAB. Eles podem ser fixos (pró-labore) ou com base no êxito da demanda, sempre apresentados e alinhados antes de qualquer início de trabalho.' },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#C59C47]/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-5 lg:py-6 gap-5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C59C47]/40 group"
        aria-expanded={open}
      >
        <span className={`font-sans font-semibold text-base lg:text-lg leading-snug transition-colors duration-200 ${open ? 'text-[#C59C47]' : 'text-white group-hover:text-[#C59C47]'}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 border flex items-center justify-center transition-all duration-300 ${open ? 'border-[#C59C47] bg-[#C59C47]' : 'border-neutral-700 group-hover:border-[#C59C47]/60'}`}>
          <svg
            width="9" height="9" viewBox="0 0 10 10"
            className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
            fill="none" stroke={open ? 'white' : '#999'} strokeWidth="1.5" strokeLinecap="round"
          >
            <line x1="5" y1="1" x2="5" y2="9" />
            <line x1="1" y1="5" x2="9" y2="5" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-sans font-light text-white/85 text-sm lg:text-base leading-[1.8] pb-5 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#0F0F0F]">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-xs md:text-sm font-sans font-bold tracking-[0.25em] text-[#C59C47] uppercase mb-3">
              Perguntas Frequentes
            </p>
            <h2 className="font-serif font-light text-white text-[2.2rem] sm:text-[2.8rem] leading-[1.1] tracking-tight">
              Dúvidas <em className="italic text-[#C59C47] font-normal">respondidas</em>.
            </h2>
          </div>
          {/* Right */}
          <div className="lg:col-span-8 border-t border-[#C59C47]/10">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
