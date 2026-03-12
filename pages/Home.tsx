// HR-UPDATER: v1.0
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import JobGenerator from '../components/JobGenerator';
import VideoSection from '../components/VideoSection';
import { EmployerSection, EmployeeSection, InternshipSection } from '../components/ContentSections';

function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <header className="relative bg-medical-900 min-h-[400px] md:h-[600px] flex items-center overflow-hidden py-12 md:py-0">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/hospital_tech/1920/1080"
            alt="Moderne Intensivstation Hintergrund"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-medical-900 via-medical-900/90 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full w-full">
          <span className="text-accent-500 font-bold tracking-wider uppercase mb-3 md:mb-4 text-sm md:text-base animate-fade-in-up">Deutschlands Nr. 1 Plattform</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight max-w-3xl drop-shadow-lg">
            Karriere in der <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent-400">Fachkrankenpflege</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl leading-relaxed">
            Wir verbinden spezialisierte Kliniken mit den besten Fachkrankenpflegern für Intensivpflege, Anästhesie und OP-Dienst.
            KI-optimiert, schnell und transparent.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#fachkraefte" className="bg-accent-600 hover:bg-accent-500 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-lg transition transform hover:-translate-y-1 text-center text-sm md:text-base">
              Stellen finden
            </a>
            <a href="#arbeitgeber" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition text-center text-sm md:text-base">
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

        {/* Fachkrankenpfleger Jobs in deutschen Städten - Geo SEO */}
        <section id="staedte" className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Fachkrankenpfleger Stellenangebote nach Stadt</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Finden Sie Fachkrankenpfleger-Jobs in Ihrer Region. Wir listen Stellenangebote aus allen großen Klinikstandorten Deutschlands.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {[
                'Berlin', 'München', 'Hamburg', 'Köln', 'Frankfurt am Main', 'Stuttgart', 'Düsseldorf', 'Leipzig',
                'Dortmund', 'Essen', 'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg', 'Bochum',
                'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Mannheim', 'Karlsruhe', 'Augsburg', 'Wiesbaden',
                'Freiburg', 'Heidelberg', 'Rostock', 'Kiel', 'Lübeck', 'Magdeburg', 'Erfurt', 'Mainz',
              ].map((city) => (
                <div key={city} className="bg-medical-50 hover:bg-medical-100 rounded-lg p-3 md:p-4 text-center transition cursor-pointer border border-medical-100">
                  <span className="text-sm md:text-base font-medium text-medical-800">Fachkrankenpfleger Jobs {city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ & Karriere-Ratgeber für Fachkrankenpfleger */}
        <section id="faq-karriere" className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Häufig gestellte Fragen zum Beruf Fachkrankenpfleger</h2>
              <p className="text-gray-600">Alles Wichtige rund um Ausbildung, Gehalt, Weiterbildung und Karrierechancen.</p>
            </div>

            <div className="space-y-4 md:space-y-6 mb-12">
              {[
                {
                  q: 'Was ist ein Fachkrankenpfleger?',
                  a: 'Ein Fachkrankenpfleger ist eine examinierte Pflegefachkraft mit einer zusätzlichen zweijährigen Fachweiterbildung, z. B. in Intensivpflege und Anästhesie, im Operationsdienst oder in der Psychiatrie. Die Weiterbildung erfolgt nach den Richtlinien der Deutschen Krankenhausgesellschaft (DKG) und qualifiziert für hochspezialisierte Tätigkeiten in Kliniken und Fachzentren.',
                },
                {
                  q: 'Wie wird man Fachkrankenpfleger für Intensivpflege und Anästhesie?',
                  a: 'Voraussetzung ist eine abgeschlossene dreijährige Ausbildung als Gesundheits- und Krankenpfleger (oder Pflegefachmann/Pflegefachfrau nach neuem Pflegeberufegesetz) sowie mindestens sechs Monate Berufserfahrung in der Intensivpflege oder Anästhesie. Die Fachweiterbildung dauert in der Regel zwei Jahre berufsbegleitend und schließt mit einer staatlichen Prüfung ab.',
                },
                {
                  q: 'Wie viel verdient ein Fachkrankenpfleger?',
                  a: 'Im öffentlichen Dienst (TVöD) werden Fachkrankenpfleger in die Entgeltgruppen P9 bis P11 eingestuft. Das entspricht einem Bruttogehalt von ca. 3.700 bis 5.200 Euro monatlich, je nach Berufserfahrung und Stufe. Hinzu kommen Zulagen für Schicht-, Wochenend- und Feiertagsarbeit. In der Zeitarbeit sind Gehälter von 4.500 bis 6.000 Euro und mehr üblich.',
                },
                {
                  q: 'Welche Einsatzgebiete gibt es für Fachkrankenpfleger?',
                  a: 'Fachkrankenpfleger arbeiten auf Intensivstationen (ITS/ICU), in der Anästhesie, im Operationsdienst, auf Stroke Units, in Notaufnahmen, Verbrennungszentren oder in der ambulanten Intensivpflege. Auch leitende Positionen wie Stationsleitung oder Pflegedienstleitung stehen Fachkrankenpflegern offen.',
                },
                {
                  q: 'Welche Weiterbildungsmöglichkeiten gibt es nach der Fachweiterbildung?',
                  a: 'Nach der Fachweiterbildung können Fachkrankenpfleger sich zum Praxisanleiter, Wundexperten (ICW), Hygienefachkraft oder Pain Nurse weiterbilden. Auch ein berufsbegleitendes Studium in Pflegemanagement, Pflegepädagogik oder Advanced Practice Nursing (APN) ist eine beliebte Karriereoption.',
                },
                {
                  q: 'Was ist der Unterschied zwischen Fachkrankenpfleger und Pflegefachkraft?',
                  a: 'Eine Pflegefachkraft hat die dreijährige Grundausbildung abgeschlossen. Ein Fachkrankenpfleger hat darüber hinaus eine zweijährige Fachweiterbildung in einem Spezialgebiet absolviert. Fachkrankenpfleger übernehmen komplexere medizinische Aufgaben, tragen mehr Verantwortung und werden höher vergütet.',
                },
                {
                  q: 'Wie sind die Arbeitsmarktchancen für Fachkrankenpfleger in Deutschland?',
                  a: 'Die Arbeitsmarktchancen sind ausgezeichnet. Fachkrankenpfleger gehören zu den am stärksten nachgefragten Berufsgruppen im Gesundheitswesen. Nahezu jede Klinik in Deutschland sucht qualifiziertes Fachpflegepersonal, insbesondere für Intensivstationen und OP-Bereiche. Die Arbeitslosenquote liegt praktisch bei null.',
                },
                {
                  q: 'Ist die Stellensuche auf fachkrankenpfleger-stellenangebote.de kostenlos?',
                  a: 'Ja, die Nutzung von fachkrankenpfleger-stellenangebote.de ist für Bewerber vollständig kostenlos. Sie können alle Stellenangebote durchsuchen und sich direkt bei den Arbeitgebern bewerben.',
                },
              ].map((item, i) => (
                <details key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm group">
                  <summary className="flex justify-between items-center cursor-pointer p-4 md:p-6 font-semibold text-gray-900 text-sm md:text-base">
                    {item.q}
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            {/* Karriere-Ratgeber */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Karriere-Ratgeber: Fachkrankenpfleger in Deutschland</h3>
              <div className="prose max-w-none text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Der Beruf des Fachkrankenpflegers zählt zu den anspruchsvollsten und zugleich erfüllendsten Tätigkeiten im deutschen Gesundheitswesen.
                  Mit der zweijährigen Fachweiterbildung nach DKG-Richtlinien erwerben Pflegefachkräfte vertiefte Kenntnisse in der Intensivmedizin,
                  Anästhesiologie oder im Operationsdienst und qualifizieren sich für hochspezialisierte Einsatzbereiche.
                </p>
                <p>
                  <strong>Ausbildungsweg:</strong> Nach der dreijährigen Grundausbildung zur Pflegefachkraft und mindestens sechs Monaten
                  praktischer Erfahrung im jeweiligen Fachgebiet kann die Weiterbildung begonnen werden. Diese umfasst theoretische Module
                  (mindestens 720 Stunden) und praktische Einsätze in verschiedenen Spezialbereichen wie Intensivstation, Anästhesie,
                  Notaufnahme und OP.
                </p>
                <p>
                  <strong>Karriereperspektiven:</strong> Fachkrankenpfleger haben vielfältige Entwicklungsmöglichkeiten: von der
                  Stationsleitung über die Pflegedienstleitung bis hin zu Positionen in der Pflegepädagogik oder im Qualitätsmanagement.
                  Ein berufsbegleitendes Studium (B.Sc. / M.Sc. Pflege) eröffnet zusätzliche Karrierewege in Wissenschaft und Management.
                </p>
                <p>
                  <strong>Gehaltsentwicklung:</strong> Fachkrankenpfleger profitieren von einer überdurchschnittlichen Vergütung.
                  Im TVöD-P steigen die Gehälter mit zunehmender Berufserfahrung deutlich an. Zusätzliche Zulagen für Nacht-, Wochenend-
                  und Feiertagsarbeit sowie Funktionszulagen für Spezialtätigkeiten (z. B. ECMO, Dialyse) erhöhen das Gesamteinkommen weiter.
                </p>
                <p>
                  <strong>Regionale Nachfrage:</strong> Besonders in Ballungszentren wie Berlin, München, Hamburg, Köln, Frankfurt am Main
                  und Stuttgart ist die Nachfrage nach Fachkrankenpflegern hoch. Aber auch Kliniken in ländlichen Regionen bieten attraktive
                  Konditionen und Anreize, um qualifiziertes Fachpflegepersonal zu gewinnen.
                </p>
              </div>
            </div>
          </div>
        </section>

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
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-sm">
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
              <li><Link to="/impressum" className="hover:text-white transition">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white transition">Datenschutz</Link></li>
                <li><Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link></li>
                <li><Link to="/autor/thomas-sander" className="hover:text-blue-400 transition-colors">Autor</Link></li>
              <li><a href="#" className="hover:text-white transition">AGB</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;