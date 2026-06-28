import './index.css'
import { useReveal } from './hooks/useReveal'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Facilities from './components/Facilities'
import Journey    from './components/Journey'
import WhyUs      from './components/WhyUs'
import Products   from './components/Products'
import Clients    from './components/Clients'
import Footer     from './components/Footer'
import { ColorBar } from './components/UI'

export default function App() {
  useReveal()
  return (
    <div className="font-body text-ink bg-paper">
      <Navbar />
      <Hero />
      <ColorBar />
      <About />
      <Facilities />
      <Journey />
      <WhyUs />
      <Products />
      <ColorBar />
      <Clients />
      <Footer />
    </div>
  )
}
