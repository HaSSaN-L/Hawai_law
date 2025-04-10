import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What areas of law does your firm specialize in?",
        answer: "Our firm specializes in Civil Law, Corporate Law, Family Law, Labor Law, Real Estate Law, and Criminal Law. Our experienced team of attorneys has extensive expertise in each of these areas to provide comprehensive legal solutions."
      },
      {
        question: "How do I schedule a consultation?",
        answer: "You can schedule a free consultation by filling out our contact form, calling our offices directly, or sending us an email. We'll respond promptly to arrange a meeting at your convenience at either our Sharjah or Dubai office."
      },
      {
        question: "What should I bring to my first consultation?",
        answer: "Please bring any relevant documents related to your case, such as contracts, correspondence, court papers, or other important paperwork. This helps us better understand your situation and provide more accurate legal advice."
      }
    ]
  },
  {
    category: "Services & Fees",
    questions: [
      {
        question: "What are your fees and payment options?",
        answer: "Our fees vary depending on the complexity and nature of your case. We offer transparent pricing and flexible payment options. During your initial consultation, we'll discuss the estimated costs and payment structure for your specific case."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans tailored to your circumstances. We understand that legal services can be a significant investment, and we work with our clients to create manageable payment arrangements."
      },
      {
        question: "Are initial consultations free?",
        answer: "Yes, we offer free initial consultations to discuss your case and provide preliminary guidance. This allows us to understand your legal needs and determine how we can best assist you."
      }
    ]
  },
  {
    category: "Legal Process",
    questions: [
      {
        question: "How long will my case take?",
        answer: "The duration of legal proceedings varies significantly depending on the type and complexity of your case. During your consultation, we'll provide an estimated timeline based on our experience with similar cases and current legal procedures."
      },
      {
        question: "Will my case go to court?",
        answer: "Not all cases require court proceedings. Many disputes can be resolved through negotiation, mediation, or other alternative dispute resolution methods. We'll advise you on the most appropriate approach for your situation."
      },
      {
        question: "What happens if we lose the case?",
        answer: "If we receive an unfavorable decision, we'll discuss your options for appeal or alternative resolutions. We always prepare thoroughly for every possibility and will continue to advocate for your best interests."
      }
    ]
  },
  {
    category: "Communication",
    questions: [
      {
        question: "How often will I receive updates about my case?",
        answer: "We maintain regular communication with our clients and provide updates at every significant development in your case. You'll also have direct access to your attorney for any questions or concerns."
      },
      {
        question: "Do you offer services in multiple languages?",
        answer: "Yes, our legal team can provide services in Arabic, English, and several other languages to ensure clear communication and understanding throughout your legal proceedings."
      },
      {
        question: "Can I speak directly with my attorney?",
        answer: "Yes, we believe in direct communication between attorneys and clients. You'll have your attorney's contact information and can reach out when needed, though some communications may be handled by our support staff for efficiency."
      }
    ]
  }
];

const FAQPage = () => {
  const [openCategory, setOpenCategory] = React.useState<string>("General");
  const [openQuestionIndex, setOpenQuestionIndex] = React.useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="FAQ background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Find answers to common questions about our legal services and processes. If you don't find what you're looking for, feel free to contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 mb-12">
              {faqs.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setOpenCategory(category.category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    openCategory === category.category
                      ? 'bg-amber-400 text-gray-900'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>

            {/* Questions */}
            <div className="space-y-6">
              {faqs
                .find((cat) => cat.category === openCategory)
                ?.questions.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <button
                      className="w-full text-left flex justify-between items-center"
                      onClick={() => toggleQuestion(index)}
                    >
                      <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                      {openQuestionIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      )}
                    </button>
                    <div
                      className={`mt-4 text-gray-600 transition-all duration-200 ${
                        openQuestionIndex === index ? 'block' : 'hidden'
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help. Contact us for a free consultation and get the answers you need.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-lg group"
            >
              <span>Contact Us</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;