# Portfolio Website

A modern, professional portfolio website for an AI/ML engineer and researcher, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, minimal design with warm copper accents
- 🏎️ **F1 Car Animation**: Canvas-based hero section with smooth F1 car animation and tire tracks
- ♿ **Accessible**: Respects `prefers-reduced-motion`, keyboard navigable, high contrast
- 📱 **Responsive**: Fully responsive across mobile, tablet, and desktop
- ⚡ **Performance**: Optimized with 30-45 FPS animation cap, lazy loading, and efficient rendering
- 🎯 **SEO-Friendly**: Proper meta tags, semantic HTML, and Open Graph support

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: HTML Canvas API
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx          # Hero section with animation
│   ├── About.tsx         # About section
│   ├── TechSkills.tsx    # Skills section
│   ├── Education.tsx     # Education timeline
│   ├── Experience.tsx    # Experience section
│   ├── Publications.tsx  # Publications list
│   ├── GetInTouch.tsx    # Contact section
│   └── CanvasAnimation.tsx # F1 car animation
├── data/                  # Data files
│   └── portfolio-data.ts # Centralized content
├── hooks/                 # Custom React hooks
│   ├── useReducedMotion.ts
│   └── useClipboard.ts
├── utils/                 # Utility functions
│   └── canvasHelpers.ts  # Canvas animation logic
└── public/               # Static assets
    └── avatar.png        # Avatar image
```

## Customization

### Update Content

Edit `data/portfolio-data.ts` to update:
- Personal information
- Skills and categories
- Education history
- Work experience
- Publications
- Contact information

### Update Colors

Edit `tailwind.config.ts` to customize the color palette.

### Update Avatar

Replace `public/avatar.png` with your own avatar image.

## Performance Features

- **FPS Capping**: Animation runs at 30-45 FPS for optimal performance
- **Tab Visibility**: Animation pauses when tab is inactive
- **Reduced Motion**: Respects user's motion preferences
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- High contrast text (WCAG AA compliant)
- Screen reader friendly
- `prefers-reduced-motion` support

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Built with ❤️ using Next.js and Tailwind CSS
