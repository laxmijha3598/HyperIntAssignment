# Product Review Section Assignment (ReactJS)

This project is a static React implementation of a product description page inspired by:

- [Maska Peanut Butter - Chocolate Salvation](https://www.maskabutters.in/products/maska-peanut-butter-chocolate-salvation)

The goal is to demonstrate design hierarchy and Word of Mouth modules, not a full website redesign.

## What is implemented

- Product hero area with pricing, trust badges, and purchase CTA
- Live social counters strip (sales, ratings, review volume, repeat intent)
- 3 creative review-section variations:
  - Social Proof Grid
  - Media + Review Momentum layout
  - Live Comment Rail
- Responsive behavior for mobile/tablet breakpoints
- Clean, editable static content for fast iteration before submission

## Tech stack

- React (Vite)
- Plain CSS (custom components and layout styles)

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in terminal, usually `http://localhost:5173`.

## Production build check

```bash
npm run build
```

## Main files

- `src/App.jsx` - all product and review section structures
- `src/App.css` - visual system and responsive styles
- `src/index.css` - base global styles

## How to customize quickly

- Change static texts/data arrays at top of `src/App.jsx`
- Swap palette values in `src/App.css`
- Add or remove a full design variation by copying one `.variation-block`
