import mpdLogo from '../assets/logo-mpd-colorida.svg'

const WA_URL = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dr.%20Marcos.%20Gostaria%20de%20agendar%20uma%20consulta."
const YEAR = new Date().getFullYear()

const NAV_LINKS = [
  { label: 'O Escritório', href: '#sobre' },
  { label: 'Atuação', href: '#areas' },
  { label: 'Método', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="bg-[#FDFDFD] text-[#1A1A1A] border-t border-[#EDEDED]">

      {/* Main footer body */}
      <div className="max-w-[1280px] mx-auto px-6 xl:px-0 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

        {/* Brand */}
        <div>
          <a href="#inicio" className="inline-flex mb-5 focus:outline-none" aria-label="Voltar ao início">
            <img
              src={mpdLogo}
              alt="MPD Advocacia"
              className="h-9 md:h-11 w-auto object-contain"
            />
          </a>
          <p className="font-sans font-light text-sm text-[#1A1A1A]/70 leading-relaxed max-w-[22rem] mb-6">
            Boutique jurídica autoral dedicada à defesa estratégica e personalizada de causas complexas.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A]/40 hover:text-[#C59C47] transition-colors duration-200" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A]/40 hover:text-[#C59C47] transition-colors duration-200" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs md:text-sm font-sans font-bold uppercase tracking-[0.25em] text-[#C59C47] mb-5">
            Navegação
          </p>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-sans font-light text-sm md:text-base text-[#1A1A1A]/75 hover:text-[#C59C47] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs md:text-sm font-sans font-bold uppercase tracking-[0.25em] text-[#C59C47] mb-5">
            Contato
          </p>
          <ul className="space-y-3 font-sans font-light text-sm md:text-base text-[#1A1A1A]/70 mb-6">
            <li>Av. Paulista, 1000 — 14º Andar</li>
            <li>São Paulo / SP</li>
            <li className="pt-1">+55 (11) 99999-9999</li>
            <li>contato@mpdadvocacia.com.br</li>
          </ul>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-sans font-bold uppercase tracking-[0.18em] text-[#C59C47] hover:text-[#1A1A1A] transition-colors duration-200"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Iniciar pelo WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#EDEDED]">
        <div className="max-w-[1280px] mx-auto px-6 xl:px-0 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-sans text-[#1A1A1A]/50 leading-relaxed text-center sm:text-left">
            © {YEAR} MPD Advocacia · Dr. Marcos P. Dias | OAB/SP 000.000 · Site desenvolvido em conformidade com o Provimento 205/2021 da OAB.
          </p>
          <a
            href="#inicio"
            className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50 hover:text-[#C59C47] transition-colors duration-200 whitespace-nowrap"
          >
            Topo ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
