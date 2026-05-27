import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const handleQuoteClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary px-4">
      {/* Animated background graphics */}
      <div className="absolute inset-0 bg-solar-pattern opacity-20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-accent/10 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 md:w-60 md:h-60 rounded-full bg-yellow-500/5 blur-2xl animate-float"></div>
      
      {/* Rotating sun - hidden on very small screens to avoid clutter */}
      <div className="hidden sm:block absolute top-1/4 right-[5%] md:right-[10%] w-24 h-24 md:w-48 md:h-48 animate-spin-slow opacity-20">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="20" fill="#FBBF24" />
          <g stroke="#FBBF24" strokeWidth="3">
            <line x1="50" y1="10" x2="50" y2="25" />
            <line x1="50" y1="75" x2="50" y2="90" />
            <line x1="10" y1="50" x2="25" y2="50" />
            <line x1="75" y1="50" x2="90" y2="50" />
            <line x1="21.7" y1="21.7" x2="32.3" y2="32.3" />
            <line x1="67.7" y1="67.7" x2="78.3" y2="78.3" />
          </g>
        </svg>
      </div>

      {/* Moving light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-accent/5 to-transparent skew-y-12 animate-ray"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          Power Your Future with{' '}
          <span className="text-accent">Solar Energy</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-2"
        >
          Sustainable, affordable solar installations for homes and businesses. Join the green revolution today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 sm:mt-10"
        >
          <button
            onClick={handleQuoteClick}
            className="group bg-accent hover:bg-yellow-500 text-primary font-semibold py-3 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto transform hover:scale-105"
          >
            Free Quote
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;