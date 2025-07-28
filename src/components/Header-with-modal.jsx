import React, { useState } from 'react';
import WaitlistButton from './WaitlistModal';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'pricing', label: 'Pricing' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
            >
              SisuKai
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <button
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 px-4 ${
                    currentPage === item.id
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  {item.label}
                </button>
                {index < navItems.length - 1 && (
                  <div className="w-px h-4 bg-gray-300 mx-2"></div>
                )}
              </React.Fragment>
            ))}
            <div className="w-px h-4 bg-gray-300 mx-2"></div>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200 px-4"
            >
              Sign In
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <WaitlistButton className="px-6 py-2 text-sm">
              Join Waitlist
            </WaitlistButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left text-sm font-medium transition-colors duration-200 py-3 px-4 ${
                      currentPage === item.id
                        ? 'text-indigo-600'
                        : 'text-gray-700 hover:text-indigo-600'
                    }`}
                  >
                    {item.label}
                  </button>
                  {index < navItems.length - 1 && (
                    <div className="h-px bg-gray-200 mx-4"></div>
                  )}
                </React.Fragment>
              ))}
              <div className="h-px bg-gray-200 mx-4 my-2"></div>
              <a
                href="#"
                className="text-left text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200 py-3 px-4"
              >
                Sign In
              </a>
              <div className="h-px bg-gray-200 mx-4 my-2"></div>
              <div className="px-4">
                <WaitlistButton className="w-full px-4 py-2 text-sm">
                  Join Waitlist
                </WaitlistButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

