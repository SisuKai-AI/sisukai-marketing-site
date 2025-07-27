// ConvertKit Email Service Integration for SisuKai Waitlist
// This service handles waitlist email subscriptions using ConvertKit API

const CONVERTKIT_CONFIG = {
  apiKey: '7NUzfdaqHi0XQNpXqjJZlA',
  apiSecret: 'CZ-NAWL_AAhWD2RCea-zo5Pw_TWE3clTd1UiszSAUBo',
  baseUrl: 'https://api.convertkit.com/v3',
  // Note: You'll need to create a form in ConvertKit dashboard and replace this ID
  formId: process.env.REACT_APP_CONVERTKIT_FORM_ID || 'YOUR_FORM_ID'
}

/**
 * Subscribe an email to the ConvertKit waitlist using the subscribers endpoint
 * This method doesn't require a specific form ID
 * @param {string} email - The email address to subscribe
 * @param {string} firstName - Optional first name
 * @returns {Promise<Object>} - Response from ConvertKit API
 */
const subscribeToConvertKit = async (email, firstName = '') => {
  try {
    const response = await fetch(`${CONVERTKIT_CONFIG.baseUrl}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_secret: CONVERTKIT_CONFIG.apiSecret,
        email: email,
        first_name: firstName,
        state: 'active'
      })
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle ConvertKit specific errors
      if (data.message) {
        throw new Error(data.message);
      }
      throw new Error(`ConvertKit API error: ${response.status}`);
    }

    return {
      success: true,
      message: 'Successfully joined the waitlist! Check your email for confirmation.',
      data: data
    };

  } catch (error) {
    console.error('ConvertKit subscription error:', error);
    
    // Handle specific error cases
    if (error.message.includes('already subscribed')) {
      return {
        success: true,
        message: 'You\'re already on our waitlist! We\'ll notify you when SisuKai launches.',
        data: null
      };
    }
    
    return {
      success: false,
      message: 'Failed to join waitlist. Please try again or contact support.',
      error: error.message
    };
  }
}

/**
 * Alternative method using ConvertKit's forms endpoint (requires form ID)
 * @param {string} email - The email address to subscribe
 * @param {string} firstName - Optional first name
 * @returns {Promise<Object>} - Response from ConvertKit API
 */
const subscribeToConvertKitForm = async (email, firstName = '') => {
  if (CONVERTKIT_CONFIG.formId === 'YOUR_FORM_ID') {
    console.warn('ConvertKit form ID not configured, using direct subscriber method');
    return subscribeToConvertKit(email, firstName);
  }

  try {
    const response = await fetch(`${CONVERTKIT_CONFIG.baseUrl}/forms/${CONVERTKIT_CONFIG.formId}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: CONVERTKIT_CONFIG.apiKey,
        email: email,
        first_name: firstName,
        tags: ['waitlist', 'sisukai-launch'] // Optional tags for segmentation
      })
    });

    const data = await response.json();

    if (!response.ok) {
      if (data.message) {
        throw new Error(data.message);
      }
      throw new Error(`ConvertKit API error: ${response.status}`);
    }

    return {
      success: true,
      message: 'Successfully joined the waitlist! Check your email for confirmation.',
      data: data
    };

  } catch (error) {
    console.error('ConvertKit form subscription error:', error);
    
    // Fallback to direct subscriber method
    console.log('Falling back to direct subscriber method...');
    return subscribeToConvertKit(email, firstName);
  }
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
 * Main subscription function - the primary interface for the waitlist
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

  // Clean up the email
  email = email.trim().toLowerCase();
  firstName = firstName.trim();

  try {
    // Use the direct subscriber method as primary approach
    return await subscribeToConvertKit(email, firstName);
  } catch (error) {
    console.error('Waitlist subscription failed:', error);
    return {
      success: false,
      message: 'Unable to join waitlist at this time. Please try again later.',
      error: error.message
    };
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
    hasFormId: CONVERTKIT_CONFIG.formId !== 'YOUR_FORM_ID'
  };
}

// Export individual functions for testing
export { subscribeToConvertKit, subscribeToConvertKitForm, validateEmail };

// Default export for main functionality
export default {
  subscribeToWaitlist,
  getEmailServiceConfig,
  validateEmail
};

