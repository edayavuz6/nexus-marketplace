<div align="center">

<br />

```
███╗   ██╗███████╗██╗  ██╗██╗   ██╗███████╗
████╗  ██║██╔════╝╚██╗██╔╝██║   ██║██╔════╝
██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║███████╗
██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║╚════██║
██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝███████║
╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
```

**Premium Technology Marketplace**

A production-ready, full-featured e-commerce web application built with React & Vite.
Inspired by the design philosophy of Apple, Nothing, and modern SaaS platforms.

<br />

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-10B981?style=for-the-badge)

<br />

[Live Demo](#) · [Report a Bug](https://github.com/edayavuz6/nexus/issues) · [Request Feature](https://github.com/edayavuz6/nexus/issues)

</div>

---

## 📸 Preview

> Dark Mode — Hero Section with auto-sliding product carousel
> Light Mode — Clean editorial aesthetic inspired by premium retail brands

---

## ✨ Features

### 🛍️ Shopping Experience
- **Real API Integration** — Products fetched live from [DummyJSON](https://dummyjson.com/products) with dynamic loading
- **Product Search** — Live search with 400ms debounce for performance; searches across name, brand and tags
- **Category Filtering** — Dynamic category tabs fetched from API; click any category to instantly filter
- **Smart Sorting** — Sort by Featured, Price (Low→High / High→Low), Top Rated, or Best Deals
- **Product Detail Modal** — Full-screen modal with image gallery, specs, tag pills, quantity selector, stock info and reviews
- **Quick Add** — Hover over any product card to reveal a quick-add button without opening the modal

### 🛒 Shopping Cart
- **Persistent Cart** — Cart state saved to `localStorage`; survives page refreshes and browser restarts
- **Quantity Controls** — Increment / decrement / remove individual items directly from the cart drawer
- **Subtotal & Shipping** — Automatic shipping calculation; free shipping unlocked above $99
- **Clear Cart** — One-click full cart reset
- **Slide-In Drawer** — Smooth cart panel slides in from the right with backdrop blur overlay

### ❤️ Wishlist
- **Add to Wishlist** — Heart icon on every product card; persisted to `localStorage`
- **Visual Feedback** — Active wishlist items highlighted with red heart icon
- **Accessible** — Works from both product cards and the product detail modal

### 🔔 Toast Notifications
- **Add to Cart Toast** — Bottom-right popup with product thumbnail, name, and confirmation message
- **Auto-dismiss** — Toasts disappear automatically after 3.5 seconds
- **Manual close** — Each toast has an × button for immediate dismissal
- **Stacking** — Multiple toasts stack gracefully

### 🌙 Dark / Light Mode
- **System-Aware Default** — Defaults to dark mode; toggle instantly in the navbar
- **Smooth Transitions** — All colors transition at `0.4s ease` — no jarring flashes
- **Full Coverage** — Every component (hero, products, cart, modal, footer) responds to the theme

### 🎠 Hero Carousel
- **Auto-Sliding** — Cycles through 4 premium product showcases every 5.5 seconds
- **Manual Dots** — Click the dot indicators to jump to any slide
- **Slide Counter** — Editorial `01 / 04` counter in the bottom-right corner
- **Glassmorphism Card** — Product displayed inside a frosted-glass card with gradient border and floating feature badges
- **Smooth Transitions** — Fade + scale animation on slide change; background glow color morphs per product

### 🖼️ Product Cards
- **Hover Lift** — Cards elevate with `translateY(-6px) scale(1.01)` on hover
- **Image Zoom** — Product thumbnail zooms subtly on hover
- **Error Fallback** — If an image fails to load, a clean placeholder with category label is shown
- **Discount Badges** — Red percentage badge auto-calculated from `discountPercentage`
- **Low Stock Warning** — Amber badge shown when `stock < 10`
- **Star Ratings** — SVG star icons rendered from API rating data

### 🔍 Search Modal
- **Instant Results** — Search results appear as you type (debounced at 400ms)
- **Skeleton Loaders** — Shimmer placeholders shown while results load
- **Popular Searches** — Pill buttons for trending terms when no query is entered
- **Click to Add** — Click any result to add it to cart and close the modal

### ⚡ Performance & Code Quality
- **Custom Hooks** — `useProducts`, `useCategories`, `useProduct` abstract all API logic
- **Context API** — `CartContext` and `ToastContext` for clean global state management
- **Debounced Search** — Prevents excessive API calls on keystroke
- **Skeleton Loaders** — Full shimmer skeleton grid shown while products load
- **Error States** — Graceful error UI if the API fails
- **Semantic HTML** — Proper use of `<nav>`, `<section>`, `<main>`, `<footer>`, `<button>`
- **No External UI Library** — 100% custom components; no component library dependency

---

## 🏗️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18 | UI framework |
| [Vite](https://vitejs.dev) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first styling |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | v4 | Vite plugin for Tailwind v4 |
| [DummyJSON API](https://dummyjson.com) | — | Products & categories data |
| [Google Fonts](https://fonts.google.com) | — | Inter + Syne typography |

---

## 📁 Project Structure

```
nexus/
├── public/
│   └── favicon.svg
├── src/
│   ├── context/
│   │   └── CartContext.jsx      # Cart + Wishlist state (localStorage)
│   ├── hooks/
│   │   └── useProducts.js       # useProducts, useCategories, useProduct
│   ├── components/
│   │   ├── Navbar.jsx            # Fixed navbar — search, dark mode, cart
│   │   ├── Hero.jsx              # Auto-carousel hero with glassmorphism card
│   │   ├── Categories.jsx        # Dynamic category grid from API
│   │   ├── Products.jsx          # Product grid with sorting
│   │   ├── ProductCard.jsx       # Individual product card
│   │   ├── ProductModal.jsx      # Full product detail modal
│   │   ├── CartDrawer.jsx        # Slide-in cart panel
│   │   ├── SearchModal.jsx       # Live search overlay
│   │   ├── Skeleton.jsx          # Shimmer skeleton loaders
│   │   ├── Toast.jsx             # Toast notification system + context
│   │   ├── Extras.jsx            # Testimonials, Brands, Newsletter, FAQ
│   │   └── Footer.jsx            # Multi-column footer
│   ├── App.jsx                   # Root component — theme state, layout
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles, CSS variables, animations
├── index.html
├── vite.config.js
├── package.json
└── README.md
```


Make sure your `vite.config.js` looks like this:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

## 🎨 Design System

### Color Palette

| Token | Dark Mode | Light Mode |
|---|---|---|
| Background | `#0A0A0A` | `#F8F8F8` |
| Surface | `#111111` | `#FFFFFF` |
| Surface Alt | `#1A1A1A` | `#F0F0F0` |
| Text Primary | `#F5F5F5` | `#0A0A0A` |
| Text Muted | `rgba(245,245,245,0.45)` | `rgba(10,10,10,0.45)` |
| Accent | `#6366F1` (Indigo) | same |
| Accent 2 | `#8B5CF6` (Violet) | same |
| Success | `#10B981` | same |
| Danger | `#EF4444` | same |
| Gold | `#F59E0B` | same |

### Typography

- **Display / Headings** — [Syne](https://fonts.google.com/specimen/Syne) — weight 600–800
- **Body / UI** — [Inter](https://fonts.google.com/specimen/Inter) — weight 300–600

### Key Design Patterns

- **Glassmorphism** — `backdrop-filter: blur(20px)` + `rgba` backgrounds on modals, hero card, and overlays
- **Gradient Accents** — `linear-gradient(135deg, #6366F1, #8B5CF6)` on CTAs, badges, and avatar initials
- **Micro-interactions** — Hover lifts, scale transforms, and opacity transitions on all interactive elements
- **Radial Glow Blobs** — Large filtered blobs behind the hero section that transition color per product slide

---

## 🔌 API Reference

This project uses the free [DummyJSON](https://dummyjson.com) REST API.

| Endpoint | Used For |
|---|---|
| `GET /products?limit=30` | All products grid |
| `GET /products/search?q={query}` | Live search results |
| `GET /products/category/{slug}` | Category filtering |
| `GET /products/categories` | Category list in nav & grid |
| `GET /products/{id}` | Single product (available via `useProduct` hook) |

---

## 📱 Responsive Design

| Breakpoint | Layout |
|---|---|
| Mobile (`< 640px`) | Single column grid, stacked hero |
| Tablet (`640px – 900px`) | 2-column grid, collapsed nav |
| Desktop (`> 900px`) | Full 3-column hero, 4+ column product grid |

---

## 🗺️ Roadmap

- [ ] React Router — dedicated `/products/:id` pages
- [ ] User authentication — sign in / sign up flow
- [ ] Checkout flow — multi-step form with order summary
- [ ] Framer Motion — page transitions and scroll reveal animations
- [ ] Pagination — infinite scroll or page buttons for large datasets
- [ ] Product comparison — side-by-side spec comparison
- [ ] Filter by rating — star-based filter in sidebar
- [ ] Order history — mock order management in LocalStorage

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.



---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👩‍💻 Author

**Eda Yavuz** — Frontend & Email Template Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Eda_Yavuz-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/eda-yavuz-646011377/)
[![GitHub](https://img.shields.io/badge/GitHub-edayavuz6-181717?style=flat-square&logo=github)](https://github.com/edayavuz6)
[![Email](https://img.shields.io/badge/Email-edayavuzcontact%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:edayavuzcontact@gmail.com)

---

<div align="center">

Built with ❤️ using React & Tailwind CSS

⭐ If you found this project useful, please consider giving it a star!

</div>
