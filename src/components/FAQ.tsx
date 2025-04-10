import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [openCategory, setOpenCategory] = useState<string>("general");
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const faqs = [
    {
      categoryKey: 'faq.categories.general.title',
      questions: [
        {
          questionKey: 'faq.categories.general.questions.specialization.question',
          answerKey: 'faq.categories.general.questions.specialization.answer'
        },
        {
          questionKey: 'faq.categories.general.questions.consultation.question',
          answerKey: 'faq.categories.general.questions.consultation.answer'
        },
        {
          questionKey: 'faq.categories.general.questions.documents.question',
          answerKey: 'faq.categories.general.questions.documents.answer'
        }
      ]
    },
    {
      categoryKey: 'faq.categories.fees.title',
      questions: [
        {
          questionKey: 'faq.categories.fees.questions.pricing.question',
          answerKey: 'faq.categories.fees.questions.pricing.answer'
        },
        {
          questionKey: 'faq.categories.fees.questions.paymentPlans.question',
          answerKey: 'faq.categories.fees.questions.paymentPlans.answer'
        },
        {
          questionKey: 'faq.categories.fees.questions.initialConsultation.question',
          answerKey: 'faq.categories.fees.questions.initialConsultation.answer'
        }
      ]
    },
    {
      categoryKey: 'faq.categories.process.title',
      questions: [
        {
          questionKey: 'faq.categories.process.questions.duration.question',
          answerKey: 'faq.categories.process.questions.duration.answer'
        },
        {
          questionKey: 'faq.categories.process.questions.court.question',
          answerKey: 'faq.categories.process.questions.court.answer'
        },
        {
          questionKey: 'faq.categories.process.questions.outcome.question',
          answerKey: 'faq.categories.process.questions.outcome.answer'
        }
      ]
    },
    {
      categoryKey: 'faq.categories.communication.title',
      questions: [
        {
          questionKey: 'faq.categories.communication.questions.updates.question',
          answerKey: 'faq.categories.communication.questions.updates.answer'
        },
        {
          questionKey: 'faq.categories.communication.questions.languages.question',
          answerKey: 'faq.categories.communication.questions.languages.answer'
        },
        {
          questionKey: 'faq.categories.communication.questions.attorney.question',
          answerKey: 'faq.categories.communication.questions.attorney.answer'
        }
      ]
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-400 font-semibold mb-4 uppercase tracking-wider">
            {t('faq.title')}
          </p>
          <h2 className="text-4xl font-bold mb-6">
            {t('faq.subtitle')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('faq.description')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {faqs.map((category) => (
              <button
                key={category.categoryKey}
                onClick={() => setOpenCategory(category.categoryKey)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  openCategory === category.categoryKey
                    ? 'bg-amber-400 text-gray-900'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-selected={openCategory === category.categoryKey}
                role="tab"
              >
                {t(category.categoryKey)}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {faqs
              .find((cat) => cat.categoryKey === openCategory)
              ?.questions.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100">
                  <button
                    className="w-full text-left flex justify-between items-center p-6"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={openQuestionIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-semibold pr-8">
                      {t(faq.questionKey)}
                    </h3>
                    {openQuestionIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    )}
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`px-6 transition-all duration-200 ${
                      openQuestionIndex === index ? 'pb-6 opacity-100' : 'h-0 opacity-0 overflow-hidden'
                    }`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <p className="text-gray-600">{t(faq.answerKey)}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            {t('faq.stillHaveQuestions')} {t('faq.hereToHelp')}
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-lg group"
          >
            <span>{t('nav.contact')}</span>
            <span className="group-hover:translate-x-1 transition-transform ltr-only">→</span>
            <span className="group-hover:-translate-x-1 transition-transform rtl-only">←</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;