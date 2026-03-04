import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { MOCK_JOBS } from '../constants';

function Employees() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Navigation />

      <main className="flex-grow bg-gray-50">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-gray-900">Aktuelle Stellenangebote</h1>
              <p className="text-gray-600 mt-2">Finden Sie Ihren Traumjob in der Fachkrankenpflege.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_JOBS.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Vollzeit</span>
                    <span className="text-gray-400 text-sm">{job.postedDate}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{job.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{job.hospital} &bull; {job.location}</p>
                  {job.salary && (
                    <p className="text-green-700 text-sm font-medium mb-3">{job.salary}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">{tag}</span>
                    ))}
                  </div>
                  <button className="w-full border border-gray-200 text-gray-600 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Details ansehen
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} fachkrankenpfleger-stellenangebote.de – Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-4">
            <Link to="/impressum" className="hover:text-white transition">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Employees;
