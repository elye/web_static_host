# Copilot Instructions for Personal Landing Page

## Project Overview
A vanilla JavaScript personal landing page with smooth animations and interactive elements. No build system, bundlers, or frameworks - just HTML, CSS, and JavaScript served statically.

## Architecture & Key Files
- [index.html](../index.html): Single-page structure with hero, projects, and contact sections
- [styles.css](../styles.css): CSS custom properties-based theming with responsive breakpoints at 768px and 480px
- [script.js](../script.js): Vanilla JS with Intersection Observer for scroll animations and manual DOM manipulation

## Design System & Conventions

### CSS Variables (in `:root`)
All colors and shadows use CSS custom properties defined in [styles.css](../styles.css#L1-L11). Never hardcode colors - use variables like `var(--primary-color)`, `var(--text-secondary)`, etc.

### Responsive Breakpoints
- Desktop-first approach with media queries at 768px and 480px
- Grid layouts use `auto-fit` with `minmax(300px, 1fr)` pattern - see [projects-grid](../styles.css#L294-L298)

### Animation Patterns
All animations use Intersection Observer with fade-in + translateY effects:
1. Elements start with `opacity: 0` and `transform: translateY(20px)`
2. Transition: `opacity 0.6s ease, transform 0.6s ease`
3. Observer triggers at 10% visibility - see [script.js](../script.js#L14-L36)

### Button Styling
Two button variants defined in [styles.css](../styles.css#L110-L139):
- `.btn-primary`: Solid blue background (uses `var(--primary-color)`)
- `.btn-secondary`: Transparent with border, changes to blue on hover

## Adding New Projects

Projects are hardcoded in [index.html](../index.html#L48-L107) as `.project-card` divs. Each card follows this structure:
```html
<div class="project-card">
    <div class="project-icon">🤖</div>
    <h3>Project Title</h3>
    <p>Description text</p>
    <div class="project-links">
        <a href="..." class="btn btn-primary">View Radar</a>
        <a href="..." class="btn btn-secondary">View Code</a>
    </div>
</div>
```

Use emoji for `.project-icon` (2.5rem font-size). Each project typically has two links: primary (live site) and secondary (GitHub repo).

## Interactive Features

### Smooth Scrolling
Functions `scrollToProjects()` and `scrollToContact()` in [script.js](../script.js#L2-L10) are called from inline `onclick` handlers in buttons.

### Avatar Animation
The hero avatar has a 4-second floating loop (translateY ±10px) that pauses on hover - see [script.js](../script.js#L81-L107).

### Typing Effect
Hero title has a character-by-character typing effect for "Elye" text, triggered 500ms after page load - see [script.js](../script.js#L39-L64).

## Development Workflow
No build process. To test:
```bash
python3 -m http.server 8000
# Or just open index.html in browser
```

## Styling Patterns

### Cards with Hover Effects
All cards (`.project-card`, `.social-link`) use:
- `transition: all 0.3s ease`
- Hover: `transform: translateY(-4px)` + `box-shadow: var(--shadow-lg)`

### External Links
Always include `target="_blank" rel="noopener noreferrer"` for security - see project cards and social links.

## What NOT to Do
- Don't add build tools (Webpack, Vite, etc.) - keep it vanilla
- Don't use frameworks (React, Vue) - maintain simplicity
- Don't change the grid-based layout system - it's intentionally flexible
- Don't remove the Intersection Observer - it's core to the UX
