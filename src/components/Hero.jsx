import { useEffect, useState, useRef } from "react";
import videoBg from "../assets/cover.mp4";

const quoteMessage = `Hello Mahajana Printers, I'd like to request a quote:

*Item:* (e.g. Invoice Book, Poster, Leaflets, Boxes, Calendars, Label, Tags)


*Size:* (A/B size or dimensions)


*Quantity:*


*Printed Colours:* (e.g. 01 / 02 / 03 / 04)


*Name & Phone Number:*


*Email:*
`;

const whatsappQuoteLink = `https://wa.me/94771324882?text=${encodeURIComponent(quoteMessage)}`;

const mailtoQuoteLink = `mailto:mahajanaprinters.lk@gmail.com?subject=${encodeURIComponent(
  "Quote Request"
)}&body=${encodeURIComponent(quoteMessage)}`;

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [channel, setChannel] = useState("whatsapp");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sectionRef = useRef(null);
  const wasVisible = useRef(false);
  const quoteMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (quoteMenuRef.current && !quoteMenuRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

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

  const quoteLink = channel === "whatsapp" ? whatsappQuoteLink : mailtoQuoteLink;

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
            ref={quoteMenuRef}
            className={`hero-reveal${visible ? ' play' : ''}`}
            style={{ animationDelay: '1.8s' }}
          >
            {/* Dropdown options — in normal flow so they push content up */}
            {dropdownOpen && (
              <div className="mb-2 w-44 bg-white rounded-xl shadow-lg overflow-hidden">
                <a
                  href={whatsappQuoteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { setChannel("whatsapp"); setDropdownOpen(false); }}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-navy hover:bg-navy/5 transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href={mailtoQuoteLink}
                  onClick={() => { setChannel("email"); setDropdownOpen(false); }}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-navy hover:bg-navy/5 transition-colors border-t border-navy/10"
                >
                  Email
                </a>
              </div>
            )}

            <div className="flex gap-3">
              <div className="flex items-stretch rounded-full bg-pyellow overflow-hidden">
                <a
                  href={quoteLink}
                  target={channel === "whatsapp" ? "_blank" : undefined}
                  rel={channel === "whatsapp" ? "noopener noreferrer" : undefined}
                  className="text-navy font-semibold text-sm pl-5 pr-3 py-2.5 hover:bg-white transition-colors"
                >
                  Get A Quote
                </a>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((o) => !o)}
                  aria-label="Choose contact method"
                  aria-expanded={dropdownOpen}
                  className="pl-2 pr-4 py-2.5 border-l border-navy/15 text-navy hover:bg-white transition-colors flex items-center"
                >
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <a href="#about" className="border border-white/30 text-white/80 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}