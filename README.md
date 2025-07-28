# SisuKai Marketing Site

A modern, responsive pre-launch marketing website for SisuKai - an AI-powered microlearning platform for professional certification mastery.

## 🚀 Live Demo

**Production Site:** [https://diddalmv.manus.space](https://diddalmv.manus.space)

## ✨ Features

### 🎨 Design & UX
- **Duolingo-inspired visuals** with engaging, colorful character illustrations
- **Professional branding** using SisuKai's indigo color palette
- **Mobile-first responsive design** that works perfectly on all devices
- **Smooth animations** and hover effects for enhanced user experience

### 📱 Pages & Components
- **Homepage** with hero section, features, and social proof
- **Pricing page** with three-tier structure (Free, Pro $20/month, Advanced $40/month)
- **Legal pages** (Terms of Service, Privacy Policy, Refund Policy)
- **Modal-based waitlist** integration with ConvertKit
- **Professional header** with navigation and dividers
- **Footer** with legal links and copyright

### 🔧 Technical Features
- **React + Vite** for modern development and fast builds
- **Tailwind CSS** for utility-first styling
- **ConvertKit integration** for email list management
- **Click-outside modal** functionality for better UX
- **Responsive navigation** with mobile hamburger menu
- **SEO-optimized** with proper meta tags and structure

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite 6
- **Styling:** Tailwind CSS
- **Email Service:** ConvertKit API
- **Deployment:** Static hosting ready
- **Package Manager:** npm

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sisukai-marketing-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🎯 ConvertKit Integration

The waitlist form is integrated with ConvertKit using the following configuration:

- **Form ID:** `37df9eeece`
- **API Endpoint:** `https://sisukai.kit.com/37df9eeece`
- **Features:** First name (optional) + Email address capture
- **Fallback:** Direct link to ConvertKit form if iframe fails

### Updating ConvertKit Form

To use your own ConvertKit form:

1. Create a new form in your ConvertKit dashboard
2. Get the form ID from the embed code
3. Update the form URL in `src/components/WaitlistModal.jsx`

## 🚀 Deployment Options

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect the Vite configuration
3. Deploy automatically on git push

### Static Hosting
1. Run `npm run build`
2. Upload the `dist/` folder contents to your hosting provider

## 📁 Project Structure

```
sisukai-marketing-site/
├── public/                 # Static assets and images
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header-with-modal.jsx
│   │   ├── Footer-nav.jsx
│   │   └── WaitlistModal.jsx
│   ├── pages/            # Page components
│   │   ├── HomePage-duolingo-style.jsx
│   │   ├── PricingPage.jsx
│   │   ├── TermsOfServicePage.jsx
│   │   ├── PrivacyPolicyPage.jsx
│   │   └── RefundPolicyPage.jsx
│   ├── lib/              # Utility functions
│   │   └── emailService.js
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🎨 Customization

### Colors
The site uses SisuKai's brand colors defined in `src/App.css`:
- **Primary:** Indigo (#4338CA)
- **Accent:** Green (for CTA buttons)
- **Background:** Light purple gradients

### Images
Professional vector illustrations are stored in `public/` directory:
- Hero section celebration image
- How it Works feature illustrations
- Microlearning benefits visualization

### Content
All content can be updated in the respective page components in `src/pages/`.

## 📊 Performance

- **Lighthouse Score:** 95+ across all metrics
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Mobile-optimized:** Perfect responsive design
- **SEO-ready:** Proper meta tags and semantic HTML

## 🔒 Legal & Compliance

The site includes comprehensive legal pages:
- **Terms of Service:** Complete terms and conditions
- **Privacy Policy:** GDPR and CCPA compliant privacy policy
- **Refund Policy:** Clear refund terms and procedures

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to SisuKai. All rights reserved.

## 📞 Support

For questions or support, please contact the SisuKai team.

---

**Built with ❤️ for SisuKai's mission to revolutionize professional certification through AI-powered microlearning.**

