import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects.client';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}