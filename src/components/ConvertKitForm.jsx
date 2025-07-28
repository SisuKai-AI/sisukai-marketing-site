import React, { useEffect } from 'react';

const ConvertKitForm = () => {
  useEffect(() => {
    // Create and append the ConvertKit script
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', '37df9eeece');
    script.src = 'https://sisukai.kit.com/37df9eeece/index.js';
    
    // Append to document head
    document.head.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[data-uid="37df9eeece"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="max-w-md mx-auto">
      {/* ConvertKit form will be injected here by the script */}
      <div id="convertkit-form-container" className="bg-white rounded-lg shadow-lg p-6">
        {/* Loading placeholder while ConvertKit form loads */}
        <div className="text-center text-gray-500 py-8">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-10 bg-gray-200 rounded mb-4"></div>
            <div className="h-10 bg-gray-200 rounded mb-4"></div>
            <div className="h-10 bg-indigo-200 rounded"></div>
          </div>
          <p className="mt-4 text-sm">Loading waitlist form...</p>
        </div>
      </div>
      
      {/* Additional styling to match SisuKai brand */}
      <style jsx>{`
        /* Override ConvertKit form styles to match SisuKai branding */
        .formkit-form {
          border-radius: 0.5rem !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
        }
        
        .formkit-input {
          border-radius: 0.375rem !important;
          border: 2px solid #e5e7eb !important;
          padding: 0.75rem !important;
          font-size: 1rem !important;
        }
        
        .formkit-input:focus {
          border-color: #4f46e5 !important;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1) !important;
        }
        
        .formkit-submit {
          background-color: #4f46e5 !important;
          border-radius: 0.375rem !important;
          padding: 0.75rem 2rem !important;
          font-size: 1rem !important;
          font-weight: 600 !important;
          transition: background-color 0.2s !important;
        }
        
        .formkit-submit:hover {
          background-color: #4338ca !important;
        }
        
        .formkit-form .formkit-powered-by {
          font-size: 0.875rem !important;
          color: #6b7280 !important;
          text-align: center !important;
          margin-top: 1rem !important;
        }
      `}</style>
    </div>
  );
};

export default ConvertKitForm;

