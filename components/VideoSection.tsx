import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="videos" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Einblicke in den Alltag</h2>
          <p className="text-gray-600 mt-2">Echte Geschichten aus der Intensivpflege und Anästhesie.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mock Video Cards */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-800 group cursor-pointer">
                <img 
                  src={`https://picsum.photos/seed/med_video_${i}/400/225`} 
                  alt={`Video Thumbnail ${i}`} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  0{i}:45
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {i === 1 ? "24h auf der Intensivstation" : i === 2 ? "Der Weg zur Fachweiterbildung" : "Gehaltsverhandlung Tipps"}
                </h3>
                <p className="text-gray-600 text-sm">
                  Erfahren Sie mehr über die täglichen Herausforderungen und Belohnungen im Beruf des Fachkrankenpflegers.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;