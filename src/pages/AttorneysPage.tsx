import React from 'react';
import { Mail, Phone, Scale, BookOpen } from 'lucide-react';
import { attorneys } from '../data/attorneys';

const AttorneysPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="Law firm team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Legal Team</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Meet our experienced attorneys who are dedicated to providing exceptional legal services and protecting your interests.
            </p>
          </div>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {attorneys.map((attorney, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden group hover:bg-white hover:shadow-lg transition-all duration-500">
                <div className="grid sm:grid-cols-2">
                  <div className="relative h-[300px] sm:h-[400px]">
                    <img
                      src={attorney.image.src}
                      alt={attorney.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
                        <a
                          href={`mailto:${attorney.email}`}
                          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors"
                          aria-label={`Email ${attorney.name}`}
                        >
                          <Mail className="w-5 h-5 text-gray-900" />
                        </a>
                        <a
                          href={`tel:${attorney.phone}`}
                          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors"
                          aria-label={`Call ${attorney.name}`}
                        >
                          <Phone className="w-5 h-5 text-gray-900" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-2">{attorney.name}</h2>
                    <p className="text-amber-400 font-semibold mb-4">{attorney.position}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Scale className="w-5 h-5 text-amber-400" />
                          <h3 className="font-semibold">Areas of Expertise</h3>
                        </div>
                        <ul className="space-y-1 text-gray-600">
                          {attorney.expertise.map((exp, expIndex) => (
                            <li key={expIndex}>{exp}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen className="w-5 h-5 text-amber-400" />
                          <h3 className="font-semibold">Languages</h3>
                        </div>
                        <p className="text-gray-600">{attorney.languages.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
              Work with Our Expert Legal Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation with one of our experienced attorneys to discuss your legal needs.
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

export default AttorneysPage;