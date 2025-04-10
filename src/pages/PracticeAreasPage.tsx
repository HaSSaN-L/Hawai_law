import React from 'react';
import { Scale, Building2, Users, Briefcase, GraduationCap, Gavel, FileText, Globe2 } from 'lucide-react';

const practiceAreas = [
  {
    icon: Scale,
    title: 'Civil Law',
    description: 'Expert representation in civil disputes, contracts, and litigation matters to protect your rights and interests.',
    services: [
      'Contract Disputes',
      'Property Disputes',
      'Civil Litigation',
      'Debt Recovery',
      'Insurance Claims',
      'Consumer Protection'
    ]
  },
  {
    icon: Building2,
    title: 'Corporate Law',
    description: 'Comprehensive legal services for businesses, including formation, compliance, and commercial transactions.',
    services: [
      'Company Formation',
      'Corporate Governance',
      'Mergers & Acquisitions',
      'Commercial Contracts',
      'Regulatory Compliance',
      'Shareholder Agreements'
    ]
  },
  {
    icon: Users,
    title: 'Family Law',
    description: 'Sensitive handling of family matters including divorce, custody, and inheritance with compassion and expertise.',
    services: [
      'Divorce Proceedings',
      'Child Custody',
      'Alimony & Support',
      'Marriage Contracts',
      'Inheritance Disputes',
      'Family Business Succession'
    ]
  },
  {
    icon: Briefcase,
    title: 'Labor Law',
    description: 'Protection of employee and employer rights, handling workplace disputes and employment contracts.',
    services: [
      'Employment Contracts',
      'Workplace Disputes',
      'End of Service Benefits',
      'Labor Regulations',
      'Discrimination Claims',
      'Work Injury Claims'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Real Estate Law',
    description: 'Legal guidance for property transactions, leasing agreements, and real estate dispute resolution.',
    services: [
      'Property Purchase & Sale',
      'Lease Agreements',
      'Property Development',
      'Real Estate Disputes',
      'Construction Contracts',
      'Property Registration'
    ]
  },
  {
    icon: Gavel,
    title: 'Criminal Law',
    description: 'Strong defense representation and protection of your rights in criminal proceedings.',
    services: [
      'Criminal Defense',
      'White Collar Crime',
      'Cybercrime',
      'Traffic Violations',
      'Corporate Crime',
      'Criminal Appeals'
    ]
  },
  {
    icon: FileText,
    title: 'Banking & Finance',
    description: 'Expert legal advice on banking regulations, financial transactions, and compliance matters.',
    services: [
      'Banking Regulations',
      'Financial Transactions',
      'Islamic Banking',
      'Investment Law',
      'Financial Disputes',
      'Regulatory Compliance'
    ]
  },
  {
    icon: Globe2,
    title: 'International Law',
    description: 'Assistance with cross-border transactions, international disputes, and global business operations.',
    services: [
      'International Trade',
      'Cross-border Disputes',
      'Foreign Investment',
      'International Contracts',
      'Arbitration',
      'Treaty Compliance'
    ]
  }
];

const PracticeAreasPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="Law practice areas"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Practice Areas</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We offer comprehensive legal services across multiple practice areas, providing expert guidance and representation for all your legal needs.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 group hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-400 transition-colors">
                  <area.icon className="w-8 h-8 text-amber-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <ul className="space-y-3">
                  {area.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      {service}
                    </li>
                  ))}
                </ul>
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
              Need Legal Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our experienced team is ready to help you with any legal challenge you're facing.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-lg group"
            >
              <span>Get Free Consultation</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PracticeAreasPage;