import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Stack from './components/Stack.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <>
        <Nav />
        <main>
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </>
    </MotionConfig>
  )
}
