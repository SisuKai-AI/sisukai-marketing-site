const TermsOfServicePage = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 27, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using SisuKai ("Service"), you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed">
                SisuKai is an adaptive certification preparation platform that provides personalized learning experiences, practice exams, and study materials to help users prepare for professional certifications. The service includes adaptive learning algorithms, progress tracking, and gamification features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To access certain features of the Service, you must register for an account. When you register for an account, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Share your account credentials with others</li>
                <li>Attempt to reverse engineer or hack the platform</li>
                <li>Upload malicious content or spam</li>
                <li>Interfere with the proper functioning of the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Subscription and Payment</h2>
              <p className="text-gray-700 leading-relaxed">
                Paid subscriptions are billed in advance on a monthly or annual basis. You may cancel your subscription at any time, 
                but refunds are subject to our Refund Policy. We reserve the right to change our pricing with 30 days notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                The Service and its original content, features, and functionality are owned by SisuKai and are protected by 
                international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
                to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
                under our sole discretion, for any reason whatsoever including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                The information on this service is provided on an "as is" basis. To the fullest extent permitted by law, 
                this Company excludes all representations, warranties, conditions and terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new 
                Terms of Service on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@sisukai.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfServicePage

