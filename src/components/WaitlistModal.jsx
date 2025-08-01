import React from 'react';

const WaitlistModal = ({ onClose }) => {
  // Handle backdrop click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[95vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Join Our Waitlist</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal Content - Scrollable */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
          <p className="text-gray-600 mb-4 sm:mb-6 text-center text-sm sm:text-base">
            Get early access when SisuKai launches and be the first to experience adaptive microlearning!
          </p>
          
          {/* ConvertKit Form iframe */}
          <div className="relative">
            <iframe
              //src="https://sisukai.kit.com/37df9eeece"
              src="https://sisukai.kit.com/b567aa9adb"
              className="w-full h-80 sm:h-96 border-0 rounded-lg"
              title="SisuKai Waitlist Form"
              loading="lazy"
            />
          </div>
          
          {/* Alternative link in case iframe doesn't work */}
          <div className="mt-4 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              Having trouble with the form?{' '}
              <a
                href="https://sisukai.kit.com/37df9eeece"
                // href="https://sisukai.kit.com/b567aa9adb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 underline"
              >
                Open in new tab
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;

