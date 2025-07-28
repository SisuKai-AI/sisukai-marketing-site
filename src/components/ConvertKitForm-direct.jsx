import React from 'react';

const ConvertKitForm = () => {
  return (
    <div className="max-w-md mx-auto">
      {/* Direct ConvertKit form integration */}
      <div 
        className="bg-white rounded-lg shadow-lg p-6"
        dangerouslySetInnerHTML={{
          __html: `
            <script async data-uid="37df9eeece" src="https://sisukai.kit.com/37df9eeece/index.js"></script>
          `
        }}
      />
      
      {/* Fallback form in case ConvertKit doesn't load */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Having trouble with the form? 
          <a 
            href="https://sisukai.kit.com/37df9eeece" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-700 ml-1 underline"
          >
            Join our waitlist here
          </a>
        </p>
      </div>
      
      {/* Custom styling for ConvertKit form */}
      <style jsx global>{`
        .formkit-form {
          border-radius: 0.5rem !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
          background: white !important;
          padding: 1.5rem !important;
        }
        
        .formkit-input {
          border-radius: 0.375rem !important;
          border: 2px solid #e5e7eb !important;
          padding: 0.75rem !important;
          font-size: 1rem !important;
          width: 100% !important;
          margin-bottom: 1rem !important;
        }
        
        .formkit-input:focus {
          border-color: #4f46e5 !important;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1) !important;
          outline: none !important;
        }
        
        .formkit-submit {
          background-color: #4f46e5 !important;
          border-radius: 0.375rem !important;
          padding: 0.75rem 2rem !important;
          font-size: 1rem !important;
          font-weight: 600 !important;
          transition: background-color 0.2s !important;
          width: 100% !important;
          border: none !important;
          color: white !important;
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
        
        .formkit-form .formkit-guarantee {
          font-size: 0.875rem !important;
          color: #6b7280 !important;
          text-align: center !important;
          margin-top: 0.5rem !important;
        }
      `}</style>
    </div>
  );
};

export default ConvertKitForm;

