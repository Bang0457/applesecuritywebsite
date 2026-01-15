
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { COMPANY } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-4 border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-16">
          
          {/* Company Info */}
          <div className="flex flex-col items-center sm:items-start space-y-6 text-center sm:text-left">
            <Link to="/" aria-label="Apple Security Nigeria Limited - Home">
              <img 
                src="/images/logo/Apple%20security%20logo.png" 
                alt="Apple Security Nigeria Limited Logo" 
                className="h-12 w-auto object-contain"
                width="200"
                height="60"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Providing top-tier security solutions across Nigeria since 2004. We specialize in asset protection, manned guards, and advanced technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61586776164556" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2.5 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-red-500 transition-colors py-1 inline-block">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors py-1 inline-block">About Us</Link></li>
              <li><Link to="/services" className="hover:text-red-500 transition-colors py-1 inline-block">Security Services</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors py-1 inline-block">GPS Tracking</Link></li>
              <li><Link to="/gallery" className="hover:text-red-500 transition-colors py-1 inline-block">Our Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors py-1 inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-4 text-sm w-full">
              <li className="flex flex-col items-center sm:items-start sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="hover:text-white transition-colors cursor-default">{COMPANY.phone}</span>
              </li>
              <li className="flex flex-col items-center sm:items-start sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="break-all hover:text-white transition-colors cursor-default">{COMPANY.email}</span>
              </li>
              <li className="flex flex-col items-center sm:items-start sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <Facebook className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="hover:text-white transition-colors cursor-default">{COMPANY.facebook}</span>
              </li>
            </ul>
          </div>

          {/* Office Locations */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Regional Offices</h3>
            <div className="space-y-6 text-sm w-full">
              <div className="group">
                <p className="font-bold text-red-500 mb-2 transition-colors group-hover:text-red-400 uppercase text-xs tracking-widest">{COMPANY.locations.head.title}</p>
                <p className="flex flex-col items-center sm:items-start sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 sm:mt-0.5" />
                  <span className="leading-relaxed">{COMPANY.locations.head.address}</span>
                </p>
              </div>
              <div className="group">
                <p className="font-bold text-red-500 mb-2 transition-colors group-hover:text-red-400 uppercase text-xs tracking-widest">{COMPANY.locations.lagos.title}</p>
                <p className="flex flex-col items-center sm:items-start sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 sm:mt-0.5" />
                  <span className="leading-relaxed">{COMPANY.locations.lagos.address}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-widest">
            © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </p>
          <div className="text-[10px] text-slate-600 flex space-x-4 uppercase tracking-tighter">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
