import { motion } from 'framer-motion';
import { Leaf, ThumbsUp, Zap, Sun, Users, Clock, Award, Globe } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Installations', icon: Zap },
  { value: '98%', label: 'Satisfaction', icon: ThumbsUp },
  { value: '15k+', label: 'Tons CO₂ Saved', icon: Leaf },
  { value: '24/7', label: 'Support', icon: Sun },
];

const coreValues = [
  { title: 'Sustainability', icon: Globe, desc: 'Eco-first approach' },
  { title: 'Quality', icon: Award, desc: 'Premium materials' },
  { title: 'Transparency', icon: Users, desc: 'No hidden costs' },
  { title: 'Reliability', icon: Clock, desc: 'On-time delivery' },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            About SolarNest
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Empowering a sustainable future through clean energy
          </p>
        </motion.div>

        {/* Main Story + Stats */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left side: Rich Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Founded in 2015, <span className="text-accent font-semibold">SolarNest</span> is on a mission to make clean energy accessible to everyone.
              We’ve helped thousands of families and businesses transition to solar, reducing carbon footprints
              and saving money.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Our team of certified installers uses premium panels and cutting-edge storage technology.
              Sustainability isn't just our business — it's our commitment to future generations.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              We believe in a future where every home and business produces its own clean energy. 
              That's why we offer end-to-end service – from design and permitting to installation and maintenance.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2">
                <Leaf className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                <span className="text-accent text-xs md:text-sm font-medium">100% Renewable Commitment</span>
              </div>
            </div>
          </motion.div>

          {/* Right side: Stats Grid (2x2 on mobile & desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm border border-white/10 hover:border-accent/40 transition-all"
              >
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-accent mx-auto mb-2 md:mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-300 text-xs md:text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Values Section - New Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 md:mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-10">
            Our Core Values
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-xl p-4 md:p-5 text-center border border-white/10 hover:border-accent/30 transition-all"
              >
                <value.icon className="w-8 h-8 md:w-10 md:h-10 text-accent mx-auto mb-2" />
                <div className="text-white font-semibold text-sm md:text-base">{value.title}</div>
                <div className="text-gray-400 text-xs mt-1">{value.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team / Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-8 bg-white/5 rounded-2xl px-6 py-4 backdrop-blur-sm">
            <span className="text-accent font-bold text-sm md:text-base">✓ Licensed & Insured</span>
            <span className="text-accent font-bold text-sm md:text-base">✓ 25-Year Warranty</span>
            <span className="text-accent font-bold text-sm md:text-base">✓ NABCEP Certified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;