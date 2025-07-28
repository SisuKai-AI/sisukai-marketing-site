import React from 'react';
import WaitlistButton from '../components/WaitlistModal';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Duolingo-style Celebration */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Resilient Path to{' '}
                <span className="text-indigo-600">Certification Mastery</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                SisuKai uses AI-powered microlearning to help you pass your professional exams with confidence. Stop cramming, start learning.
              </p>
              <div className="mt-8">
                <WaitlistButton className="text-xl px-12 py-5">
                  Join the Waitlist
                </WaitlistButton>
              </div>
            </div>
            
            {/* Hero Image - Duolingo-style Celebration */}
            <div className="relative">
              <img 
                src="/hero-duolingo-style.png" 
                alt="Diverse professionals celebrating certification success with SisuKai"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section with Duolingo-style Characters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How it Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered approach makes certification prep more effective and engaging than ever before.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1: Adaptive Learning */}
            <div className="text-center group">
              <div className="relative mb-8">
                <img 
                  src="/adaptive-learning-duolingo.png" 
                  alt="AI-powered adaptive learning with friendly character"
                  className="w-full h-64 object-contain mx-auto group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI creates a personalized study path that focuses on your weak spots, saving you time and maximizing your learning efficiency.
              </p>
            </div>

            {/* Step 2: Realistic Practice */}
            <div className="text-center group">
              <div className="relative mb-8">
                <img 
                  src="/realistic-practice-duolingo.png" 
                  alt="Professional taking realistic practice exam"
                  className="w-full h-64 object-contain mx-auto group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Realistic Practice</h3>
              <p className="text-gray-600 leading-relaxed">
                Tackle mock exams that mirror the real test environment, from question types to time limits, building your confidence.
              </p>
            </div>

            {/* Step 3: Gamified Motivation */}
            <div className="text-center group">
              <div className="relative mb-8">
                <img 
                  src="/gamified-motivation-duolingo.png" 
                  alt="Energetic professional celebrating achievements and streaks"
                  className="w-full h-64 object-contain mx-auto group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gamified Motivation</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay engaged with daily streaks, experience points, and challenges that make learning fun and addictive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Microlearning Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Microlearning Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bite-sized Learning</h3>
                    <p className="text-gray-600">Break complex topics into digestible chunks that fit your busy schedule and improve retention.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Retention</h3>
                    <p className="text-gray-600">Spaced repetition and active recall improve long-term memory retention by up to 80%.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
                    <p className="text-gray-600">Learn anywhere, anytime with mobile-optimized content and offline access capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Microlearning Benefits Image */}
            <div className="relative">
              <img 
                src="/microlearning-benefits-duolingo.png" 
                alt="Diverse professionals learning on various devices in different settings"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Thousands of Successful Professionals
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our AI-powered microlearning approach has helped professionals across industries achieve their certification goals faster and with greater confidence.
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50%</div>
              <div className="text-gray-600">Less Study Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10k+</div>
              <div className="text-gray-600">Certified Professionals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-indigo-100 mb-12">
            Join thousands of professionals who are already on their path to certification success with SisuKai's AI-powered microlearning.
          </p>
          <WaitlistButton className="text-xl px-12 py-5 bg-green-800 text-white hover:bg-green-900 hover:text-white transition-colors duration-200 shadow-lg">
            Join the Waitlist Now
          </WaitlistButton>
          <p className="mt-6 text-sm text-indigo-200">
            Be the first to know when SisuKai launches. No spam, ever.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

