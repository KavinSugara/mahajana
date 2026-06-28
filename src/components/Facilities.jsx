import { Placeholder, SectionLabel } from './UI'

const processes = [
  { num: '01', color: 'text-pmagenta', title: 'Printing',     img: 'image — offset press',        desc: 'High-performance offset machines handle both small and large-scale runs with precision, consistency and speed.' },
  { num: '02', color: 'text-pmagenta', title: 'Die Cutting',  img: 'image — die-cutting machine', desc: 'Precision cutting and embossing with flat-bed and cylinder die-cutting machines.' },
  { num: '03', color: 'text-pmagenta', title: 'Pasting',      img: 'image — pasting line',        desc: 'High-speed pasting machines assemble folding cartons and boxes automatically.' },
  { num: '04', color: 'text-pcyan',   title: 'Lamination',   img: 'image — lamination machine',  desc: 'A protective gloss or matte layer that adds durability and elevates the finish of your printed materials.' },
  { num: '05', color: 'text-pcyan',   title: 'Foiling',      img: 'image — foiled sample',       desc: 'Metallic foils add a reflective, eye-catching finish — ideal for luxury packaging.' },
  { num: '06', color: 'text-pcyan',   title: 'Design House', img: 'image — design team at work', desc: 'Fully equipped with Adobe Illustrator, Photoshop and InDesign — our team helps you design from scratch.' },
]

export default function Facilities() {
  return (
    <section id="facilities" className="bg-white py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="mb-10 md:mb-14 reveal">
          <SectionLabel>In-House Capability</SectionLabel>
          <h2 className="font-display text-2xl md:text-4xl text-navy leading-tight mb-3">Six processes. One roof.</h2>
          <p className="text-ink/70 text-sm md:text-base leading-relaxed max-w-xl">Every stage of production — from pre-press to the final finish — happens inside our own plants.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {processes.map(({ num, color, title, img, desc }) => (
            <div key={num} className="reveal rounded-2xl border border-navy/10 overflow-hidden">
              <Placeholder label={img} className="aspect-[16/9] rounded-none border-0 border-b border-navy/10" />
              <div className="p-5 md:p-6">
                <span className={`font-mono text-[10px] tracking-[0.2em] ${color}`}>PROCESS {num}</span>
                <h3 className="font-display text-base md:text-lg text-navy mt-1.5 mb-1.5">{title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
