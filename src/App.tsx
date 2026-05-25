import { ThemeProvider } from './context/ThemeContext'
import { CustomCursor } from './components/layout/CustomCursor'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Education } from './components/sections/Education'
import { Certifications } from './components/sections/Certifications'
import { Languages } from './components/sections/Languages'
import { Passions } from './components/sections/Passions'
import { PhotoGallery } from './components/sections/PhotoGallery'
import { Links } from './components/sections/Links'
import { Contact } from './components/sections/Contact'
import { TweaksPanel } from './components/dev/TweaksPanel'

export default function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Languages />
        <Passions />
        <PhotoGallery />
        <Links />
        <Contact />
      </main>
      <Footer />
      {import.meta.env.DEV && <TweaksPanel />}
    </ThemeProvider>
  )
}
