# 🧊 Liquid Glass Design System
### Extracted from `have-i-cooked` — Tahsin Ferdous Portfolio

> Inspired by Apple's Liquid Glass design language: ultra-dark backgrounds, translucent frosted surfaces, radial ambient light, and precise micro-animations. Every surface floats — nothing is flat.

---

## 1. Color Token System

All colors are defined as HSL CSS variables so every token can be alpha-modified anywhere in the codebase (`hsl(var(--primary) / 0.3)`).

### Core Palette

| Token | HSL Value | Role |
|---|---|---|
| `--background` | `248 50% 6%` | Near-black deep indigo — base canvas |
| `--foreground` | `220 25% 92%` | Slightly warm off-white text |
| `--card` | `246 45% 12%` | Surface above background |
| `--secondary` | `246 35% 18%` | Raised interactive surface |
| `--muted` | `246 35% 18%` | Same as secondary |
| `--muted-foreground` | `228 15% 55%` | De-emphasized text |
| `--border` | `255 30% 30%` | Subtle purple-tinted border |
| `--primary` | `272 80% 55%` | 🟣 Hero purple — CTA, highlights |
| `--accent-2` | `285 85% 65%` | Lighter violet accent |
| `--accent-3` | `258 90% 70%` | Blue-violet secondary accent |
| `--success` | `160 84% 39%` | Green status indicators |
| `--code-bg` | `250 45% 8%` | Even deeper code block background |
| `--radius` | `0.75rem` | Base corner radius |

### Accent Color Swatches (Hex Approximations)

```
Primary:  hsl(272, 80%, 55%)  ≈ #8B32E8  (vivid purple)
Accent-2: hsl(285, 85%, 65%)  ≈ #C04DEE  (fuchsia-purple)
Accent-3: hsl(258, 90%, 70%)  ≈ #9B6AF5  (blue-violet)
Success:  hsl(160, 84%, 39%)  ≈ #0EB877  (emerald green)
```

### Ambient Blob Colors (used in background)

```
Top-left blob:    hsl(272 80% 55% / 0.20)  — primary purple
Top-right blob:   hsl(285 85% 65% / 0.20)  — accent-2 violet
Bottom blob:      rgba(59, 130, 246, 0.15)  — blue (blue-500)
```

### CSS Variables — Full Setup Block

```css
:root {
  --background:          248 50% 6%;
  --foreground:          220 25% 92%;
  --card:                246 45% 12%;
  --card-foreground:     220 25% 92%;
  --popover:             246 45% 12%;
  --popover-foreground:  220 25% 92%;
  --primary:             272 80% 55%;
  --primary-foreground:  248 50% 6%;
  --secondary:           246 35% 18%;
  --secondary-foreground:220 25% 92%;
  --muted:               246 35% 18%;
  --muted-foreground:    228 15% 55%;
  --accent:              272 80% 55%;
  --accent-foreground:   248 50% 6%;
  --accent-2:            285 85% 65%;
  --accent-3:            258 90% 70%;
  --success:             160 84% 39%;
  --destructive:         0 85% 60%;
  --border:              255 30% 30%;
  --input:               246 35% 18%;
  --ring:                272 80% 55%;
  --radius:              0.75rem;
  --code-bg:             250 45% 8%;
  --cursor:              272 80% 55%;

  /* Composite tokens */
  --gradient-primary: linear-gradient(135deg, hsl(272 80% 55%), hsl(258 90% 70%));
  --gradient-glow:    radial-gradient(circle at center, hsl(272 80% 55% / 0.3), transparent 70%);
  --shadow-glow:      0 0 30px hsl(272 80% 55% / 0.25);
  --shadow-code:      0 4px 20px hsl(250 40% 6% / 0.8);

  /* Font stacks */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body:    'Inter', sans-serif;
}
```

---

## 2. Typography System

### Font Stack

