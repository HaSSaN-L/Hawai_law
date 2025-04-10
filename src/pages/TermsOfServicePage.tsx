import React from 'react';

const TermsOfServicePage = () => {
  return (
    <main className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">Last updated: March 20, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-gray-600">
                Permission is granted to temporarily access the materials on our website for personal, non-commercial use only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-gray-600">
                The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="text-gray-600">
                In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
              <p className="text-gray-600">
                The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Links</h2>
              <p className="text-gray-600">
                We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
              <p className="text-gray-600">
                We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at hawailaw@eim.ae.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage;