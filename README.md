# SisuKai Marketing Site

A modern, responsive pre-launch marketing website for SisuKai - an AI-powered certification preparation platform. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with SisuKai branding
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Multi-Page Navigation**: Homepage, Pricing, and Legal pages
- **Interactive Components**: Pricing toggles, navigation, and call-to-action buttons
- **Legal Compliance**: Complete Terms of Service, Privacy Policy, and Refund Policy
- **Email Integration Ready**: Waitlist form with email service integration setup

## 📁 Project Structure

```
sisukai-marketing-site/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Original header component
│   │   ├── Header-nav.jsx          # Navigation-enabled header
│   │   ├── Footer.jsx              # Original footer component
│   │   ├── Footer-nav.jsx          # Navigation-enabled footer
│   │   ├── WaitlistForm.jsx        # Email waitlist form
│   │   └── ui/
│   │       └── button.jsx          # Reusable button component
│   ├── pages/
│   │   ├── HomePage.jsx            # Original homepage (with Lucide icons)
│   │   ├── HomePage-basic.jsx      # Simplified homepage (emoji icons)
│   │   ├── PricingPage.jsx         # Three-tier pricing page
│   │   ├── TermsOfServicePage.jsx  # Legal terms page
│   │   ├── PrivacyPolicyPage.jsx   # Privacy policy page
│   │   └── RefundPolicyPage.jsx    # Refund policy page
│   ├── lib/
│   │   └── emailService.js         # Email integration service
│   ├── App.jsx                     # Main app with navigation
│   ├── App.css                     # Global styles and Tailwind
│   └── main.jsx                    # Application entry point
├── EMAIL_INTEGRATION_GUIDE.md      # Email setup instructions
├── test_results.md                 # Testing documentation
└── README.md                       # This file
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone or extract the project**:
   ```bash
   cd sisukai-marketing-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173`

## 🎨 Design System

### Brand Colors
- **Primary**: #4338CA (Blue)
- **Background**: #FFFFFF (White)
- **Text**: #111827 (Dark Gray)
- **Secondary Text**: #6B7280 (Medium Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Components
- **Buttons**: Rounded corners, hover effects, consistent padding
- **Cards**: Clean borders, subtle shadows
- **Navigation**: Simple, accessible, responsive

## 📱 Pages Overview

### Homepage (`/`)
- **Hero Section**: Main value proposition and CTA
- **How It Works**: Three-column feature explanation
- **Waitlist Section**: Email capture form (needs integration)

### Pricing (`/pricing`)
- **Three Tiers**: Free, Pro ($20/month), Advanced ($40/month)
- **Monthly/Annual Toggle**: Price switching functionality
- **Feature Comparison**: Detailed feature lists
- **Enterprise CTA**: Custom solution contact

### Legal Pages
- **Terms of Service**: Comprehensive legal terms
- **Privacy Policy**: Data protection and privacy practices
- **Refund Policy**: Refund terms and conditions

## 🔧 Technical Implementation

### Navigation System
Currently uses a simple state-based navigation system due to React Router compatibility issues. The navigation is handled through:
- `useState` for current page tracking
- `navigate()` function passed to components
- Smooth page transitions with scroll-to-top

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS Variables**: Brand colors and design tokens
- **Responsive Design**: Mobile-first approach
- **Inter Font**: Loaded from Google Fonts

### Components Architecture
- **Modular Components**: Reusable header, footer, and UI components
- **Page Components**: Separate components for each page
- **Props-based Navigation**: Navigation function passed as props

## 🚀 Deployment Options

### Option 1: Static Hosting (Recommended)
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to any static hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3 + CloudFront

### Option 2: Using Manus Service Tools
If you have access to Manus service deployment tools:
```bash
# Deploy as frontend application
service_deploy_frontend --framework react --project-dir /path/to/sisukai-marketing-site
```

## 📧 Email Integration

The waitlist form is ready for email integration. See `EMAIL_INTEGRATION_GUIDE.md` for detailed setup instructions with various email services:
- Mailchimp
- ConvertKit
- Custom API endpoints

## 🐛 Known Issues & Solutions

### 1. React Router Compatibility
- **Issue**: Version conflicts with React Router v7.6.1
- **Current Solution**: Simple state-based navigation
- **Future Fix**: Upgrade to compatible router version or use different routing library

### 2. Waitlist Form Integration
- **Issue**: Form component needs debugging for proper integration
- **Current Status**: Component exists but not integrated in basic version
- **Solution**: Debug and integrate the WaitlistForm component

### 3. Icon System
- **Issue**: Lucide React icons causing import problems
- **Current Solution**: Using emoji icons
- **Alternative**: Switch to React Icons or Heroicons

## 🔄 Development Workflow

### Making Changes
1. **Start development server**: `npm run dev`
2. **Edit components** in `src/components/` or `src/pages/`
3. **Test changes** in browser at `localhost:5173`
4. **Build for production**: `npm run build`

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route case in `App.jsx` `renderPage()` function
3. Add navigation links in Header and/or Footer components

### Customizing Styles
1. **Global styles**: Edit `src/App.css`
2. **Component styles**: Use Tailwind classes in JSX
3. **Brand colors**: Update CSS variables in `App.css`

## 📊 Performance & SEO

### Current Status
- ✅ Fast loading with Vite
- ✅ Responsive design
- ✅ Clean HTML structure
- ⚠️ Missing meta tags and SEO optimization

### Recommended Improvements
1. Add meta tags for SEO
2. Implement structured data
3. Add Open Graph tags
4. Optimize images with lazy loading
5. Add sitemap.xml

## 🤝 Contributing

### Code Style
- Use functional components with hooks
- Follow Tailwind CSS utility-first approach
- Keep components modular and reusable
- Use meaningful variable and function names

### Testing
- Test all navigation flows
- Verify responsive design on different screen sizes
- Check browser compatibility
- Test form functionality

## 📞 Support

For questions or issues with this project:
1. Check the `test_results.md` file for known issues
2. Review the `EMAIL_INTEGRATION_GUIDE.md` for email setup
3. Consult the component documentation in source files

## 📄 License

This project is created for SisuKai. All rights reserved.

---

**Built with ❤️ for SisuKai - The Resilient Path to Certification Mastery**

