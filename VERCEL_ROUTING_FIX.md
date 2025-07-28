# Vercel Routing Fix for React Router

## Problem
When deploying React Router applications to Vercel, direct URL access (like `https://sisukai.com/terms`) results in 404 errors because Vercel tries to find physical files instead of letting React Router handle the routing.

## Solution
Updated `vercel.json` with rewrites configuration to redirect all routes to `index.html`, allowing React Router to handle client-side routing.

## Updated Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## How It Works
- All incoming requests (`(.*)` pattern) are rewritten to serve `index.html`
- React Router then takes over and handles the client-side routing
- This enables direct URL access to all routes: `/`, `/pricing`, `/terms`, `/privacy`, `/refund`

## Deployment Instructions
1. Upload the updated `vercel.json` file to your repository
2. Redeploy your Vercel project
3. All routes will now work correctly with direct URL access

## Testing
After deployment, these URLs should work:
- https://sisukai.com/
- https://sisukai.com/pricing
- https://sisukai.com/terms
- https://sisukai.com/privacy
- https://sisukai.com/refund

