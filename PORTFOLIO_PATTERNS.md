# PORTFOLIO_PATTERNS

Clifford's portfolio pattern is highly reusable. Copy this structure across personal-brand and service-led sites.

## Hero Architecture (4 Layers)

1. `relative` container  
2. Full-bleed background image  
3. Dark gradient overlay for contrast  
4. `z-10` foreground content

## Above-the-Fold Layout

- Use a 2-column hero:
  - Left: value proposition + CTAs
  - Right: visual trust anchor (portrait, proof card, or badge)
- Add micro-trust signals immediately:
  - Active status pill
  - Credential chip
  - One measurable metric

## Navigation Rules

- Keep labels short and scannable
- Show a clear active state
- Include language toggle where relevant
- Use one dominant CTA button

## Credibility Content Structure

Prefer this sequence over generic feature lists:

1. Problem
2. Solution
3. Impact

## Reusable UI Primitives

Standardize visual building blocks to scale cleanly:

- `Hero`
- `Icon`
- `ValidationTicker`
- Glass cards

## Motion Principles

- Use purposeful loops only (ticker, pulse, fade-in)
- Motion should reinforce trust and comprehension
- Avoid decorative-only animation noise

## Asset and Naming Conventions

- Keep visual assets in one source path (example: `public/imgs/`)
- Use clear, reusable section and component names for cross-project portability
