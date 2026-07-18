import { SectionLabel } from './UI'

// These live in /public, so Vite serves them straight from the root —
// no import needed, just reference the path as a string.
const packagingImg = '/packaging.png'
const cartonImg = '/calendar.png'
const letterheadImg = '/documents.jpeg'
const giftImg = '/bags.png'

const products = [
  'Packaging Boxes','Calendars',' Gift Bags','Visiting Cards','Gift Vouchers','Stickers',
  'Invoice / Bill Books','Brochures','Leaflets','Tags','Package Inserts',
  'Letterheads','Files / Dockets','Takeaway Boxes','Calendars', 'Paper Mats','Certificates','Menus','Envelopes'
]

// Each sample is tagged with one of the brand's four print colors (see the
// CMYK dots in the footer) — a small thread that ties this grid back to the
// press itself: cyan / magenta / yellow / key(navy).
const samples = [
  { img: packagingImg, label: 'Packaging', sub: 'Boxes, cartons & retail packs' },
  { img: cartonImg, label: 'Calendars', sub: 'All types of calendars'},
  { img: letterheadImg, label: 'Documents', sub: 'All types of office documents', fit: 'contain', pad: 'p-0.5 md:p-1.5'},
  { img: giftImg, label: 'Bags', sub: 'Bags, tags & vouchers', fit: 'contain'},
]

export default function Products() {
  return (
    <section id="products" className="bg-white py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="mb-8 md:mb-12 reveal">
          <SectionLabel>What We Print</SectionLabel>
          <h2 className="font-display text-2xl md:text-4xl text-navy leading-tight mb-3">A full range,<br />printed to order.</h2>
          <p className="text-ink/70 text-sm md:text-base leading-relaxed max-w-xl">From packaging boxes to letterheads. If it's printed, there's a good chance we can make it.</p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-14 reveal">
          {products.map(p => (
            <span
              key={p}
              className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-navy/15 text-xs md:text-sm text-navy/80 font-medium transition-colors hover:border-navy/40 hover:bg-navy/[0.03] cursor-default"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {samples.map(s => (
            <figure
              key={s.label}
              className="reveal group relative aspect-square rounded-2xl overflow-hidden bg-navy/[0.03] border border-navy/10 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={s.img}
                alt={s.label}
                className={
                  s.fit === 'contain'
                    ? `absolute inset-0 w-full h-full object-contain ${s.pad || 'p-3 md:p-5'} transition-transform duration-500 ease-out group-hover:scale-[1.06]`
                    : "absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                }
                loading="lazy"
              />

              {/* gradient scrim so the caption stays legible over any photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-navy/0" />

              {/* press-color dot: ties each sample back to the CMYK marks in the footer */}
            

              <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <div className="text-white font-display text-sm md:text-base leading-tight">{s.label}</div>
                <div className="text-white/75 text-[11px] md:text-xs mt-0.5">{s.sub}</div>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  )
}
