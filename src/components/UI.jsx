export function ColorBar() {
  return (
    <div className="flex flex-col items-center gap-1 py-6 bg-paper">
      <div className="flex gap-[3px]">
        <span className="block w-[18px] h-[7px] bg-pcyan" />
        <span className="block w-[18px] h-[7px] bg-pmagenta" />
        <span className="block w-[18px] h-[7px] bg-pyellow" />
        <span className="block w-[18px] h-[7px] bg-navy" />
      </div>
      <span className="font-mono text-[10px] tracking-[0.3em] text-navy/40">C&nbsp;&nbsp;M&nbsp;&nbsp;Y&nbsp;&nbsp;K</span>
    </div>
  )
}

export function Placeholder({ label, dark = false, className = '' }) {
  return (
    <div className={`ph ${dark ? 'ph-dark' : ''} ${className}`}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
      <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase">{label}</span>
    </div>
  )
}

export function RegMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9"/>
      <line x1="12" y1="2" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
    </svg>
  )
}

export function SectionLabel({ children }) {
  return (
    <span className="flex items-center gap-2 text-navy/70 font-mono text-xs tracking-[0.25em] uppercase mb-4">
      <RegMark />{children}
    </span>
  )
}
