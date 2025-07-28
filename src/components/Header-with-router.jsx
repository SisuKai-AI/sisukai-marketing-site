import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = ({ onJoinWaitlist }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                SisuKai
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-600 hover:text-indigo-600'
                  }`
                }
              >
                Home
              </NavLink>
              
              <div className="w-px h-4 bg-gray-300 mx-2"></div>
              
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-600 hover:text-indigo-600'
                  }`
                }
              >
                Pricing
              </NavLink>
              
              <div className="w-px h-4 bg-gray-300 mx-2"></div>
              
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Sign In
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={onJoinWaitlist}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                Join Waitlist
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-1">
                <NavLink
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                    }`
                  }
                >
                  Home
                </NavLink>
                
                <div className="border-t border-gray-200 my-1"></div>
                
                <NavLink
                  to="/pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                    }`
                  }
                >
                  Pricing
                </NavLink>
                
                <div className="border-t border-gray-200 my-1"></div>
                
                <a
                  href="#"
                  className="px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </a>
                
                <div className="border-t border-gray-200 my-1"></div>
                
                <button
                  onClick={() => {
                    onJoinWaitlist();
                    setIsMobileMenuOpen(false);
                  }}
                  className="mx-3 mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-indigo-700 transition-colors"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

