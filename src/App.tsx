import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Credibility from './components/Credibility'
import About from './components/About'
import Areas from './components/Areas'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="bg-[#FDFDFD] min-h-screen text-[#1A1A1A] antialiased selection:bg-[#C59C47] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Credibility />
        <About />
        <Areas />
        <Process />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
