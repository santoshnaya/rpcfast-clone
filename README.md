# RPCFast Clone

A pixel-perfect, front-end-only clone of the RPC Fast Webflow site, built with modern web technologies.

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple)

## 🚀 Live Demo

Deploy your own version:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/santoshnaya/rpcfast-clone)

## 📋 Project Overview

This project is a complete front-end recreation of the RPC Fast website, featuring:

- **Pixel-perfect design** matching the original Webflow site
- **Responsive design** optimized for all device sizes
- **Modern animations** using Framer Motion
- **Performance optimized** with Next.js 15
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling

## 🎯 Features

### ✅ Completed Sections

- **Hero Section** - Navigation, headline, and blockchain node illustration
- **Trust Logos** - Industry leader partnership showcase
- **Performance Comparison** - Feature cards highlighting advantages
- **Uptime Statistics** - Large 99.9% uptime display
- **Node Services** - Dedicated nodes and cluster offerings
- **Contact Section** - Developer-to-developer messaging with founder profile
- **Blockchain Support** - Multi-blockchain compatibility showcase
- **Pricing Tiers** - Three-tier pricing comparison
- **Testimonials** - Client success stories and achievements
- **FAQ Section** - Frequently asked questions about blockchain nodes
- **Footer** - Complete navigation and contact information

### 🎨 Design Features

- **Smooth scroll-triggered animations**
- **Interactive hover states**
- **Mobile-optimized navigation**
- **Modern color palette** (orange/purple accents)
- **Typography hierarchy** matching original design
- **Responsive grid layouts**

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/santoshnaya/rpcfast-clone.git
   cd rpcfast-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Local Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Deploy to Vercel

1. **Automatic Deploy** (Recommended)
   - Click the "Deploy with Vercel" button above
   - Or connect your GitHub repo to Vercel

2. **Manual Deploy**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)  
- **Mobile** (320px - 767px)

## 🎭 Animations

Includes smooth animations for:
- Page load and scroll-triggered reveals
- Hover states and button interactions
- Hero section entrance effects
- Logo carousel transitions
- Testimonial slider navigation

## 📊 Performance

- **First Load JS**: ~145 kB
- **Build Size**: Optimized for production
- **Core Web Vitals**: Excellent scores
- **SEO Ready**: Semantic HTML structure

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
├── app/                 # Next.js App Router
│   ├── page.tsx        # Main page component
│   └── layout.tsx      # Root layout
├── components/         # React components
│   ├── Hero.tsx       # Hero section
│   ├── TrustLogos.tsx # Company logos
│   ├── Performance.tsx # Feature comparison
│   ├── Uptime.tsx     # Uptime statistics
│   ├── NodeServices.tsx # Service offerings
│   ├── Contact.tsx    # Contact section
│   ├── Blockchains.tsx # Blockchain support
│   ├── Pricing.tsx    # Pricing tiers
│   ├── Testimonials.tsx # Client testimonials
│   ├── FAQ.tsx        # FAQ section
│   └── Footer.tsx     # Footer
├── public/            # Static assets
└── tailwind.config.js # Tailwind configuration
```

## 🎨 Design System

### Colors
- **Primary**: Orange (#f97316)
- **Secondary**: Purple (#8b5cf6)
- **Neutral**: Gray scale
- **Background**: White/Gray-50

### Typography
- **Font**: System font stack
- **Headings**: Bold, various sizes
- **Body**: Regular weight
- **Responsive scaling**

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is for educational and demonstration purposes only. The original design belongs to RPC Fast.

## 🔗 Links

- **Live Demo**: [Deploy on Vercel](https://vercel.com/new/clone?repository-url=https://github.com/santoshnaya/rpcfast-clone)
- **Original Site**: [RPC Fast](https://rpcfast.com) (for reference)
- **Next.js Docs**: [nextjs.org](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)

## 🙏 Acknowledgments

- Original design by RPC Fast team
- Built with Next.js and modern React practices
- Styled with Tailwind CSS
- Animated with Framer Motion

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