| Role | Family | Weights | Usage |
|---|---|---|---|
| Display / Headings | Space Grotesk | 400, 500, 600, 700 | H1–H4, labels, buttons, nav |
| Body / Prose | Inter | 400, 500 | Paragraphs, descriptions |
| Code / Mono | JetBrains Mono | any | Code blocks, terminal, monospaced data |

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
```

### Type Scale

| Element | Size | Weight | Letter Spacing | Notes |
|---|---|---|---|---|
| Hero Name | `clamp(60px, 10vw, 120px)` | 700 | `-0.04em` (tracking-tighter) | Split into two lines |
| Section Heading | `clamp(40px, 8vw, 80px)` | 700 | `-0.04em` | `font-display` |
| Sub-heading (h3) | `20–22px` | 600 | tight | `font-display` |
| Hero subtitle | `18–22px` | 500 | default | `font-display` |
| Section label | `11px` | 500 | `+0.15em` | ALL CAPS, uppercase |
| Body text | `14–15px` | 400 | default | `font-body`, `leading-[1.7]` |
| Small / meta | `12–13px` | 500 | `+0.05em` | Tags, breadcrumbs |
| Micro label | `10–11px` | 700 | `+0.1em` | "Available", "Location" etc |

### Fluid Heading Pattern

```jsx
<h2 className="font-display text-[clamp(40px,8vw,80px)] font-bold tracking-tighter mb-4">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
    Section{" "}
  </span>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary/40">
    Title
  </span>
</h2>
```

### Section Label Pattern (small uppercase)

```jsx
<div className="font-display text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3">
  <!-- often left empty as a spacer/divider, or used for category labels -->
