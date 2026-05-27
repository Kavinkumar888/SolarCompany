import { Facebook, Twitter, Instagram, Linkedin, Sun } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#052236] text-gray-300 py-8 md:py-10 px-4 border-t border-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sun className="text-accent w-5 h-5 md:w-6 md:h-6" />
            <span className="font-bold text-lg md:text-xl text-white">SolarNest</span>
          </div>
          <div className="flex space-x-5 md:space-x-6">
            <a href="#" className="hover:text-accent transition"><Facebook size={18} /></a>
            <a href="#" className="hover:text-accent transition"><Twitter size={18} /></a>
            <a href="#" className="hover:text-accent transition"><Instagram size={18} /></a>
            <a href="#" className="hover:text-accent transition"><Linkedin size={18} /></a>
          </div>
          <div className="flex gap-5 md:gap-6 text-sm">
            <a href="#home" className="hover:text-accent">Home</a>
            <a href="#services" className="hover:text-accent">Services</a>
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 md:mt-8 pt-6 text-center text-xs md:text-sm">
          &copy; {currentYear} SolarNest. All rights reserved. Powered by the sun.
        </div>
      </div>
    </footer>
  );
};

export default Footer;