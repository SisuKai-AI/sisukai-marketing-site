import { Button } from '@/components/ui/button.jsx'
import WaitlistForm from '../components/WaitlistForm'

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Resilient Path to{' '}
              <span className="text-primary">Certification Mastery</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              SisuKai uses AI-powered microlearning to help you pass your professional exams with confidence. 
              Stop cramming, start learning.
            </p>
            
            <div className="flex justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => {
                  const waitlistSection = document.getElementById('waitlist');
                  if (waitlistSection) {
                    waitlistSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How it Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered approach makes certification prep more effective and engaging than ever before.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Column 1: Adaptive Learning */}
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Adaptive Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI creates a personalized study path that focuses on your weak spots, saving you time.
              </p>
            </div>

            {/* Column 2: Realistic Practice */}
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Realistic Practice
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tackle mock exams that mirror the real test environment, from question types to time limits.
              </p>
            </div>

            {/* Column 3: Gamified Motivation */}
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Gamified Motivation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Stay engaged with daily streaks, experience points, and challenges that make learning fun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Be the First to Know
            </h2>
            <p className="text-xl text-gray-600">
              Join our waitlist and get early access when SisuKai launches.
            </p>
          </div>
          
          <WaitlistForm />
        </div>
      </section>
    </div>
  )
}

export default HomePage

