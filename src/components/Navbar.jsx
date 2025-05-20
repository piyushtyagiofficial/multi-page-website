import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    setIsMenuOpen(false);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    gsap.fromTo('.navbar',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo('.mobile-menu-item',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [isMenuOpen]);

  return (
    <header className={`navbar fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="px-4 md:px-8 max-w-7xl mx-auto py-4 md:py-6 w-full">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl md:text-3xl font-bold magnetic">
            <span className="text-white">ELITE</span>
            <span className="text-indigo-600">8</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link magnetic ${location.pathname === link.path ? 'active text-indigo-600' : 'text-white hover:text-indigo-500 transition'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-slate-900 z-[60] flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-4 text-white" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-menu-item text-2xl font-medium ${location.pathname === link.path ? 'text-indigo-600' : 'text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
