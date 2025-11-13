# WebGL/Three.js Animation Background Analysis
## Website: https://cornrevolution.resn.global/

## Overview
This website uses a sophisticated **WebGL-based 3D animation** powered by **Three.js** instead of a simple HTML5 video background. The animation features interactive 3D corn field visualizations with multiple scenes and sections.

---

## Technical Architecture

### 1. **Core Technology Stack**
- **Three.js WebGL Renderer** (version 102+)
- **GLTF/GLB 3D Models** - For 3D corn stalks, kernels, and other objects
- **Compressed Textures** - KTX format (ASTC compression) for optimized texture loading
- **WebGL Shaders** - Custom shader materials for advanced visual effects

### 2. **Key Components Identified**

#### **3D Models Loaded:**
- `SingleStalk12_db.gltf` - Main corn stalk model
- `stalk_rigged3.gltf` - Rigged/animated corn stalk
- `KERNAL.gltf` - Corn kernel model
- `cobb_test.gltf` - Corn cob model
- `hair.gltf` - Corn silk/hair model

#### **Texture Assets:**
- **Compressed KTX textures** (ASTC format) for:
  - Landing scene textures (graded/hair variants)
  - Field textures (ground, clouds, noise)
  - Testing scene textures (soil, plants, backgrounds)
  - Kernel textures (matcap, diffuse)
  - Post-processing effects (noise, lens flare)

#### **Sections/Scenes:**
Based on console logs, the application has multiple sections:
1. **Landing** - Initial scene (took ~1.5s to instantiate)
2. **Field** - Corn field visualization (~256ms)
3. **Stalk** - Individual stalk view (~2.1s)
4. **Result** - Results/outcome scene (~3s)
5. **Testing** - Testing/experiment scene

---

## Implementation Pattern

### **Typical Three.js Background Setup:**

```javascript
// 1. Scene Setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ 
  alpha: true,  // Transparent background
  antialias: true 
})

// 2. Renderer Configuration
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0x000000, 0) // Transparent

// 3. Container Setup
const container = document.getElementById('canvas-container')
container.appendChild(renderer.domElement)

// 4. Position as Background
renderer.domElement.style.position = 'fixed'
renderer.domElement.style.top = '0'
renderer.domElement.style.left = '0'
renderer.domElement.style.width = '100%'
renderer.domElement.style.height = '100%'
renderer.domElement.style.zIndex = '-1'
renderer.domElement.style.pointerEvents = 'none'

// 5. Load 3D Models
const loader = new THREE.GLTFLoader()
loader.load('path/to/model.gltf', (gltf) => {
  const model = gltf.scene
  scene.add(model)
  // Animate model
})

// 6. Animation Loop
function animate() {
  requestAnimationFrame(animate)
  
  // Rotate, move, or animate objects
  // Update camera
  // Render scene
  
  renderer.render(scene, camera)
}
animate()

// 7. Handle Window Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
```

---

## Key CSS Properties for Background Positioning

```css
.canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Behind all content */
  pointer-events: none; /* Allow clicks through to content */
  overflow: hidden;
}

.canvas-container canvas {
  display: block;
  width: 100%;
  height: 100%;
}
```

---

## Performance Optimizations Used

### 1. **Compressed Textures (KTX/ASTC)**
- Reduces texture file sizes significantly
- Faster loading times
- Better GPU memory usage
- Supports mipmaps for LOD (Level of Detail)

### 2. **Model Optimization**
- GLTF format (efficient 3D model format)
- Binary GLTF (.bin) for geometry data
- Separate texture files for reusability

### 3. **Lazy Loading**
- Sections load on demand (based on scroll/viewport)
- Models load asynchronously
- Progressive enhancement

### 4. **Texture Management**
- Mipmaps for different detail levels
- Combined textures (e.g., `map-field-diffuse-combined`)
- Reusable texture instances

---

## Advanced Features Detected

### 1. **Post-Processing Effects**
- Noise textures for film grain effect
- Lens flare effects
- Custom shader materials

### 2. **Dynamic Lighting**
- Matcap textures for material capture lighting
- Shadow mapping (`plantShadow.ktx`)
- Energy/glow effects (`stalk_energy`)

### 3. **Animation System**
- Rigged models (`.gltf` with animation data)
- Transform animations
- Material property animations

### 4. **Scene Management**
- Multiple scenes/sections
- Scene transitions
- Section-specific assets

---

## Browser Compatibility

### **Requirements:**
- WebGL 2.0 support
- Modern browser (Chrome, Firefox, Safari, Edge)
- Hardware acceleration enabled
- Sufficient GPU memory

### **Fallback:**
The website shows a browser compatibility message if WebGL is not supported:
> "This experience does not work on this browser. Try it out using Chrome, Firefox, Safari or Edge."

---

## Loading Performance

Based on console timings:
- **Field section**: ~256ms
- **Landing section**: ~1.5s
- **Stalk section**: ~2.1s
- **Result section**: ~3s

Total initial load includes:
- JavaScript bundles (~76KB compressed)
- Font files (WOFF2)
- Texture atlases
- 3D model files
- Additional assets

---

## Comparison: Video vs WebGL Background

| Aspect | HTML5 Video | WebGL/Three.js |
|--------|-------------|----------------|
| **Interactivity** | Limited | Full 3D interaction |
| **File Size** | Large video files | Optimized models/textures |
| **Performance** | CPU/GPU decoding | GPU rendering |
| **Customization** | Limited | Fully customizable |
| **Browser Support** | Universal | Requires WebGL |
| **Loading** | Single large file | Progressive loading |
| **Scalability** | Fixed resolution | Vector-based, scalable |

---

## Key Takeaways

1. **Not a video** - This is a real-time 3D rendered scene using WebGL
2. **Interactive** - Can respond to user input, scroll, mouse movement
3. **Optimized** - Uses compressed textures and efficient 3D formats
4. **Modular** - Multiple scenes that load on demand
5. **Performance-focused** - Progressive loading and LOD systems
6. **Modern** - Requires WebGL 2.0 and modern browser

---

## Implementation Recommendations

If you want to implement a similar WebGL background:

1. **Start Simple**: Begin with basic Three.js scene
2. **Use GLTF Models**: Industry standard for web 3D
3. **Optimize Textures**: Compress and use appropriate formats
4. **Implement LOD**: Load different detail levels based on distance
5. **Progressive Loading**: Load assets as needed
6. **Handle Resize**: Update camera and renderer on window resize
7. **Performance Monitoring**: Track FPS and optimize accordingly
8. **Fallback**: Provide static image/video fallback for unsupported browsers

---

## Resources

- **Three.js Documentation**: https://threejs.org/docs/
- **GLTF Specification**: https://www.khronos.org/gltf/
- **KTX Texture Format**: https://www.khronos.org/ktx/
- **WebGL Best Practices**: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices

