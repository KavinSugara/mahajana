import { useEffect, useRef, useState } from 'react'
import { SectionLabel } from './UI'

const milestones = [
  { num: '01', year: '1974', title: 'The Beginning',             desc: 'Established on family-owned land with a single machine and a clear vision for delivering quality printing excellence.',  accent: '#00AEEF' },
  { num: '02', year: '1992', title: 'The Offset Era',            desc: 'Transitioned from traditional letterpress to modern offset printing, constructing a brand-new facility to accommodate increased capacity, the very site that remains the heart of our main operations today.', accent: '#EC008C' },
  { num: '03', year: '2004', title: 'Full In-House Production',  desc: 'Achieved complete end-to-end production control, ensuring higher quality standards and faster turnaround for all clients.', accent: '#FFD200' },
  { num: '04', year: '2010', title: 'Growing Capacity',          desc: 'Significantly grew operational capacity by investing in a vast fleet of high-performance offset printing machines.',       accent: '#00AEEF' },
  { num: '05', year: '2015', title: 'Second Facility',           desc: 'Opened a second fully-equipped facility in Mirigama to meet rising market demand and maximise efficiency.',                accent: '#EC008C' },
  { num: '06', year: '2022', title: '10+ Industries Nationwide', desc: 'Grew our expertise to provide trusted, customised packaging solutions for over 10 major industries across the country.',   accent: '#FFD200' },
  { num: '07', year: '2025', title: 'Latest Technology',         desc: 'Purchased state-of-the-art machinery with updated automation for the highest level of precision and consistency.',         accent: '#00AEEF' },
]

const glows = [
  { top: '15%', left: '5%',  size: 400, color: '#00AEEF', opacity: 0.12 },
  { top: '70%', left: '90%', size: 360, color: '#EC008C', opacity: 0.12 },
  { top: '45%', left: '50%', size: 300, color: '#FFD200', opacity: 0.08 },
]

const dots = [
  { top: '10%', left: '4%',  size: 6, color: '#00AEEF', delay: '0s',   dur: '5s'   },
  { top: '82%', left: '7%',  size: 4, color: '#EC008C', delay: '1s',   dur: '6s'   },
  { top: '15%', left: '94%', size: 7, color: '#FFD200', delay: '2s',   dur: '4.5s' },
  { top: '78%', left: '96%', size: 5, color: '#00AEEF', delay: '0.5s', dur: '7s'   },
  { top: '30%', left: '2%',  size: 4, color: '#FFD200', delay: '1.8s', dur: '5.5s' },
  { top: '60%', left: '98%', size: 4, color: '#EC008C', delay: '3s',   dur: '6s'   },
  { top: '22%', left: '18%', size: 3, color: '#EC008C', delay: '0.3s', dur: '4s'   },
  { top: '75%', left: '30%', size: 5, color: '#00AEEF', delay: '2.5s', dur: '5s'   },
  { top: '18%', left: '75%', size: 4, color: '#FFD200', delay: '1.3s', dur: '7.5s' },
  { top: '80%', left: '62%', size: 6, color: '#00AEEF', delay: '0.7s', dur: '6s'   },
]

