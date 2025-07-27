import { Button } from '@/components/ui/button.jsx'
import WaitlistForm from '../components/WaitlistForm'

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The Resilient Path to{' '}
                <span className="text-primary">Certification Mastery</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                SisuKai uses AI-powered microlearning to help you pass your professional exams with confidence. 
                Stop cramming, start learning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
                  onClick={() => {
                    const howItWorksSection = document.getElementById('how-it-works');
                    if (howItWorksSection) {
                      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/images/ai-learning-hero.jpg" 
                  alt="AI-powered learning illustration" 
                  className="w-full max-w-lg h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-xl shadow-lg">
                  <div className="text-sm font-semibold">AI-Powered</div>
                  <div className="text-xs opacity-90">Personalized Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="bg-white py-20">
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
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Adaptive Learning
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our AI creates a personalized study path that focuses on your weak spots, saving you time and maximizing your learning efficiency.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Personalized learning paths</li>
                  <li>• Weakness identification</li>
                  <li>• Smart content recommendations</li>
                </ul>
              </div>
            </div>

            {/* Column 2: Realistic Practice */}
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Realistic Practice
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tackle mock exams that mirror the real test environment, from question types to time limits and difficulty progression.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Real exam simulations</li>
                  <li>• Timed practice sessions</li>
                  <li>• Detailed explanations</li>
                </ul>
              </div>
            </div>

            {/* Column 3: Gamified Motivation */}
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Gamified Motivation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Stay engaged with daily streaks, experience points, and challenges that make learning fun and maintain your momentum.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Daily streak rewards</li>
                  <li>• XP and achievement system</li>
                  <li>• Progress tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <img 
                src="/images/student-success.jpg" 
                alt="Student success illustration" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Join Thousands of Successful Professionals
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-powered approach has helped professionals across industries achieve their certification goals faster and with greater confidence.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Higher Pass Rates</h4>
                    <p className="text-gray-600">AI-driven personalization leads to better outcomes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    ⚡
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Faster Learning</h4>
                    <p className="text-gray-600">Microlearning sessions fit into busy schedules</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    🎯
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Focused Study</h4>
                    <p className="text-gray-600">No more wasted time on topics you already know</p>
                  </div>
                </div>
              </div>
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
              Join our waitlist and get early access when SisuKai launches. Plus, receive exclusive pre-launch resources and tips.
            </p>
          </div>
          
          <WaitlistForm />
          
          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">Trusted by professionals preparing for:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full">AWS Certifications</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">PMP</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">CISSP</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">CompTIA</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">And More</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

