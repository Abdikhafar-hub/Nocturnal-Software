# Nocturnal WebGL Background Component

A beautiful, performance-optimized WebGL background animation featuring a nocturnal theme perfect for Nocturnal Software Solutions.

## Features

✨ **Starfield** - 3000+ twinkling stars creating a deep space atmosphere
🌙 **Moon** - Elegant moon with soft blue glow effect
💫 **Floating Particles** - 1000 animated particles with tech-inspired blue glow
🌌 **Nebula Effect** - Subtle purple nebula clouds for depth
🖱️ **Parallax Effect** - Smooth mouse-following parallax for immersive experience
⚡ **Performance Optimized** - Efficient rendering with proper cleanup

## Usage

The component is already integrated into your main page (`app/page.tsx`). It automatically renders behind all content.

```tsx
import NocturnalWebGLBackground from "@/components/nocturnal-webgl-background"

export default function Home() {
  return (
    <main>
      <NocturnalWebGLBackground />
      {/* Your content */}
    </main>
  )
}
```

## Customization

### Adjust Star Count
In `nocturnal-webgl-background.tsx`, modify the loop count:
```tsx
for (let i = 0; i < 3000; i++) { // Change 3000 to desired count
```

### Change Colors
Update the color values (hex format):
- **Stars**: `color: 0xffffff` (white)
- **Twinkling Stars**: `color: 0x8bb4ff` (blue)
- **Moon**: `color: 0xf5f5dc` (beige)
- **Moon Glow**: `color: 0x8bb4ff` (blue)
- **Particles**: `color: 0x4a90e2` (blue)
- **Nebula**: `color: 0x6b46c1` (purple)

### Adjust Opacity
Modify the `opacity` values in material definitions:
```tsx
opacity: 0.6 // 0.0 (transparent) to 1.0 (opaque)
```

### Change Animation Speed
Modify the rotation/velocity values:
```tsx
stars.rotation.y += 0.0002 // Increase for faster rotation
```

### Disable Parallax
Comment out or remove the parallax effect section:
```tsx
// Parallax effect with mouse (subtle)
// camera.position.x += (mouseX * 30 - camera.position.x) * 0.03
// camera.position.y += (mouseY * 30 - camera.position.y) * 0.03
```

## Performance Tips

1. **Reduce Particle Count** - Lower the number of particles/stars for better performance on low-end devices
2. **Disable Parallax** - Mouse tracking adds slight overhead
3. **Lower Pixel Ratio** - Already limited to 2, but can be set to 1 for mobile
4. **Reduce Geometry Detail** - Lower sphere segments (currently 24) for moon

## Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ⚠️ Requires WebGL 2.0 support
- ❌ Older browsers may not support

## Troubleshooting

**Background not showing:**
- Check browser console for WebGL errors
- Ensure WebGL is enabled in browser settings
- Verify Three.js is installed: `npm list three`

**Performance issues:**
- Reduce particle/star counts
- Lower pixel ratio to 1
- Check GPU acceleration is enabled

**Memory leaks:**
- Component includes proper cleanup in useEffect return
- All geometries and materials are disposed on unmount

## Technical Details

- **Library**: Three.js
- **Rendering**: WebGL
- **Frame Rate**: 60 FPS (target)
- **Memory**: ~50-100MB (varies by device)
- **GPU**: Hardware accelerated

## Future Enhancements

Potential additions:
- [ ] Shooting stars
- [ ] Constellation lines
- [ ] Interactive elements
- [ ] Scroll-based animations
- [ ] Time-based day/night cycle
- [ ] Custom 3D models (satellites, space stations)

