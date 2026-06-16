import About from './components/About.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <main className="min-h-screen bg-portfolio-bg text-portfolio-primary">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App
