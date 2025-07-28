# SisuKai Marketing Site

A modern, responsive marketing website for SisuKai - the adaptive microlearning platform for professional certification preparation.

## 🌐 Live Site

**Production:** https://www.sisukai.com

## ✨ Features

- **Responsive Design**: Perfect experience on all devices
- **Engaging Visuals**: Professional character illustrations throughout
- **ConvertKit Integration**: Seamless waitlist signup with modal interface
- **Optimized Performance**: WebP images with PNG fallbacks for fast loading
- **Modern Tech Stack**: Built with React, Vite, and Tailwind CSS
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header-with-modal.jsx    # Navigation header with modal integration
│   ├── Footer-nav.jsx           # Footer with legal links
│   └── WaitlistModal.jsx        # ConvertKit modal component
├── pages/
│   ├── HomePage.jsx             # Main landing page
│   ├── PricingPage.jsx          # Three-tier pricing structure
│   ├── TermsOfServicePage.jsx   # Legal terms
│   ├── PrivacyPolicyPage.jsx    # Privacy policy
│   └── RefundPolicyPage.jsx     # Refund policy
├── lib/
│   └── emailService.js          # ConvertKit integration
├── App.jsx                      # Main app component
├── App.css                      # Global styles
└── main.jsx                     # App entry point
```

## 🎨 Design System

- **Primary Color**: Indigo (#4338CA)
- **Accent Color**: Green (#166534 for CTAs)
- **Typography**: Inter font family
- **Layout**: Mobile-first responsive design
- **Images**: WebP format with PNG fallbacks

## 🔧 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Email**: ConvertKit integration
- **Images**: Optimized WebP/PNG format
- **Deployment**: Vercel/Netlify ready

## 📊 Performance

- **Image Optimization**: 98% size reduction (WebP format)
- **Lazy Loading**: Images load as needed
- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized for fast loading

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel auto-detects the configuration
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Your site is live!

### Manual Deployment
```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 📝 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.js` - Vite build configuration
- `.npmrc` - NPM package manager specification

## 🎯 Key Pages

1. **Homepage**: Hero section, features, stats, and CTA
2. **Pricing**: Three-tier structure (Free, Pro $20/month, Advanced $40/month)
3. **Legal Pages**: Complete Terms, Privacy, and Refund policies

## 📧 ConvertKit Integration

The site includes ConvertKit integration for waitlist signups:
- Modal-based form interface
- Click-outside functionality
- Fallback options for accessibility
- Form ID: 37df9eeece (configured in WaitlistModal.jsx)

## 🔄 Updates

To update the site:
1. Make changes to source files
2. Test locally with `npm run dev`
3. Build with `npm run build`
4. Deploy the updated `dist` folder

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2025 SisuKai. All rights reserved.

---

**Built with ❤️ for SisuKai's mission to make professional certification accessible through adaptive microlearning.**

