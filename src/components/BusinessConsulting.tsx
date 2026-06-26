import { motion } from 'framer-motion'
import { ShieldCheck, ClipboardCheck, Users, FileText, Gavel, Laptop } from 'lucide-react'

const WA_URL = "https://wa.me/5519988884886?text=Ol%C3%A1%2C%20Dr.%20Marcos.%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20mensal%20para%20minha%20empresa."

const DIFFERENTIALS = [
  {
    icon: ShieldCheck,
    title: 'Prevenção de Riscos',
    desc: 'Orientação jurídica estratégica para antecipar problemas e evitar demandas judiciais.'
  },
  {
    icon: ClipboardCheck,
    title: 'Adequação às Leis',
    desc: 'Alinhamento completo da sua empresa às normas legais e regulamentares específicas do seu segmento.'
  },
  {
    icon: Users,
    title: 'Relações Trabalhistas',
    desc: 'Gestão jurídica de colaboradores focada na prevenção e redução de passivos trabalhistas.'
  },
  {
    icon: FileText,
    title: 'Contratos Empresariais',
    desc: 'Elaboração, análise e revisão de contratos diversos com o máximo de segurança, clareza e técnica.'
  },
  {
    icon: Gavel,
    title: 'Atuação em Litígios',
    desc: 'Defesa técnica e estratégica dos interesses da sua empresa em processos judiciais (contencioso).'
  }
]

export default function BusinessConsulting() {
  return (
    <section id="consultoria-empresarial" className="py-24 lg:py-32 bg-[#0F0F0F] relative overflow-hidden">
      {/* Light glow behind content */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C59C47]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 xl:px-0 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-xs md:text-sm font-sans font-bold tracking-[0.25em] text-[#C59C47] uppercase mb-4">
            Assessoria Corporativa Retentora
          </p>
          <h2 className="font-serif font-light text-white text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight mb-6">
            Consultoria Jurídica Mensal para <br className="hidden sm:block" />
            <em className="italic text-[#C59C47] font-normal">Micro e Pequenas Empresas</em>.
          </h2>
          <div className="w-12 h-px bg-[#C59C47] mb-8" />
          <p className="font-sans font-light text-[#E5E5E5]/90 text-base sm:text-lg leading-[1.8]">
            No <strong className="font-medium text-white">MPD Advocacia</strong>, cuidamos da segurança jurídica do seu negócio para que você possa focar no que realmente importa: os seus resultados. Oferecemos soluções personalizadas e um pacote mensal de serviços com valores extremamente acessíveis.
          </p>
        </div>

        {/* Grid Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {DIFFERENTIALS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#121212] border border-[#C59C47]/10 p-8 hover:border-[#C59C47]/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#C59C47]/10 flex items-center justify-center mb-6 group-hover:bg-[#C59C47] transition-all duration-300 rounded-none">
                    <Icon className="w-6 h-6 text-[#C59C47] group-hover:text-[#0B0B0B] transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif font-medium text-white text-lg lg:text-xl leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans font-light text-white/70 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}

          {/* Special Retainer info card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 5 * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-[#1E1911] to-[#121212] border border-[#C59C47]/30 p-8 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C59C47] bg-[#C59C47]/10 px-2.5 py-1 mb-6 inline-block">
                Diferencial MPD
              </span>
              <h3 className="font-serif font-medium text-white text-lg lg:text-xl leading-snug mb-3">
                Valores Sob Medida
              </h3>
              <p className="font-sans font-light text-white/70 text-sm sm:text-base leading-relaxed">
                Planos de assessoria consultiva adaptados à realidade financeira da sua empresa, focados em gerar retorno e blindagem legal constante.
              </p>
            </div>
            <div className="pt-6 border-t border-[#C59C47]/10 mt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59C47] animate-pulse" />
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#C59C47]">Foco em resultados</span>
            </div>
          </motion.div>
        </div>

        {/* Attendance Banner */}
        <div className="bg-[#121212] border border-[#C59C47]/20 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-[#C59C47]/10 rounded-none text-[#C59C47]">
                <Laptop className="w-5 h-5" />
              </span>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C59C47]">
                Flexibilidade Operacional
              </span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-white font-light">
              Atendimento Presencial ou Digital — <em className="italic text-[#C59C47] font-normal">Você escolhe!</em>
            </h3>
            <p className="font-sans font-light text-white/80 text-sm sm:text-base leading-relaxed">
              O mundo evoluiu e o Direito também! Estamos prontos para atender a sua empresa com a mesma excelência, seja à distância ou no formato tradicional. Deixe a parte jurídica consultiva com quem entende.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center">
            <p className="text-xs font-sans font-bold uppercase tracking-wider text-[#C59C47] mb-3 lg:text-right hidden lg:block">
              Proteja seu negócio
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#C59C47] text-[#0B0B0B] hover:bg-[#d4b573] hover:text-black px-8 py-4 text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_4px_16px_rgba(197,156,71,0.2)] whitespace-nowrap text-center"
            >
              Falar com Dr. Marcos
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
