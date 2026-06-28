import { Placeholder, SectionLabel } from './UI'

export default function About() {
  return (
    <section id="about" className="bg-paper py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-10 md:mb-16">
          <div className="reveal">
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl text-navy leading-tight mb-4">
              Reliability and excellence,<br />since 1974.
            </h2>
            <p className="text-ink/75 leading-relaxed text-sm md:text-base">
              At Mahajana Printers, our philosophy is rooted in the belief that reliability and excellence are the foundations of trust. We believe a company is only as good as its word, so we never compromise on our commitments. For over 50 years we've treated "quality" and "deadlines" with equal importance — a legacy of integrity that turns clients into long-term partners.
            </p>
          </div>
          <Placeholder label="image — Mirigama plant exterior" className="reveal aspect-[4/3]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { color: 'text-pyellow', label: 'Our Mission', text: 'To empower businesses across every industry — from pharmaceuticals to apparel — with innovative, high-quality printing and packaging. With over five decades of expertise, we deliver value-added finishes like laminating, varnishing and foiling that turn your vision into a competitive market advantage.' },
            { color: 'text-pcyan',   label: 'Our Vision',  text: 'To be the premier printing and packaging partner — recognised for blending a rich heritage of craftsmanship with the cutting edge of modern technology, and remaining the most trusted name for brands that demand the best.' },
            { color: 'text-pmagenta', label: 'Our Goals', list: ['Quality & Precision in every stage of production', 'Operational Excellence through modern machinery', 'Customer Loyalty via 100% on-time delivery', 'Versatility across healthcare, retail & more'] },
          ].map(({ color, label, text, list }) => (
            <div key={label} className="reveal bg-navy text-white rounded-2xl p-6 md:p-8">
              <span className={`font-mono text-[11px] tracking-[0.25em] uppercase ${color}`}>{label}</span>
              {text && <p className="mt-3 text-white/85 text-sm leading-relaxed">{text}</p>}
              {list && (
                <ul className="mt-3 text-white/85 text-sm leading-relaxed space-y-2">
                  {list.map(item => <li key={item}>· {item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
