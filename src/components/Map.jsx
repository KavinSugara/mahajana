export default function Map() {
  return (
    <>
      <style>{`
        @keyframes locFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes locPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.15); }
        }
        .loc-pin   { animation: locFloat 3s ease-in-out infinite; }
        .loc-pulse { animation: locPulse 2s ease-in-out infinite; }

        .loc-card {
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s;
        }
        .loc-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(14,26,48,0.14) !important;
        }
      `}</style>

      <section id="map" className="relative overflow-hidden py-14 md:py-28" style={{ background: '#0E1A30', transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}>

        {/* ── Background texture: scattered faint circles ── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Big soft accent glows (radial-gradient instead of blur() to avoid GPU tiling seams) */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #00AEEF 0%, rgba(0,174,239,0) 70%)' }} />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #EC008C 0%, rgba(236,0,140,0) 70%)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #FFD200 0%, rgba(255,210,0,0) 70%)' }} />

          {/* Dot scatter */}
          {[
            { top:'8%',  left:'6%',  s:10, c:'#00AEEF', o:0.25 },
            { top:'15%', left:'92%', s:7,  c:'#EC008C', o:0.22 },
            { top:'35%', left:'3%',  s:5,  c:'#FFD200', o:0.28 },
            { top:'50%', left:'95%', s:12, c:'#00AEEF', o:0.18 },
            { top:'70%', left:'5%',  s:8,  c:'#EC008C', o:0.20 },
            { top:'80%', left:'88%', s:6,  c:'#FFD200', o:0.22 },
            { top:'90%', left:'12%', s:4,  c:'#00AEEF', o:0.18 },
            { top:'25%', left:'50%', s:4,  c:'#EC008C', o:0.12 },
          ].map((d, i) => (
            <div key={i} className="absolute rounded-full"
              style={{ top: d.top, left: d.left, width: d.s, height: d.s, background: d.c, opacity: d.o }} />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">

          {/* ── Header ── */}
          <div className="mb-10 md:mb-16 reveal">
            <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] uppercase text-white/40 mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9"/>
                <line x1="12" y1="2" x2="12" y2="22"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
              </svg>
              Our Location
            </span>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-display text-3xl md:text-5xl text-white leading-tight">
                Come find us<br />
                <span style={{ color: '#FFD200' }}>in Mirigama.</span>
              </h2>
              <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-xs md:text-right">
                Just under an hour from Colombo. Two plants, one commitment to quality.
              </p>
            </div>

            {/* CMYK colour bar */}
            <div className="flex gap-[3px] mt-6">
              <span className="block h-[3px] w-10 rounded-full" style={{ background: '#00AEEF' }} />
              <span className="block h-[3px] w-10 rounded-full" style={{ background: '#EC008C' }} />
              <span className="block h-[3px] w-10 rounded-full" style={{ background: '#FFD200' }} />
              <span className="block h-[3px] w-10 rounded-full bg-white opacity-20" />
            </div>
          </div>

          {/* ── Main grid ── */}
          <div className="grid lg:grid-cols-[1fr_340px] gap-5 reveal">

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '440px', boxShadow: '0 8px 48px rgba(0,0,0,0.35)' }}>
              <iframe
                title="Mahajana Printers Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3!2d80.1288958!3d7.2480409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31e776758f291%3A0x54944b426b7bede!2sMahajana%20Printers!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%" height="100%"
                style={{ border: 0, minHeight: '440px', display: 'block', filter: 'saturate(0.9) contrast(1.05)' }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
      
            </div>

            {/* Info panel */}
            <div className="flex flex-col gap-4">

              {/* Main address */}
              <div className="loc-card flex-1 rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-none"
                    style={{ background: 'rgba(255,210,0,0.15)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">Main Facility</span>
                </div>
                <p className="text-white text-sm leading-relaxed mb-1 font-medium">No. 23, Danowita Road</p>
                <p className="text-white/50 text-sm">Mirigama, Sri Lanka</p>
                <a href="https://maps.google.com/?q=Mahajana+Printers,+Mirigama"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                  style={{ background: '#FFD200', color: '#0E1A30' }}>
                  Get Directions
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>
                </a>
              </div>

              {/* Colombo */}
              <div className="loc-card rounded-2xl p-5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-none"
                    style={{ background: 'rgba(0,174,239,0.15)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">Colombo Office</span>
                </div>
                <p className="text-white/80 text-sm">No. 63/2, Maliban Street, Colombo 11</p>
              </div>

              {/* Contact */}
              <div className="loc-card rounded-2xl p-5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-none"
                    style={{ background: 'rgba(236,0,140,0.15)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EC008C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1 4.18 2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">Contact</span>
                </div>
                <p className="text-white/80 text-sm">033 227 3230 &nbsp;|&nbsp; 077 132 4882</p>
                <p className="text-white/50 text-xs mt-1">mahajanaprinters.lk@gmail.com</p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
