import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks! We’ll contact you soon (static demo).');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-gradient-to-t from-primary to-[#0a2a44]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-300 mt-4 text-sm md:text-base">Start your solar journey today</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info + Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 md:space-y-6"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <Phone className="text-accent w-5 h-5 md:w-6 md:h-6" />
              <span className="text-gray-200 text-sm md:text-base">+1 (800) 123-SOLAR</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <Mail className="text-accent w-5 h-5 md:w-6 md:h-6" />
              <span className="text-gray-200 text-sm md:text-base">hello@solarnest.com</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <MapPin className="text-accent w-5 h-5 md:w-6 md:h-6" />
              <span className="text-gray-200 text-sm md:text-base">123 Solar Way, Austin, TX 78701</span>
            </div>

            {/* Static Map Placeholder - responsive SVG */}
            <div className="mt-6 rounded-xl overflow-hidden border border-white/20 shadow-lg">
              <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect width="400" height="200" fill="#1e2a3a" />
                <circle cx="200" cy="100" r="10" fill="#FBBF24" />
                <path d="M200 90 L200 110 M190 100 L210 100" stroke="#FBBF24" strokeWidth="2" />
                <text x="200" y="140" fill="#fff" fontSize="12" textAnchor="middle">SolarNest HQ</text>
                <rect x="50" y="30" width="300" height="140" fill="none" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="4" />
              </svg>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-5 bg-white/5 p-5 md:p-6 rounded-2xl backdrop-blur-sm border border-white/10"
          >
            <div>
              <label className="block text-gray-200 mb-1 text-sm md:text-base">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent transition text-sm md:text-base"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-1 text-sm md:text-base">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent transition text-sm md:text-base"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-1 text-sm md:text-base">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent transition text-sm md:text-base"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-accent hover:bg-yellow-500 text-primary font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all text-sm md:text-base"
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;