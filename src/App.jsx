import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <main id="top" className="min-h-screen bg-portfolio-bg text-portfolio-primary">
      <CustomCursor />
      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24">
        <p className="font-heading text-sm uppercase tracking-[0.4em] text-portfolio-accent">
          Vivaan Vora
        </p>
        <h1 className="mt-5 max-w-4xl font-heading text-5xl font-bold leading-none md:text-7xl">
          Robotics Engineering Student @ UC Santa Cruz
        </h1>
      </section>
    </main>
  )
}

export default App
