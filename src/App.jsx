import { useEffect } from 'react'
import Lenis from 'lenis'
import './index.css'
import { useReveal } from './hooks/useReveal'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Facilities from './components/Facilities'
import Journey    from './components/Journey'
import WhyUs      from './components/WhyUs'
import Products   from './components/Products'
import Map        from './components/Map'
import Footer     from './components/Footer'
import { ColorBar } from './components/UI'
import MissionVision from './components/MissionVision'

export default function App() {
  useReveal()

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Adjust for more/less smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false, // Keep native scrolling on mobile for better UX
      touchMultiplier: 2,
    })

    // Tie Lenis into the browser's animation loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Cleanup on unmount
    return () => {
      lenis.destroy()
    }
  }, [])

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
      <Map />
      <Footer />
    </div>
  )
}