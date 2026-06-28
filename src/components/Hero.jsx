export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-navydeep">

      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
        autoPlay muted loop playsInline
      >
        <source src="cover.mp4" type="video/mp4" />
      </video>

      {/* Gradient — stronger on mobile so text is always readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to top, rgba(14,26,48,0.92) 0%, rgba(14,26,48,0.5) 40%, rgba(14,26,48,0.1) 100%)',
        }}
      />

      {/* Content — bottom-left, safe padding from edges */}
      <div
        className="absolute bottom-10 left-5 right-5 md:left-12 md:right-auto md:max-w-lg"
        style={{ zIndex: 3 }}
      >
        <div className="flex gap-[4px] mb-4">
          <span className="block w-5 h-[3px] bg-pcyan" />
          <span className="block w-5 h-[3px] bg-pmagenta" />
          <span className="block w-5 h-[3px] bg-pyellow" />
        </div>

        <h1 className="font-display text-white leading-tight mb-2 text-[1.9rem] md:text-[2.8rem]">
          Mahajana Printers
        </h1>

        <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-[300px] md:max-w-sm">
          Printing &amp; packaging excellence since 1974 — built on craft, delivered on time.
        </p>

        <div className="flex gap-3">
          <a href="#contact" className="bg-pyellow text-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white transition-colors">
            Get A Quote
          </a>
          <a href="#about" className="border border-white/30 text-white/80 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors">
            Learn More
          </a>
        </div>
      </div>

    </section>
  )
}
