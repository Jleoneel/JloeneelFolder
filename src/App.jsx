import { MotionConfig } from 'framer-motion'
import { I18nProvider } from './i18n/index.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Stack from './components/Stack.jsx'
import Projects from './components/Projects.jsx'
import References from './components/References.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <I18nProvider>
      <MotionConfig reducedMotion="user">
        <Nav />
        <main>
          <Hero />
          <About />
          <Stack />
          <Projects />
          <References />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </I18nProvider>
  )
}
