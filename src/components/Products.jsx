import { Placeholder, SectionLabel } from './UI'

const products = [
  'Packaging Boxes','Cartons','Bags','Visiting Cards','Gift Vouchers','Stickers',
  'Invoice / Bill Books','Brochures','Paper Mats','Leaflets','Tags','Package Inserts',
  'Letterheads','Files / Dockets','Takeaway Boxes','Calendars',
]

const samples = [
  'image — packaging sample',
  'image — carton sample',
  'image — stationery sample',
  'image — gift / retail sample',
]

export default function Products() {
  return (
    <section id="products" className="bg-white py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="mb-8 md:mb-12 reveal">
          <SectionLabel>What We Print</SectionLabel>
          <h2 className="font-display text-2xl md:text-4xl text-navy leading-tight mb-3">A full range,<br />printed to order.</h2>
          <p className="text-ink/70 text-sm md:text-base leading-relaxed">From packaging boxes to letterheads — if it's printed, there's a good chance we can make it.</p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-14 reveal">
          {products.map(p => (
            <span key={p} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-navy/15 text-xs md:text-sm text-navy/80 font-medium">{p}</span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {samples.map(s => (
            <Placeholder key={s} label={s} className="reveal aspect-square" />
          ))}
        </div>

      </div>
    </section>
  )
}
