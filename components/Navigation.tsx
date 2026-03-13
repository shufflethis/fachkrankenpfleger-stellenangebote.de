import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Für Arbeitgeber', href: '#arbeitgeber' },
    { name: 'Für Fachkräfte', href: '#fachkraefte' },
    { name: 'Bezahlte Praktika', href: '#praktika' },
    { name: 'Videos & Einblicke', href: '#videos' },
    { name: 'KI-Generator', href: '#ai-tool' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="flex items-center text-medical-800 text-2xl font-bold tracking-tight">
              <svg className="w-8 h-8 mr-2 text-medical-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
              FachPflege<span className="text-medical-500">Jobs</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-600 hover:text-medical-600 font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })} className="bg-medical-600 hover:bg-medical-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              Jetzt Kontaktieren
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => { document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-medical-600 hover:bg-medical-50 w-full text-left"
              >
                {link.name}
              </button>
            ))}
             <button onClick={() => { document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }} className="block w-full text-center mt-4 bg-medical-600 text-white px-3 py-3 rounded-md font-bold">
              Jetzt Kontaktieren
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;