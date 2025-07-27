// Email service integration for waitlist form
// This file provides a unified interface for different email marketing services

const EMAIL_SERVICE_CONFIG = {
  // Choose your email service: 'mailerlite', 'brevo', or 'mock'
  provider: 'mock', // Change this to your preferred service
  
  // MailerLite configuration
  mailerlite: {
    apiKey: process.env.REACT_APP_MAILERLITE_API_KEY || '',
    groupId: process.env.REACT_APP_MAILERLITE_GROUP_ID || '',
    apiUrl: 'https://connect.mailerlite.com/api'
  },
  
  // Brevo (formerly Sendinblue) configuration
  brevo: {
    apiKey: process.env.REACT_APP_BREVO_API_KEY || '',
    listId: process.env.REACT_APP_BREVO_LIST_ID || '',
    apiUrl: 'https://api.brevo.com/v3'
  }
}

// MailerLite integration
const subscribeToMailerLite = async (email) => {
  const config = EMAIL_SERVICE_CONFIG.mailerlite
  
  if (!config.apiKey) {
    throw new Error('MailerLite API key not configured')
  }

  const response = await fetch(`${config.apiUrl}/subscribers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`,
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      groups: config.groupId ? [config.groupId] : [],
      status: 'active'
    })
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to subscribe to MailerLite')
  }

  return await response.json()
}

// Brevo integration
const subscribeToBrevo = async (email) => {
  const config = EMAIL_SERVICE_CONFIG.brevo
  
  if (!config.apiKey) {
    throw new Error('Brevo API key not configured')
  }

  const response = await fetch(`${config.apiUrl}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': config.apiKey,
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      listIds: config.listId ? [parseInt(config.listId)] : [],
      updateEnabled: true
    })
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to subscribe to Brevo')
  }

  return await response.json()
}

// Mock service for testing
const subscribeToMock = async (email) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Simulate occasional errors for testing
  if (Math.random() < 0.1) {
    throw new Error('Mock service error for testing')
  }
  
  console.log(`Mock subscription for: ${email}`)
  return { success: true, email: email }
}

// Main subscription function
export const subscribeToWaitlist = async (email) => {
  if (!email || !email.includes('@')) {
    throw new Error('Please enter a valid email address')
  }

  const provider = EMAIL_SERVICE_CONFIG.provider

  try {
    switch (provider) {
      case 'mailerlite':
        return await subscribeToMailerLite(email)
      case 'brevo':
        return await subscribeToBrevo(email)
      case 'mock':
        return await subscribeToMock(email)
      default:
        throw new Error(`Unknown email service provider: ${provider}`)
    }
  } catch (error) {
    console.error('Email subscription error:', error)
    throw error
  }
}

// Configuration helper
export const getEmailServiceConfig = () => {
  return {
    provider: EMAIL_SERVICE_CONFIG.provider,
    isConfigured: EMAIL_SERVICE_CONFIG.provider === 'mock' || 
                   (EMAIL_SERVICE_CONFIG.provider === 'mailerlite' && EMAIL_SERVICE_CONFIG.mailerlite.apiKey) ||
                   (EMAIL_SERVICE_CONFIG.provider === 'brevo' && EMAIL_SERVICE_CONFIG.brevo.apiKey)
  }
}

