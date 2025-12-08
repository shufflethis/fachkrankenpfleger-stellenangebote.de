import React, { useState } from 'react';
import { generateJobDescription } from '../services/geminiService';

const JobGenerator: React.FC = () => {
  const [title, setTitle] = useState('');
  const [requirements, setRequirements] = useState('');
  const [benefits, setBenefits] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult('');
    
    try {
      const generatedText = await generateJobDescription(title, requirements, benefits);
      setResult(generatedText);
    } catch (err: any) {
      setError(err.message || 'Ein unerwarteter Fehler ist aufgetreten.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-20 bg-gradient-to-br from-indigo-900 to-medical-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              KI-Stellenanzeigen Generator
              <span className="block text-accent-500 text-lg font-normal mt-2">Powered by Google Gemini</span>
            </h2>
            <p className="text-indigo-100 mb-8 leading-relaxed">
              Erstellen Sie in Sekunden professionelle, SEO-optimierte Stellenbeschreibungen für Fachkrankenpfleger. 
              Unsere KI analysiert Ihre Anforderungen und formuliert einen Text, der Fachkräfte emotional und fachlich abholt.
              Ideal für Arbeitgeber, die Zeit sparen und die Reichweite auf Google for Jobs maximieren möchten.
            </p>
            
            <form onSubmit={handleGenerate} className="space-y-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
              <div>
                <label className="block text-sm font-medium mb-1">Stellentitel</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="z.B. Fachkrankenpfleger Intensivpflege (m/w/d)"
                  className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent-500 text-white placeholder-indigo-200"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Wichtige Anforderungen (Stichpunkte)</label>
                <textarea 
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="z.B. Fachweiterbildung A&I, Teamfähigkeit, 3-Schicht-System..."
                  className="w-full p-3 h-24 rounded bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent-500 text-white placeholder-indigo-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Ihre Benefits (Stichpunkte)</label>
                <textarea 
                  value={benefits}
                  onChange={(e) => setBenefits(e.target.value)}
                  placeholder="z.B. Übertarifliche Bezahlung, Dienstwagen, 30 Tage Urlaub..."
                  className="w-full p-3 h-24 rounded bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent-500 text-white placeholder-indigo-200"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-accent-600 hover:bg-accent-500 text-white font-bold py-3 rounded-lg shadow-lg transform transition hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generiere...
                  </>
                ) : (
                  'Stellenanzeige generieren'
                )}
              </button>
            </form>
          </div>

          <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-6 min-h-[500px] flex flex-col">
            <div className="border-b pb-4 mb-4 flex justify-between items-center">
              <h3 className="font-bold text-lg text-gray-700">Vorschau & Ergebnis</h3>
              {result && (
                <button 
                  onClick={() => navigator.clipboard.writeText(result)}
                  className="text-sm text-medical-600 hover:text-medical-800 font-medium"
                >
                  In die Zwischenablage kopieren
                </button>
              )}
            </div>
            
            <div className="flex-grow overflow-y-auto max-h-[600px] prose prose-sm prose-blue">
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                  <p>{error}</p>
                </div>
              )}
              
              {!result && !loading && !error && (
                <div className="text-center text-gray-400 py-20">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <p>Füllen Sie das Formular aus, um Ihre optimierte Anzeige zu sehen.</p>
                </div>
              )}

              {loading && (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-32 bg-gray-200 rounded"></div>
                </div>
              )}

              {result && (
                <div className="whitespace-pre-line text-gray-700">
                  {result}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JobGenerator;