
import React, { useState, useEffect, useRef } from 'react';

interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  category: string;
}

const GalleryCard: React.FC<{ image: GalleryImage; index: number }> = ({ image, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of the item is visible
        rootMargin: '0px 0px -50px 0px' // Slightly offset for better scroll feel
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl bg-slate-900 shadow-lg transition-all duration-500 ease-out aspect-video cursor-pointer border border-transparent hover:border-slate-200 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-red-900/10 group ${
        isVisible ? 'animate-gallery-item' : 'opacity-0'
      }`}
      style={{ animationDelay: `${(index % 3) * 100}ms` }} // Stagger slightly by column
    >
      <div className="w-full h-full overflow-hidden">
        <img
          src={image.url}
          className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-115 brightness-[0.7] group-hover:brightness-100"
          alt={image.caption}
          loading="lazy"
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
        <span className="text-red-500 font-black text-xs uppercase tracking-[0.2em] mb-2 transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-100">
          {image.category}
        </span>
        <h3 className="text-white font-bold text-xl leading-tight border-l-2 border-red-700 pl-4 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-500 delay-150">
          {image.caption}
        </h3>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const images: GalleryImage[] = [
    { id: 1, url: '/images/guards/officer-1.svg', caption: 'Security Officer 1', category: 'Guards' },
    { id: 10, url: '/images/guards/officer-2.svg', caption: 'Security Officer 2', category: 'Guards' },
    { id: 11, url: '/images/guards/officer-3.svg', caption: 'Security Officer 3', category: 'Guards' },
    { id: 12, url: '/images/guards/officer-4.svg', caption: 'Security Officer 4', category: 'Guards' },
    { id: 13, url: '/images/guards/officer-5.svg', caption: 'Security Officer 5', category: 'Guards' },
    { id: 14, url: '/images/guards/officer-6.svg', caption: 'Security Officer 6', category: 'Guards' },
    { id: 2, url: 'https://picsum.photos/id/160/800/600', caption: 'CCTV Installation Site', category: 'Tech' },
    { id: 3, url: 'https://picsum.photos/id/529/800/600', caption: 'Perimeter Security Patrol', category: 'Patrol' },
    { id: 4, url: 'https://picsum.photos/id/524/800/600', caption: 'GPS Tracking Integration', category: 'Tech' },
    { id: 5, url: 'https://picsum.photos/id/111/800/600', caption: 'Fleet Management Hub', category: 'Fleet' },
    { id: 6, url: 'https://picsum.photos/id/350/800/600', caption: 'Industrial Site Security', category: 'Corporate' },
    { id: 7, url: 'https://picsum.photos/id/376/800/600', caption: 'Executive Protection Team', category: 'VIP' },
    { id: 8, url: 'https://picsum.photos/id/429/800/600', caption: 'High-Risk Asset Escort', category: 'Escort' },
    { id: 9, url: 'https://picsum.photos/id/514/800/600', caption: 'Secure Access Control', category: 'Tech' },
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Guards', 'Tech', 'Patrol', 'Corporate'];

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-wider">Our Operations</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Visual proof of our commitment to safety and professional excellence across Nigeria.</p>
          <div className="w-24 h-1.5 bg-red-700 mx-auto mt-6"></div>
        </div>
      </div>

      {/* Filter */}
      <section className="py-12 bg-white border-b border-slate-100 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-red-700 text-white shadow-lg transform scale-105' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <GalleryCard 
                key={`${activeFilter}-${image.id}`} 
                image={image} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 italic text-sm">
            For security and confidentiality reasons, many of our operational sites and high-profile security protocols are not featured in our public gallery.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
