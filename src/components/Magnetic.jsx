import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Magnetic({ children, strength = 0.28, className = '' }) {
  const targetRef = useRef(null)
  const xTo = useRef(null)
  const yTo = useRef(null)

  useEffect(() => {
    if (!targetRef.current) return undefined

    xTo.current = gsap.quickTo(targetRef.current, 'x', {
      duration: 0.45,
      ease: 'power3.out',
    })
    yTo.current = gsap.quickTo(targetRef.current, 'y', {
      duration: 0.45,
      ease: 'power3.out',
    })

    return () => {
      xTo.current = null
      yTo.current = null
    }
  }, [])

  const handleMove = (event) => {
    const element = targetRef.current
    if (!element || !xTo.current || !yTo.current) return

    const rect = element.getBoundingClientRect()
    const relX = event.clientX - (rect.left + rect.width / 2)
    const relY = event.clientY - (rect.top + rect.height / 2)

    xTo.current(relX * strength)
    yTo.current(relY * strength)
  }

  const handleLeave = () => {
    xTo.current?.(0)
    yTo.current?.(0)
  }

  return (
    <span
      ref={targetRef}
      className={`inline-flex will-change-transform ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </span>
  )
}

export default Magnetic
