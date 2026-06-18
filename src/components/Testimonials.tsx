import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

import evaRibeiroImg from '../assets/autores/eva-ribeiro.png'
import thaisMarquesImg from '../assets/autores/thais-marques.png'
import diegoGomesImg from '../assets/autores/diego-gomes.png'
import kaioCezarImg from '../assets/autores/kaio-cezar.png'
import edsonCalixtoImg from '../assets/autores/edson-calixto.png'
import rafaelMeloImg from '../assets/autores/rafael-melo.png'
import adenilsaAlvesFerreiraImg from '../assets/autores/adenilsa-alves-ferreira.png'
import micheleHaroImg from '../assets/autores/michele-haro.png'
import mauricioDiasImg from '../assets/autores/mauricio-dias.png'
import rafaelMarquesImg from '../assets/autores/rafael-marques.png'

const REVIEWS = [
  {
    text: 'Estou sem palavras para descrever a total confiabilidade desses profissionais da MPD Advocacia. São simplesmente maravilhosos, lutaram até conseguir meu benefício. São totalmente dedicados no que fazem. Grata pelo trabalho conquistado, obrigada a todos.',
    author: 'Eva Ribeiro',
    initials: 'ER',
    image: evaRibeiroImg
  },
  {
    text: 'Um excelente ambiente, ótima recepção, profissionais bem capacitados, excelência no atendimento, advogado competente, paciente e dedicado. Nota 100 em todos os aspectos.',
    author: 'Thais Marques',
    initials: 'TM',
    image: thaisMarquesImg
  },
  {
    text: 'Meus agradecimentos à Dra. Anne e a toda equipe do Dr. Marcos, que foi muito eficiente e clara em suas conversas comigo, me explicando tudo o que estava sendo feito e me deixando sempre informado sobre o processo. Todos estão de parabéns. Competência, confiança, segurança e transparência com seus clientes. Indico de olhos fechados.',
    author: 'Diego Gomes',
    initials: 'DG',
    image: diegoGomesImg
  },
  {
    text: 'Gostaria de agradecer ao escritório de advocacia MPD, ao Dr. Marcos e à Dra. Janaína pelo excelente trabalho realizado em meu favor. Eu os procurei referente a uma causa trabalhista e, de imediato, assumiram a causa. Hoje venho agradecer pela vitória que conseguimos. Excelentes profissionais, atenciosos demais com o cliente, sempre me informando do andamento do processo. Só tenho a agradecer a toda a equipe pelo excelente trabalho realizado e pela vitória para nós! Obrigado!',
    author: 'Kaio Cezar',
    initials: 'KC',
    image: kaioCezarImg
  },
  {
    text: 'A minha experiência com o Dr. Marcos foi muito boa. Estava em um momento delicado em minha vida e, com certeza, o seu atendimento fez toda a diferença para que o meu problema fosse resolvido rapidamente. Eu aprovo e indico o seu trabalho...',
    author: 'Edson Calixto',
    initials: 'EC',
    image: edsonCalixtoImg
  },
  {
    text: 'Recomendo o escritório, ótimo atendimento e transparência com os clientes. Toda a equipe está de parabéns: Dr. Marcos e Dra. Janaína. Só tenho a agradecer pela ajuda! 👏👏👏',
    author: 'Rafael Melo',
    initials: 'RM',
    image: rafaelMeloImg
  },
  {
    text: 'Super recomendo. Serviço de excelência, ótimo atendimento. Advogados de excelência. Tenho certeza que todo dia os clientes se sentem em casa ao chegar no escritório, atenção máxima para com todos. Só gratidão mesmo 🙏',
    author: 'Adenilsa Alves Ferreira',
    initials: 'AF',
    image: adenilsaAlvesFerreiraImg
  },
  {
    text: 'Sem dúvida alguma, o MPD Advocacia Online está de parabéns por conseguir nos atender de forma totalmente remota. Assinar documentos por um link enviado pelo WhatsApp é uma comodidade que todos deveriam experimentar. Super recomendo!',
    author: 'Michele Haro',
    initials: 'MH',
    image: micheleHaroImg
  },
  {
    text: 'Me atenderam em um processo de inventário. O tempo todo me mantiveram atualizado do desenrolar do processo. Inclusive, encontraram um caminho para agilizar a conclusão. Foram transparentes e honestos, para mim isso não tem preço.',
    author: 'Mauricio Dias',
    initials: 'MD',
    image: mauricioDiasImg
  },
  {
    text: 'Primeiramente agradecer ao Dr. Marcos, que já era advogado do meu pai pelos seus excelentes serviços, e hoje nos acompanha fazendo os processos meu e do meu irmão. Super indico e agradeço todo atendimento, sensacional.',
    author: 'Rafael Marques',
    initials: 'RM',
    image: rafaelMarquesImg
  }
]



