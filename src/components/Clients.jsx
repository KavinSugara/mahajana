import { SectionLabel } from './UI'

const clients = [
  'ODEL','Cotton Collection','Softlogic','Chandanalepa','DAMRO',
  'Lady J','Hemas','Thilakawardhana','Avenra Hotels','Delight',
  'Nihal Family','Delmo',"Choy's",'Arpico','Full Moon Garden',
  'Sriyani Dress Point','Grand Espresso','AB Mauri','Silvermill','DSL',
]

export default function Clients() {
  return (
    <section id="clients" className="bg-paper py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="mb-8 md:mb-12 reveal">
          <SectionLabel>Client Portfolio</SectionLabel>
          <h2 className="font-display text-2xl md:text-4xl text-navy leading-tight mb-3">Trusted by these<br />leading names.</h2>
          <p className="text-ink/70 text-sm md:text-base leading-relaxed max-w-xl">Serving restaurants, healthcare, personal care, apparel, hospitality and more across Sri Lanka.</p>
        </div>

        {/* Client name pills — works great on mobile */}
        <div className="flex flex-wrap gap-2 md:gap-3 reveal">
          {clients.map(name => (
            <span
              key={name}
              className="px-4 py-2 rounded-full bg-navy text-white text-xs md:text-sm font-medium"
            >
              {name}
            </span>
          ))}
        </div>

        <div className="mt-10 md:mt-12 bg-navy rounded-2xl p-6 md:p-10 text-center reveal">
          <p className="text-white/70 text-sm md:text-base mb-4">Ready to join our growing list of partners?</p>
          <a href="#contact" className="inline-flex bg-pyellow text-navy font-semibold text-sm px-6 py-3 rounded-full hover:bg-white transition-colors">
            Contact Us Today
          </a>
        </div>

      </div>
    </section>
  )
}
