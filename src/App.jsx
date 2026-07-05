import './index.css'
import { useReveal } from './hooks/useReveal'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Facilities from './components/Facilities'
import Journey    from './components/Journey'
import WhyUs      from './components/WhyUs'
import Products   from './components/Products'
import Clients    from './components/Map'
import Footer     from './components/Footer'
import { ColorBar } from './components/UI'
import MissionVision from './components/MissionVision'

export default function App() {
  useReveal()
  return (
    <div className="font-body text-ink bg-paper">
      <Navbar />
      <Hero />
      <ColorBar />
      <About />
      <MissionVision />
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
