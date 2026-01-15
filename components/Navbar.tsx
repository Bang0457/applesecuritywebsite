
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COMPANY } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'GPS Tracking', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3" aria-label="Apple Security Nigeria Limited - Home">
              <img 
                src="/images/logo/Apple%20security%20logo.png" 
                alt="Apple Security Nigeria Limited Logo" 
                className="h-10 w-auto object-contain"
                width="200"
                height="60"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-red-500 font-bold border-b-2 border-red-500'
                    : 'text-slate-300 hover:text-white hover:border-b-2 hover:border-slate-500'
                } px-1 py-1 text-sm font-medium transition-all duration-200`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.phone}`}
              className="bg-red-700 hover:bg-red-800 text-white px-5 py-2.5 rounded font-bold text-sm transition-colors shadow-lg"
            >
              CALL NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-slate-900 text-red-500 font-bold'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                } block px-3 py-3 rounded-md text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="w-full block text-center bg-red-700 hover:bg-red-800 text-white px-4 py-3 rounded font-bold transition-colors"
              >
                CALL NOW: {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
