
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Users, ChevronRight, PhoneCall, MessageSquare } from 'lucide-react';
import { COMPANY, SERVICES, getIcon } from '../constants';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/id/445/1920/1080"
            className="w-full h-full object-cover brightness-[0.2]"
            alt="Security Guards Protection"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center bg-red-700/20 border border-red-700/50 px-4 py-1.5 rounded-full text-red-500 font-bold text-sm tracking-widest uppercase">
              Established 2004
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Uncompromising <span className="text-red-600">Security</span> for Your World
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Professional asset and life protection since 2004. We deliver authoritative, reliable, and technology-driven security solutions for Nigeria's most demanding corporate and private clients.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={`tel:${COMPANY.phone}`} className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded font-bold text-lg flex items-center space-x-2 transition-all shadow-xl">
                <PhoneCall className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <Link to="/contact" className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded font-bold text-lg transition-all shadow-xl">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-slate-900 py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <div className="bg-red-700/20 p-4 rounded-lg">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">20+ Years</h3>
                <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mt-1">Operational Excellence</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <div className="bg-red-700/20 p-4 rounded-lg">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Maximum Safety</h3>
                <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mt-1">Asset & Life Protection</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <div className="bg-red-700/20 p-4 rounded-lg">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Professional Guards</h3>
                <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mt-1">Highly Trained Force</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-red-700 font-bold uppercase tracking-widest mb-4">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
              Your Trusted Partner in Nigerian Asset Protection
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Apple Security Nigeria Limited has been a stalwart in the security industry since 2004. Under the leadership of CEO Lion Steven Adetomiwa, we have built a reputation for reliability, authority, and professionalism.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              With operations centered in Ibadan and Lagos, we serve a diverse range of clients from corporate organizations and schools to private estates and vehicle owners.
            </p>
            <Link to="/about" className="inline-flex items-center text-red-700 font-bold text-lg hover:underline space-x-2">
              <span>Learn more about our history</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Security Services</h2>
            <p className="text-slate-600">We offer comprehensive protection solutions tailored to the unique security challenges of the Nigerian environment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border-t-4 border-red-700">
                <div className="text-red-700 mb-6">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services" className="text-slate-900 font-bold text-sm hover:text-red-700 flex items-center">
                  VIEW DETAILS <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/services" className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded font-bold text-lg inline-block transition-colors">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-700 py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-800 transform skew-x-12 translate-x-1/2 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Secure Your Property and Assets Today</h2>
              <p className="text-xl text-red-100 mb-0">Speak with a security consultant now for a personalized risk assessment.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, '')}`}
                className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 shadow-xl hover:bg-slate-50 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="bg-slate-950 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 shadow-xl hover:bg-slate-900 transition-colors border border-slate-800"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
