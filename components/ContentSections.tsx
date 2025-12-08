import React from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="mb-6 border-b border-gray-200 pb-4">
    <h4 className="text-lg font-semibold text-medical-800 mb-2">{question}</h4>
    <p className="text-gray-600 leading-relaxed">{answer}</p>
  </div>
);

export const EmployerSection: React.FC = () => {
  return (
    <section id="arbeitgeber" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-medical-600 font-semibold tracking-wider uppercase text-sm">Für Kliniken & Pflegeeinrichtungen</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Qualifizierte Fachkrankenpfleger finden</h2>
          <div className="w-20 h-1 bg-medical-500 mx-auto"></div>
        </div>

        <article className="prose lg:prose-xl mx-auto text-gray-700">
          <p className="lead text-xl mb-8">
            Der Fachkräftemangel in der Intensivpflege und Anästhesie stellt Kliniken vor existenzielle Herausforderungen. 
            <strong>fachkrankenpfleger-stellenangebote.de</strong> ist Ihre spezialisierte Schnittstelle zu hochqualifiziertem Personal.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Warum Fachspezifisches Recruiting?</h3>
          <p className="mb-6">
            Allgemeine Jobbörsen erreichen oft nicht die Tiefe, die für die Besetzung von Spezialstellen in der 
            Intensivmedizin oder im OP-Dienst notwendig ist. Fachkrankenpfleger verfügen über eine zweijährige 
            Fachweiterbildung (DKG) und suchen gezielt nach Positionen, die ihre Expertise wertschätzen.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-medical-50 p-6 rounded-lg">
              <h4 className="font-bold text-medical-800 mb-2">Zielgerichtete Ansprache</h4>
              <p className="text-sm">Wir sprechen exklusiv Pflegeexperten mit Fachweiterbildung A&I (Anästhesie & Intensiv) sowie OP-Pflege an.</p>
            </div>
            <div className="bg-medical-50 p-6 rounded-lg">
              <h4 className="font-bold text-medical-800 mb-2">GEO & SEO Optimierung</h4>
              <p className="text-sm">Unsere Plattform ist für KI-Suchmaschinen wie ChatGPT und Google Gemini optimiert, damit Ihre Stellenanzeigen als Top-Antwort erscheinen.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Unser Leistungsspektrum für Arbeitgeber</h3>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>Erstellung KI-optimierter Stellenanzeigen.</li>
            <li>Direkter Zugang zu wechselwilligen Fachkräften.</li>
            <li>Employer Branding Videos zur Steigerung der Arbeitgeberattraktivität.</li>
            <li>Beratung zu marktüblichen Gehältern und Benefits in der Fachpflege.</li>
          </ul>

          <div className="mt-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold mb-6">Häufige Fragen von Arbeitgebern (FAQ)</h3>
            <FAQItem 
              question="Wie lange dauert die Besetzung einer Fachkraftstelle?"
              answer="Durchschnittlich dauert die Besetzung spezialisierter Stellen 3-6 Monate. Mit unserer Plattform und der gezielten KI-Aussteuerung können wir diese Zeit signifikant verkürzen, da wir passive Kandidaten aktiv ansprechen."
            />
            <FAQItem 
              question="Welche Qualifikationen prüfen wir?"
              answer="Wir validieren die staatliche Anerkennung sowie den Abschluss der Fachweiterbildung für Intensivpflege und Anästhesie oder den Operationsdienst nach den Empfehlungen der DKG."
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export const EmployeeSection: React.FC = () => {
  return (
    <section id="fachkraefte" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-medical-600 font-semibold tracking-wider uppercase text-sm">Für Pflegeexperten</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Karriere als Fachkrankenpfleger</h2>
          <div className="w-20 h-1 bg-medical-500 mx-auto"></div>
        </div>

        <article className="prose lg:prose-xl mx-auto text-gray-700">
          <p className="lead text-xl mb-8">
            Sie sind Experte für kritische Situationen. Ihre Arbeit auf der Intensivstation oder im OP rettet Leben. 
            Verdienen Sie nicht auch einen Arbeitgeber, der das zu schätzen weiß?
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Marktwert & Gehaltsentwicklung</h3>
          <p className="mb-6">
            Fachkrankenpfleger gehören zu den gefragtesten Fachkräften im Gesundheitswesen. Das Gehalt variiert stark je nach Bundesland, Träger und Verhandlungsgeschick.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center my-8">
            <li className="bg-white p-4 rounded shadow">
              <span className="block text-2xl font-bold text-medical-600">TVöD P9-P11</span>
              <span className="text-sm text-gray-500">Öffentlicher Dienst</span>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <span className="block text-2xl font-bold text-medical-600">4.500€ - 6.000€</span>
              <span className="text-sm text-gray-500">Zeitarbeit / Leasing</span>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <span className="block text-2xl font-bold text-medical-600">+ Zulagen</span>
              <span className="text-sm text-gray-500">Schicht / WE / Feiertag</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Einsatzgebiete für Fachpersonal</h3>
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-medical-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <strong>Intensivstation (ITS/ICU):</strong> Betreuung beatmeter Patienten, Weaning, ECMO-Therapie und Akutversorgung.
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-medical-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <strong>Anästhesie:</strong> Narkoseeinleitung, intraoperative Überwachung und Schmerzmanagement im Aufwachraum (AWR).
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-medical-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <strong>Operationsdienst (OTA/OP-Pflege):</strong> Instrumentieren, Springertätigkeiten und Sterilgutmanagement.
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Karriere-FAQ für Fachkrankenpfleger</h3>
            <FAQItem 
              question="Lohnt sich Zeitarbeit als Fachkrankenpfleger?"
              answer="Zeitarbeit bietet oft deutlich höhere Gehälter und Dienstplussicherheit ('Wunschdienstplan'). Der Nachteil ist die wechselnde Arbeitsumgebung und fehlende Teamzugehörigkeit. Wir listen sowohl Festanstellungen als auch Leasing-Angebote."
            />
            <FAQItem 
              question="Welche Weiterbildungen sind sinnvoll?"
              answer="Neben der Fachweiterbildung A&I sind Qualifikationen als Praxisanleiter, Wundexperte (ICW) oder ein Studium im Pflegemanagement/Pflegepädagogik der nächste logische Karriereschritt."
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export const InternshipSection: React.FC = () => {
  return (
    <section id="praktika" className="py-20 bg-medical-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bezahlte Praktika & Hospitationen</h2>
            <p className="text-lg text-medical-100 mb-6 leading-relaxed">
              Sie befinden sich in der Ausbildung zum Pflegefachmann/zur Pflegefachfrau oder absolvieren gerade Ihre Fachweiterbildung?
              Wir vermitteln bezahlte Hospitationen in Spitzenzentren.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="bg-accent-500 p-1 rounded-full mr-3"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                Einblicke in hochspezialisierte Zentren (z.B. Verbrennungszentren, Stroke Units)
              </li>
              <li className="flex items-center">
                <span className="bg-accent-500 p-1 rounded-full mr-3"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                Attraktive Vergütung während der Hospitation
              </li>
              <li className="flex items-center">
                <span className="bg-accent-500 p-1 rounded-full mr-3"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                Unterkunft wird oft gestellt
              </li>
            </ul>
            <button className="bg-white text-medical-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition shadow-lg">
              Praktikum finden
            </button>
          </div>
          <div className="relative">
             <img 
              src="https://picsum.photos/seed/nurse_student/600/400" 
              alt="Pflegeschüler im Praktikum" 
              className="rounded-xl shadow-2xl opacity-90 hover:opacity-100 transition duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent-500 p-4 rounded-lg shadow-xl hidden md:block">
              <p className="font-bold text-white text-lg">"Der beste Einstieg<br/>in die Karriere!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};