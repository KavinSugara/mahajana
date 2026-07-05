import { useState, useEffect } from 'react'

const links = ['About', 'Facilities', 'Journey', 'Why Us', 'Products', 'Visit Us']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-navy transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-[72px] flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="logo.png"
            alt="Mahajana Printers"
            className="h-9 md:h-11 w-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 text-white/80 text-[13.5px] font-semibold uppercase tracking-wide">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(' ', '-')}`}
              className="relative py-2 transition-colors duration-200 hover:text-white
                         after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0
                         after:bg-gradient-to-r after:from-[#00AEEF] after:via-[#EC008C] after:to-pyellow
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden lg:inline-flex items-center gap-2 bg-pyellow text-navy font-bold text-sm
                       px-6 py-2.5 rounded-full transition-all duration-300
                       hover:gap-3 hover:shadow-[0_10px_24px_-6px_rgba(255,210,0,0.55)] hover:brightness-105
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pyellow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Get A Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                 strokeLinecap="round" strokeLinejoin="round"
                 className="transition-transform duration-300 group-hover:translate-x-0.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" />
            </svg>
          </a>

          <button
            onClick={() => setOpen(o => !o)}
            className="lg:hidden text-white p-2 -mr-1 rounded-md transition-colors hover:bg-white/10
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="relative block w-[22px] h-4">
              <span className={`absolute left-0 top-0 h-[2px] w-full bg-white rounded-full transition-all duration-300 ${open ? 'top-[7px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[7px] h-[2px] w-full bg-white rounded-full transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 bottom-0 h-[2px] w-full bg-white rounded-full transition-all duration-300 ${open ? 'bottom-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-16 bg-navy z-40 flex flex-col px-6 pt-8 pb-10 gap-1
                    transition-opacity duration-300
                    ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {links.map((l, i) => (
          <a
            key={l}
            href={`#${l.toLowerCase().replace(' ', '-')}`}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
            className={`text-white/90 text-xl font-semibold py-4 border-b border-white/10 transition-all duration-300
                        hover:text-pyellow active:scale-[0.98]
                        ${open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'}`}
          >
            {l}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-8 bg-pyellow text-navy font-bold text-base px-6 py-3.5 rounded-full text-center
                     transition-transform duration-200 active:scale-95"
        >
          Get A Quote
        </a>
      </div>
    </header>
  )
}
