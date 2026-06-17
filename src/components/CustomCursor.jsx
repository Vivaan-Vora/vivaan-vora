import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || !cursorRef.current) {
      return undefined
    }

    const cursor = cursorRef.current
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' })

    const handlePointerMove = (event) => {
      xTo(event.clientX)
      yTo(event.clientY)
    }

    const handlePointerOver = (event) => {
      const interactive = event.target.closest('a, button, [data-cursor="magnetic"]')
      cursor.classList.toggle('cursor-dot--active', Boolean(interactive))
    }

    const handlePointerLeave = () => {
      cursor.classList.remove('cursor-dot--active')
    }

    window.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
}

export default CustomCursor
