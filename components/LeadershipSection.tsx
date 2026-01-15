import React from 'react';
import { COMPANY } from '../constants';
import { Award } from 'lucide-react';

const LeadershipSection: React.FC = () => {
  const legalDirector = {
    name: "Samuel Babatunde Victor",
    qualifications: "LLB, BL, LLM, APD-CR",
    role: "Legal Director"
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase text-slate-900 tracking-tight">Our Leadership</h2>
          <div className="w-16 h-1 bg-red-700 mx-auto mb-8"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* CEO Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-red-700">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img 
                  src="/images/leadership/CEO.svg" 
                  alt={`${COMPANY.ceo} - CEO`}
                  className="w-48 h-48 rounded-full object-cover border-4 border-red-700 shadow-lg"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-red-700" />
                <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">{COMPANY.ceo}</h3>
              </div>
              <p className="text-lg text-slate-600 mb-4 font-semibold uppercase tracking-wide">Chief Executive Officer</p>
              <p className="text-slate-600 leading-relaxed">
                Under the visionary leadership of {COMPANY.ceo}, Apple Security Nigeria Limited has established itself as a trusted name in the security industry. With a commitment to excellence and innovation, our leadership team ensures that we deliver world-class security solutions tailored to meet the unique needs of our clients across Nigeria.
              </p>
            </div>
          </div>

          {/* Legal Director Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-red-700">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img 
                  src="/images/leadership/Legal%20director.svg" 
                  alt={`${legalDirector.name} - ${legalDirector.role}`}
                  className="w-48 h-48 rounded-full object-cover border-4 border-red-700 shadow-lg"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-red-700" />
                <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">{legalDirector.name}</h3>
              </div>
              <p className="text-sm text-red-700 mb-2 font-semibold uppercase tracking-wide">{legalDirector.qualifications}</p>
              <p className="text-lg text-slate-600 mb-4 font-semibold uppercase tracking-wide">{legalDirector.role}</p>
              <p className="text-slate-600 leading-relaxed">
                {legalDirector.name} brings extensive legal expertise and regulatory knowledge to Apple Security Nigeria Limited. With qualifications including {legalDirector.qualifications}, our Legal Director ensures compliance, risk management, and the highest standards of legal practice across all our operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
