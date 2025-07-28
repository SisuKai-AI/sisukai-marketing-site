import React, { useEffect, useRef } from 'react';

const ConvertKitForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', '37df9eeece');
    script.src = 'https://sisukai.kit.com/37df9eeece/index.js';
    
    // Add error handling
    script.onload = () => {
      console.log('ConvertKit script loaded successfully');
    };
    
    script.onerror = (error) => {
      console.error('ConvertKit script failed to load:', error);
      // Show fallback form if script fails
      if (formRef.current) {
        formRef.current.innerHTML = `
          <div class="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">Join Our Waitlist</h3>
            <p class="text-gray-600 mb-6 text-center">Get early access when SisuKai launches!</p>
            <div class="space-y-4">
              <input type="text" placeholder="First Name (Optional)" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <input type="email" placeholder="Email Address" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <button class="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Join Waitlist
              </button>
            </div>
            <p class="text-sm text-gray-500 text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        `;
      }
    };
    
    // Append to document head
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[data-uid="37df9eeece"]');
      if (existingScript && document.head.contains(existingScript)) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div ref={formRef} className="max-w-md mx-auto">
      {/* Initial loading state */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-indigo-200 rounded"></div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">Loading ConvertKit form...</p>
      </div>
    </div>
  );
};

export default ConvertKitForm;

