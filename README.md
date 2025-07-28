# SisuKai Marketing Site

A modern, responsive pre-launch marketing website for SisuKai - an AI-powered microlearning platform for professional certification mastery.

## 🚀 Live Demo

**Production Site:** [SisuKai](https://www.sisukai.com)

## ✨ Features

- **Duolingo-inspired design** with engaging character illustrations
- **Professional SisuKai branding** with indigo color palette
- **Mobile-responsive** design that works on all devices
- **ConvertKit integration** for waitlist management
- **Modal-based forms** with click-outside functionality
- **Complete legal pages** (Terms, Privacy, Refund policies)

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite 6
- **Styling:** Tailwind CSS
- **Email Service:** ConvertKit API

## 📦 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Netlify (Recommended)
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
- Auto-detects Vite configuration
- Deploy directly from GitHub

## 🎯 ConvertKit Integration

The waitlist form uses ConvertKit Form ID: `37df9eeece`

To update:
1. Create a new form in ConvertKit
2. Update the form URL in `src/components/WaitlistModal.jsx`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header-with-modal.jsx
│   ├── Footer-nav.jsx
│   └── WaitlistModal.jsx
├── pages/              # Page components
│   ├── HomePage-duolingo-style.jsx
│   ├── PricingPage.jsx
│   ├── TermsOfServicePage.jsx
│   ├── PrivacyPolicyPage.jsx
│   └── RefundPolicyPage.jsx
├── lib/                # Utilities
│   └── emailService.js
├── App.jsx             # Main app
├── App.css             # Global styles
└── main.jsx            # Entry point
```

## 🎨 Key Features

### Design
- **Dark green CTA buttons** (bg-green-800) for maximum conversion
- **Professional vector illustrations** throughout
- **Responsive navigation** with mobile hamburger menu

### Functionality
- **Homepage** with hero, features, and social proof
- **Pricing page** with three-tier structure
- **Legal compliance** with complete policies
- **Email capture** via ConvertKit integration

## 📄 License

Proprietary to SisuKai. All rights reserved.

---

**Built for SisuKai's mission to revolutionize professional certification through AI-powered microlearning.**

