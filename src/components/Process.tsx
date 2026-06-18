import { motion } from 'framer-motion'

const WA_URL = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dr.%20Marcos.%20Gostaria%20de%20agendar%20uma%20consulta."

const STEPS = [
  { num: '01', title: 'Contato pelo WhatsApp', desc: 'Envie o resumo da sua situação. Sem formulários. A resposta vem no mesmo dia útil.' },
  { num: '02', title: 'Triagem e Diagnóstico', desc: 'O Dr. Marcos analisa documentos e contornos do caso. Havendo viabilidade, agenda-se reunião.' },
  { num: '03', title: 'Estratégia Sob Medida', desc: 'Alternativas táticas, prazos realistas e honorários claros. Você decide sem pressão.' },
  { num: '04', title: 'Execução e Acompanhamento', desc: 'Atualizações regulares e canal aberto. Você sabe o que acontece e quando acontece.' },
]

export default function Process() {
  return (
    <section id="processo" className="py-24 lg:py-32 bg-[#FDFDFD]">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-0">

        {/* Header */}
        <div className="max-w-xl mb-16 lg:mb-20">
          <p className="text-xs md:text-sm font-sans font-bold tracking-[0.25em] text-[#C59C47] uppercase mb-3">
            Método de Trabalho
          </p>
          <h2 className="font-serif font-light text-[#1A1A1A] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight mb-4">
            Como funciona o <em className="italic text-[#C59C47] font-normal">atendimento</em>
          </h2>
          <p className="font-sans font-light text-[#1A1A1A]/70 text-sm md:text-base leading-relaxed">
            Transparência como parte da entrega. Quatro etapas para que você nunca se sinta no escuro.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-px lg:bg-[#EDEDED]">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-[#FDFDFD] lg:hover:bg-[#FAFAF8] transition-colors duration-300 p-7 lg:p-9 flex flex-col border border-[#EDEDED] lg:border-0"
            >
              <p className="font-serif font-light text-5xl lg:text-6xl text-[#C59C47]/65 group-hover:text-[#C59C47]/90 transition-colors duration-300 leading-none mb-5">
                {step.num}
              </p>
              <h3 className="font-serif font-semibold text-[#1A1A1A] text-lg lg:text-xl leading-snug mb-3">
                {step.title}
              </h3>
              <p className="font-sans font-light text-[#1A1A1A]/75 text-sm md:text-base leading-[1.7] mt-0">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-5 justify-between bg-[#1A1A1A] p-7 lg:px-10 border border-[#C59C47]/10">
          <div>
            <p className="font-serif text-lg lg:text-xl text-white font-medium mb-1">
              Pronto para dar o primeiro passo?
            </p>
            <p className="font-sans font-light text-sm md:text-base text-white/70">
              Triagem rápida, discreta e sem compromisso.
            </p>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-transparent border-2 border-[#C59C47] text-[#C59C47] hover:bg-[#C59C47] hover:text-white px-7 py-3 text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.16em] transition-all duration-300 whitespace-nowrap"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Iniciar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
