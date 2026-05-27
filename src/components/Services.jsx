import { motion } from 'framer-motion';
import { 
  Home, 
  Building2, 
  Battery, 
  Sun, 
  Shield, 
  Zap,
  TrendingUp,
} from 'lucide-react';

const servicesData = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'Custom rooftop panels that reduce electricity bills by 50-80%. Free site assessment and 25-year warranty.',
    highlight: 'Save up to $2,000/year',
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    description: 'Scalable solutions for businesses, warehouses, and factories. Maximize ROI with tax incentives.',
    highlight: '30% tax credit eligible',
  },
  {
    icon: Battery,
    title: 'Battery Storage',
    description: 'Store excess solar energy for night use or power outages. Smart energy management system.',
    highlight: '10-year backup guarantee',
  },
  {
    icon: Sun,
    title: 'Solar Pool Heating',
    description: 'Eco-friendly pool heating that extends your swimming season without high energy costs.',
    highlight: 'Extend season by 3 months',
  },
  {
    icon: Shield,
    title: 'Solar Maintenance',
    description: 'Annual inspections, cleaning, and performance monitoring to keep your system at peak efficiency.',
    highlight: '24/7 monitoring included',
  },
  {
    icon: TrendingUp,
    title: 'Energy Consulting',
    description: 'Professional audit and custom solar design tailored to your property and energy needs.',
    highlight: 'Free consultation',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Services = () => {
  const handleLearnMore = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-gradient-to-b from-primary to-[#0a2a44] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our Solar Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Complete solar solutions tailored to your needs – from homes to large businesses
          </p>
        </motion.div>

        {/* Services Grid - Mobile first: 1 column, then 2 on tablet, 3 on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
        >
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 30px -12px rgba(0,0,0,0.3)',
                borderColor: '#FBBF24',
              }}
              className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-7 border border-white/20 hover:border-accent/60 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <service.icon className="relative w-10 h-10 md:w-14 md:h-14 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                {service.description}
              </p>
              
              {/* Highlight badge - mobile friendly */}
              <div className="inline-block bg-accent/10 rounded-full px-3 py-1">
                <span className="text-accent text-xs md:text-sm font-medium">
                  {service.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - responsive padding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-10 md:mt-16"
        >
          <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
            Not sure which service fits you? Get a free personalized recommendation.
          </p>
          <button
            onClick={handleLearnMore}
            className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
          >
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;