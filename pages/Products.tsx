
import React from 'react';
import { COMPANY } from '../constants';
import { Navigation, ShieldCheck, Smartphone, Zap, Map, Power, MessageSquare } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <img src="https://picsum.photos/id/524/1600/600" className="w-full h-full object-cover opacity-20" alt="Technology Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase">GPS Tracking Solutions</h1>
            <p className="text-xl text-slate-300">Advanced 2-in-1 Car Alarm & GPS Tracker for ultimate vehicle security and fleet management.</p>
            <div className="w-24 h-1.5 bg-red-700 mt-8"></div>
          </div>
        </div>
      </div>

      {/* Main Product Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-red-100 text-red-700 font-bold rounded-full text-xs uppercase tracking-widest mb-6">
                Featured Product
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight">2-in-1 Car Alarm & GPS Tracker</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Protect your vehicle with our industry-leading dual protection system. This advanced solution combines a high-decibel intrusion alarm with real-time GPS precision tracking, giving you total control and peace of mind.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start space-x-3">
                  <div className="text-red-700 mt-1"><Smartphone className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold">App Access</h4>
                    <p className="text-xs text-slate-500">Track directly from your mobile phone.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-700 mt-1"><Zap className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold">Instant Alerts</h4>
                    <p className="text-xs text-slate-500">Real-time vibration and movement notifications.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-700 mt-1"><Map className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold">Live Tracking</h4>
                    <p className="text-xs text-slate-500">Accurate real-time location and history.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-700 mt-1"><Power className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold">Engine Kill</h4>
                    <p className="text-xs text-slate-500">Shut down the engine remotely via SMS/App.</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, '')}?text=I'm%20interested%20in%20your%202-in-1%20Car%20Alarm%20%26%20GPS%20Tracker.`}
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-lg font-bold text-lg inline-flex items-center space-x-3 shadow-xl transition-all"
              >
                <MessageSquare className="w-6 h-6" />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>
            
            <div className="relative">
              <img
                src="https://picsum.photos/id/111/800/800"
                className="rounded-2xl shadow-2xl relative z-10 border-8 border-slate-50"
                alt="GPS Tracker Hardware"
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-700 rounded-full flex items-center justify-center text-white text-center p-4 z-20 shadow-xl border-4 border-white animate-pulse">
                <span className="font-black text-xl leading-tight">BEST SELLER IN NIGERIA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Why Vehicle Owners Choose Us</h2>
            <div className="w-16 h-1 bg-red-700 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-md text-center">
              <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center text-red-700 mx-auto mb-6">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Anti-Theft Security</h3>
              <p className="text-slate-600 leading-relaxed">
                Prevents theft by alerting you the moment your car door is opened or vibration is detected.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-md text-center">
              <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center text-red-700 mx-auto mb-6">
                <Navigation className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Fleet Efficiency</h3>
              <p className="text-slate-600 leading-relaxed">
                Monitor driver behavior, speed, and location history to reduce costs and improve logistics.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-md text-center">
              <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center text-red-700 mx-auto mb-6">
                <Smartphone className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Easy Management</h3>
              <p className="text-slate-600 leading-relaxed">
                Our user-friendly mobile application makes monitoring your assets intuitive and effortless.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
