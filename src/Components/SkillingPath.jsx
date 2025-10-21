import { useState } from 'react';
import process1 from '../assets/Photos/process1.jpg';
import process2 from '../assets/Photos/process2.jpg';
import process3 from '../assets/Photos/process3.jpg';
import process4 from '../assets/Photos/process4.jpg';

const SkillingPath = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: 'Registration',
      image: process1,
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      bgGradient: 'from-purple-50 to-pink-50',
      number: '01',
      description: 'Candidate registration process for UPSDM Portal.'
    },
    {
      id: 2,
      title: 'Training',
      image: process2,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      number: '02',
      description: 'We provide different skill courses to improve your skill.'
    },
    {
      id: 3,
      title: 'Assessment',
      image: process3,
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      bgGradient: 'from-orange-50 to-amber-50',
      number: '03',
      description: 'You can check your result and login on portal.'
    },
    {
      id: 4,
      title: 'Placement',
      image: process4,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgGradient: 'from-green-50 to-emerald-50',
      number: '04',
      description: 'Placement opportunities for skilled candidates.'
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold  mb-3">
              Skilling Path
            </h2>
            {/* <div className="h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full"></div> */}
          </div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Your journey to success in 4 simple steps
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative">
          {/* Animated Connecting Line */}
          <div className="absolute top-32 left-[10%] right-[10%] h-1">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 rounded-full opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full" style={{width: '0%', animation: 'expandWidth 2s ease-out forwards'}}></div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center"
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Card Container */}
                <div className={`relative w-full bg-gradient-to-br ${step.bgGradient} rounded-3xl p-6 shadow-lg
                  transform transition-all duration-500 ease-out
                  ${hoveredStep === step.id 
                    ? 'scale-105 shadow-2xl -translate-y-3' 
                    : 'scale-100 hover:scale-102'
                  }
                  border-2 border-white backdrop-blur-sm`}>
                  
                  {/* Step Number */}
                  {/* <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} 
                    flex items-center justify-center text-white font-bold text-lg shadow-lg
                    transform transition-all duration-300
                    ${hoveredStep === step.id ? 'scale-125 rotate-12' : 'scale-100'}">
                    {step.number}
                  </div> */}

                  {/* Image Circle */}
                  <div className="relative mb-4">
                    <div
                      className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${step.gradient} 
                        flex items-center justify-center shadow-xl
                        transform transition-all duration-500
                        ${hoveredStep === step.id ? 'scale-110 rotate-6' : 'scale-100'}
                        relative overflow-hidden group cursor-pointer p-1`}
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                      
                      {/* Image */}
                      <div className="w-full h-full rounded-full overflow-hidden bg-white p-3">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Glow Effect */}
                      {hoveredStep === step.id && (
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} blur-2xl opacity-50 -z-10`}></div>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-center mb-2 transition-all duration-300
                    bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow Connector (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-20">
                      <svg className="w-16 h-8" viewBox="0 0 64 32" fill="none">
                        <path d="M0 16 L48 16 M48 16 L40 8 M48 16 L40 24" 
                          stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="50%" stopColor="#ec4899" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-full h-6 w-1 -translate-x-1/2 mt-6">
                  <div className={`w-full h-full bg-gradient-to-b ${step.gradient} opacity-30 rounded-full`}></div>
                </div>
              )}

              <div className="relative z-10">
                {/* Card Container */}
                <div className={`bg-gradient-to-br ${step.bgGradient} rounded-3xl p-6 shadow-lg
                  border-2 border-white backdrop-blur-sm
                  transform transition-all duration-300
                  active:scale-95`}>
                  
                  {/* Step Number */}
                  <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br ${step.gradient} 
                    flex items-center justify-centerfont-bold shadow-lg z-10`}>
                    {step.number}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    {/* Image Circle */}
                    <div
                      className={`w-24 h-24 flex-shrink-0 rounded-full bg-gradient-to-br ${step.gradient} 
                        flex items-center justify-center shadow-xl
                        relative overflow-hidden p-1`}
                    >
                      {/* Image */}
                      <div className="w-full h-full rounded-full overflow-hidden bg-white p-2">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-1 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        {step.title}
                      </h3>
                      <div className={`h-1 w-16 bg-gradient-to-r ${step.gradient} rounded-full`}></div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillingPath;
