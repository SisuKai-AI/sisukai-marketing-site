import { Button } from '@/components/ui/button.jsx'

const Header = ({ navigate }) => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => navigate('home')}
              className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors"
            >
              SisuKai
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('pricing')}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Pricing
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://app.sisukai.com" 
              className="text-gray-700 hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium"
              onClick={() => {
                // Scroll to waitlist form or navigate to home
                navigate('home')
                setTimeout(() => {
                  const waitlistSection = document.getElementById('waitlist');
                  if (waitlistSection) {
                    waitlistSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100)
              }}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

