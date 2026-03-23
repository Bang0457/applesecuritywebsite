
import React from 'react';
import { COMPANY, SERVICES, SERVICE_IMAGES, SERVICE_IMAGE_STRIP_ITEMS, getIcon } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceScrollStrip } from '../components/ui/service-scroll-strip';
import { PaystackPaymentButton } from '../components/ui/paystack-payment-button';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://picsum.photos/id/160/1200/400"
            className="w-full h-full object-cover"
            alt="Security Pattern"
            style={{ color: 'rgba(73, 123, 238, 1)' }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-wider">Our Security Solutions</h1>
          <p className="text-slate-50 max-w-2xl mx-auto text-lg">Comprehensive, professional, and reliable protection services for every need.</p>
          <div className="w-24 h-1.5 bg-red-700 mx-auto mt-6"></div>
        </div>
      </div>

      {/* Service Image Strip */}
      <section className="bg-white py-12">
        <ServiceScrollStrip
          items={SERVICE_IMAGE_STRIP_ITEMS}
          title="Explore Our Services"
          velocity={[2.25, -2.25]}
        />
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service) => {
              return (
                <div key={service.id} id={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-slate-100 group">
                  {SERVICE_IMAGES[service.title as keyof typeof SERVICE_IMAGES] ? (
                    <div className="h-44 w-full overflow-hidden bg-slate-100">
                      <img
                        src={SERVICE_IMAGES[service.title as keyof typeof SERVICE_IMAGES]}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          const img = e.currentTarget;
                          img.onerror = null;
                          img.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23475569' font-family='Arial' font-size='28'%3EService Image%3C/text%3E%3C/svg%3E";
                        }}
                        className="w-full h-full object-cover"
                        style={{ color: 'rgba(73, 123, 238, 1)' }}
                      />
                    </div>
                  ) : null}
                  <div className="p-10 flex-grow">
                    <div className="text-red-700 bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-8 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                      {getIcon(service.icon)}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-red-700 border-b border-red-100 pb-2">Business Use Case</h4>
                      <p className="text-sm text-slate-500 italic flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                        {service.useCase}
                      </p>
                    </div>
                  </div>
                
                  <div className="px-10 py-6 bg-slate-50 border-t border-slate-100">
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, '')}?text=I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-slate-900 font-bold text-sm hover:text-red-700 transition-colors uppercase"
                    >
                      <span>Enquire via WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Can't Find a Specific Security Service?</h2>
          <p className="text-slate-400 text-lg mb-10">We provide custom security protocols designed for unique high-risk environments and high-profile assets. Contact us for a specialized consultation.</p>

          <div className="text-left mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PaystackPaymentButton
                paymentType="FULL_SECURITY_BOOKING"
                className="bg-white rounded-xl p-6 shadow-lg text-left"
              />
              <PaystackPaymentButton
                paymentType="CONSULTATION_FEE"
                className="bg-white rounded-xl p-6 shadow-lg text-left"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${COMPANY.phone}`} className="bg-red-700 hover:bg-red-800 px-10 py-4 rounded font-bold transition-all uppercase tracking-widest text-sm">
              Speak with an Expert
            </a>
            <a href="/#/contact" className="bg-transparent border-2 border-slate-700 hover:border-slate-500 px-10 py-4 rounded font-bold transition-all uppercase tracking-widest text-sm">
              Contact Page
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
