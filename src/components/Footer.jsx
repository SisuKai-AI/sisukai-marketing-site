const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            © 2025 SisuKai. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="/terms-of-service" 
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="/privacy-policy" 
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="/refund-policy" 
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

