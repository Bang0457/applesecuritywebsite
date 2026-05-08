import React from 'react';

interface PageHeroBannerProps {
  title: string;
  description?: string;
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({ title, description }) => {
  return (
    <div className="premium-light-blue-bg py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]">
        <img
          src="https://picsum.photos/id/160/1200/400"
          className="w-full h-full object-cover"
          alt="Security Pattern"
          style={{ color: 'rgba(73, 123, 238, 1)' }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 uppercase tracking-wider">{title}</h1>
        {description ? (
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">{description}</p>
        ) : null}
        <div className="w-24 h-1.5 bg-red-700 mx-auto mt-6"></div>
      </div>
    </div>
  );
};
