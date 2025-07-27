# SisuKai Marketing Site - Deployment Guide

This guide provides step-by-step instructions for deploying the SisuKai marketing site to various hosting platforms.

## 🚀 Quick Deployment (Recommended)

### Using Netlify (Easiest)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to Netlify
   - Your site will be live immediately with a random URL
   - Optional: Configure custom domain in Netlify settings

### Using Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Follow prompts** to configure your deployment

## 🔧 Manual Deployment Options

### Static File Hosting

#### Option 1: AWS S3 + CloudFront
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload to S3**:
   - Create an S3 bucket
   - Enable static website hosting
   - Upload contents of `dist` folder
   - Configure bucket policy for public access

3. **Set up CloudFront** (optional but recommended):
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure caching rules

#### Option 2: GitHub Pages
1. **Build and commit**:
   ```bash
   npm run build
   git add dist
   git commit -m "Add build files"
   git subtree push --prefix dist origin gh-pages
   ```

2. **Enable GitHub Pages**:
   - Go to repository settings
   - Enable Pages from `gh-pages` branch

### VPS/Server Deployment

#### Using Nginx
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Copy files to server**:
   ```bash
   scp -r dist/* user@your-server:/var/www/sisukai/
   ```

3. **Configure Nginx**:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/sisukai;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

## 🔄 Continuous Deployment

### GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './dist'
        production-branch: main
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 🌐 Domain Configuration

### Custom Domain Setup

#### For Netlify:
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Configure DNS records:
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

#### For Vercel:
1. Go to Project Settings > Domains
2. Add your domain
3. Configure DNS as instructed

### SSL Certificate
Most modern hosting platforms (Netlify, Vercel) provide automatic SSL certificates. For manual setups:

1. **Let's Encrypt** (free):
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

2. **Configure auto-renewal**:
   ```bash
   sudo crontab -e
   # Add: 0 12 * * * /usr/bin/certbot renew --quiet
   ```

## 📧 Email Integration Setup

Before deploying, configure email integration for the waitlist form:

### Option 1: Mailchimp
1. Get Mailchimp API key
2. Create audience/list
3. Update `src/lib/emailService.js` with credentials

### Option 2: ConvertKit
1. Get ConvertKit API key
2. Create form
3. Update email service configuration

### Option 3: Custom API
1. Set up your own email API endpoint
2. Update `emailService.js` to point to your API

See `EMAIL_INTEGRATION_GUIDE.md` for detailed instructions.

## 🔍 Pre-Deployment Checklist

### ✅ Technical Checks
- [ ] All pages load correctly
- [ ] Navigation works between pages
- [ ] Responsive design tested on mobile/tablet
- [ ] Forms are functional (if email integration is set up)
- [ ] All images and assets load properly
- [ ] No console errors in browser

### ✅ Content Checks
- [ ] All text content is accurate
- [ ] Pricing information is correct
- [ ] Legal pages are complete and up-to-date
- [ ] Contact information is accurate
- [ ] Brand colors and fonts are consistent

### ✅ SEO Preparation
- [ ] Page titles are descriptive
- [ ] Meta descriptions added (if implementing SEO)
- [ ] Images have alt text
- [ ] URLs are clean and descriptive

## 🚨 Troubleshooting

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf .vite
npm run build
```

### Routing Issues
If navigation doesn't work after deployment:
1. Ensure your hosting platform supports SPA routing
2. Configure redirects for single-page applications
3. For Netlify, add `_redirects` file:
   ```
   /*    /index.html   200
   ```

### CSS Not Loading
1. Check build output in `dist` folder
2. Verify CSS files are generated
3. Check browser network tab for 404 errors

## 📊 Performance Optimization

### Before Deployment
1. **Optimize images**:
   - Compress images using tools like TinyPNG
   - Use appropriate formats (WebP for modern browsers)

2. **Minify assets**:
   - Vite handles this automatically in production builds
   - Verify with `npm run build`

3. **Enable compression**:
   - Configure Gzip/Brotli on your server
   - Most CDNs handle this automatically

### After Deployment
1. **Test performance**:
   - Use Google PageSpeed Insights
   - Check Core Web Vitals
   - Test on different devices and connections

2. **Monitor**:
   - Set up analytics (Google Analytics)
   - Monitor error logs
   - Track conversion rates

## 🔒 Security Considerations

### HTTPS
- Always use HTTPS in production
- Configure HSTS headers
- Use secure cookies if implementing authentication

### Content Security Policy
Add CSP headers to prevent XSS attacks:
```
Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com;
```

### Environment Variables
- Never commit sensitive data (API keys) to version control
- Use environment variables for configuration
- Different configs for development/production

## 📞 Support & Maintenance

### Regular Updates
1. **Dependencies**: Update npm packages regularly
2. **Content**: Keep legal pages and pricing current
3. **Security**: Monitor for security vulnerabilities

### Monitoring
1. **Uptime**: Use services like UptimeRobot
2. **Performance**: Regular PageSpeed checks
3. **Analytics**: Monitor user behavior and conversions

### Backup Strategy
1. **Code**: Version control with Git
2. **Content**: Regular backups of any dynamic content
3. **Configuration**: Document all deployment settings

---

**Need help with deployment? Check the main README.md or contact the development team.**

