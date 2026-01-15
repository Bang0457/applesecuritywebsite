
import React from 'react';
import { COMPANY } from '../constants';
import { Award, Target, Eye, MapPin, User, History } from 'lucide-react';
import LeadershipSection from '../components/LeadershipSection';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-wider">About Us</h1>
          <div className="w-24 h-1.5 bg-red-700 mx-auto"></div>
        </div>
      </div>

      {/* History & Profile */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-700 p-3 rounded-lg text-white">
                  <History className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 uppercase">Our Heritage</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Established in <span className="font-bold text-red-700">2004</span>, Apple Security Nigeria Limited was founded on the principles of integrity, vigilance, and uncompromising protection. For nearly two decades, we have remained at the forefront of the Nigerian security landscape.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-700 p-3 rounded-lg text-white">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 uppercase">Leadership Profile</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Led by our visionary CEO, <span className="font-bold text-slate-900">{COMPANY.ceo}</span>, the company has grown from a local service provider to a major national player in professional security solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-700 p-3 rounded-lg text-white">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 uppercase">Operational Presence</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    With our Head Office in Ibadan and a strategic branch office in Lagos, we provide rapid response and localized security expertise across Nigeria's key economic hubs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-2xl border-l-8 border-red-700 shadow-xl">
              <h3 className="text-3xl font-bold mb-8 uppercase tracking-tight text-slate-900">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-red-700 transition-colors">
                  <h4 className="font-bold text-red-700 mb-2 uppercase text-xs tracking-widest">Integrity</h4>
                  <p className="text-slate-600 text-sm">Highest ethical standards in all operations.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-red-700 transition-colors">
                  <h4 className="font-bold text-red-700 mb-2 uppercase text-xs tracking-widest">Vigilance</h4>
                  <p className="text-slate-600 text-sm">Constant preparedness for any challenge.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-red-700 transition-colors">
                  <h4 className="font-bold text-red-700 mb-2 uppercase text-xs tracking-widest">Professionalism</h4>
                  <p className="text-slate-600 text-sm">International standards of conduct and skill.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-red-700 transition-colors">
                  <h4 className="font-bold text-red-700 mb-2 uppercase text-xs tracking-widest">Commitment</h4>
                  <p className="text-slate-600 text-sm">Dedicated to total safety and protection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800 p-12 rounded-xl text-center border-t-4 border-red-700 transition-transform hover:-translate-y-2">
              <Target className="w-16 h-16 text-red-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">Our Mission</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                To provide top-tier security services through a combination of highly trained personnel and cutting-edge technology, ensuring the total protection of our clients' assets and well-being.
              </p>
            </div>
            <div className="bg-slate-800 p-12 rounded-xl text-center border-t-4 border-red-700 transition-transform hover:-translate-y-2">
              <Eye className="w-16 h-16 text-red-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">Our Vision</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                To be Nigeria's most trusted and authoritative security firm, recognized for excellence, innovation, and an unwavering commitment to public and private safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Office Locations Summary */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 uppercase text-slate-900 tracking-tight">Where We Operate</h2>
            <div className="w-16 h-1 bg-red-700 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-slate-200 p-10 rounded-xl bg-slate-50 shadow-md group hover:bg-slate-900 hover:text-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-red-700 mb-6 group-hover:text-red-500 uppercase tracking-tight">{COMPANY.locations.head.title}</h3>
              <p className="text-slate-700 group-hover:text-slate-300 text-lg flex items-start space-x-3 leading-relaxed">
                <MapPin className="w-6 h-6 text-slate-400 mt-1 flex-shrink-0" />
                <span>{COMPANY.locations.head.address}</span>
              </p>
            </div>
            <div className="border border-slate-200 p-10 rounded-xl bg-slate-50 shadow-md group hover:bg-slate-900 hover:text-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-red-700 mb-6 group-hover:text-red-500 uppercase tracking-tight">{COMPANY.locations.lagos.title}</h3>
              <p className="text-slate-700 group-hover:text-slate-300 text-lg flex items-start space-x-3 leading-relaxed">
                <MapPin className="w-6 h-6 text-slate-400 mt-1 flex-shrink-0" />
                <span>{COMPANY.locations.lagos.address}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
