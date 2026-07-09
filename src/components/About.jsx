import { SectionLabel } from './UI'

export default function About() {
  return (
    <section id="about" className="bg-paper py-20 md:py-32">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">

        <div className="grid md:grid-cols-[1fr_1.15fr] gap-12 md:gap-20 lg:gap-24 items-center">
          <div className="reveal">
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-navy leading-tight mb-5 md:mb-6">
              Reliability and excellence,<br />since 1974.
            </h2>
            <p className="text-ink/75 leading-relaxed text-base md:text-lg lg:text-xl">
              At Mahajana Printers, our philosophy is rooted in the belief that reliability and excellence are the foundations of trust. We believe a company is only as good as its word, so we never compromise on our commitments. For over 50 years we've treated "quality" and "deadlines" with equal importance, a legacy of integrity that turns clients into long-term partners.
            </p>
          </div>

          {/* Full image — no crop, natural height */}
          <div className="reveal rounded-2xl md:rounded-3xl overflow-hidden">
            <img
              src="oldImg.jpeg"
              alt="Mahajana Printers 1974"
              className="w-full h-auto block"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
