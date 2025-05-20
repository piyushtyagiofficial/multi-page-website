import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  const [showRoutes, setShowRoutes] = useState(true);

  useEffect(() => {
    setShowRoutes(false); // Hide current page to start transition

    const tl = gsap.timeline({
      onComplete: () => {
        setShowRoutes(true); // Show new page after animation
        window.scrollTo(0, 0);
        // Accessibility: Focus main content
        const main = document.querySelector('main');
        if (main) {
          main.focus();
        }
      }
    });

    tl.to('.page-transition', {
      duration: 0.5,
      scaleY: 1,
      transformOrigin: 'top',
      ease: 'power4.inOut'
    })
    .to('.page-transition', {
      duration: 0.5,
      scaleY: 0,
      transformOrigin: 'bottom',
      ease: 'power4.inOut',
      delay: 0.3
    });

  }, [location]);

  return (
    <>
      <div
        className="page-transition fixed top-0 left-0 right-0 bottom-0 bg-indigo-600 transform scale-y-0 z-[100]"
        style={{ transformOrigin: 'top' }}
      ></div>
      {showRoutes && (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="app relative">
          <CustomCursor />
          <Navbar />
          <main tabIndex={-1} className="min-h-screen pt-20">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
