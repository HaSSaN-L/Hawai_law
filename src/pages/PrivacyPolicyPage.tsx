import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <main className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">Last updated: March 20, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                Mahmoud Al Hawai Law Firm ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your personal information when you use our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Name and contact information</li>
                <li>Communication preferences</li>
                <li>Information related to your legal matters</li>
                <li>Website usage data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Provide legal services</li>
                <li>Communicate with you about your case</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at hawailaw@eim.ae.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;