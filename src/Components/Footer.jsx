import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    column1: [
      { name: 'Terms & Conditions', url: '#' },
      { name: 'Copyright Policy', url: '#' },
      { name: 'FAQ', url: '#' },
      { name: 'Cyber Security', url: '#' },
    ],
    column2: [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Hyperlinking Policy', url: '#' },
      { name: 'Careers', url: '#' },
      { name: 'Media', url: '#' },
    ],
  };

  const socialLinks = [
    { icon: FaFacebookF, url: '#', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: FaInstagram, url: '#', color: 'bg-pink-600 hover:bg-pink-700' },
    { icon: FaTwitter, url: '#', color: 'bg-blue-400 hover:bg-blue-500' },
    { icon: FaYoutube, url: '#', color: 'bg-red-600 hover:bg-red-700' },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0 Q300,80 600,40 T1200,60 L1200,0 Z" 
            fill="url(#gradient)" 
            opacity="0.8"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#9333EA', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <p className="text-gray-300 leading-relaxed mb-4">
              This is the official Website of U.P. Skill Development Mission Content on Website is designed, 
              developed, maintained and hosted by{' '}
              <span className="text-purple-400 font-semibold">
                National Informatics Centre, Uttar Pradesh.
              </span>
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Last Updated on:{' '}
              <span className="text-orange-400 font-medium">
                Friday, May 06 2022 6:45 PM
              </span>
            </p>
            <p className="text-orange-400 text-sm">
              Site best viewed in IE 11, Chrome and above, with a screen resolution 1024 x 768.
            </p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-6">
            {/* Column 1 */}
            <div>
              <ul className="space-y-3">
                {footerLinks.column1.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="flex items-center text-gray-300 hover:text-purple-400 
                        transition-colors duration-300 group"
                    >
                      <span className="mr-2 text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
                        ❯
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3">
                {footerLinks.column2.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="flex items-center text-gray-300 hover:text-purple-400 
                        transition-colors duration-300 group"
                    >
                      <span className="mr-2 text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
                        ❯
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-end items-center gap-3 pt-6 border-t border-gray-600">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center
                transition-all duration-300 transform hover:scale-110 hover:rotate-6
                shadow-lg hover:shadow-xl`}
            >
              <social.icon className="text-white text-lg" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-yellow-500 
            text-white w-12 h-12 rounded-full flex items-center justify-center
            shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300
            z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0 Q300,60 600,30 T1200,50 L1200,0 Z" 
            fill="rgba(147, 51, 234, 0.1)"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
