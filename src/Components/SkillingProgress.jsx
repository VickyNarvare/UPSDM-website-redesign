import { useEffect, useRef } from 'react';
import enrolled from '../assets/resource/enrolled1.png';
import trained from '../assets/resource/trained1.png';
import placed from '../assets/resource/placed11.png';
import courses from '../assets/resource/courses11.png';
import searchIcon from '../assets/resource/searchIcon.png';
import train from '../assets/resource/train2.png';
import factIcon1 from '../assets/resource/fact-icon1.png';
import factIcon3 from '../assets/resource/fact-icon3.png';
import factIcon4 from '../assets/resource/fact-icon4.png';
import ut1 from '../assets/resource/ut1.png';

const SkillingProgress = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        // Multi-color particles
        const colors = [
          'rgba(251, 191, 36, 0.7)',  // Yellow
          'rgba(249, 115, 22, 0.7)',  // Orange
          'rgba(168, 85, 247, 0.7)',  // Purple
          'rgba(59, 130, 246, 0.7)',  // Blue
          'rgba(34, 211, 238, 0.7)',  // Cyan
          'rgba(236, 72, 153, 0.7)',  // Pink
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Keep within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Create particles
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw connecting lines with gradient colors
    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            const opacity = 0.3 * (1 - distance / 150);
            // Create gradient line between particles
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, particles[i].color.replace(/[^,]+(?=\))/, opacity));
            gradient.addColorStop(1, particles[j].color.replace(/[^,]+(?=\))/, opacity));
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  const stats = [
    {
      id: 1,
      number: '1509',
      label: 'Training Partners',
      image: factIcon1
    },
    {
      id: 2,
      number: '12698',
      label: 'Training Centre',
      image: train
    },
    {
      id: 3,
      number: '39',
      label: 'Sectors',
      image: searchIcon
    },
    {
      id: 4,
      number: '3308',
      label: 'Courses',
      image: courses
    },
    {
      id: 5,
      number: '1514228',
      label: 'Enrolled',
      image: enrolled
    },
    {
      id: 6,
      number: '782013',
      label: 'Trained',
      image: trained
    },
    {
      id: 7,
      number: '682555',
      label: 'Assessed',
      image: factIcon3
    },
    {
      id: 8,
      number: '291341',
      label: 'Appointed',
      image: factIcon4
    },
    {
      id: 9,
      number: '297',
      label: 'Active Centers',
      image: train
    },
    {
      id: 10,
      number: '592',
      label: 'Active Courses',
      image: courses
    },
    {
      id: 11,
      number: '918',
      label: 'Active Batches',
      image: ut1
    },
    {
      id: 12,
      number: '28838',
      label: 'Active Trainees',
      image: placed
    }
  ];

  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Enhanced Deep Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
      
      {/* Particles.js Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Multi-Color Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/15 to-pink-900/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Title Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            {/* Title Glow Effect with Rainbow Colors */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 animate-pulse"></div>
            <h2 className="relative text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif italic leading-tight
              bg-gradient-to-r from-purple-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent
              drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]
              mb-3">
              Skilling Progress Of UPSDM Schemes
            </h2>
            <p className="relative text-base md:text-lg lg:text-xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-light tracking-wide">
              (2019 To Till Date)
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/50"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-md opacity-75 animate-pulse"></div>
              <div className="relative w-3 h-3 bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-400 rounded-full"></div>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent rounded-full shadow-lg shadow-cyan-500/50"></div>
          </div>
        </div>

        {/* Minimal Stats Grid with Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Minimal Card Container */}
              <div className="relative h-full bg-white/5 backdrop-blur-md rounded-2xl p-6 
                border border-white/10
                shadow-lg
                transition-all duration-500 ease-out
                hover:bg-white/10
                hover:border-purple-400/30
                hover:shadow-[0_8px_30px_rgba(168,85,247,0.3)]
                hover:-translate-y-1">
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Section */}
                <div className="relative flex justify-center mb-5">
                  {/* Minimal Glow */}
                  <div className="absolute inset-0 m-auto w-16 h-16 bg-gradient-to-br from-purple-400/20 via-blue-400/20 to-cyan-400/20 
                    rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Clean Icon Container */}
                  <div className="relative w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm
                    flex items-center justify-center
                    shadow-md
                    transform transition-all duration-500 ease-out
                    group-hover:scale-110 group-hover:shadow-lg">
                    <img 
                      src={stat.image} 
                      alt={stat.label}
                      className="relative z-10 w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Number Section */}
                <div className="relative text-center mb-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 via-blue-200 to-cyan-300 
                    bg-clip-text text-transparent
                    transform transition-all duration-300 ease-out
                    group-hover:scale-105">
                    {stat.number}
                  </div>
                </div>

                {/* Label Section */}
                <div className="relative text-center">
                  <div className="text-sm md:text-base font-medium text-cyan-200/90
                    transform transition-all duration-300 ease-out
                    group-hover:text-purple-200">
                    {stat.label}
                  </div>
                </div>

                {/* Minimal bottom accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 
                  group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillingProgress;
