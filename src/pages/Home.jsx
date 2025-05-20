import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';

import SplitText from '../animations/SplitText';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxSection from '../components/ParallaxSection';
import { projects } from '../data/projects';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.fromTo('.hero-subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      
      tl.fromTo('.hero-button',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      );
      
      // Scroll indicator animation
      tl.fromTo('.scroll-indicator',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power1.inOut', delay: 1 }
      );
    }
    
    // Marquee continuous animation
    if (marqueeRef.current) {
      const marqueeContent = marqueeRef.current.querySelector('.marquee-content');
      
      gsap.to(marqueeContent, {
        xPercent: -50,
        ease: 'none',
        duration: 20,
        repeat: -1,
        rotation: 0.01,
      });
    }
  }, []);
  
  // Featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center py-20"
      >
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="mb-6">
              <SplitText delay={0.2}>
                Transforming Ideas into Digital Experiences
              </SplitText>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl">
              We are a creative design agency specializing in building innovative digital solutions that drive business growth and user engagement.
            </p>
            
            <Link to="/contact" className="hero-button btn btn-primary group">
              Start a Project
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        <div className="scroll-indicator absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-slate-400 mb-2">Scroll</span>
          <ChevronDown className="text-slate-400 animate-bounce" />
        </div>
        
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-pink-600/10 blur-3xl"></div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-slate-900">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our Services</h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-xl">
                We deliver comprehensive digital solutions tailored to your business needs
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={0.1}>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9H21M7 3V5M17 3V5M6 12H10V16H6V12ZM6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.07989 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Design & Development</h3>
                <p className="text-slate-400 mb-6">
                  We create stunning, functional websites that engage users and drive conversions with a focus on performance and SEO.
                </p>
                <Link to="/services" className="text-indigo-400 inline-flex items-center hover:text-indigo-300 transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 9.4V5.6C15 4.1 13.6 3 12 3C10.4 3 9 4.1 9 5.6V9.4M15 9.4V16.8C15 18.3 13.6 19.4 12 19.4C10.4 19.4 9 18.3 9 16.8V9.4M15 9.4H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Brand Identity & Strategy</h3>
                <p className="text-slate-400 mb-6">
                  We craft compelling brand identities and strategies that resonate with your target audience and set you apart from competitors.
                </p>
                <Link to="/services" className="text-indigo-400 inline-flex items-center hover:text-indigo-300 transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.3}>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 16.0001V17.2001C13 18.8802 13 19.7203 12.673 20.362C12.3854 20.9265 11.9265 21.3855 11.362 21.6731C10.7202 22.0001 9.88022 22.0001 8.2 22.0001H6.8C5.11984 22.0001 4.27976 22.0001 3.63803 21.6731C3.07354 21.3855 2.6146 20.9265 2.32698 20.362C2 19.7203 2 18.8802 2 17.2001V6.8001C2 5.11994 2 4.27986 2.32698 3.63813C2.6146 3.07364 3.07354 2.6147 3.63803 2.32708C4.27976 2.0001 5.11984 2.0001 6.8 2.0001H8.2C9.88022 2.0001 10.7202 2.0001 11.362 2.32708C11.9265 2.6147 12.3854 3.07364 12.673 3.63813C13 4.27986 13 5.11994 13 6.8001V8.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Marketing & SEO</h3>
                <p className="text-slate-400 mb-6">
                  We implement data-driven marketing strategies and SEO optimization to increase your online visibility and drive qualified traffic.
                </p>
                <Link to="/services" className="text-indigo-400 inline-flex items-center hover:text-indigo-300 transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Client Section */}
      <section className="py-24 bg-slate-800/25 overflow-hidden">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="mb-4">Trusted by Innovative Brands</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl">
              We've partnered with forward-thinking companies across industries
            </p>
          </div>
        </ScrollReveal>
        
        <div className="marquee-container py-8" ref={marqueeRef}>
          <div className="marquee-content flex items-center">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 bg-slate-800/50 px-12 rounded-lg"
              >
                <span className="text-2xl font-bold text-white opacity-70">
                  {["ACME", "Fusion", "NexGen", "Quantum", "Vertex", "Stellar"][index]}
                </span>
              </div>
            ))}
            {[...Array(6)].map((_, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 bg-slate-800/50 px-12 rounded-lg"
              >
                <span className="text-2xl font-bold text-white opacity-70">
                  {["ACME", "Fusion", "NexGen", "Quantum", "Vertex", "Stellar"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="section bg-slate-900/50">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <h2 className="mb-4">Featured Projects</h2>
                <p className="text-slate-400 max-w-2xl text-xl">
                  Explore our latest work and creative solutions
                </p>
              </div>
              <Link to="/work" className="btn btn-secondary mt-6 md:mt-0">
                View All Projects
              </Link>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal 
                key={project.id} 
                animation="fade-up"
                delay={index * 0.1}
              >
                <Link to={`/work/${project.id}`} className="project-card group block h-[400px]">
                  <div className="relative w-full h-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <span className="text-indigo-400 text-sm font-medium mb-2">{project.category}</span>
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                      <p className="text-slate-300 mb-4">{project.description}</p>
                      <span className="inline-flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                        View Project
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <ParallaxSection className="section bg-slate-900 relative" speed={-0.05}>
        <div className="container-custom relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="bg-gradient-to-br from-indigo-900/90 to-slate-900 p-12 md:p-16 rounded-3xl border border-indigo-500/20 shadow-xl shadow-indigo-900/10 text-center md:text-left">
              <div className="md:flex items-center justify-between">
                <div className="md:max-w-2xl mb-8 md:mb-0">
                  <h2 className="mb-6">Ready to transform your digital presence?</h2>
                  <p className="text-xl text-slate-300">
                    Let's collaborate to create something extraordinary together. Our team is ready to bring your vision to life.
                  </p>
                </div>
                <Link 
                  to="/contact" 
                  className="btn btn-primary text-lg px-10 py-5 shadow-lg shadow-indigo-600/30 group"
                >
                  Start a Project
                  <ArrowUpRight className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Abstract background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Home;