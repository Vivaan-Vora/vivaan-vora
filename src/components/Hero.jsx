import { Suspense, lazy, useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import Magnetic from './Magnetic.jsx'

const ThreeBackdrop = lazy(() => import('./ThreeBackdrop.jsx'))

const roles = ['Robotics Engineer', 'ML Developer', 'Builder', 'Researcher']

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [letterCount, setLetterCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const isComplete = letterCount === current.length
    const isEmpty = letterCount === 0
    const delay = deleting ? 42 : isComplete ? 1200 : 72

    const timer = window.setTimeout(() => {
      if (!deleting && isComplete) {
        setDeleting(true)
        return
      }

      if (deleting && isEmpty) {
        setDeleting(false)
        setRoleIndex((index) => (index + 1) % roles.length)
        return
      }

      setLetterCount((count) => count + (deleting ? -1 : 1))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [deleting, letterCount, roleIndex])

  const typedRole = roles[roleIndex].slice(0, letterCount)

  return (
    <section id="top" className="relative isolate flex min-h-screen overflow-hidden px-5 pb-20 pt-24 sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(91,156,246,0.16),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(167,139,250,0.12),transparent_30%)]" />
      <div className="absolute right-0 top-16 h-[72vh] w-full opacity-55 md:right-8 md:top-24 md:h-[76vh] md:w-[62vw] md:opacity-90">
        <Suspense fallback={null}>
          <ThreeBackdrop />
        </Suspense>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 py-20 md:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-4xl">
          <p className="reveal font-heading text-sm font-bold uppercase tracking-[0.48em] text-portfolio-accent">
            UC Santa Cruz Robotics
          </p>
          <h1 className="reveal mt-6 font-heading text-[clamp(4.5rem,15vw,12rem)] font-extrabold leading-[0.78] tracking-[-0.09em] text-shimmer">
            Vivaan
            <span className="block pl-[0.04em]">Vora</span>
          </h1>
          <div className="reveal mt-8 flex min-h-12 items-center font-heading text-2xl font-bold text-portfolio-primary sm:text-4xl">
            <span className="mr-3 text-portfolio-muted">I am a</span>
            <span className="text-portfolio-accent">{typedRole}</span>
            <span className="ml-1 h-9 w-[2px] animate-pulse bg-portfolio-accent" />
          </div>
          <p className="reveal mt-7 max-w-2xl text-lg leading-8 text-portfolio-muted sm:text-xl">
            I build at the intersection of software, electronics, and mechanical systems,
            from agentic AI pipelines and ML classifiers to robotic control systems and
            assistive technology. I care about making things that work in the real world.
          </p>

          <div className="reveal mt-10 flex">
            <Magnetic className="w-full sm:w-auto">
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center rounded-full border border-portfolio-accent/70 bg-portfolio-accent px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-portfolio-bg shadow-[0_0_45px_rgba(91,156,246,0.22)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(91,156,246,0.4)] sm:w-auto"
              >
                View Projects
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="hidden min-h-[520px] md:block" aria-hidden="true" />
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-portfolio-muted transition-colors hover:text-portfolio-accent"
      >
        Scroll
        <ArrowDown className="scroll-arrow" size={18} />
      </a>
    </section>
  )
}

export default Hero
