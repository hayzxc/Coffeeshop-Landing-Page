# ☕ Biji Cerita - Coffee Shop Landing Page

A modern, responsive coffee shop landing page built with React, TypeScript, and TailwindCSS. Features beautiful animations, dark mode support, and a seamless user experience.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful, premium design with glassmorphism effects
- 🌙 **Dark/Light Mode** - Smooth theme switching with system preference detection
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🎭 **Scroll Animations** - Smooth AOS (Animate on Scroll) animations
- 🖼️ **Parallax Effects** - Dynamic background scrolling for visual depth
- 🖱️ **Hover Animations** - Interactive image effects on hover
- 📝 **Booking Form** - WhatsApp integration for table reservations
- 🎠 **Image Carousel** - Auto-playing hero section carousel

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **UI Components:** shadcn/ui (Radix UI)
- **Animations:** AOS (Animate on Scroll)
- **Form Handling:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Carousel:** Embla Carousel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/hayzxc/Coffeeshop-Landing-Page.git
cd Coffeeshop-Landing-Page
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   ├── About.tsx        # About section
│   ├── BookingForm.tsx  # Table reservation form
│   ├── Contact.tsx      # Contact information
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Hero section with carousel
│   ├── Menu.tsx         # Menu display with tabs
│   ├── Navbar.tsx       # Navigation bar
│   └── ParallaxSections.tsx  # Parallax dividers
├── data/
│   ├── menu.ts          # Menu items data
│   └── schema.ts        # Zod validation schemas
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎯 Sections

1. **Hero** - Eye-catching intro with image carousel
2. **About** - Coffee shop story and features
3. **Parallax Divider** - Quote section with parallax background
4. **Menu** - Categorized menu with coffee, non-coffee, refreshers, and food
5. **CTA Section** - Call-to-action with parallax effect
6. **Booking** - Table reservation form with WhatsApp integration
7. **Contact** - Location, hours, and contact information
8. **Footer** - Newsletter signup and social links

## ⚙️ Configuration

### WhatsApp Integration

Update the WhatsApp number in `src/components/BookingForm.tsx`:

```typescript
const WHATSAPP_NUMBER = "6285736423884"; // Replace with your number
```

### Menu Items

Edit menu items in `src/data/menu.ts` to customize your offerings.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Unsplash](https://unsplash.com/) for stock images
- [Lucide](https://lucide.dev/) for icons

---

Made with ❤️ by [hayzxc](https://github.com/hayzxc)
