import { useEffect, useRef } from 'react'
import {
  BufferAttribute,
  BufferGeometry,
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  TorusGeometry,
  WebGLRenderer,
} from 'three'

function ThreeBackdrop() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const scene = new Scene()
    const camera = new PerspectiveCamera(45, 1, 0.1, 100)
    const renderer = new WebGLRenderer({ alpha: true, antialias: true })
    const group = new Group()

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.7))
    mount.appendChild(renderer.domElement)

    const coreGeometry = new IcosahedronGeometry(isMobile ? 2.2 : 2.8, 2)
    const coreMaterial = new MeshBasicMaterial({
      color: 0x5b9cf6,
      wireframe: true,
      transparent: true,
      opacity: isMobile ? 0.16 : 0.22,
    })
    const core = new Mesh(coreGeometry, coreMaterial)

    const ringGeometry = new TorusGeometry(isMobile ? 2.65 : 3.35, 0.01, 16, 120)
    const ringMaterial = new MeshBasicMaterial({
      color: 0xa78bfa,
      transparent: true,
      opacity: isMobile ? 0.08 : 0.14,
    })
    const ring = new Mesh(ringGeometry, ringMaterial)
    ring.rotation.x = Math.PI / 2.7
    ring.rotation.y = Math.PI / 8

    const particlesGeometry = new BufferGeometry()
    const particleCount = isMobile ? 90 : 160
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 9
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5
    }

    particlesGeometry.setAttribute('position', new BufferAttribute(positions, 3))
    const particlesMaterial = new PointsMaterial({
      color: 0x5b9cf6,
      size: isMobile ? 0.01 : 0.014,
      transparent: true,
      opacity: 0.28,
    })
    const particles = new Points(particlesGeometry, particlesMaterial)

    group.add(core, ring, particles)
    group.position.x = isMobile ? 0.35 : 1.25
    group.position.y = isMobile ? -0.1 : 0
    scene.add(group)
    camera.position.z = 7

    const handleResize = () => {
      const { clientWidth, clientHeight } = mount
      renderer.setSize(clientWidth, clientHeight)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    let frameId = 0
    const animate = () => {
      core.rotation.x += 0.0016
      core.rotation.y += 0.0024
      ring.rotation.z -= 0.001
      particles.rotation.y += 0.0009
      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      coreGeometry.dispose()
      coreMaterial.dispose()
      ringGeometry.dispose()
      ringMaterial.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />
}

export default ThreeBackdrop
