import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'

const Header = ({ navigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleJoinWaitlist = () => {
    navigate('home')
    setTimeout(() => {
      const waitlistSection = document.getElementById('waitlist');
      if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100)
  }

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => navigate('home')}
              className="flex items-center space-x-2 group"
            >
              <div className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm group-hover:bg-primary/90 transition-colors">
                S
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                SisuKai
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('home')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => navigate('pricing')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Pricing
            </button>
            <a 
              href="https://app.sisukai.com" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={handleJoinWaitlist}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  navigate('home')
                  setIsMobileMenuOpen(false)
                }}
                className="text-left text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  navigate('pricing')
                  setIsMobileMenuOpen(false)
                }}
                className="text-left text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Pricing
              </button>
              <a 
                href="https://app.sisukai.com" 
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </a>
              <div className="pt-2 border-t border-gray-200">
                <Button 
                  onClick={() => {
                    handleJoinWaitlist()
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

