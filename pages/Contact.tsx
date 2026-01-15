
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Send, MessageSquare } from 'lucide-react';
import { COMPANY } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-wider">Contact Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Reach out to Apple Security Nigeria Limited today. We are ready to serve you.</p>
          <div className="w-24 h-1.5 bg-red-700 mx-auto mt-6"></div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">Direct Channels</h2>
                <div className="space-y-6">
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center space-x-4 group p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all border-l-4 border-red-700">
                    <div className="bg-white p-3 rounded-full text-red-700 shadow-sm">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Call or WhatsApp</p>
                      <p className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">{COMPANY.phone}</p>
                    </div>
                  </a>

                  <a href={`mailto:${COMPANY.email}`} className="flex items-center space-x-4 group p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all border-l-4 border-red-700">
                    <div className="bg-white p-3 rounded-full text-red-700 shadow-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Email Us</p>
                      <p className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors break-all">{COMPANY.email}</p>
                    </div>
                  </a>

                  <a href="https://www.facebook.com/profile.php?id=61586776164556" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all border-l-4 border-red-700">
                    <div className="bg-white p-3 rounded-full text-red-700 shadow-sm">
                      <Facebook className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Facebook</p>
                      <p className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors uppercase tracking-widest">{COMPANY.facebook}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">Our Locations</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-6 bg-slate-900 text-white rounded-xl shadow-xl">
                    <h3 className="text-red-500 font-black text-xs uppercase tracking-widest mb-4">Head Office - Ibadan</h3>
                    <p className="flex items-start space-x-3 text-lg">
                      <MapPin className="w-6 h-6 text-slate-500 flex-shrink-0 mt-1" />
                      <span>{COMPANY.locations.head.address}</span>
                    </p>
                  </div>
                  <div className="p-6 bg-slate-900 text-white rounded-xl shadow-xl">
                    <h3 className="text-red-500 font-black text-xs uppercase tracking-widest mb-4">Lagos Branch</h3>
                    <p className="flex items-start space-x-3 text-lg">
                      <MapPin className="w-6 h-6 text-slate-500 flex-shrink-0 mt-1" />
                      <span>{COMPANY.locations.lagos.address}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, '')}`}
                  className="w-full bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl font-bold text-center flex items-center justify-center space-x-4 shadow-xl transition-all"
                >
                  <MessageSquare className="w-8 h-8" />
                  <span className="text-xl">CHAT ON WHATSAPP NOW</span>
                </a>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl shadow-inner border border-slate-200">
              <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">Request a Quote</h2>
              <p className="text-slate-500 mb-10">Fill out the form below and one of our security experts will contact you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-black uppercase text-slate-500 tracking-widest mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-black uppercase text-slate-500 tracking-widest mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
                      placeholder="+234 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-black uppercase text-slate-500 tracking-widest mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-black uppercase text-slate-500 tracking-widest mb-2">How can we help you?</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
                    placeholder="Please describe your security needs..."
                  ></textarea>
                </div>

                {submitted ? (
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg font-bold flex items-center justify-center space-x-2 animate-bounce">
                    <span>Your message has been sent successfully!</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-red-700 hover:bg-red-800 text-white px-8 py-5 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 shadow-xl transition-all"
                  >
                    <Send className="w-5 h-5" />
                    <span>SEND MESSAGE</span>
                  </button>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
