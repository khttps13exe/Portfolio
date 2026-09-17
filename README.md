# 🌌 Limitless Sorcerer — Personal Social Links Hub

A single-page personal links & bio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed for **Vercel** deployment with an anime-inspired limitless fighting aesthetic (electric cyan glow, rotating energy auras, speed lines, 3D tilt cards, Web Audio API ambient synthesizer, and domain expansion bursts).

---

## ✨ Features

- **Limitless Void Aesthetic**: Deep navy-black canvas (`#05070d`), electric cyan (`#55e6ff`) and electric blue (`#00a8ff`) energy glow, radial speed lines, and glassmorphism.
- **Center Hero & Energy Aura**: Animated circular avatar surrounded by counter-rotating energy rings, glowing badges, and interactive combat bursts.
- **3D Tilt Social Cards**: Spring-physics-driven cursor tilt, laser energy streaks, quick username copy buttons, and external link indicators.
- **Combat Stance Interaction**: Screen shake, dimensional shockwaves, speed lines, and sorcerer quotes on click and hover.
- **Synthesized Ambient Audio**: Zero-dependency Web Audio API synthesizer for ambient harmonic resonance and combat sound FX with a mute/unmute toggle.
- **1-Minute Customization**: Everything (display name, bio, social URLs, usernames, stats, and quotes) is centralized in `src/config/profileConfig.js`.
- **Accessibility & Motion Safety**: Respects `prefers-reduced-motion`, semantic HTML, keyboard accessible links, and high color contrast.
- **Deploy-Ready for Vercel**: Pre-configured `vercel.json` with SPA routing and asset caching.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Verify production build in `dist/`. You can preview the production build with:
```bash
npm run preview
```

---

## ⚙️ Customization Guide

Open [`src/config/profileConfig.js`](./src/config/profileConfig.js) to customize your information:

```javascript
export const profileConfig = {
  displayName: "YOUR NAME // HANDLE",
  subtitle: "LIMITLESS SPECIAL GRADE",
  statusBadge: "DOMAIN: ACTIVE",
  bioHeadline: "Enter my domain.",
  bioDescription: "Your custom bio statement here.",
  
  avatar: {
    avatarUrl: null, // Set image URL or keep null for procedural boundless eye
    badgeText: "∞ GRADE",
  },

  socials: [
    {
      id: "instagram",
      platform: "Instagram",
      username: "@yourhandle",
      url: "https://instagram.com/yourhandle",
      tag: "Visuals",
    },
    {
      id: "tiktok",
      platform: "TikTok",
      username: "@yourhandle",
      url: "https://tiktok.com/@yourhandle",
      tag: "Shorts",
    },
    {
      id: "youtube",
      platform: "YouTube",
      username: "Your Channel",
      url: "https://youtube.com/@yourchannel",
      tag: "Videos",
    },
    {
      id: "twitter",
      platform: "X / Twitter",
      username: "@yourhandle",
      url: "https://twitter.com/yourhandle",
      tag: "Thoughts",
    },
    {
      id: "discord",
      platform: "Discord Community",
      username: "discord.gg/yourserver",
      url: "https://discord.gg/yourserver",
      tag: "Community",
    },
    {
      id: "github",
      platform: "GitHub",
      username: "github.com/yourhandle",
      url: "https://github.com/yourhandle",
      tag: "Code",
    },
    {
      id: "mail",
      platform: "Inquiries",
      username: "contact@yourdomain.com",
      url: "mailto:contact@yourdomain.com",
      tag: "Email",
    }
  ]
};
```

---

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel CLI
1. Install Vercel CLI (if not installed):
   ```bash
   npm i -g vercel
   ```
2. Run deploy command from the project root:
   ```bash
   vercel
   ```
3. For production release:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub & Vercel Dashboard
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio Engine**: Native Web Audio API (Synthesized oscillators & noise filters)
- **Deployment**: [Vercel](https://vercel.com/)