export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    loop: false
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({})

  const toggleExpand = (index: number) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
    setTimeout(() => {
      if (emblaApi) emblaApi.reInit()
    }, 50)
  }

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-[#F8F9FA] border-y border-[#EDEDED]">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-0">

        {/* Header with Google Rating Badge */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-14 gap-6 pb-8 border-b border-[#EDEDED]">
          <div>
            <p className="text-xs md:text-sm font-sans font-bold tracking-[0.25em] text-[#C59C47] uppercase mb-3">
              Depoimentos
            </p>
            <h2 className="font-serif font-light text-[#1A1A1A] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight">
              O que dizem nossos <em className="italic text-[#C59C47] font-normal">Clientes</em>.
            </h2>
          </div>

          {/* Google rating card link (Just badge clickable) */}
          <a
            href="https://www.google.com/maps/place/MPD+Advocacia/@-22.8197891,-47.1663716,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8bf1ad2aa1dd1:0x1a0d6748309e60b0!8m2!3d-22.8197891!4d-47.1663716!16s%2Fg%2F11t9mk1wcv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white border border-[#E5E5E3] p-4 lg:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-[#C59C47]/60 transition-all duration-300 shrink-0"
            aria-label="Ver MPD Advocacia no Google Maps"
          >
            {/* Google Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-bold text-[#1A1A1A] text-lg leading-none">5.0</span>
                <div className="flex items-center text-[#FABB05]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current stroke-current" />
                  ))}
                </div>
              </div>
              <p className="font-sans font-light text-[11px] lg:text-xs text-[#1A1A1A]/60 mt-1">
                Baseado em 139 avaliações no Google Maps
              </p>
            </div>
          </a>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Embla Container */}
          <div className="flex -ml-6 py-4">
            {REVIEWS.map((r, i) => (
              /* Embla Slide */
              <div
                key={i}
                className="pl-6 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%]"
              >
                <div className="h-full bg-white border border-[#E5E5E3] hover:border-[#C59C47] hover:shadow-[0_8px_32px_rgba(197,156,71,0.08)] transition-all duration-300 p-8 lg:p-10 flex flex-col justify-between relative group select-none">
                  
                  {/* Google Icon Watermark */}
                  <div className="absolute top-8 right-8 text-[#1A1A1A]/5 group-hover:text-[#C59C47]/10 transition-colors duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center text-[#FABB05] gap-0.5 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current stroke-current" />
                    ))}
                  </div>

                  <p className="font-sans font-light text-[#1A1A1A]/85 text-sm md:text-base leading-relaxed mb-8 flex-1">
                    “{r.text.length > 240 && !expandedReviews[i] ? `${r.text.substring(0, 240)}...` : r.text}”
                    {r.text.length > 240 && (
                      <button
                        onClick={() => toggleExpand(i)}
                        className="text-[#C59C47] font-semibold text-xs ml-2 hover:underline focus:outline-none inline-block transition-colors duration-200"
                      >
                        {expandedReviews[i] ? 'Ler menos' : 'Ler mais'}
                      </button>
                    )}
                  </p>

                  <div className="border-t border-[#EDEDED] pt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      {/* Author Image or Initials Monogram */}
                      {r.image ? (
                        <img 
                          src={r.image} 
                          alt={r.author} 
                          className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#C59C47]/20 group-hover:border-[#C59C47]/50 transition-all duration-300"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-[#C59C47] font-sans font-bold text-xs flex items-center justify-center tracking-wider select-none shrink-0 border border-[#C59C47]/20 group-hover:border-[#C59C47]/50 transition-all duration-300">
                          {r.initials}
                        </div>
                      )}
                      <div>
                        <p className="font-serif text-base text-[#1A1A1A] font-semibold">{r.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embla Carousel Navigation Controls */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`w-10 h-10 flex items-center justify-center border transition-all duration-300 ${
              !canScrollPrev
                ? 'border-[#E5E5E3] text-[#1A1A1A]/20 cursor-not-allowed'
                : 'border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#C59C47] hover:border-[#C59C47] hover:text-white'
            }`}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Page Indicators */}
          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === idx ? 'w-6 bg-[#C59C47]' : 'w-2 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`w-10 h-10 flex items-center justify-center border transition-all duration-300 ${
              !canScrollNext
                ? 'border-[#E5E5E3] text-[#1A1A1A]/20 cursor-not-allowed'
                : 'border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#C59C47] hover:border-[#C59C47] hover:text-white'
            }`}
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  )
}