</div>
```

### Global Base Rules

```css
body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  letter-spacing: -0.02em;
}
```

---

## 3. Glassmorphism Utility Classes

This is the heart of the Liquid Glass aesthetic. Three layered glass tiers + a hover state.

### `.glass-panel` — Structural Glass (nav, modals, overlays)

```css
.glass-panel {
  background:    rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(50px);
  border:        1px solid rgba(255, 255, 255, 0.10);
  box-shadow:
    inset 0 1.5px 1px rgba(255, 255, 255, 0.15),  /* top rim light */
    0 8px 32px rgba(0, 0, 0, 0.45);               /* ambient shadow */
  border-radius: 1rem; /* 16px */
}
```

### `.glass-card` — Content Cards (main UI primitive)

```css
.glass-card {
  background:    rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(60px);
  border:        1px solid rgba(255, 255, 255, 0.09);
  box-shadow:
    inset 0 1.5px 1px rgba(255, 255, 255, 0.12),
    0 8px 24px rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
  transition:    all 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

### `.glass-hover` — Interactive Lift State

Applied alongside `glass-card` on hover-enabled surfaces:

```css
.glass-hover:hover {
  background:    rgba(255, 255, 255, 0.07);
  border-color:  rgba(255, 255, 255, 0.18);
  box-shadow:
    inset 0 2px 1px rgba(255, 255, 255, 0.25),
    0 16px 48px rgba(0, 0, 0, 0.55);
  transform:     translateY(-6px); /* -1.5 * 4px */
}
```

### `.glass-shimmer` — Hover Light Sweep Effect

Creates the Liquid Glass light-slide-through effect on hover:

```css
.glass-shimmer {
  position: relative;
  overflow: hidden;
}

.glass-shimmer::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.06) 50%,
    transparent 60%
  );
  transform: translateX(-100%) skewX(-15deg);
}

.glass-shimmer:hover::after {
  animation: shimmer 0.9s ease forwards;
}

@keyframes shimmer {
  0%   { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
}
```

### Tailwind Equivalents

```jsx
// glass-card
className="bg-white/[0.03] backdrop-blur-[60px] border border-white/[0.09]
  shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.35)]
  rounded-2xl transition-all duration-500 ease-out"

// glass-hover (add to glass-card)
className="hover:bg-white/[0.07] hover:border-white/[0.18]
  hover:shadow-[inset_0_2px_1px_rgba(255,255,255,0.25),0_16px_48px_rgba(0,0,0,0.55)]
  hover:-translate-y-1.5"
```

---

## 4. Ambient Background System

A fixed, multi-blob background that creates the "deep space with colored light sources" feel.

### Component: `AmbientBackground`

```tsx
// Fixed behind everything, mix-blend-screen lets blobs light the content above
<div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] mix-blend-screen">
  
  {/* Blob 1 — Top-left, primary purple */}
  <div
    className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px]
      bg-primary/20 rounded-full blur-[150px] animate-blob"
  />

  {/* Blob 2 — Top-right, accent violet */}
  <div
    className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px]
      bg-accent-2/20 rounded-full blur-[140px] animate-blob"
    style={{ animationDelay: '2s' }}
  />

  {/* Blob 3 — Bottom-center, blue */}
  <div
    className="absolute bottom-[-20%] left-[20%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px]
      rounded-full blur-[160px] animate-blob"
    style={{ background: 'rgba(59, 130, 246, 0.15)', animationDelay: '4s' }}
  />

  {/* Film grain noise texture overlay */}
  <div
    className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
    }}
  />
</div>
```

### Blob Animation

```css
@keyframes blob {
  0%   { transform: translate(0px, 0px) scale(1); }
  33%  { transform: translate(30px, -50px) scale(1.1); }
  66%  { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 15s infinite alternate ease-in-out;
}
```

> **Key insight:** `mix-blend-screen` on the wrapper means blobs add light to the scene without darkening it. Combined with `blur-[100-160px]` this creates a true Liquid Glass ambient glow.

### Background body pseudo-element

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-color: hsl(var(--background));
  pointer-events: none;
  z-index: -2;
}
```

---

## 5. Animation System

### Keyframes Library

```css
/* Floating — for UI chips/badges around hero image */
@keyframes float {
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.animate-float { animation: float 4s ease-in-out infinite; }
.animate-float.delay-100 { animation-delay: 0.3s; }
.animate-float.delay-300 { animation-delay: 0.9s; }
.animate-float.delay-500 { animation-delay: 1.5s; }

/* Marquee — for skill scrolling bands */
@keyframes marquee {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.animate-marquee         { animation: marquee 40s linear infinite; }
.animate-marquee-reverse { animation: marquee 40s linear infinite reverse; }

/* Skeleton shimmer — for loading states */
@keyframes skeleton-sweep {
  0%   { background-position: -400px 0; }
  100% { background-position:  400px 0; }
}
.skeleton {
  background: linear-gradient(
    90deg,
    hsl(var(--card) / 0.6) 25%,
    hsl(var(--primary) / 0.07) 50%,
    hsl(var(--card) / 0.6) 75%
  );
  background-size: 800px 100%;
  animation: skeleton-sweep 1.6s ease-in-out infinite;
  border-radius: 8px;
}

/* Blob — ambient background blobs */
@keyframes blob {
  0%   { transform: translate(0px, 0px) scale(1); }
  33%  { transform: translate(30px, -50px) scale(1.1); }
  66%  { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob { animation: blob 15s infinite alternate ease-in-out; }
```

### Scroll Reveal (IntersectionObserver Pattern)

```tsx
// ScrollReveal.tsx
const ScrollReveal = ({
  children,
  className = "",
  delay = "delay-0",
  animation = "animate-in fade-in slide-in-from-bottom-4 duration-1000",
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // fire once only
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible
        ? `${animation} ${delay} fill-mode-both`
        : "opacity-0 translate-y-4"}`}
    >
      {children}
    </div>
  );
};
```

**Usage:**
```jsx
<ScrollReveal delay="delay-200">
  <YourCard />
</ScrollReveal>
```

### Typewriter Effect

```tsx
const [typedText, setTypedText] = useState("");
const fullText = "Full Stack Engineer & Creative Developer";

useEffect(() => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < fullText.length) {
      setTypedText(fullText.substring(0, i + 1));
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50);
  return () => clearInterval(interval);
}, []);
```

### Easing Curve

All transitions use `cubic-bezier(0.4, 0, 0.2, 1)` (Material ease-in-out) unless otherwise specified. Key durations:

| Category | Duration |
|---|---|
| Color / opacity | 300ms |
| Translate / scale | 500ms |
| Card lift (hover) | 500ms |
| Scroll reveal | 700–1000ms |
| Shimmer sweep | 900ms–1.8s |
| Marquee loop | 40s |
| Blob drift | 15s |

---

## 6. Component Patterns

### Navigation — Bottom Dock (macOS-style)

```jsx
<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
  <div className="glass-card px-4 py-3 rounded-full flex items-center gap-2
    border border-primary/20 hover:border-primary/50 transition-colors
    shadow-2xl backdrop-blur-2xl bg-background/60">

    {/* Logo icon */}
    <div className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20
      flex items-center justify-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <img src={logo} className="h-6" />
    </div>

    <div className="w-px h-8 bg-border/50 mx-2" /> {/* Divider */}

    {/* Nav items */}
    {menuItems.map((item) => (
      <button key={item.id}
        className="group relative flex flex-col items-center justify-center w-12 h-12
          rounded-2xl hover:bg-white/5 hover:-translate-y-3 hover:scale-110
          transition-all duration-300">
        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        
        {/* Tooltip */}
        <span className="absolute -top-12 opacity-0 group-hover:opacity-100
          translate-y-2 group-hover:translate-y-0 transition-all
          bg-popover text-[10px] py-1 px-3 rounded-full font-display
          tracking-widest border border-border whitespace-nowrap shadow-xl">
          {item.label}
        </span>

        {/* Active dot */}
        <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-primary
          opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    ))}
  </div>
</nav>
```

### Section Shell

```jsx
// Every section wrapper
<section className="py-24 px-4 md:px-8 relative overflow-hidden" id="section-id">
  <div className="max-w-6xl mx-auto relative z-10">
    {/* Section heading */}
    <div className="mb-16 text-center">
      <div className="section-label mb-3" /> {/* Category tag if needed */}
      <h2 className="font-display text-[clamp(40px,8vw,80px)] font-bold tracking-tighter mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
          Word{" "}
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary/40">
          Word
        </span>
      </h2>
      <p className="font-display text-[18px] md:text-[22px] text-foreground/70 max-w-2xl mx-auto">
        Supporting subtitle text.
      </p>
    </div>

    {/* Content grid */}
  </div>
</section>
```

### Glass Card with Icon Header

```jsx
<div className="glass-card glass-shimmer glass-hover p-8 rounded-2xl group relative overflow-hidden">
  {/* Icon */}
  <div className="mb-6 flex items-center gap-4">
    <div className="bg-white/5 p-3 rounded-full border border-white/10
      group-hover:bg-white/10 transition-colors duration-300">
      <Icon className="text-foreground/70" size={24} strokeWidth={1.5} />
    </div>
    <h3 className="font-display text-[20px] font-semibold tracking-tight text-foreground/90">
      Card Title
    </h3>
  </div>

  {/* Content */}
  <p className="font-display text-[15px] leading-[1.9] text-foreground/60">
    Body text here.
  </p>
</div>
```

### Pill / Tag Pattern

```jsx
// Skill/tech tag
<span className="font-display text-[12px] font-medium tracking-wide
  bg-white/5 text-foreground/70 px-4 py-1.5 rounded-full
  border border-white/10 shadow-sm">
  Python
</span>

// Status badge (filled)
<span className="inline-flex items-center px-4 py-2 rounded-full text-[11px]
  font-display uppercase tracking-[0.3em]
  bg-secondary/80 text-primary border border-border/70">
  Available for Work
</span>

// Social link pill
<a className="font-display text-[13px] tracking-wide font-medium flex items-center gap-3
  bg-white/5 text-foreground/80 px-5 py-3 rounded-full
  border border-white/10 hover:bg-white/10 hover:text-foreground transition-all duration-300">
  <Github size={18} />
  GitHub
</a>
```

### CTA Buttons

```jsx
{/* Primary — filled */}
<a className="inline-flex items-center gap-2
  bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold
  hover:bg-primary/90 transition-colors">
  View Projects <ArrowRight size={16} />
</a>

{/* Ghost — outline */}
<a className="inline-flex items-center gap-2
  border border-border/70 text-foreground px-4 py-2 rounded-full text-sm font-semibold
  hover:border-primary/60 hover:text-primary transition-colors">
  Let's Talk
</a>

{/* Text link with animated arrow */}
<a className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group">
  <span className="text-sm font-medium">Read more</span>
  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
</a>
```

### Info Tile (Icon + Label + Value)

```jsx
<div className="flex items-center gap-3 group/status">
  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center
    border border-primary/20 group-hover/status:border-primary/40 transition-all duration-300">
    <MapPin size={16} className="text-primary" />
  </div>
  <div className="flex flex-col">
    <span className="text-[10px] uppercase tracking-[0.1em] font-bold opacity-40">
      Location
    </span>
    <span className="text-sm font-medium">Dhaka, Bangladesh</span>
  </div>
</div>
```

### Floating Chip (around hero avatar)

```jsx
<div className="absolute -top-4 -right-8 z-20 animate-float delay-100">
  <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2
    text-[12px] font-display font-medium tracking-wide border-white/10 shadow-xl">
    <Code size={14} className="text-foreground/70" />
    Full Stack
  </div>
</div>
```

### Gradient Text

```jsx
// Method 1: CSS class
<span className="gradient-text">Highlighted text</span>
/* .gradient-text { background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; } */

// Method 2: Tailwind inline (two-tone heading)
<span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
  Normal part
</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary/40">
  Colored part
</span>

// Method 3: Outlined text that fills on hover
<span className="text-outline text-outline-hover">Giant display word</span>
/* text-outline: color: transparent; -webkit-text-stroke: 2px hsl(var(--primary) / 0.5); */
/* :hover fills with primary + glow */
```

### Form Inputs (Glass Style)

```jsx
<input
  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
    font-display text-sm text-foreground
    focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20
    placeholder:text-foreground/30 transition-all shadow-inner"
/>
```

### Skeleton Loading State

```jsx
// Use .skeleton class on placeholder elements
<div className="skeleton w-11 h-11 rounded-full" />
<div className="skeleton h-5 w-4/5 mb-2" />
<div className="skeleton h-5 w-3/5 mb-6" />
<div className="skeleton h-3.5 w-full mb-2" />
```

---

## 7. Color Accent per Section Type

The portfolio uses accent color variation by section type to visually differentiate content areas:

| Section / Card Type | Hover Accent | Glow Shadow |
|---|---|---|
| Main Projects | `primary` purple | `rgba(147, 51, 234, 0.3)` |
| Fun / CLI Projects | `yellow-500` | `rgba(234, 179, 8, 0.3)` |
| Open Source | `blue-500` | `rgba(59, 130, 246, 0.3)` |
| Contact card | `primary` purple | `rgba(147, 51, 234, 0.3)` |
| Navigation | `primary/20` → `primary/50` on hover | — |

```jsx
// Primary project card hover
className="hover:border-primary/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"

// Fun project card hover
className="hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]"

// Open source card hover
className="hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
```

---

## 8. Scrollbar Styling

```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: hsl(var(--primary) / 0.25);
  border-radius: 20px;
}
::-webkit-scrollbar-thumb:hover { background: hsl(var(--primary) / 0.5); }

* {
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--primary) / 0.25) transparent;
}
```

---

## 9. Layout Architecture

### Page Structure

```
index.html
  └── #root
      └── App
          └── Index (page)
              ├── AmbientBackground   (fixed, z=-1)
              ├── Navigation          (fixed, bottom dock)
              ├── Hero                (min-h-screen)
              ├── About
              ├── Skills
              ├── Projects
              ├── Blogs
              ├── Contact
              └── ScrollToTop
```

### Content Max-Width

All sections use `max-w-6xl mx-auto` (1152px) for content constraint with `px-4 md:px-8` padding.

### Grid Patterns

```jsx
// Hero: asymmetric 2-col
<div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">

// About / Skills cards: 3-col responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Contact form: 2-col
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

// Fun projects: responsive 3-col
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Bento / Spanning

```jsx
// Wide card spanning 2 of 3 columns
<ScrollReveal className="col-span-1 md:col-span-2">
  ...
</ScrollReveal>
```

---

## 10. Skill Marquee Pattern

An infinite bidirectional scrolling skills band:

```jsx
// Pause on hover; mask edges to fade out
<div className="w-full overflow-hidden relative py-4
  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

  {/* Forward row */}
  <div className="flex w-[300%] animate-marquee gap-4 mb-6 hover:[animation-play-state:paused]">
    {[...skills, ...skills, ...skills].map((skill, i) => (
      <div key={i} className="flex-shrink-0 px-8 py-4 rounded-full
        border border-white/10 bg-white/5 text-foreground/80
        text-2xl md:text-4xl font-display font-bold uppercase tracking-widest
        whitespace-nowrap hover:bg-white/10 transition-colors backdrop-blur-md shadow-lg">
        {skill}
      </div>
    ))}
  </div>

  {/* Reverse row */}
  <div className="flex w-[300%] animate-marquee-reverse gap-4 hover:[animation-play-state:paused]">
    {[...reversed, ...reversed, ...reversed].map((skill, i) => (
      <div key={i} className="...">{skill}</div>
    ))}
  </div>
</div>
```

---

## 11. Image Slider with Auto-play

Used for project screenshots inside cards:

```tsx
const ImageSlider = ({ images, name }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => setCurrent(p => (p + 1) % images.length), [images.length]);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [isHovered, next, images.length]);

  return (
    <div style={{ height: '180px' }} className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      {/* Slide strip */}
      <div className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full flex-shrink-0">
            <img src={img} className="w-full h-full object-cover object-top
              group-hover:scale-110 transition-transform duration-700" />
          </div>
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, hsl(var(--card)) 0%, transparent 100%)' }} />

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300 hover:scale-150"
              style={{
                width: i === current ? '20px' : '6px',
                height: '6px',
                background: i === current ? 'var(--primary, #9231E8)' : 'rgba(255,255,255,0.5)',
              }} />
          ))}
        </div>
      )}
    </div>
  );
};
```

---

## 12. Tailwind Config (Minimal Adaptation)

When starting a new project, use this Tailwind configuration as a base:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        card:        "hsl(var(--card))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border:      "hsl(var(--border))",
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        float:  { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        blob:   { "0%": { transform: "translate(0,0) scale(1)" }, "33%": { transform: "translate(30px,-50px) scale(1.1)" }, "66%": { transform: "translate(-20px,20px) scale(0.9)" }, "100%": { transform: "translate(0,0) scale(1)" } },
        marquee: { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        float:   "float 4s ease-in-out infinite",
        blob:    "blob 15s infinite alternate ease-in-out",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee 40s linear infinite reverse",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## 13. Quick-Start Checklist

When starting a new project using this design system:

- [ ] Copy CSS variable block into `:root` (section 1)
- [ ] Load Google Fonts: Space Grotesk + Inter (section 2)
- [ ] Add `.glass-panel`, `.glass-card`, `.glass-hover`, `.glass-shimmer` CSS classes (section 3)
- [ ] Add `AmbientBackground` component with 3 blobs + noise texture (section 4)
- [ ] Add `@keyframes float`, `blob`, `marquee`, `skeleton-sweep`, `shimmer` (section 5)
- [ ] Add `ScrollReveal` wrapper component using IntersectionObserver (section 5)
- [ ] Apply `max-w-6xl mx-auto px-4 md:px-8 py-24` to every section shell
- [ ] Style `body::before` as a fixed background color (prevents transparency gaps)
- [ ] Add custom scrollbar CSS (section 8)
- [ ] Apply `tailwindcss-animate` plugin for `animate-in` utilities

---

## 14. Philosophy Summary

| Principle | Implementation |
|---|---|
| **Depth over flatness** | 3-layer glass hierarchy: background → card → panel |
| **Light from within** | `inset` box-shadows simulate a top-lit glass rim |
| **Air and space** | `py-24` section padding, generous `gap-6/8/12` grids |
| **Subtle, not silent** | Hover states: lift + brighten + shimmer sweep — all at once |
| **Color as narrative** | Purple = primary action, Yellow = fun/experiments, Blue = open source |
| **Type does the heavy lifting** | Massive `clamp()` headings, tight tracking, two-tone gradient splits |
| **Nothing stops animating** | Blobs drift, chips float, marquees roll, cards shimmer — always alive |
| **Consistent blur radius** | `blur-[50px]` panel, `blur-[60px]` card, `blur-[100-160px]` ambient blobs |
