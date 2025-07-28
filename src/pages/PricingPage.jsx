import { useState } from 'react'

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for getting started with microlearning',
      features: [
        'Access to basic study materials',
        'Daily learning streaks',
        'Basic progress tracking',
        'Community support',
        'Mobile app access'
      ],
      popular: false,
      buttonText: 'Get Started Free',
      buttonStyle: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
    },
    {
      name: 'Pro',
      price: { monthly: 20, annual: 200 },
      description: 'Ideal for serious learners and professionals',
      features: [
        'Everything in Free',
        'AI-powered personalized learning paths',
        'Advanced analytics and insights',
        'Mock exams and practice tests',
        'Priority customer support',
        'Offline content access',
        'Custom study schedules'
      ],
      popular: true,
      buttonText: 'Start Pro Trial',
      buttonStyle: 'bg-indigo-600 text-white hover:bg-indigo-700'
    },
    {
      name: 'Advanced',
      price: { monthly: 40, annual: 400 },
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Team management dashboard',
        'Advanced reporting and analytics',
        'Custom branding options',
        'API access and integrations',
        'Dedicated account manager',
        'Custom content creation',
        'Enterprise-grade security'
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Path
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Start your certification journey with SisuKai's adaptive microlearning platform
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-indigo-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${
                plan.popular
                  ? 'border-indigo-200 shadow-lg ring-1 ring-indigo-200'
                  : 'border-gray-200 shadow-sm'
              } bg-white p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-sm font-medium text-white">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-gray-600">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  )}
                </div>

                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-900 mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 text-green-500 mr-3 mt-0.5">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto text-left">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Can I switch plans anytime?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Is there a free trial?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer a 14-day free trial for all paid plans. No credit card required to start.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards, PayPal, and bank transfers for annual plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage

