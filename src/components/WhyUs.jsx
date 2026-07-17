import { RegMark } from './UI'

const reasons = [
  'Over 50 years of trusted service',
  'Complete in-house production',
  'Customised finishes: lamination, varnishing, foiling & more',
  "Skilled team, many with 20+ years' experience",
  'Serving industries from healthcare to hospitality',
  'Long-term client relationships',
  'Free nationwide delivery',
]

const stats = [
  { val: '50+',  color: 'text-pcyan',    label: 'Years of Service' },
  { val: '02',   color: 'text-pmagenta', label: 'In-House Plants' },
  { val: '10+',  color: 'text-pyellow',  label: 'Industries Served' },
  { val: '100%', color: 'text-white',    label: 'On-Time Delivery' },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-navy py-14 md:py-24"
      style={{ contain: 'layout style paint', contentVisibility: 'auto', containIntrinsicSize: '1px 900px', transform: 'translateZ(0)' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Stats row — mobile only, no reveal animation */}
        <div className="grid grid-cols-2 gap-3 mb-10 md:hidden">
          {stats.map(({ val, color, label }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <span className={`font-display text-3xl ${color}`}>{val}</span>
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/60 uppercase mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20">

          {/* Text — reveal only on md+ */}
          <div className="md:reveal">
            <span className="flex items-center gap-2 text-white/60 font-mono text-xs tracking-[0.25em] uppercase mb-4">
              <RegMark />Why Choose Us
            </span>
            <h2 className="font-display text-2xl md:text-4xl text-white leading-tight mb-6">
              Why businesses<br />choose Mahajana
            </h2>
            <ul className="space-y-3 md:space-y-4">
              {reasons.map(r => (
                <li key={r} className="flex gap-3 text-white/85 text-sm md:text-[15px]">
                  <span className="text-pyellow font-bold mt-0.5 flex-none">✓</span>{r}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats — desktop only, with reveal */}
          <div className="hidden md:grid grid-cols-2 gap-5 content-center">
            {stats.map(({ val, color, label }) => (
              <div key={label} className="reveal bg-white/5 border border-white/10 rounded-2xl p-7">
                <span className={`font-display text-4xl ${color}`}>{val}</span>
                <p className="font-mono text-[11px] tracking-[0.2em] text-white/60 uppercase mt-2">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
