import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Check, Star } from 'lucide-react'

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Access to basic study materials',
        'Limited practice questions',
        'Basic progress tracking',
        'Community support',
        '1 certification track'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      description: 'Most popular for serious learners',
      monthlyPrice: 20,
      annualPrice: 200,
      features: [
        'Everything in Free',
        'Unlimited practice questions',
        'AI-powered adaptive learning',
        'Detailed analytics & insights',
        'Mock exams with timing',
        'Priority support',
        'Up to 5 certification tracks',
        'Streak rewards & gamification'
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Advanced',
      description: 'For teams and power users',
      monthlyPrice: 40,
      annualPrice: 400,
      features: [
        'Everything in Pro',
        'Unlimited certification tracks',
        'Custom study plans',
        'Advanced analytics dashboard',
        'Team management features',
        'White-label options',
        'Dedicated account manager',
        'API access',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  const getPrice = (plan) => {
    if (plan.monthlyPrice === 0) return 'Free'
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
    const period = isAnnual ? 'year' : 'month'
    return `$${price} / ${period}`
  }

  const getSavings = (plan) => {
    if (plan.monthlyPrice === 0) return null
    const monthlyCost = plan.monthlyPrice * 12
    const savings = monthlyCost - plan.annualPrice
    return savings > 0 ? `Save $${savings}/year` : null
  }

  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find the Plan That's Right for You
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan to accelerate your certification journey with SisuKai's AI-powered learning platform.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isAnnual ? 'bg-primary' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full font-medium">
                Save up to 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular
                  ? 'border-primary shadow-xl scale-105'
                  : 'border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-4xl font-bold text-gray-900">
                    {getPrice(plan)}
                  </div>
                  {isAnnual && getSavings(plan) && (
                    <div className="text-sm text-secondary font-medium mt-1">
                      {getSavings(plan)}
                    </div>
                  )}
                </div>

                <Button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom solution for your organization?
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PricingPage

