const RefundPolicyPage = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Refund Policy
          </h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 27, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                At SisuKai, we want you to be completely satisfied with your purchase. This Refund Policy outlines the terms and 
                conditions under which refunds may be requested and processed for our certification preparation services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Free Trial Period</h2>
              <p className="text-gray-700 leading-relaxed">
                We offer a free trial period for new users to explore our platform. During this trial period, you can cancel your 
                subscription at any time without charge. The trial period duration is clearly stated at the time of signup.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 30-Day Money-Back Guarantee</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer a 30-day money-back guarantee for all paid subscriptions. You may request a full refund within 30 days 
                of your initial purchase if you are not satisfied with our service. To be eligible for a refund:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>The refund request must be made within 30 days of the original purchase date</li>
                <li>You must provide a reason for the refund request</li>
                <li>The refund applies only to the most recent billing cycle</li>
                <li>Refunds are not available for accounts that have violated our Terms of Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Annual Subscription Refunds</h2>
              <p className="text-gray-700 leading-relaxed">
                For annual subscriptions, refunds are calculated on a pro-rated basis after the initial 30-day period. 
                If you cancel your annual subscription after 30 days, you will receive a refund for the unused portion of your subscription, 
                minus any applicable processing fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Monthly Subscription Cancellations</h2>
              <p className="text-gray-700 leading-relaxed">
                Monthly subscriptions can be cancelled at any time. However, refunds for monthly subscriptions are only available 
                within the 30-day money-back guarantee period. After this period, cancellations will take effect at the end of the 
                current billing cycle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Non-Refundable Items</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following items are not eligible for refunds:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Subscription fees beyond the 30-day guarantee period (except for annual pro-rated refunds)</li>
                <li>Additional services or add-ons purchased separately</li>
                <li>Accounts suspended or terminated for Terms of Service violations</li>
                <li>Refunds requested after account deletion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. How to Request a Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Contact our support team at support@sisukai.com</li>
                <li>Include your account email address and order number</li>
                <li>Provide a brief explanation of why you're requesting a refund</li>
                <li>Allow 3-5 business days for our team to review your request</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Refund Processing</h2>
              <p className="text-gray-700 leading-relaxed">
                Once your refund request is approved, we will process the refund to your original payment method within 5-10 business days. 
                The exact timing may vary depending on your bank or credit card company's processing times.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Chargebacks and Disputes</h2>
              <p className="text-gray-700 leading-relaxed">
                We encourage you to contact us directly before initiating a chargeback with your bank or credit card company. 
                Chargebacks may result in the immediate suspension of your account and may affect your ability to use our services in the future.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. 
                Your continued use of our services after any changes constitutes acceptance of the new policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Refund Policy or need assistance with a refund request, please contact us:
              </p>
              <div className="mt-4 text-gray-700">
                <p><strong>Email:</strong> support@sisukai.com</p>
                <p><strong>Subject Line:</strong> Refund Request - [Your Order Number]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicyPage

