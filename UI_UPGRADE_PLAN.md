# UI Upgrade Plan — ReactBits-style effects (hand-off to Antigravity)

**No `npm install` needed** — everything uses existing deps (framer-motion, react) + canvas/CSS.
After finishing: test with `npm run dev`, then commit + push from Antigravity.

---

## ✅ Already created (in `src/components/effects/`)
- `SiteBackground.jsx` — Galaxy starfield (dark) / Dot grid (light), theme-aware, reduced-motion + mobile safe.
- `ClickSpark.jsx` — global spark burst on click.
- `ShinyText.jsx` — `<ShinyText>` wrapper (needs CSS below).
- `CardGlow.jsx` — mounts once, adds mouse spotlight to every `.bento-card` (needs CSS below).
- `LogoLoop.jsx` — infinite marquee of tool logos (needs CSS below).
- `ProfileLanyard.jsx` — draggable lanyard badge (desktop) / tilt card (mobile).

## ✅ Completed tasks (integration)

### 1. `src/App.jsx` — mount global effects
Add imports:
```jsx
import SiteBackground from './components/effects/SiteBackground';
import ClickSpark from './components/effects/ClickSpark';
import CardGlow from './components/effects/CardGlow';
import LogoLoop from './components/effects/LogoLoop';
```
Inside the root `<div className="min-h-screen ...">`, as the FIRST children (before `<Navbar/>`):
```jsx
<SiteBackground theme={theme} />
<ClickSpark />
<CardGlow />
```
Add a slim logo band right AFTER `<AboutMe />`:
```jsx
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-y border-card-border">
  <LogoLoop />
</div>
```
> Note: the page background is now the canvas. If sections have solid `bg-bg`, keep them slightly translucent so the galaxy shows through (optional): change section wrappers like `bg-card/30` — already translucent, fine. The root div must NOT have an opaque bg covering the canvas: change `bg-bg` → `bg-transparent` on the root `<div>` (canvas is `-z-10` fixed).

### 2. `src/components/AboutMe.jsx` — lanyard + shiny name
Add imports:
```jsx
import ProfileLanyard from './effects/ProfileLanyard';
import ShinyText from './effects/ShinyText';
```
- Replace the ENTIRE right-column `<motion.div ...>` that holds `/avatar/profile.jpg` (the `hidden md:flex` block with the profile image + "Years" badge) with:
```jsx
<div className="hidden md:block">
  <ProfileLanyard />
</div>
```
- Wrap the hero name accent span in ShinyText (optional, keep gradient or swap):
```jsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
  Bao Tri
</span>
```
→ can become `<ShinyText>Bao Tri</ShinyText>` if you prefer the sweep over the gradient.

### 3. `src/index.css` — append this CSS block
```css
/* --- Shiny text --- */
.shiny-text {
  background: linear-gradient(120deg, var(--text-primary) 42%, var(--accent) 50%, var(--text-primary) 58%);
  background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: shiny 4s linear infinite;
}
@keyframes shiny { to { background-position: -200% 0; } }

/* --- Card spotlight glow (works with CardGlow.jsx) --- */
.bento-card::before {
  content: ""; position: absolute; inset: 0; border-radius: inherit;
  background: radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), var(--accent-glow), transparent 60%);
  opacity: 0; transition: opacity .3s ease; pointer-events: none; z-index: 0;
}
.bento-card:hover::before { opacity: 1; }
.bento-card > * { position: relative; z-index: 1; }

/* --- Logo loop --- */
.logo-loop-track { animation: logo-scroll 32s linear infinite; }
.logo-loop-mask:hover .logo-loop-track { animation-play-state: paused; }
.logo-loop-item { filter: grayscale(1); opacity: .55; transition: filter .3s, opacity .3s; }
.logo-loop-item:hover { filter: grayscale(0); opacity: 1; }
.logo-loop-mask {
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}
@keyframes logo-scroll { to { transform: translateX(-50%); } }

@media (prefers-reduced-motion: reduce) {
  .shiny-text, .logo-loop-track { animation: none; }
}
```

### 4. Count Up — DONE
`ImpactMetrics.jsx` already animates the numbers (AnimatedCounter). No action needed.

### 5. ✅ Test & ship
1. `npm run dev` → check: galaxy on dark / dot-grid on light, click sparks, card glow on hover, logo loop scrolls, lanyard drags (desktop) / tilt (mobile).
2. If a section looks too busy over the galaxy, add `backdrop-blur-sm` or a translucent bg to that section wrapper.
3. Commit + push:
```
git add -A
git commit -m "feat(ui): ReactBits-style effects — galaxy/dot-grid bg, click spark, logo loop, card glow, lanyard"
git push origin main
```

## ⚠️ Notes
- All effects are lazy/canvas-based; galaxy + spark auto-disable animation on small screens / reduced-motion.
- If galaxy feels too strong, lower star count in `SiteBackground.jsx` (`count` variable) or nebula alpha (`rgba(16,185,129,0.06)`).
- Logos load from `cdn.simpleicons.org`; each has an onError fallback (hides if blocked).
