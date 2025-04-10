import React from 'react';
import { Scale, Award, Users2, Globe2 } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '25+', label: 'Years of Experience' },
    { number: '1000+', label: 'Cases Won' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Legal Experts' }
  ];

  const values = [
    {
      icon: Scale,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty in every case.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to excellence drives us to deliver exceptional legal services and achieve optimal results.'
    },
    {
      icon: Users2,
      title: 'Client-Centric',
      description: 'We put our clients first, providing personalized attention and tailored solutions to meet their needs.'
    },
    {
      icon: Globe2,
      title: 'Innovation',
      description: 'We embrace modern approaches while respecting traditional legal principles to serve our clients better.'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="Law firm office"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About Our Firm</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              With over 25 years of experience, Mahmoud Al Hawai has established itself as one of the UAE's leading law firms, providing exceptional legal services across multiple practice areas.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-amber-400 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our History</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 2000, Mahmoud Al Hawai Law Firm has grown from a small practice to one of the most respected legal institutions in the UAE. Our journey began with a simple mission: to provide exceptional legal services while maintaining the highest standards of professional ethics.
                </p>
                <p>
                  Over the years, we have expanded our practice areas and built a team of highly qualified legal professionals who share our commitment to excellence. Our firm has been involved in numerous landmark cases that have shaped the legal landscape in the UAE.
                </p>
                <p>
                  Today, we continue to evolve and adapt to meet the changing needs of our clients while maintaining the core values that have been the foundation of our success.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"
                alt="Law firm history"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-600 text-lg">
              These principles guide our practice and shape our approach to serving our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-400 transition-colors">
                  <value.icon className="w-8 h-8 text-amber-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work with Our Expert Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you navigate your legal challenges with expertise and dedication.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-lg group"
            >
              <span>Schedule a Consultation</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;