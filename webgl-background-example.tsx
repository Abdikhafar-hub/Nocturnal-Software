/**
 * Example: WebGL/Three.js Background Animation Component
 * 
 * This is a React component example mshowing how to implement
 * a WebGL background simiar to cornrevolution.resn.global
 * 
 * Note: This requirews three.js and @rmeact-three/fiber packages
 */

"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

export default function WebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    animationId: number
  } | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 1. Create Scene
    const scene = new THREE.Scene()
    
    // 2. Create Camera
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    )
    camera.position.z = 5

    // 3. Create Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true, // Transparent background
      antialias: true, // Smooth edges
      powerPreference: "high-performance" // Use dedicated GPU if available
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Limit pixel ratio for performance
    renderer.setClearColor(0x000000, 0) // Transparent background
    renderer.shadowMap.enabled = true // Enable shadows if needed
    renderer.shadowMap.type = THREE.PCFSoftShadowMap // Soft shadows

    // 4. Style the canvas as background
    const canvas = renderer.domElement
    canvas.style.position = "fixed"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.zIndex = "-1"
    canvas.style.pointerEvents = "none" // Allow clicks through

    container.appendChild(canvas)

    // 5. Add Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    // 6. Load 3D Model (Example with GLTF)
    const loader = new GLTFLoader()
    
    // Example: Load a model
    // loader.load('/models/your-model.gltf', (gltf) => {
    //   const model = gltf.scene
    //   model.scale.set(0.5, 0.5, 0.5)
    //   scene.add(model)
    // })

    // 7. Add a simple rotating cube as placeholder
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x8c46dc,
      transparent: true,
      opacity: 0.3
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // 8. Animation Loop
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Rotate the cube (or your 3D models)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      // Update camera (optional: follow mouse or scroll)
      // camera.position.x += (mouseX - camera.position.x) * 0.05
      // camera.position.y += (mouseY - camera.position.y) * 0.05

      renderer.render(scene, camera)
    }
    animate()

    // 9. Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // 10. Store references for cleanup
    sceneRef.current = {
      scene,
      camera,
      renderer,
      animationId
    }

    // 11. Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      
      // Dispose of geometries, materials, and textures
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose())
          } else {
            object.material.dispose()
          }
        }
      })
      
      renderer.dispose()
      container.removeChild(canvas)
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

/**
 * Alternative: Using @react-three/fiber (Recommended for React)
 * 
 * Install: npm install @react-three/fiber @react-three/drei three
 * 
 * Example:
 * 
 * import { Canvas } from '@react-three/fiber'
 * import { OrbitControls, useGLTF } from '@react-three/drei'
 * 
 * function Scene() {
 *   const { scene } = useGLTF('/models/your-model.gltf')
 *   return <primitive object={scene} />
 * }
 * 
 * export default function WebGLBackground() {
 *   return (
 *     <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
 *       <Canvas
 *         camera={{ position: [0, 0, 5] }}
 *         gl={{ alpha: true, antialias: true }}
 *       >
 *         <ambientLight intensity={0.5} />
 *         <directionalLight position={[5, 5, 5]} />
 *         <Scene />
 *         <OrbitControls enableZoom={false} />
 *       </Canvas>
 *     </div>
 *   )
 * }
 */









