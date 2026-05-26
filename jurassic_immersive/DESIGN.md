---
name: Jurassic Immersive
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#8fcdff'
  on-secondary: '#003450'
  secondary-container: '#1a99de'
  on-secondary-container: '#002d46'
  tertiary: '#ffffff'
  on-tertiary: '#003258'
  tertiary-container: '#d1e4ff'
  on-tertiary-container: '#0067ae'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#cbe6ff'
  secondary-fixed-dim: '#8fcdff'
  on-secondary-fixed: '#001e30'
  on-secondary-fixed-variant: '#004b71'
  tertiary-fixed: '#d1e4ff'
  tertiary-fixed-dim: '#9fcaff'
  on-tertiary-fixed: '#001d36'
  on-tertiary-fixed-variant: '#00497d'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  surface-glass: rgba(11, 11, 11, 0.7)
  divider-line: rgba(255, 255, 255, 0.6)
  muted-stone: '#252526'
  deep-earth: '#1a1a1a'
typography:
  display-hero:
    fontFamily: EB Garamond
    fontSize: 70px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.2'
  section-title:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter-mobile: 16px
  margin-mobile: 20px
---

## Brand & Style

The brand personality is **Cinematic, Educational, and Atmospheric**. It aims to transport the user into a digital excavation site, evoking a sense of awe and curiosity. The UI is designed to feel like a high-end museum exhibit—sophisticated and authoritative, yet accessible through digital interaction.

The design style is a blend of **Minimalism** and **Tactile/Skeuomorphic** elements. While the layout remains clean with heavy whitespace (or "blackspace"), depth is achieved through high-quality textures (stone, fossils, aged paper) and layered transparencies. This creates a "Glassmorphism" effect over dark, immersive backgrounds, ensuring the prehistoric imagery remains the focal point. The emotional response should be one of "discovery in the dark," using light and shadow to guide the user's eye to educational highlights.

## Colors

The palette is rooted in **Pure Black (#000000)** to provide an infinite canvas that mimics a darkened museum hall. 

- **Primary**: White is used for core legibility and critical interaction borders, creating a high-contrast, editorial feel.
- **Secondary & Tertiary**: Blues are reserved strictly for digital utility—chat interactions, links, and focus states—to distinguish between "Historical Content" and "App Interface."
- **Neutrals**: A range of deep grays and translucent blacks are used to create layers of depth. 

Use `surface-glass` for containers that sit atop background images to maintain immersion without sacrificing readability.

## Typography

This design system uses a sharp typographic contrast to denote different types of information:

1.  **Serif (EB Garamond)**: Used for all narrative and historical content. Large, thin weights create a sense of elegance and antiquity.
2.  **Sans-Serif (Inter)**: Used for functional body text, ensuring high legibility on mobile screens during long reading sessions.
3.  **Monospaced (JetBrains Mono)**: Used for labels, technical data (e.g., years, measurements), and interactive UI elements to provide a "scientific catalog" aesthetic.

**Special Treatment**: Hero headings should utilize a heavy drop shadow (`4px 4px 2px black`) when placed over busy dinosaur textures to ensure contrast.

## Layout & Spacing

The layout is optimized for a **mobile-first, immersive vertical scroll**. It follows a **fluid grid model** where content is centered with a focus on full-bleed imagery.

- **Vertical Rhythm**: Use large `xl` (48px) gaps between major sections to allow the background images to "breathe."
- **Horizontal Constraints**: On mobile, use a 20px margin to ensure text does not touch the edge of the screen.
- **Section Breaks**: Use thin, low-opacity horizontal rules (`divider-line`) to separate informational blocks within a single view.
- **Safe Areas**: All primary CTAs and interactive buttons (Chat, Back-to-Top) must respect a 16px safe area from the screen edges and bottom navigation bars.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Luminous Accents** rather than traditional shadows:

1.  **Base Layer**: The background consists of high-resolution textures (fossilized stone, dark jungle) or solid black.
2.  **Surface Layer**: Modals and cards use `surface-glass` with a subtle backdrop blur.
3.  **Glow Interaction**: Interactive text and icons do not just change color; they utilize a "bloom" effect (`text-shadow: 0 0 10px white`) on hover or touch to simulate a light source in a dark room.
4.  **Structural Shadows**: For elements that must sit "above" content (like floating action buttons), use extra-diffused shadows with low opacity to avoid breaking the immersive dark environment.

## Shapes

The shape language reflects a balance between the organic and the systematic:

- **Containers**: Cards and modals use a **Rounded (0.5rem)** radius to feel modern and approachable.
- **Interactive Elements**: Buttons and input fields follow the same roundedness for consistency.
- **Utility Buttons**: Floating action buttons (Chat, Navigation) use a **Pill/Circle** shape (50%) to distinguish them from content containers.
- **Dividers**: Use 1px solid lines with 60% opacity to maintain a technical, "blueprint" feel for data-heavy sections.

## Components

### Buttons
- **Primary**: Transparent background, 2px solid white border, white text in `label_font`. On hover/tap, invert colors (white background, black text).
- **Floating Action (FAB)**: Circular, background `muted-stone`, containing a single icon or symbol. Scale up by 1.1x on interaction.

### Cards & Containers
- **Info Blocks**: Background `surface-glass`. Features a 1px top border. Titles are always in `headline-lg` serif.
- **Chat Container**: `deep-earth` background with 15px rounded corners. Use `secondary` blue for user-accented links.

### Input Fields
- Dark background (`#3c3c3c`), 6px radius, and a 1px border that glows `tertiary` blue on focus.

### Iconography
- Use character-based symbols ($, ✔, ↑) or custom SVG motifs (like the Dino icon) rather than generic icon libraries. This reinforces the "bespoke museum" aesthetic.

### Lists
- Lists in the chatbot or educational sections should use a subtle `fadeIn` animation, translating 10px upward to guide the user's eye.