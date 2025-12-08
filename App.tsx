import React from 'react';
import Navigation from './components/Navigation';
import JobGenerator from './components/JobGenerator';
import VideoSection from './components/VideoSection';
import { EmployerSection, EmployeeSection, InternshipSection } from './components/ContentSections';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <header className="relative bg-medical-900 h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/hospital_tech/1920/1080" 
            alt="Moderne Intensivstation Hintergrund" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-medical-900 via-medical-900/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <span className="text-accent-500 font-bold tracking-wider uppercase mb-4 animate-fade-in-up">Deutschlands Nr. 1 Plattform</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-3xl drop-shadow-lg">
            Karriere in der <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent-400">Fachkrankenpflege</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Wir verbinden spezialisierte Kliniken mit den besten Fachkrankenpflegern für Intensivpflege, Anästhesie und OP-Dienst. 
            KI-optimiert, schnell und transparent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#fachkraefte" className="bg-accent-600 hover:bg-accent-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition transform hover:-translate-y-1 text-center">
              Stellen finden
            </a>
            <a href="#arbeitgeber" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-bold py-4 px-8 rounded-lg transition text-center">
              Für Arbeitgeber
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <EmployerSection />
        
        <JobGenerator />

        <EmployeeSection />

        <InternshipSection />

        <VideoSection />

        {/* Contact / Footer CTA */}
        <section id="kontakt" className="py-20 bg-white border-t border-gray-100">
           <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold mb-6 text-medical-900">Bereit für den nächsten Schritt?</h2>
             <p className="text-gray-600 mb-8">Egal ob Sie suchen oder gefunden werden wollen – wir unterstützen Sie.</p>
             <div className="bg-gray-50 p-8 rounded-xl shadow-inner max-w-lg mx-auto">
                <form className="space-y-4 text-left">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail Adresse</label>
                    <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 outline-none" placeholder="ihre@email.de" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                    <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 outline-none h-32" placeholder="Wie können wir helfen?"></textarea>
                  </div>
                  <button type="button" className="w-full bg-medical-800 text-white font-bold py-3 rounded-lg hover:bg-medical-700 transition">
                    Anfrage senden
                  </button>
                </form>
             </div>
           </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h5 className="text-white font-bold text-lg mb-4">FachPflegeJobs</h5>
            <p className="mb-4">Die spezialisierte Jobbörse für Intensiv- und Anästhesiepflege.</p>
            <p>&copy; {new Date().getFullYear()} Alle Rechte vorbehalten.</p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Für Bewerber</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Stellenbörse</a></li>
              <li><a href="#" className="hover:text-white transition">Gehaltsrechner</a></li>
              <li><a href="#" className="hover:text-white transition">Karriere-Blog</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Für Arbeitgeber</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Stelle inserieren</a></li>
              <li><a href="#" className="hover:text-white transition">Preise & Pakete</a></li>
              <li><a href="#" className="hover:text-white transition">Personalvermittlung</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Rechtliches</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition">AGB</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;