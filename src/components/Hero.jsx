import { useEffect, useState, useRef } from "react";
import videoBg from "../assets/cover.mp4";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const wasVisible = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisible.current) {
          setVisible(false);
          setTimeout(() => setVisible(true), 50);
        }
        wasVisible.current = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes revealDown {
          from { opacity: 0; transform: translateY(-28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-reveal {
          opacity: 0;
        }
        .hero-reveal.play {
          animation: revealDown 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <section ref={sectionRef} id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-navydeep">

        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 2,
            background: 'linear-gradient(to top, rgba(14,26,48,0.92) 0%, rgba(14,26,48,0.5) 40%, rgba(14,26,48,0.1) 100%)',
          }}
        />

        <div
          className="absolute bottom-0 left-0 right-0 h-100 md:h-100 pointer-events-none"
          style={{
            zIndex: 2,
            background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, #F7F3EA 100%)',
          }}
        />

        <div
          className="absolute bottom-10 left-5 right-5 md:left-12 md:right-auto md:max-w-xl"
          style={{ zIndex: 3 }}
        >
          <div
            className={`flex gap-[4px] mb-4 hero-reveal${visible ? ' play' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block w-5 h-[3px] bg-pcyan" />
            <span className="block w-5 h-[3px] bg-pmagenta" />
            <span className="block w-5 h-[3px] bg-pyellow" />
            <span className="block w-5 h-[3px] bg-black" />
          </div>

          <h1
            className={`font-display text-white leading-[0.95] mb-4 text-[2.4rem] md:text-[4.6rem] hero-reveal${visible ? ' play' : ''}`}
            style={{ animationDelay: '0.6s' }}
          >
            Mahajana Printers
          </h1>

          <p
            className={`text-white/60 text-lg md:text-2xl leading-relaxed mb-6 max-w-[620px] md:max-w-md hero-reveal${visible ? ' play' : ''}`}
            style={{ animationDelay: '1.2s' }}
          >
             Printing &amp; Packaging Excellence Since 1974
          </p>

          <div
            className={`flex gap-3 hero-reveal${visible ? ' play' : ''}`}
            style={{ animationDelay: '1.8s' }}
          >
            <a href="https://wa.me/94771324882" target="_blank" rel="noopener noreferrer" className="bg-pyellow text-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white transition-colors">
              Get A Quote
            </a>
            <a href="#about" className="border border-white/30 text-white/80 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>

      </section>
    </>
  );
}