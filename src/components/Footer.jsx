export default function Footer() {
  return (
    <footer id="contact" className="bg-navydeep text-white pt-14 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-10 md:pb-14 border-b border-white/10">

          <div>
            {/* White pill behind logo so dark text is visible on dark footer */}
            <div className="inline-block rounded-xl px-4 py-2 mb-5">
              <img src="logo.png" alt="Mahajana Printers" className="h-10 w-auto" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Your trusted printing and packaging service provider with over 50 years of experience, offering high-quality, customised solutions.
            </p>
          </div>

          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/50">Get In Touch</span>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex gap-3 items-start">
                <svg className="mt-0.5 flex-none" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>033 227 3230 &nbsp;|&nbsp; 033 495 0125</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="mt-0.5 flex-none" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 6l-10 7L2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/>
                </svg>
                mahajanaprinters.lk@gmail.com
              </li>
              <li className="flex gap-3 items-start">
                <svg className="mt-0.5 flex-none" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>23, Danowita Road, Mirigama<br /><span className="text-white/50 text-xs">Colombo: No. 63/2, Maliban Street, Colombo 11</span></span>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/50">Quick Links</span>
            <ul className="mt-5 grid grid-cols-2 md:grid-cols-1 gap-y-3 gap-x-4 text-sm text-white/70">
              {['About','Facilities','Journey','Why Us','Products','Map'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(' ','-')}`} className="hover:text-pyellow transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-6 text-white/35 text-xs font-mono">
          <span>© 2026 Mahajana Printers. All rights reserved.</span>
          <span>Providing Quality Since 1974</span>
        </div>
      </div>
    </footer>
  )
}
