import { SectionLabel } from './UI'

const processes = [
  {  accent: '#EC008C', accentClass: 'text-pmagenta', title: 'Printing',     img: 'offset_printing.jpeg',    desc: 'High-performance offset machines handle both small and large-scale runs with precision, consistency and speed.' },
  {  accent: '#00AEEF', accentClass: 'text-pcyan',    title: 'Die Cutting',  img: 'diecutting.jpg',         desc: 'Precision cutting and embossing with flat-bed and cylinder die-cutting machines.' },
  {  accent: '#FFD200', accentClass: 'text-pyellow',  title: 'Pasting',      img: 'offset_pasting.jpg',    desc: 'High-speed pasting machines assemble folding cartons and boxes automatically.' },
  {  accent: '#EC008C', accentClass: 'text-pmagenta', title: 'Lamination',   img: 'offset_lamination.jpeg', desc: 'A protective gloss or matte layer that adds durability and elevates the finish of your printed materials.' },
  {  accent: '#00AEEF', accentClass: 'text-pcyan',    title: 'Foiling',      img: 'offset_foiling.jpg',     desc: 'Metallic foils add a reflective, eye-catching finish ideal for luxury packaging.' },
  {  accent: '#FFD200', accentClass: 'text-pyellow',  title: 'Design House', img: 'design.png',             desc: 'Fully equipped with Adobe Illustrator, Photoshop and InDesign, our team helps you design from scratch.' },
]

const logos = [
  { src: 'heidelberglogo.png', name: 'Heidelberg',     scale: 1.2 },
  { src: 'agfalogo.png',       name: 'Agfa',           scale: 1 },
  { src: 'polarlogo.png',      name: 'Polar',          scale: 1.6 },
  { src: 'konicalogo.png',     name: 'Konica Minolta', scale: 1.5 },
  { src: 'horizonlogo.png',    name: 'Horizon',        scale: 1 },
  { src: 'iijimalogo.png',     name: 'Iijima',         scale: 1 },
]

export default function Facilities() {
  return (
    <>
      <style>{`
        @keyframes facFloat {
          0%, 100% { transform: translate(-50%,-50%) translateY(0) translateZ(0); }
          50%       { transform: translate(-50%,-50%) translateY(-16px) translateZ(0); }
        }
        
        /* GPU Optimization: Force hardware acceleration */
        .fac-orb {
          animation: facFloat var(--dur,7s) ease-in-out var(--delay,0s) infinite;
          will-change: transform, opacity;
          transform: translateZ(0); 
        }

        /* Card: gentle lift + shadow bloom + accent border reveal */
        .fac-card {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s cubic-bezier(0.22,1,0.36,1);
          border: 1px solid #e8e0d0;
          will-change: transform, box-shadow;
          transform: translateZ(0);
        }
        .fac-card:hover {
          transform: translateY(-7px) translateZ(0);
          box-shadow: 0 20px 48px rgba(14,26,48,0.11), 0 4px 12px rgba(14,26,48,0.06) !important;
        }

        /* Image: very subtle zoom only */
        .fac-card-img {
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
          will-change: transform;
        }
        .fac-card:hover .fac-card-img {
          transform: scale(1.04) translateZ(0);
        }

        /* Accent bar: grows from left on hover */
        .fac-bar {
          transform-origin: left;
          transform: scaleX(1);
          transition: opacity 0.4s;
          will-change: opacity;
        }
        .fac-card:hover .fac-bar {
          opacity: 0.9;
        }

        /* Logo cards */
        .fac-logo {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s,
                      border-color 0.35s;
          border: 1px solid #e8e0d0;
          will-change: transform;
          transform: translateZ(0);
        }
        .fac-logo:hover {
          transform: translateY(-4px) translateZ(0);
          box-shadow: 0 14px 32px rgba(14,26,48,0.09) !important;
          border-color: rgba(14,26,48,0.18);
        }
      `}</style>

      <section id="facilities" className="relative py-14 md:py-24 overflow-hidden" style={{ background: '#F7F3EA' }}>

        {/* Floating colour orbs - Swapped heavy blurs for fast radial gradients */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {[
            { top: '5%',  left: '5%',  size: 340, color: '#00AEEF', opacity: 0.15, delay: '0s',   dur: '7s'   },
            { top: '10%', left: '82%', size: 280, color: '#EC008C', opacity: 0.12, delay: '1.5s', dur: '8.5s' },
            { top: '50%', left: '90%', size: 300, color: '#FFD200', opacity: 0.15, delay: '0.8s', dur: '6.5s' },
            { top: '65%', left: '3%',  size: 260, color: '#EC008C', opacity: 0.12, delay: '2s',   dur: '7.5s' },
            { top: '85%', left: '52%', size: 220, color: '#00AEEF', opacity: 0.14, delay: '1s',   dur: '9s'   },
            { top: '35%', left: '45%', size: 180, color: '#FFD200', opacity: 0.10, delay: '3s',   dur: '8s'   },
          ].map((d, i) => (
            <div key={i} className="fac-orb absolute rounded-full"
              style={{
                top: d.top, left: d.left,
                width: d.size, height: d.size,
                background: `radial-gradient(circle, ${d.color} 0%, transparent 70%)`,
                opacity: d.opacity,
                transform: 'translate(-50%,-50%)',
                '--delay': d.delay,
                '--dur': d.dur,
              }}
            />
          ))}
          <svg className="absolute inset-0 w-full h-full opacity-[0.045]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="fac-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#0E1A30" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fac-dots)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">

          {/* Header */}
          <div className="mb-10 md:mb-14 reveal">
            <SectionLabel>In-House Capability</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl text-navy leading-tight mb-3">One Sheet of Paper. Infinite Possibilities. One roof.</h2>
            <p className="text-ink/70 text-sm md:text-base leading-relaxed max-w-xl">
              From raw materials to final product, we handle every single step of the journey in-house to guarantee unmatched quality.
            </p>
          </div>

          {/* Process cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
            {processes.map(({ num, accent, accentClass, title, img, desc }) => (
              <div
                key={num}
                className="fac-card reveal rounded-2xl overflow-hidden relative bg-white"
                style={{
                  '--card-accent': accent,
                  boxShadow: '0 2px 12px rgba(14,26,48,0.06)',
                }}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div className="fac-bar absolute top-0 left-0 right-0 h-[3px] z-10" style={{ background: accent }} />
                  <img src={img} alt={title} className="fac-card-img w-full h-full object-cover" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 h-10 z-[2]"
                    style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />
                </div>

                {/* Body */}
                <div className="p-5 md:p-6">
                  <h3 className="font-body font-bold text-base md:text-lg text-navy mt-1.5 mb-2">{title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Brand logos */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-navy/10" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-navy/40 flex-none">
                Powered by world-class machinery
              </span>
              <div className="flex-1 h-px bg-navy/10" />
            </div>
            <div className="flex items-center justify-between gap-4 md:gap-6 flex-wrap md:flex-nowrap">
              {logos.map(({ src, name, scale }) => (
                <div key={src} className="fac-logo flex-1 min-w-[140px] rounded-2xl bg-white flex items-center justify-center px-4 py-3 overflow-hidden"
                  style={{ boxShadow: '0 2px 12px rgba(14,26,48,0.06)', height: '160px' }}>
                  <img src={src} alt={name} className="w-auto object-contain" style={{ maxHeight: '120px', maxWidth: '100%', transform: `scale(${scale || 1})` }} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}