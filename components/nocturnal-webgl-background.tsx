"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function NocturnalWebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    stars: THREE.Points
    particles: THREE.Points
    moon: THREE.Mesh
    animationId: number
    mouseX: number
    mouseY: number
  } | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    )
    camera.position.z = 1000

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    // Style canvas as background
    const canvas = renderer.domElement
    canvas.style.position = "fixed"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.zIndex = "-1"
    canvas.style.pointerEvents = "none"

    container.appendChild(canvas)

    // Mouse tracking for parallax effect
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Create starfield
    const createStarfield = () => {
      const starsGeometry = new THREE.BufferGeometry()
      const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.5,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
      })

      const starsVertices = []
      for (let i = 0; i < 3000; i++) {
        const x = (Math.random() - 0.5) * 4000
        const y = (Math.random() - 0.5) * 4000
        const z = (Math.random() - 0.5) * 4000
        starsVertices.push(x, y, z)
      }

      starsGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starsVertices, 3)
      )

      const stars = new THREE.Points(starsGeometry, starsMaterial)
      scene.add(stars)
      return stars
    }

    // Create twinkling stars (larger, brighter)
    const createTwinklingStars = () => {
      const twinklingGeometry = new THREE.BufferGeometry()
      const twinklingMaterial = new THREE.PointsMaterial({
        color: 0x8bb4ff,
        size: 3,
        transparent: true,
        opacity: 1,
        sizeAttenuation: true,
      })

      const twinklingVertices = []
      for (let i = 0; i < 200; i++) {
        const x = (Math.random() - 0.5) * 3000
        const y = (Math.random() - 0.5) * 3000
        const z = (Math.random() - 0.5) * 3000
        twinklingVertices.push(x, y, z)
      }

      twinklingGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(twinklingVertices, 3)
      )

      const twinklingStars = new THREE.Points(twinklingGeometry, twinklingMaterial)
      scene.add(twinklingStars)
      return twinklingStars
    }

    // Create moon
    const createMoon = () => {
      const moonGeometry = new THREE.SphereGeometry(60, 24, 24)
      const moonMaterial = new THREE.MeshBasicMaterial({
        color: 0xf5f5dc,
        transparent: true,
        opacity: 0.7,
      })
      const moon = new THREE.Mesh(moonGeometry, moonMaterial)
      moon.position.set(500, 350, -400)
      scene.add(moon)

      // Add moon glow
      const glowGeometry = new THREE.SphereGeometry(70, 24, 24)
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x8bb4ff,
        transparent: true,
        opacity: 0.15,
      })
      const moonGlow = new THREE.Mesh(glowGeometry, glowMaterial)
      moonGlow.position.copy(moon.position)
      scene.add(moonGlow)

      return moon
    }

    // Create floating particles (tech-inspired)
    const createParticles = () => {
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesMaterial = new THREE.PointsMaterial({
        color: 0x4a90e2,
        size: 1.5,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
      })

      const particlesVertices = []
      const particlesVelocities: number[] = []
      for (let i = 0; i < 1000; i++) {
        const x = (Math.random() - 0.5) * 2000
        const y = (Math.random() - 0.5) * 2000
        const z = (Math.random() - 0.5) * 2000
        particlesVertices.push(x, y, z)
        particlesVelocities.push(
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5
        )
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(particlesVertices, 3)
      )

      const particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      return { particles, velocities: particlesVelocities }
    }

    // Create nebula effect (subtle cloud-like formations)
    const createNebula = () => {
      const nebulaGeometry = new THREE.BufferGeometry()
      const nebulaMaterial = new THREE.PointsMaterial({
        color: 0x6b46c1,
        size: 15,
        transparent: true,
        opacity: 0.15,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
      })

      const nebulaVertices = []
      for (let i = 0; i < 500; i++) {
        const radius = 800 + Math.random() * 400
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI
        const x = radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.sin(phi) * Math.sin(theta)
        const z = radius * Math.cos(phi)
        nebulaVertices.push(x, y, z)
      }

      nebulaGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(nebulaVertices, 3)
      )

      const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial)
      scene.add(nebula)
      return nebula
    }

    // Initialize all elements
    const stars = createStarfield()
    const twinklingStars = createTwinklingStars()
    const moon = createMoon()
    const { particles, velocities } = createParticles()
    const nebula = createNebula()

    // Animation variables
    let time = 0
    const twinklingStarsPositions = twinklingStars.geometry.attributes.position.array as Float32Array
    const particlesPositions = particles.geometry.attributes.position.array as Float32Array

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      time += 0.01

      // Rotate starfield slowly
      stars.rotation.y += 0.0002
      stars.rotation.x += 0.0001

      // Twinkling effect
      for (let i = 0; i < twinklingStarsPositions.length; i += 3) {
        const opacity = Math.sin(time * 2 + i) * 0.5 + 0.5
        twinklingStars.material.opacity = opacity * 0.8
      }

      // Animate particles
      for (let i = 0; i < particlesPositions.length; i += 3) {
        particlesPositions[i] += velocities[i]
        particlesPositions[i + 1] += velocities[i + 1]
        particlesPositions[i + 2] += velocities[i + 2]

        // Wrap around boundaries
        if (Math.abs(particlesPositions[i]) > 1000) velocities[i] *= -1
        if (Math.abs(particlesPositions[i + 1]) > 1000) velocities[i + 1] *= -1
        if (Math.abs(particlesPositions[i + 2]) > 1000) velocities[i + 2] *= -1
      }
      particles.geometry.attributes.position.needsUpdate = true

      // Rotate nebula
      nebula.rotation.y += 0.0001
      nebula.rotation.x += 0.00005

      // Parallax effect with mouse (subtle)
      camera.position.x += (mouseX * 30 - camera.position.x) * 0.03
      camera.position.y += (mouseY * 30 - camera.position.y) * 0.03
      camera.lookAt(scene.position)

      // Subtle moon rotation
      moon.rotation.y += 0.001

      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Store references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      stars,
      particles,
      moon,
      animationId: 0,
      mouseX: 0,
      mouseY: 0,
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)

      // Dispose geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          if (object.geometry) object.geometry.dispose()
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((mat) => mat.dispose())
            } else {
              object.material.dispose()
            }
          }
        }
      })

      renderer.dispose()
      if (container.contains(canvas)) {
        container.removeChild(canvas)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    />
  )
}

