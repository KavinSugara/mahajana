import { useEffect, useRef, useState } from "react";
import { whatsappQuoteLink, mailtoQuoteLink } from "../lib/quote";

/**
 * Shared "Get A Quote" button with a WhatsApp / Email dropdown.
 *
 * Props:
 * - align: 'left' | 'right'   → which edge the dropdown lines up with
 * - placement: 'above' | 'below' → whether the dropdown opens above or below the button
 * - fullWidth: boolean        → stretches button + dropdown to fill parent (used in mobile menu)
 * - triggerClassName: string  → extra classes for the button itself (sizing per context)
 * - label: string
 */
export default function QuoteButton({
  align = "left",
  placement = "below",
  fullWidth = false,
  triggerClassName = "",
  label = "Get A Quote",
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
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

  const positionClass = placement === "above" ? "bottom-full mb-2" : "top-full mt-2";
  const alignClass = fullWidth ? "left-0" : align === "right" ? "right-0" : "left-0";
  const originClass =
    (placement === "above" ? "bottom" : "top") + " " + (align === "right" ? "right" : "left");

  return (
    <div className={`relative ${fullWidth ? "w-full" : ""}`} ref={menuRef}>
      <style>{`
        @keyframes quoteDropdownIn {
          from { opacity: 0; transform: translateY(${placement === "above" ? "14px" : "-10px"}) scale(0.92); }
          60%  { opacity: 1; }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .quote-dropdown-anim {
          animation: quoteDropdownIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          transform-origin: ${originClass};
        }
      `}</style>

      <button
        type="button"
        onClick={() => setDropdownOpen((o) => !o)}
        aria-label="Choose contact method"
        aria-expanded={dropdownOpen}
        className={`flex items-stretch rounded-full bg-pyellow overflow-hidden hover:bg-white transition-colors ${
          fullWidth ? "w-full" : ""
        } ${triggerClassName}`}
      >
        <span
          className={`text-navy font-semibold text-xs md:text-sm pl-4 pr-2.5 py-2 md:pl-5 md:pr-3 md:py-2.5 whitespace-nowrap ${
            fullWidth ? "flex-1 text-center" : ""
          }`}
        >
          {label}
        </span>
        <span className="pl-1.5 pr-3 py-2 md:pl-2 md:pr-4 md:py-2.5 border-l border-navy/15 text-navy flex items-center">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
          >
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {dropdownOpen && (
        <div
          className={`quote-dropdown-anim absolute ${positionClass} ${alignClass} ${
            fullWidth ? "w-full" : "w-52"
          } rounded-2xl shadow-xl border border-navy/10 overflow-hidden py-1.5 z-50`}
          style={{ background: "#F7F3EA" }}
        >
          <a
            href={whatsappQuoteLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDropdownOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-navy hover:bg-navy/10 transition-colors"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/10 flex-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.68 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.29 9.71 20.28 11.91C20.28 16.46 16.58 20.15 12.04 20.15Z" />
              </svg>
            </span>
            WhatsApp
          </a>
          <a
            href={mailtoQuoteLink}
            onClick={() => setDropdownOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-navy hover:bg-navy/10 transition-colors border-t border-navy/10"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pcyan/10 flex-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 6 10-6" />
              </svg>
            </span>
            Email
          </a>
        </div>
      )}
    </div>
  );
}
