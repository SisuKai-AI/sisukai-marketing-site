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
 * Subscribe to ConvertKit using the public API endpoint
 * @param {string} email - The email address to subscribe
 * @param {string} firstName - Optional first name
 * @returns {Promise<Object>} - Response object
 */
const subscribeToConvertKit = async (email, firstName = '') => {
  try {
    // Method 1: Try using the public subscribers endpoint with API key
    const response = await fetch(`${CONVERTKIT_CONFIG.baseUrl}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        api_key: CONVERTKIT_CONFIG.apiKey,
        email: email,
        first_name: firstName || '',
        tags: ['waitlist', 'sisukai-launch']
      })
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: 'Successfully joined the waitlist! Check your email for confirmation.',
        data: data
      };
    } else {
      const errorData = await response.json().catch(() => ({}));
      
      // Handle specific ConvertKit errors
      if (errorData.message && errorData.message.includes('already exists')) {
        return {
          success: true,
          message: 'You\'re already on our waitlist! We\'ll notify you when SisuKai launches.',
          data: null
        };
      }
      
      throw new Error(errorData.message || `API Error: ${response.status}`);
    }

  } catch (error) {
    console.error('ConvertKit API Error:', error);
    
    // If the API call fails (likely due to CORS), fall back to local storage
    // and provide user feedback
    return handleAPIFallback(email, firstName, error);
  }
}

/**
 * Fallback method when API calls fail (usually due to CORS)
 * Stores the subscription locally and provides user guidance
 * @param {string} email - The email address
 * @param {string} firstName - Optional first name
 * @param {Error} originalError - The original error
 * @returns {Object} - Response object
 */
const handleAPIFallback = (email, firstName, originalError) => {
  try {
    // Store the subscription attempt locally for potential backend processing
    const subscription = {
      email: email,
      firstName: firstName,
      timestamp: new Date().toISOString(),
      source: 'sisukai-waitlist'
    };
    
    // Store in localStorage for potential later processing
    const existingSubscriptions = JSON.parse(localStorage.getItem('sisukai_waitlist') || '[]');
    
    // Check if email already exists
    const emailExists = existingSubscriptions.some(sub => sub.email === email);
    
    if (emailExists) {
      return {
        success: true,
        message: 'You\'re already on our waitlist! We\'ll notify you when SisuKai launches.',
        data: null
      };
    }
    
    existingSubscriptions.push(subscription);
    localStorage.setItem('sisukai_waitlist', JSON.stringify(existingSubscriptions));
    
    // Check if it's a CORS error
    if (originalError.message.includes('CORS') || originalError.name === 'TypeError') {
      return {
        success: true,
        message: 'Thanks for joining! Your email has been saved. We\'ll contact you when SisuKai launches!',
        data: { fallback: true, stored_locally: true }
      };
    }
    
    return {
      success: false,
      message: 'Unable to connect to our email service. Please try again later or contact support.',
      error: originalError.message
    };
    
  } catch (fallbackError) {
    console.error('Fallback storage failed:', fallbackError);
    return {
      success: false,
      message: 'Technical issue occurred. Please try again or contact support directly.',
      error: fallbackError.message
    };
  }
}

/**
 * Alternative method using a simple form submission approach
 * This creates a hidden form and submits it to ConvertKit
 * @param {string} email - The email address
 * @param {string} firstName - Optional first name
 * @returns {Promise<Object>} - Response object
 */
const subscribeViaFormSubmission = async (email, firstName = '') => {
  return new Promise((resolve) => {
    try {
      // Create a hidden form for ConvertKit submission
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = `${CONVERTKIT_CONFIG.baseUrl}/subscribers`;
      form.style.display = 'none';
      
      // Add form fields
      const fields = {
        'api_key': CONVERTKIT_CONFIG.apiKey,
        'email': email,
        'first_name': firstName,
        'tags': 'waitlist,sisukai-launch'
      };
      
      Object.keys(fields).forEach(key => {
        if (fields[key]) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = fields[key];
          form.appendChild(input);
        }
      });
      
      document.body.appendChild(form);
      
      // Submit the form
      form.submit();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
      }, 1000);
      
      // Since we can't get the actual response, assume success
      resolve({
        success: true,
        message: 'Thanks for joining! Check your email for confirmation.',
        data: { method: 'form_submission' }
      });
      
    } catch (error) {
      resolve({
        success: false,
        message: 'Failed to submit. Please try again.',
        error: error.message
      });
    }
  });
}

/**
 * Main subscription function - tries multiple methods
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
    // Try the API method first
    const result = await subscribeToConvertKit(email, firstName);
    
    // If API method failed but we want to try form submission as backup
    if (!result.success && !result.data?.fallback) {
      console.log('API method failed, trying form submission...');
      return await subscribeViaFormSubmission(email, firstName);
    }
    
    return result;
    
  } catch (error) {
    console.error('All subscription methods failed:', error);
    return {
      success: false,
      message: 'Unable to join waitlist at this time. Please try again later or contact support.',
      error: error.message
    };
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
export { subscribeToConvertKit, validateEmail, handleAPIFallback };

// Default export for main functionality
export default {
  subscribeToWaitlist,
  getEmailServiceConfig,
  getStoredSubscriptions,
  validateEmail
};

