import myGov from '../assets/govtlink/myGov.jpeg';
import indiaGov from '../assets/govtlink/indiaGov.jpg';
import bharats from '../assets/govtlink/bharats.jpg';
import dte from '../assets/govtlink/dte.jpg';
import scvtt from '../assets/govtlink/scvtt.jpg';
import dgt from '../assets/govtlink/dgt.jpg';
import digitalIndia from '../assets/govtlink/digitalindia.jpg';
import dataGov from '../assets/govtlink/dataGov.jpeg';
import nsdc from '../assets/govtlink/nsdc.jpg';
import nimi from '../assets/govtlink/nimi.jpg';
import mIndia from '../assets/govtlink/MIndia.png';
import gov2 from '../assets/govtlink/gov2.jpg';

const GovtLinks = () => {
  const govtLogos = [
    { id: 1, image: bharats, name: 'National Emblem', link: '#' },
    { id: 2, image: myGov, name: 'MyGov India', link: '#' },
    { id: 3, image: indiaGov, name: 'India.gov.in', link: '#' },
    { id: 4, image: gov2, name: 'Government of Uttar Pradesh', link: '#' },
    { id: 5, image: dte, name: 'Directorate of Training & Employment', link: '#' },
    { id: 6, image: scvtt, name: 'State Council for Vocational Training', link: '#' },
    { id: 7, image: dgt, name: 'Directorate General of Training', link: '#' },
    { id: 8, image: digitalIndia, name: 'Digital India', link: '#' },
    { id: 9, image: dataGov, name: 'Data.gov.in', link: '#' },
    { id: 10, image: nsdc, name: 'NSDC', link: '#' },
    { id: 11, image: nimi, name: 'NIMI', link: '#' },
    { id: 12, image: mIndia, name: 'Mobile India', link: '#' },
  ];

  return (
    <div className="relative py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Infinite Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <div 
              className="flex gap-8 hover:pause-animation"
              style={{
                animation: 'scrollGovt 10s linear infinite'
              }}
            >
              {/* First set of logos */}
              {govtLogos.map((logo) => (
                <a
                  key={`first-${logo.id}`}
                  href={logo.link}
                  className="flex-shrink-0 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-48 h-24 bg-white rounded-lg shadow-md 
                    flex items-center justify-center p-4
                    transition-all duration-300 ease-out
                    hover:shadow-xl hover:scale-105 hover:-translate-y-1
                    border border-gray-200 hover:border-blue-300">
                    <img 
                      src={logo.image} 
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain
                        filter grayscale-0 
                        transition-all duration-300"
                    />
                  </div>
                </a>
              ))}
              
              {/* Duplicated set for seamless loop */}
              {govtLogos.map((logo) => (
                <a
                  key={`second-${logo.id}`}
                  href={logo.link}
                  className="flex-shrink-0 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-48 h-24 bg-white rounded-lg shadow-md 
                    flex items-center justify-center p-4
                    transition-all duration-300 ease-out
                    hover:shadow-xl hover:scale-105 hover:-translate-y-1
                    border border-gray-200 hover:border-blue-300">
                    <img 
                      src={logo.image} 
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain
                        filter grayscale-0 group-hover:grayscale-0
                        transition-all duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scrollGovt {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .hover\\:pause-animation:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export default GovtLinks;
