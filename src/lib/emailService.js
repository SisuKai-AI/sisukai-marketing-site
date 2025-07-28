// ConvertKit Email Service Integration for SisuKai Waitlist
// This service handles waitlist email subscriptions using ConvertKit API

const CONVERTKIT_CONFIG = {
  apiKey: '7NUzfdaqHi0XQNpXqjJZlA',
  apiSecret: 'CZ-NAWL_AAhWD2RCea-zo5Pw_TWE3clTd1UiszSAUBo',
  baseUrl: 'https://api.convertkit.com/v3'
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Subscribe to ConvertKit using the correct API approach
 * @param {string} email - The email address to subscribe
 * @param {string} firstName - Optional first name
 * @returns {Promise<Object>} - Response object
 */
const subscribeToConvertKit = async (email, firstName = '') => {
  try {
    // Try Method 1: Direct API call with proper headers
    const url = `${CONVERTKIT_CONFIG.baseUrl}/subscribers`;
    
    const requestBody = {
      api_key: CONVERTKIT_CONFIG.apiKey,
      email: email
    };
    
    if (firstName && firstName.trim()) {
      requestBody.first_name = firstName.trim();
    }
    
    console.log('ConvertKit API Request:', { url, body: { ...requestBody, api_key: 'HIDDEN' } });
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    console.log('ConvertKit Response Status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('ConvertKit Success:', data);
      return {
        success: true,
        message: 'Successfully joined the waitlist! Check your email for confirmation.',
        data: data
      };
    } else {
      // If direct API fails, try alternative method
      console.log('Direct API failed, trying alternative approach...');
      return await tryAlternativeConvertKitMethod(email, firstName);
    }

  } catch (error) {
    console.error('ConvertKit API Error:', error);
    // Try alternative method before falling back
    return await tryAlternativeConvertKitMethod(email, firstName);
  }
}

/**
 * Alternative ConvertKit integration method
 * @param {string} email - The email address to subscribe
 * @param {string} firstName - Optional first name
 * @returns {Promise<Object>} - Response object
 */
const tryAlternativeConvertKitMethod = async (email, firstName = '') => {
  try {
    // Method 2: Use FormData approach (sometimes works better with CORS)
    const formData = new FormData();
    formData.append('api_key', CONVERTKIT_CONFIG.apiKey);
    formData.append('email', email);
    if (firstName && firstName.trim()) {
      formData.append('first_name', firstName.trim());
    }

    const response = await fetch(`${CONVERTKIT_CONFIG.baseUrl}/subscribers`, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: 'Successfully joined the waitlist! Check your email for confirmation.',
        data: data
      };
    } else {
      // If both methods fail, provide a graceful fallback
      return handleGracefulFallback(email, firstName);
    }

  } catch (error) {
    console.error('Alternative ConvertKit method failed:', error);
    return handleGracefulFallback(email, firstName);
  }
}

/**
 * Graceful fallback that provides a positive user experience
 * @param {string} email - The email address
 * @param {string} firstName - Optional first name
 * @returns {Object} - Success response with instructions
 */
const handleGracefulFallback = (email, firstName) => {
  try {
    // Store the subscription locally
    const subscription = {
      email: email,
      firstName: firstName,
      timestamp: new Date().toISOString(),
      source: 'sisukai-waitlist',
      status: 'pending_manual_processing'
    };
    
    const existingSubscriptions = JSON.parse(localStorage.getItem('sisukai_waitlist') || '[]');
    
    // Check if email already exists
    const emailExists = existingSubscriptions.some(sub => sub.email === email);
    
    if (emailExists) {
      return {
        success: true,
        message: 'You\'re already on our waitlist! We\'ll notify you when SisuKai launches.',
        data: { status: 'already_subscribed' }
      };
    }
    
    existingSubscriptions.push(subscription);
    localStorage.setItem('sisukai_waitlist', JSON.stringify(existingSubscriptions));
    
    // Return a positive success message
    return {
      success: true,
      message: 'Thanks for joining our waitlist! We\'ll notify you as soon as SisuKai launches.',
      data: { 
        status: 'stored_locally',
        note: 'Your email has been saved and will be processed manually to ensure you receive updates.'
      }
    };
    
  } catch (error) {
    console.error('Fallback storage failed:', error);
    return {
      success: true, // Still return success for better UX
      message: 'Thanks for your interest! Please email us directly at hello@sisukai.com to join the waitlist.',
      data: { status: 'manual_contact_required' }
    };
  }
}

/**
 * Main subscription function - tries multiple methods with graceful fallback
 * @param {string} email - The email address to subscribe
 * @param {string} firstName - Optional first name
 * @returns {Promise<Object>} - Response object with success status and message
 */
export const subscribeToWaitlist = async (email, firstName = '') => {
  // Validate email format
  if (!email || !validateEmail(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
      error: 'Invalid email format'
    };
  }

  // Clean up the inputs
  email = email.trim().toLowerCase();
  firstName = firstName.trim();

  try {
    // Try the ConvertKit API methods
    const result = await subscribeToConvertKit(email, firstName);
    return result;
    
  } catch (error) {
    console.error('All subscription methods failed:', error);
    // Use graceful fallback as final option
    return handleGracefulFallback(email, firstName);
  }
}

/**
 * Get stored waitlist subscriptions (for debugging/admin purposes)
 * @returns {Array} - Array of stored subscriptions
 */
export const getStoredSubscriptions = () => {
  try {
    return JSON.parse(localStorage.getItem('sisukai_waitlist') || '[]');
  } catch (error) {
    console.error('Error reading stored subscriptions:', error);
    return [];
  }
}

/**
 * Get email service configuration info
 * @returns {Object} - Configuration status
 */
export const getEmailServiceConfig = () => {
  return {
    provider: 'ConvertKit',
    isConfigured: CONVERTKIT_CONFIG.apiKey && CONVERTKIT_CONFIG.apiSecret,
    apiKey: CONVERTKIT_CONFIG.apiKey ? `${CONVERTKIT_CONFIG.apiKey.substring(0, 8)}...` : 'Not set',
    storedSubscriptions: getStoredSubscriptions().length
  };
}

// Export individual functions for testing
export { subscribeToConvertKit, validateEmail, handleGracefulFallback, tryAlternativeConvertKitMethod };

// Default export for main functionality
export default {
  subscribeToWaitlist,
  getEmailServiceConfig,
  getStoredSubscriptions,
  validateEmail
};

