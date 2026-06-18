import { motion } from 'framer-motion'

const WA_URL = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dr.%20Marcos.%20Gostaria%20de%20iniciar%20uma%20consulta%20jur%C3%ADdica."

export default function ContactCTA() {
  return (
    <section className="py-24 lg:py-32 bg-[#1A1A1A] relative overflow-hidden">
      {/* Subtle diagonal texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>

      {/* Gold top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C59C47]/60 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-[0.62rem] font-sans font-semibold tracking-[0.3em] text-[#C59C47] uppercase mb-5">
            Atendimento Direto e Pessoal
          </p>

          <h2 className="font-serif font-light text-white text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.1] tracking-tight mb-6 max-w-2xl mx-auto">
            Seu direito merece um advogado que <em className="italic text-[#C59C47] font-normal">conhece o seu nome</em>.
          </h2>

          <p className="font-sans font-light text-white/45 text-[0.88rem] leading-[1.8] max-w-lg mx-auto mb-10">
            Uma mensagem pelo WhatsApp é suficiente. O Dr. Marcos responde pessoalmente, analisa seu caso e indica o melhor caminho.
          </p>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C59C47] hover:bg-[#d4b06a] text-white px-9 py-4.5 text-[0.68rem] font-sans font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_6px_24px_rgba(197,156,71,0.30)] hover:shadow-[0_10px_36px_rgba(197,156,71,0.45)]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Conversar com o Dr. Marcos
          </a>

          {/* Micro-signals */}
          <div className="mt-8 flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
            {['Sigilo absoluto', 'Resposta no mesmo dia', 'Sem compromisso'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-[0.58rem] font-sans font-medium uppercase tracking-[0.16em] text-white/25">
                <span className="w-1 h-1 rounded-full bg-[#C59C47]/60" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
