import { lazy, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { CustomCursor } from './components/layout/CustomCursor'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'

const About        = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })))
const Experience   = lazy(() => import('./components/sections/Experience').then(m => ({ default: m.Experience })))
const Projects     = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })))
const Skills       = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })))
const Education    = lazy(() => import('./components/sections/Education').then(m => ({ default: m.Education })))
const Certifications = lazy(() => import('./components/sections/Certifications').then(m => ({ default: m.Certifications })))
const Languages    = lazy(() => import('./components/sections/Languages').then(m => ({ default: m.Languages })))
const Passions     = lazy(() => import('./components/sections/Passions').then(m => ({ default: m.Passions })))
const Contact      = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })))
const TweaksPanel  = lazy(() => import('./components/dev/TweaksPanel').then(m => ({ default: m.TweaksPanel })))

export default function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Languages />
          <Passions />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      {import.meta.env.DEV && (
        <Suspense fallback={null}>
          <TweaksPanel />
        </Suspense>
      )}
    </ThemeProvider>
  )
}
