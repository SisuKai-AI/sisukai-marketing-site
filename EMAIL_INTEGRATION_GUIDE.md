# Email Integration Guide for SisuKai Waitlist

This guide explains how to integrate the waitlist form with popular email marketing services.

## Current Setup

The waitlist form is currently configured to use a mock service for testing purposes. To integrate with a real email service, follow the steps below.

## Supported Email Services

### 1. MailerLite (Recommended)
MailerLite offers a generous free tier and is easy to set up.

**Setup Steps:**
1. Create a free account at [MailerLite](https://www.mailerlite.com)
2. Go to Integrations > Developer API and generate an API key
3. Create a group/segment for your waitlist subscribers
4. Create a `.env` file in your project root with:
   ```
   REACT_APP_MAILERLITE_API_KEY=your_api_key_here
   REACT_APP_MAILERLITE_GROUP_ID=your_group_id_here
   ```
5. Update `src/lib/emailService.js` and change `provider: 'mock'` to `provider: 'mailerlite'`

### 2. Brevo (formerly Sendinblue)
Brevo also offers a free tier with good API support.

**Setup Steps:**
1. Create a free account at [Brevo](https://www.brevo.com)
2. Go to SMTP & API > API Keys and generate an API key
3. Create a contact list for your waitlist subscribers
4. Create a `.env` file in your project root with:
   ```
   REACT_APP_BREVO_API_KEY=your_api_key_here
   REACT_APP_BREVO_LIST_ID=your_list_id_here
   ```
5. Update `src/lib/emailService.js` and change `provider: 'mock'` to `provider: 'brevo'`

## Environment Variables

Create a `.env` file in your project root directory (same level as package.json) with your chosen service's credentials:

### For MailerLite:
```
REACT_APP_MAILERLITE_API_KEY=ml1-xxx...
REACT_APP_MAILERLITE_GROUP_ID=123456789
```

### For Brevo:
```
REACT_APP_BREVO_API_KEY=xkeysib-xxx...
REACT_APP_BREVO_LIST_ID=123
```

## Testing the Integration

1. Start your development server: `npm run dev`
2. Navigate to the homepage and scroll to the waitlist form
3. Enter a test email address and submit
4. Check your email service dashboard to confirm the subscription was recorded

## Customizing the Integration

You can customize the email service integration by modifying `src/lib/emailService.js`:

- Add additional fields to collect (name, company, etc.)
- Implement double opt-in confirmation
- Add tags or custom fields
- Handle different subscription statuses
- Add analytics tracking

## Error Handling

The current implementation includes basic error handling:
- Invalid email format validation
- API error messages displayed to users
- Console logging for debugging
- Graceful fallback for network issues

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for all API keys
- Consider implementing rate limiting for production
- Validate email addresses on both client and server side

## Production Deployment

When deploying to production:
1. Set environment variables in your hosting platform
2. Test the integration thoroughly
3. Monitor subscription rates and error logs
4. Set up email automation in your chosen service
5. Consider implementing GDPR compliance features

## Support

If you encounter issues with the email integration:
1. Check the browser console for error messages
2. Verify your API keys and configuration
3. Test with the mock service first
4. Consult your email service's API documentation
5. Check network connectivity and CORS settings

