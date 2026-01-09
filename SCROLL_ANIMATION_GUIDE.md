# Scroll Animation System Guide

A lightweight, performant scroll animation system using Intersection Observer API and CSS transitions. No external libraries required.

## Features

- ✅ Multiple animation directions (fade-up, slide-left, slide-right, scale-in, fade-down)
- ✅ Smooth easing and natural motion
- ✅ Stagger support for grouped elements
- ✅ Animates only once by default (performance optimized)
- ✅ Respects reduced motion preferences
- ✅ Mobile friendly
- ✅ Production ready and minimal
- ✅ No layout shift
- ✅ Works across modern browsers

## Quick Start

### 1. Provider Setup (Already Done)

The `ScrollAnimateProvider` is already added to your root layout. It automatically initializes animations for elements with `data-scroll-animate` attributes.

### 2. Using HTML Data Attributes

The simplest way to use scroll animations is with HTML data attributes:

```tsx
// Fade up from bottom
<div data-scroll-animate="fade-up">
  Content that fades in from bottom
</div>

// Slide in from left with delay
<div data-scroll-animate="slide-left" data-scroll-delay="200">
  Content that slides in from left after 200ms
</div>

// Scale in from center
<div data-scroll-animate="scale-in">
  Content that scales in
</div>
```

### 3. Using the ScrollReveal Component

For React components, use the `ScrollReveal` component:

```tsx
import ScrollReveal from "@/components/scroll-reveal"

function MyComponent() {
  return (
    <ScrollReveal animation="fade-up" delay={100}>
      <h2>Animated Title</h2>
    </ScrollReveal>
  )
}
```

### 4. Using the Hook

For more control, use the `useScrollAnimate` hook:

```tsx
import { useScrollAnimate } from "@/hooks/use-scroll-animate"

function MyComponent() {
  const ref = useScrollAnimate({ animation: 'fade-up', delay: 100 })
  
  return (
    <div ref={ref}>
      <h2>Animated Content</h2>
    </div>
  )
}
```

## Available Animation Types

| Animation | Description | CSS Class |
|-----------|-------------|-----------|
| `fade-up` | Fade in from bottom (default) | `.fade-up` |
| `fade-down` | Fade in from top | `.fade-down` |
| `slide-left` | Slide in from right | `.slide-left` |
| `slide-right` | Slide in from left | `.slide-right` |
| `scale-in` | Scale up from center | `.scale-in` |
| `fade-in` | Simple fade in (no transform) | `.fade-in` |

## Usage Examples

### Example 1: Basic Section Header

```tsx
<section>
  <div data-scroll-animate="fade-down">
    <h2>Section Title</h2>
    <p>Section description</p>
  </div>
</section>
```

### Example 2: Card Grid with Stagger

**Using ScrollReveal Component:**

```tsx
import ScrollReveal from "@/components/scroll-reveal"

function CardGrid() {
  const cards = [1, 2, 3, 4, 5, 6]
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <ScrollReveal
          key={card}
          animation="fade-up"
          delay={index * 100} // Stagger by 100ms per card
        >
          <div className="card">
            Card {card}
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
```

**Using Hook with Stagger:**

```tsx
import { useScrollAnimateStagger } from "@/hooks/use-scroll-animate"

function CardGrid() {
  const cards = [1, 2, 3, 4, 5, 6]
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card, index) => {
        const ref = useScrollAnimateStagger({
          animation: 'fade-up',
          index,
          staggerDelay: 100
        })
        
        return (
          <div key={card} ref={ref} className="card">
            Card {card}
          </div>
        )
      })}
    </div>
  )
}
```

**Using Data Attributes with Manual Stagger:**

```tsx
function CardGrid() {
  const cards = [1, 2, 3, 4, 5, 6]
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <div
          key={card}
          data-scroll-animate="fade-up"
          data-scroll-delay={index * 100}
          className="card"
        >
          Card {card}
        </div>
      ))}
    </div>
  )
}
```

### Example 3: Mixed Animation Types

```tsx
function FeaturesSection() {
  const features = [
    { title: "Feature 1", animation: "fade-up" },
    { title: "Feature 2", animation: "slide-left" },
    { title: "Feature 3", animation: "slide-right" },
    { title: "Feature 4", animation: "scale-in" },
  ]
  
  return (
    <div className="grid grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          data-scroll-animate={feature.animation}
          data-scroll-delay={index * 100}
        >
          <h3>{feature.title}</h3>
        </div>
      ))}
    </div>
  )
}
```

### Example 4: Hero Section with Sequential Animations

```tsx
function HeroSection() {
  return (
    <section className="hero">
      {/* Trust Badge - Fade down first */}
      <div data-scroll-animate="fade-down" data-scroll-delay="0">
        <span>Trusted by thousands</span>
      </div>
      
      {/* Main Heading - Scale in */}
      <h1 data-scroll-animate="scale-in" data-scroll-delay="100">
        Welcome to Our Platform
      </h1>
      
      {/* Description - Fade up */}
      <p data-scroll-animate="fade-up" data-scroll-delay="200">
        Transform your business with our innovative solutions
      </p>
      
      {/* CTA Buttons - Fade up last */}
      <div data-scroll-animate="fade-up" data-scroll-delay="300">
        <button>Get Started</button>
        <button>Learn More</button>
      </div>
    </section>
  )
}
```

### Example 5: Repeating Animations (Animate Every Time)

By default, animations only trigger once. To animate every time the element enters the viewport:

