import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  { q: 'O Dr. Marcos atende todos os casos pessoalmente?', a: 'Sim. Não existe delegação a assistentes. O Dr. Marcos conduz pessoalmente a análise, a estratégia e a execução de cada mandato — do início ao encerramento.' },
  { q: 'Como funciona a primeira consulta?', a: 'Começa por uma mensagem no WhatsApp. O Dr. Marcos faz a triagem técnica e, havendo viabilidade, agenda reunião presencial ou por videoconferência para aprofundamento.' },
  { q: 'O escritório atua fora de São Paulo?', a: 'Sim. Com o processo eletrônico, atuamos em qualquer tribunal do país. Reuniões remotas com o mesmo nível de atenção das presenciais.' },
  { q: 'Que documentos preciso reunir?', a: 'Depende da área. Trabalhistas: carteira de trabalho, holerites, contrato. Previdenciário: extrato do CNIS. No primeiro contato, informamos a lista exata.' },
  { q: 'Como são calculados os honorários?', a: 'Definidos de forma transparente em contrato, conforme o Código de Ética da OAB. Pró-labore fixo ou honorários de êxito. Tudo apresentado antes de qualquer compromisso.' },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#EDEDED]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-5 lg:py-6 gap-5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C59C47]/40 group"
        aria-expanded={open}
      >
        <span className={`font-serif text-[0.95rem] lg:text-[1.02rem] leading-snug transition-colors duration-200 ${open ? 'text-[#C59C47]' : 'text-[#1A1A1A] group-hover:text-[#C59C47]'}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 border flex items-center justify-center transition-all duration-300 ${open ? 'border-[#C59C47] bg-[#C59C47]' : 'border-[#DDDCDA] group-hover:border-[#C59C47]/60'}`}>
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
            <p className="font-sans font-light text-[#1A1A1A]/60 text-[0.82rem] leading-[1.8] pb-5 max-w-2xl">
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
    <section id="faq" className="py-24 lg:py-32 bg-[#FDFDFD]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-[0.62rem] font-sans font-semibold tracking-[0.3em] text-[#C59C47] uppercase mb-3">
              Perguntas Frequentes
            </p>
            <h2 className="font-serif font-light text-[#1A1A1A] text-[2rem] sm:text-[2.4rem] leading-[1.1] tracking-tight">
              Dúvidas <em className="italic text-[#C59C47] font-normal">respondidas</em>.
            </h2>
          </div>
          {/* Right */}
          <div className="lg:col-span-8 border-t border-[#EDEDED]">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
