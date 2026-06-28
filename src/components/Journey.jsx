import { SectionLabel } from './UI'

const milestones = [
  { num: '01', year: '1974', title: 'The Beginning',            desc: 'Established on family-owned land with a single machine and a clear vision for delivering quality printing excellence.' },
  { num: '02', year: '2004', title: 'Full In-House Production', desc: 'Achieved complete end-to-end production control, ensuring higher quality standards and faster turnaround for all clients.' },
  { num: '03', year: '2010', title: 'Growing Capacity',         desc: 'Significantly grew operational capacity by investing in a vast fleet of high-performance offset printing machines.' },
  { num: '04', year: '2015', title: 'Second Facility',          desc: 'Opened a second fully-equipped facility in Mirigama to meet rising market demand and maximise efficiency.' },
  { num: '05', year: '2022', title: '10+ Industries Nationwide',desc: 'Grew our expertise to provide trusted, customised packaging solutions for over 10 major industries across the country.' },
  { num: '06', year: '2025', title: 'Latest Technology',        desc: 'Purchased state-of-the-art machinery with updated automation for the highest level of precision and consistency.' },
]

export default function Journey() {
  return (
    <section id="journey" className="bg-paper py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="mb-10 md:mb-14 reveal">
          <SectionLabel>Our Journey</SectionLabel>
          <h2 className="font-display text-2xl md:text-4xl text-navy leading-tight mb-3">Fifty years,<br />six chapters.</h2>
          <p className="text-ink/70 text-sm md:text-base leading-relaxed max-w-xl">Operating from two fully-equipped plants in Mirigama, just an hour from Colombo, we leverage 50 years of experience to meet high-volume demand with exceptional precision.</p>
        </div>

        <ol className="relative border-l-2 border-navy/15 ml-3">
          {milestones.map(({ num, year, title, desc }, i) => (
            <li key={num} className={`reveal ml-7 md:ml-10 ${i < milestones.length - 1 ? 'mb-8 md:mb-10' : ''}`}>
              <span className="absolute -left-[17px] md:-left-[21px] flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white font-mono text-[10px]">{num}</span>
              <span className="font-mono text-xs text-pmagenta tracking-widest">{year}</span>
              <h3 className="font-display text-base md:text-lg text-navy mt-1 mb-1">{title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