```tsx
// Using data attribute
<div data-scroll-animate="fade-up" data-scroll-once="false">
  This will animate every time it enters viewport
</div>

// Using ScrollReveal component
<ScrollReveal animation="fade-up" once={false}>
  Content
</ScrollReveal>

// Using hook
const ref = useScrollAnimate({ animation: 'fade-up', once: false })
```

## Configuration Options

### Data Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `data-scroll-animate` | string | `'fade-up'` | Animation type |
| `data-scroll-delay` | number | `0` | Delay in milliseconds |
| `data-scroll-once` | boolean | `true` | Animate only once |

### ScrollReveal Component Props

```tsx
interface ScrollRevealProps {
  animation?: 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'fade-in'
  delay?: number
  once?: boolean
  offset?: number
  className?: string
}
```

### useScrollAnimate Hook Options

```tsx
interface UseScrollAnimateOptions {
  animation?: AnimationType
  delay?: number
  once?: boolean
  offset?: number
  threshold?: number
  enabled?: boolean
}
```

## Advanced Usage

### Custom Offset

Control when animations trigger by adjusting the offset:

```tsx
// Trigger when element is 200px from viewport
<ScrollReveal animation="fade-up" offset={200}>
  Content
</ScrollReveal>
```

### Custom Threshold

Control the intersection threshold:

```tsx
const ref = useScrollAnimate({
  animation: 'fade-up',
  threshold: 0.5 // Trigger when 50% of element is visible
})
```

### Manual Trigger

Manually trigger animation for an element:

```tsx
import { triggerScrollAnimate } from "@/lib/scroll-animate"

function MyComponent() {
  const elementRef = useRef<HTMLDivElement>(null)
  
  const handleClick = () => {
    if (elementRef.current) {
      triggerScrollAnimate(elementRef.current, 'fade-up', 0)
    }
  }
  
  return (
    <div>
      <button onClick={handleClick}>Animate</button>
      <div ref={elementRef} className="fade-up">
        Content
      </div>
    </div>
  )
}
```

### Refresh After Dynamic Content

If you add content dynamically, refresh the animations:

```tsx
import { refreshScrollAnimate } from "@/lib/scroll-animate"

function DynamicContent() {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    // Load items...
    setItems(newItems)
    
    // Refresh animations after content loads
    setTimeout(() => {
      refreshScrollAnimate()
    }, 100)
  }, [])
  
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item.id}
          data-scroll-animate="fade-up"
          data-scroll-delay={index * 100}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
```

## CSS Classes Reference

You can also use the CSS classes directly (though the JavaScript utilities handle the animation trigger):

```css
/* Initial state (hidden) */
.fade-up { opacity: 0; transform: translateY(40px); }
.fade-down { opacity: 0; transform: translateY(-40px); }
.slide-left { opacity: 0; transform: translateX(40px); }
.slide-right { opacity: 0; transform: translateX(-40px); }
.scale-in { opacity: 0; transform: scale(0.8); }
.fade-in { opacity: 0; }

/* Animated state (add .animate class) */
.fade-up.animate { opacity: 1; transform: translateY(0); }
.fade-down.animate { opacity: 1; transform: translateY(0); }
.slide-left.animate { opacity: 1; transform: translateX(0); }
.slide-right.animate { opacity: 1; transform: translateX(0); }
.scale-in.animate { opacity: 1; transform: scale(1); }
.fade-in.animate { opacity: 1; }
```

## Performance Best Practices

1. **Use `once: true`** (default) - Prevents re-animating on scroll up
2. **Stagger delays** - Use increments (50ms, 100ms) for sequential animations
3. **Mix animation types** - Use different animations for visual variety
4. **Avoid too many simultaneous animations** - Limit to 5-10 elements animating at once
5. **Use appropriate offsets** - Don't trigger too early (causes layout shift)

## Accessibility

The system automatically respects `prefers-reduced-motion` media query. When users have reduced motion enabled, animations are disabled and elements appear immediately.

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

Requires modern browser with Intersection Observer API support (all browsers since 2019).

## Troubleshooting

### Animations not working?

1. **Check provider**: Ensure `ScrollAnimateProvider` is in your root layout
2. **Check data attributes**: Verify `data-scroll-animate` is set correctly
3. **Check reduced motion**: Test with `prefers-reduced-motion: no-preference`
4. **Check viewport**: Ensure elements are scrollable and not already in viewport
5. **Check console**: Look for JavaScript errors

### Refresh animations manually

```tsx
import { refreshScrollAnimate } from "@/lib/scroll-animate"

// After dynamic content loads
refreshScrollAnimate()
```

### Debug mode

Add this to see when animations trigger:

```tsx
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log('Intersecting:', entry.isIntersecting, entry.target)
    })
  })
  
  // Observe your elements
}, [])
```

## Migration from Old System

If you're using the old `ScrollReveal` component, it's been updated to use the new system. No changes needed!

The old component:
```tsx
<ScrollReveal delay={100}>
  Content
</ScrollReveal>
```

Still works, but now uses the new animation system with `fade-up` animation.

## Summary

1. ✅ Provider is already set up in `app/layout.tsx`
2. ✅ Use `data-scroll-animate` attributes for simple cases
3. ✅ Use `ScrollReveal` component for React components
4. ✅ Use `useScrollAnimate` hook for more control
5. ✅ Use `useScrollAnimateStagger` for staggered animations
6. ✅ System respects reduced motion automatically
7. ✅ Animations are performant and production-ready

That's it! Your scroll animations are ready to use.
