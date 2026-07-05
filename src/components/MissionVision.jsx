export default function MissionVision() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(220%) skewX(-12deg); }
        }
        @keyframes borderPulse {
          0%, 100% { opacity: 0.15; }
          50%       { opacity: 0.45; }
        }
        .mv-card {
          opacity: 0;
          animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .mv-card:nth-child(1) { animation-delay: 0.1s; }
        .mv-card:nth-child(2) { animation-delay: 0.25s; }
        .mv-card:nth-child(3) { animation-delay: 0.4s; }
        .mv-card .shimmer-line {
          position: absolute; top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
          animation: shimmer 3.5s ease-in-out infinite;
          pointer-events: none;
        }
        .mv-card .top-border { animation: borderPulse 3s ease-in-out infinite; }
        .mv-card:nth-child(1) .top-border { animation-delay: 0s; }
        .mv-card:nth-child(2) .top-border { animation-delay: 1s; }
        .mv-card:nth-child(3) .top-border { animation-delay: 2s; }

        /* Desktop: cards float over the image */
        @media (min-width: 768px) {
          .mv-wrapper { position: relative; }
          .mv-img { display: block; width: 100%; height: auto; }
          .mv-overlay { position: absolute; inset: 0; z-index: 1; }
          .mv-content { position: absolute; inset: 0; z-index: 3; display: flex; flex-direction: column; justify-content: center; }
          .mv-fade-top { position: absolute; top: 0; left: 0; right: 0; height: 10rem; z-index: 2; background: linear-gradient(to bottom, #F7F3EA 0%, transparent 100%); pointer-events: none; }
        }

        /* Mobile: image on top, cards below on dark bg */
        @media (max-width: 767px) {
          .mv-wrapper { display: flex; flex-direction: column; }
          .mv-img-wrap { position: relative; }
          .mv-img { display: block; width: 100%; height: auto; }
          .mv-fade-top { position: absolute; top: 0; left: 0; right: 0; height: 6rem; z-index: 2; background: linear-gradient(to bottom, #F7F3EA 0%, transparent 100%); pointer-events: none; }
          .mv-overlay { position: absolute; inset: 0; z-index: 1; }
          .mv-content { position: relative; z-index: 3; background: rgba(14,26,48,0.97); padding: 2rem 1.25rem 2.5rem; }
        }
      `}</style>

      <section id="mission-vision">
        <div className="mv-wrapper">

          {/* Image — always full, never cropped */}
          <div className="mv-img-wrap" style={{}}>
            <img
              src="factoryImg.jpeg"
              alt="Mahajana Printers factory"
              className="mv-img"
              aria-hidden="true"
            />
            {/* Top paper fade */}
            <div className="mv-fade-top" aria-hidden="true" />
            {/* Dark overlay (desktop only — mobile handled by card bg) */}
            <div
              className="mv-overlay hidden md:block"
              style={{ background: 'linear-gradient(160deg, rgba(14,26,48,0.82) 0%, rgba(14,26,48,0.60) 55%, rgba(14,26,48,0.35) 100%)' }}
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="mv-content">
            <div className="w-full max-w-7xl mx-auto px-5 md:px-8 py-0 md:py-0">

              {/* Label */}
              <div className="flex items-center gap-3 mb-8 md:mb-10">
                <span className="block w-8 h-[2px] bg-white/30 rounded-full" />
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-white/50">Mission · Vision · Goals</span>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  {
                    accent: '#FFD200', accentClass: 'text-pyellow', label: 'Our Mission',
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
                        <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
                        <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
                      </svg>
                    ),
                    text: 'To empower businesses across every industry — from pharmaceuticals to apparel — with innovative, high-quality printing and packaging. With over five decades of expertise, we deliver value-added finishes like laminating, varnishing and foiling that turn your vision into a competitive market advantage.',
                  },
                  {
                    accent: '#EC008C', accentClass: 'text-pmagenta', label: 'Our Goals',
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                      </svg>
                    ),
                    list: [
                      'Quality & Precision in every stage of production',
                      'Operational Excellence through modern machinery',
                      'Customer Loyalty via 100% on-time delivery',
                      'Versatility across healthcare, retail & more',
                    ],
                  },
                  {
                    accent: '#00AEEF', accentClass: 'text-pcyan', label: 'Our Vision',
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    ),
                    text: 'To be the premier printing and packaging partner — recognised for blending a rich heritage of craftsmanship with the cutting edge of modern technology, and remaining the most trusted name for brands that demand the best.',
                  },
                  
                ].map(({ accent, accentClass, label, icon, text, list }) => (
                  <div
                    key={label}
                    className="mv-card relative rounded-2xl overflow-hidden"
                    style={{
                      background: 'rgba(14, 26, 48, 0.55)',
                      backdropFilter: 'blur(14px)',
                      WebkitBackdropFilter: 'blur(14px)',
                      boxShadow: '0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
                    }}
                  >
                    <div className="shimmer-line" />
                    <div className="top-border absolute top-0 left-0 right-0 h-[2.5px] rounded-t-2xl" style={{ background: accent }} />
                    <div className="relative p-7 md:p-9">
                      <div className="flex items-center gap-3 mb-5">
                        <span className={`${accentClass} opacity-90`}>{icon}</span>
                        <span className={`font-mono text-[10px] tracking-[0.28em] uppercase ${accentClass}`}>{label}</span>
                      </div>
                      {text && <p className="text-white/80 text-sm md:text-[15px] leading-relaxed">{text}</p>}
                      {list && (
                        <ul className="space-y-3">
                          {list.map(item => (
                            <li key={item} className="flex gap-3 text-white/80 text-sm md:text-[15px] leading-relaxed">
                              <span className={`${accentClass} mt-0.5 flex-none font-bold`}>→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