export default function Journey() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    let hideTimer = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Cancel any pending "hide" and replay the reveal + counter.
          if (hideTimer) { clearTimeout(hideTimer); hideTimer = null }
          setVisible(true)
          setCount(0)
          let start = null
          const duration = 1400
          const target = 50
          const step = (ts) => {
            if (!start) start = ts
            const progress = Math.min((ts - start) / duration, 1)
            // Ease out expo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(target)
          }
          requestAnimationFrame(step)
        } else {
          // Only reset (so it can replay next time) after it's been fully
          // out of view for a beat. threshold:0 already means this only
          // fires once there's zero overlap left — i.e. it's already off
          // screen, so resetting here is invisible to the user, not a pop.
          // The extra delay just absorbs momentum-scroll jitter right at
          // the edge so it doesn't rapid-fire on/off.
          hideTimer = setTimeout(() => setVisible(false), 400)
        }
      },
      { threshold: 0 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (hideTimer) clearTimeout(hideTimer)
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes jrnFloat {
          0%, 100% { transform: translateY(0) translateZ(0); }
          50%       { transform: translateY(-10px) translateZ(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0) translateZ(0); }
          to   { transform: scaleX(1) translateZ(0); }
        }
        @keyframes nodePop {
          from { opacity: 0; transform: scale(0.3) translateZ(0); }
          to   { opacity: 1; transform: scale(1) translateZ(0); }
        }
        @keyframes cardUp {
          from { opacity: 0; transform: translateY(28px) translateZ(0); }
          to   { opacity: 1; transform: translateY(0) translateZ(0); }
        }
        @keyframes cardDown {
          from { opacity: 0; transform: translateY(-28px) translateZ(0); }
          to   { opacity: 1; transform: translateY(0) translateZ(0); }
        }
        @keyframes tickGrow {
          from { transform: scaleY(0) translateZ(0); }
          to   { transform: scaleY(1) translateZ(0); }
        }
        @keyframes yearFade {
          from { opacity: 0; transform: translateY(6px) translateZ(0); }
          to   { opacity: 1; transform: translateY(0) translateZ(0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.18; transform: scale(1) translateZ(0); }
          50%       { opacity: 0.38; transform: scale(1.15) translateZ(0); }
        }
        @keyframes shimmerSlide {
          0%   { transform: translateX(-100%) skewX(-15deg) translateZ(0); }
          100% { transform: translateX(250%)  skewX(-15deg) translateZ(0); }
        }

        /* GPU Optimization */
        .jrn-dot, .card-glow, .card-shimmer {
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        .jrn-dot { animation: jrnFloat var(--dur,5s) ease-in-out var(--delay,0s) infinite; }

        .jrn-line {
          transform-origin: left center;
          transform: scaleX(0);
          will-change: transform;
        }
        .jrn-visible .jrn-line {
          animation: lineGrow 1.6s cubic-bezier(0.22,1,0.36,1) forwards 0.1s;
        }

        .jrn-node { opacity: 0; will-change: transform, opacity; }
        .jrn-visible .jrn-node-1 { animation: nodePop 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards 0.35s; }
        .jrn-visible .jrn-node-2 { animation: nodePop 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards 0.58s; }
        .jrn-visible .jrn-node-3 { animation: nodePop 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards 0.81s; }
        .jrn-visible .jrn-node-4 { animation: nodePop 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards 1.04s; }
        .jrn-visible .jrn-node-5 { animation: nodePop 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards 1.27s; }
        .jrn-visible .jrn-node-6 { animation: nodePop 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards 1.50s; }
        .jrn-visible .jrn-node-7 { animation: nodePop 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards 1.73s; }

        .jrn-tick { transform-origin: top center; transform: scaleY(0); will-change: transform; }
        .jrn-visible .jrn-tick-1 { animation: tickGrow 0.3s ease forwards 0.48s; }
        .jrn-visible .jrn-tick-2 { animation: tickGrow 0.3s ease forwards 0.71s; }
        .jrn-visible .jrn-tick-3 { animation: tickGrow 0.3s ease forwards 0.94s; }
        .jrn-visible .jrn-tick-4 { animation: tickGrow 0.3s ease forwards 1.17s; }
        .jrn-visible .jrn-tick-5 { animation: tickGrow 0.3s ease forwards 1.40s; }
        .jrn-visible .jrn-tick-6 { animation: tickGrow 0.3s ease forwards 1.63s; }
        .jrn-visible .jrn-tick-7 { animation: tickGrow 0.3s ease forwards 1.86s; }

        .jrn-card-above { opacity: 0; will-change: transform, opacity; }
        .jrn-card-below { opacity: 0; will-change: transform, opacity; }
        .jrn-visible .jrn-card-above-1 { animation: cardUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards 0.55s; }
        .jrn-visible .jrn-card-above-3 { animation: cardUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards 1.01s; }
        .jrn-visible .jrn-card-above-5 { animation: cardUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards 1.47s; }
        .jrn-visible .jrn-card-below-2 { animation: cardDown 0.55s cubic-bezier(0.22,1,0.36,1) forwards 0.78s; }
        .jrn-visible .jrn-card-below-4 { animation: cardDown 0.55s cubic-bezier(0.22,1,0.36,1) forwards 1.24s; }
        .jrn-visible .jrn-card-below-6 { animation: cardDown 0.55s cubic-bezier(0.22,1,0.36,1) forwards 1.70s; }
        .jrn-visible .jrn-card-above-7 { animation: cardUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards 1.93s; }

        .jrn-year { opacity: 0; will-change: transform, opacity; }
        .jrn-visible .jrn-year-1 { animation: yearFade 0.4s ease forwards 0.42s; }
        .jrn-visible .jrn-year-2 { animation: yearFade 0.4s ease forwards 0.65s; }
        .jrn-visible .jrn-year-3 { animation: yearFade 0.4s ease forwards 0.88s; }
        .jrn-visible .jrn-year-4 { animation: yearFade 0.4s ease forwards 1.11s; }
        .jrn-visible .jrn-year-5 { animation: yearFade 0.4s ease forwards 1.34s; }
        .jrn-visible .jrn-year-6 { animation: yearFade 0.4s ease forwards 1.57s; }
        .jrn-visible .jrn-year-7 { animation: yearFade 0.4s ease forwards 1.80s; }

        /* Hover: card lifts + glow blob pulses + shimmer sweeps */
        .jrn-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s,
                      border-color 0.35s;
          border: 1.5px solid transparent;
          will-change: transform, box-shadow;
          transform: translateZ(0);
        }
        .jrn-card:hover {
          transform: translateY(-10px) scale(1.03) translateZ(0);
        }
        .jrn-card .card-glow {
          transition: opacity 0.35s, transform 0.35s;
        }
        .jrn-card:hover .card-glow {
          animation: glowPulse 1.8s ease-in-out infinite;
        }
        .jrn-card .card-shimmer {
          position: absolute; top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
          opacity: 0;
          pointer-events: none;
        }
        .jrn-card:hover .card-shimmer {
          opacity: 1;
          animation: shimmerSlide 0.8s ease forwards;
        }

        /* Node hover ring pulse */
        .jrn-node-wrap:hover .node-ring {
          animation: glowPulse 1s ease-in-out infinite;
        }

        /* Scale down the whole timeline on shorter viewports */
        @media (max-height: 760px) and (min-width: 768px) {
          .jrn-scale { zoom: 0.9; }
        }
        @media (max-height: 660px) and (min-width: 768px) {
          .jrn-scale { zoom: 0.8; }
        }
        @media (max-height: 580px) and (min-width: 768px) {
          .jrn-scale { zoom: 0.7; }
        }
      `}</style>

      <section ref={sectionRef} id="journey" className="relative py-6 md:py-8 overflow-hidden bg-white">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Swapped heavy blur for radial-gradient */}
          {glows.map((g, i) => (
            <div key={i} className="absolute rounded-full"
              style={{ top: g.top, left: g.left, width: g.size, height: g.size, background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`, opacity: g.opacity, transform: 'translate(-50%,-50%) translateZ(0)' }} />
          ))}
          {dots.map((d, i) => (
            <div key={i} className="jrn-dot absolute rounded-full"
              style={{ top: d.top, left: d.left, width: d.size, height: d.size, background: d.color, opacity: 0.5, '--delay': d.delay, '--dur': d.dur }} />
          ))}
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="jrn-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0E1A30" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#jrn-grid)" />
          </svg>
        </div>

        <div className="relative max-w-[100rem] mx-auto px-6 md:px-8">

          {/* Header — title | paragraph + counter */}
          <div className="mb-4 md:mb-5 reveal flex flex-col md:flex-row md:items-center md:gap-10">

            {/* Title + 50+ sign side by side on mobile */}
            <div className="flex-none flex items-start gap-4 md:block">
              <div>
                <SectionLabel>Our Journey</SectionLabel>
                <h2 className="font-display text-3xl md:text-4xl text-navy leading-tight">
                  Fifty years,<br />Seven chapters.
                </h2>
              </div>
              {/* 50+ MOBILE ONLY — adjust marginTop to move up/down */}
              <div className="flex md:hidden flex-col items-center justify-center leading-none flex-none" style={{ marginTop: '22px' }}>
                <span
                  className="font-display font-bold leading-none tabular-nums"
                  style={{
                    fontSize: 'clamp(5.5rem, 16vw, 7rem)',
                    background: 'linear-gradient(135deg, #FFD200 30%, #FFA500 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 20px #FFD20088)',
                  }}>
                  {count}<span style={{ fontSize: '0.45em', verticalAlign: 'super', lineHeight: 0 }}>+</span>
                </span>
                <span className="font-mono text-[11px] tracking-[0.3em] uppercase font-semibold mt-1"
                  style={{ color: '#FFD200', opacity: 0.75 }}>Years</span>
              </div>
            </div>

            {/* Divider desktop only */}
            <div className="hidden md:block w-[1.5px] self-stretch my-1" style={{ background: 'linear-gradient(to bottom, transparent, #0E1A3033, transparent)' }} />

            {/* Paragraph */}
            <p className="text-ink/70 text-sm md:text-base leading-relaxed max-w-sm mt-3 md:mt-0" style={{textAlign:'justify'}}>
              Operating from two fully-equipped plants in Mirigama, just an hour from Colombo, we leverage 50 years of experience to meet high-volume demand with exceptional precision.
            </p>

            {/* 50+ DESKTOP ONLY — adjust marginLeft to move left/right */}
            <div className="hidden md:flex flex-col items-center justify-center leading-none flex-none" style={{ marginLeft: '200px' }}>
              <span
                className="font-display font-bold leading-none tabular-nums"
                style={{
                  fontSize: 'clamp(5rem, 8vw, 7.5rem)',
                  background: 'linear-gradient(135deg, #FFD200 30%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 28px #FFD20088)',
                }}>
                {count}<span style={{ fontSize: '0.45em', verticalAlign: 'super', lineHeight: 0 }}>+</span>
              </span>
              <span className="font-mono text-xs tracking-[0.3em] uppercase font-semibold mt-1"
                style={{ color: '#FFD200', opacity: 0.75 }}>Years</span>
            </div>

          </div>

          {/* ── DESKTOP timeline ── */}
          <div className={`hidden md:block jrn-scale${visible ? ' jrn-visible' : ''}`}>
            <div className="flex flex-col">

              {/* TOP CARDS — cols 1, 3, 5, 7 */}
              <div className="grid grid-cols-7 gap-3 mb-0">
                {milestones.map((m, i) => {
                  const above = i % 2 === 0
                  return (
                    <div key={m.num} className="flex flex-col justify-end" style={{ minHeight: 116 }}>
                      {above ? (
                        <div
                          className={`jrn-card jrn-card-above jrn-card-above-${i+1} relative rounded-2xl overflow-hidden cursor-default`}
                          style={{
                            background: '#0E1A30',
                            boxShadow: hovered === i
                              ? `0 28px 60px rgba(14,26,48,0.38), 0 0 0 1.5px ${m.accent}66`
                              : '0 8px 28px rgba(14,26,48,0.14)',
                            borderColor: hovered === i ? m.accent : 'transparent',
                          }}
                          onMouseEnter={() => setHovered(i)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          {/* Shimmer on hover */}
                          <div className="card-shimmer" />

                          {/* Top accent bar */}
                          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: m.accent }} />

                          {/* Glow blob - swapped blur for radial gradient */}
                          <div
                            className="card-glow absolute -top-8 -right-8 w-36 h-36 rounded-full"
                            style={{ background: `radial-gradient(circle, ${m.accent} 0%, transparent 70%)`, opacity: hovered === i ? 0.35 : 0.20 }}
                          />

                          {/* Ghost year */}
                          <div className="absolute bottom-2 right-3 font-display font-bold leading-none select-none pointer-events-none"
                            style={{ fontSize: 44, color: m.accent, opacity: hovered === i ? 0.13 : 0.07, transition: 'opacity 0.35s' }}>
                            {m.year}
                          </div>

                          <div className="relative p-3 pb-3">
                            {/* Number badge */}
                            <div className="w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold text-[9px] mb-1.5 border-2 flex-none"
                              style={{ borderColor: m.accent, color: m.accent }}>
                              {m.num}
                            </div>
                            <h3 className="font-display text-sm md:text-base text-white leading-snug mb-1"
                              style={{ transition: 'color 0.3s', color: hovered === i ? m.accent : 'white' }}>
                              {m.title}
                            </h3>
                            <p className="text-xs text-white/55 leading-snug">{m.desc}</p>
                          </div>
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>
                  )
                })}
              </div>

              {/* SPINE ROW */}
              <div className="relative flex items-center my-1.5">
                {/* Gradient line */}
                <div className="jrn-line absolute left-0 right-0 h-[3px] rounded-full"
                  style={{ background: 'linear-gradient(to right, #00AEEF 0%, #EC008C 42%, #FFD200 100%)' }} />

                <div className="grid grid-cols-7 gap-3 w-full relative z-10">
                  {milestones.map((m, i) => {
                    const above = i % 2 === 0
                    return (
                      <div key={m.num} className="flex flex-col items-center">
                        {/* Tick above (for above-cards) */}
                        {above && (
                          <div className={`jrn-tick jrn-tick-${i+1} w-[2px] mb-1`}
                            style={{ height: 12, background: m.accent, opacity: 0.6, transformOrigin: 'bottom center' }} />
                        )}

                        {/* Node */}
                        <div
                          className={`jrn-node-wrap jrn-node jrn-node-${i+1} relative flex items-center justify-center cursor-default`}
                          style={{ width: 42, height: 42 }}
                          onMouseEnter={() => setHovered(i)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          {/* Outer pulse ring */}
                          <div className="node-ring absolute inset-0 rounded-full"
                            style={{ background: m.accent, opacity: 0.2 }} />
                          {/* Main circle */}
                          <div className="relative w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-xs border-[3px] border-white z-10"
                            style={{
                              background: m.accent,
                              color: '#0E1A30',
                              boxShadow: `0 0 0 ${hovered === i ? 6 : 4}px ${m.accent}44`,
                              transition: 'box-shadow 0.3s',
                              transform: hovered === i ? 'scale(1.15) translateZ(0)' : 'scale(1) translateZ(0)',
                              transitionProperty: 'transform, box-shadow',
                              transitionDuration: '0.3s',
                            }}>
                            {m.num}
                          </div>
                        </div>

                        {/* Year label */}
                        <div className={`jrn-year jrn-year-${i+1} font-mono text-xs tracking-[0.2em] font-semibold mt-1`}
                          style={{ color: m.accent }}>
                          {m.year}
                        </div>

                        {/* Tick below (for below-cards) */}
                        {!above && (
                          <div className={`jrn-tick jrn-tick-${i+1} w-[2px] mt-1`}
                            style={{ height: 12, background: m.accent, opacity: 0.6 }} />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* BOTTOM CARDS — cols 2, 4, 6 */}
              <div className="grid grid-cols-7 gap-3 mt-0">
                {milestones.map((m, i) => {
                  const below = i % 2 !== 0
                  return (
                    <div key={m.num} style={{ minHeight: 116 }}>
                      {below ? (
                        <div
                          className={`jrn-card jrn-card-below jrn-card-below-${i+1} relative rounded-2xl overflow-hidden cursor-default h-full`}
                          style={{
                            background: '#0E1A30',
                            boxShadow: hovered === i
                              ? `0 28px 60px rgba(14,26,48,0.38), 0 0 0 1.5px ${m.accent}66`
                              : '0 8px 28px rgba(14,26,48,0.14)',
                            borderColor: hovered === i ? m.accent : 'transparent',
                          }}
                          onMouseEnter={() => setHovered(i)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          <div className="card-shimmer" />
                          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: m.accent }} />
                          <div className="card-glow absolute -top-8 -right-8 w-36 h-36 rounded-full"
                            style={{ background: `radial-gradient(circle, ${m.accent} 0%, transparent 70%)`, opacity: hovered === i ? 0.35 : 0.20 }} />
                          <div className="absolute bottom-2 right-3 font-display font-bold leading-none select-none pointer-events-none"
                            style={{ fontSize: 44, color: m.accent, opacity: hovered === i ? 0.13 : 0.07, transition: 'opacity 0.35s' }}>
                            {m.year}
                          </div>
                          <div className="relative p-3 pb-3">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold text-[9px] mb-1.5 border-2 flex-none"
                              style={{ borderColor: m.accent, color: m.accent }}>
                              {m.num}
                            </div>
                            <h3 className="font-display text-sm md:text-base text-white leading-snug mb-1"
                              style={{ transition: 'color 0.3s', color: hovered === i ? m.accent : 'white' }}>
                              {m.title}
                            </h3>
                            <p className="text-xs text-white/55 leading-snug">{m.desc}</p>
                          </div>
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>
                  )
                })}
              </div>

            </div>
          </div>

          {/* ── MOBILE vertical ── */}
          <div className={`md:hidden relative${visible ? ' jrn-visible' : ''}`}>

            {/* Vertical gradient spine */}
            <div className="absolute left-[22px] top-0 bottom-0 w-[3px] rounded-full"
              style={{ background: 'linear-gradient(to bottom, #00AEEF 0%, #EC008C 55%, #FFD200 100%)' }} />

            <div className="flex flex-col gap-5 pl-14">
              {milestones.map((m, i) => (
                <div key={m.num} className={`${i % 2 === 0 ? `jrn-card-above jrn-card-above-${i+1}` : `jrn-card-below jrn-card-below-${i+1}`} relative`}>

                  {/* Node on the spine */}
                  <div className={`jrn-node jrn-node-${i+1} absolute -left-[52px] top-5 flex items-center justify-center`}
                    style={{ width: 44, height: 44 }}>
                    {/* pulse ring */}
                    <div className="absolute inset-0 rounded-full" style={{ background: m.accent, opacity: 0.2 }} />
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs border-[3px] border-white z-10"
                      style={{ background: m.accent, color: '#0E1A30', boxShadow: `0 0 0 4px ${m.accent}44` }}>
                      {m.num}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="jrn-card rounded-2xl relative overflow-hidden"
                    style={{ background: '#0E1A30', boxShadow: '0 6px 28px rgba(14,26,48,0.22)', border: '1.5px solid transparent' }}>

                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: m.accent }} />

                    {/* Glow blob - Swapped blur for radial-gradient */}
                    <div className="card-glow absolute -top-6 -right-6 w-32 h-32 rounded-full"
                      style={{ background: `radial-gradient(circle, ${m.accent} 0%, transparent 70%)`, opacity: 0.25 }} />

                    {/* Ghost year watermark */}
                    <div className="absolute bottom-1 right-3 font-display font-bold leading-none select-none pointer-events-none"
                      style={{ fontSize: 56, color: m.accent, opacity: 0.07 }}>
                      {m.year}
                    </div>

                    {/* Shimmer */}
                    <div className="card-shimmer" />

                    <div className="relative p-5">
                      {/* Year pill */}
                      <span className="inline-block font-mono text-[10px] tracking-[0.25em] font-semibold uppercase mb-3 px-2 py-0.5 rounded-full"
                        style={{ color: m.accent, background: `${m.accent}18`, border: `1px solid ${m.accent}44` }}>
                        {m.year}
                      </span>
                      <h3 className="font-display text-base text-white leading-snug mb-2">{m.title}</h3>
                      <p className="text-xs text-white/55 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}