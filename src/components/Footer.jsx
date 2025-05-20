import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-24 pb-12 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="text-3xl font-bold mb-4 inline-block">
              <span className="text-white">ELITE</span>
              <span className="text-indigo-600">8</span>
            </Link>
            <p className="text-slate-400 mt-4 max-w-md">
              We're a creative digital agency specializing in web design, branding, 
              and innovative digital experiences that captivate and convert.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" className="btn-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="btn-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="btn-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" className="btn-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/work" className="text-slate-400 hover:text-white transition-colors">Work</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-slate-400">info@elite8digital.com</li>
              <li className="text-slate-400">+1 (555) 123-4567</li>
              <li className="text-slate-400">
                123 Creative Street<br />
                San Francisco, CA 94103<br />
                United States
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Elite8 Digital. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;