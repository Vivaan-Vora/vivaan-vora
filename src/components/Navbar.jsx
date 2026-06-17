import { useEffect, useState } from 'react'
import Magnetic from './Magnetic.jsx'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        hasScrolled
          ? 'border-b border-portfolio-border/90 bg-portfolio-bg/70 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Magnetic strength={0.18}>
          <a
            href="#top"
            className="font-heading text-2xl font-bold tracking-tight text-portfolio-accent"
            aria-label="Vivaan Vora home"
          >
            VV
          </a>
        </Magnetic>

        <div className="flex items-center gap-1 rounded-full border border-portfolio-border/70 bg-portfolio-surface/35 p-1 backdrop-blur-md sm:gap-2">
          {links.map((link) => (
            <Magnetic key={link.href} strength={0.14}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-portfolio-muted transition-colors duration-300 hover:text-portfolio-primary sm:px-4"
              >
                {link.label}
              </a>
            </Magnetic>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
