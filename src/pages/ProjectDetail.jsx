import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowUpRight, Globe, Calendar, Users } from 'lucide-react';

import SplitText from '../animations/SplitText';
import ScrollReveal from '../components/ScrollReveal';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const imageRef = useRef(null);
  
  useEffect(() => {
    if (!project) return;
    
    // Update document title
    document.title = `${project.title} | Elite8 Digital`;
    
    // Hero image animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [project]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <Link to="/work" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  // Get next and previous projects
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const nextProject = projects[currentIndex + 1] || projects[0];
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];
  
  return (
    <div className="project-detail-page">
      {/* Back to Projects */}
      <div className="container-custom py-8">
        <Link 
          to="/work" 
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Projects
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-indigo-400 mb-4">{project.category}</span>
            <h1 className="mb-6">
              <SplitText delay={0.2}>
                {project.title}
              </SplitText>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl">
              {project.description}
            </p>
          </div>
          
          <div 
            className="h-[60vh] rounded-2xl overflow-hidden mb-16"
            ref={imageRef}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <ScrollReveal animation="fade-up" className="lg:col-span-2">
              <h2 className="text-3xl font-semibold mb-6">Overview</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                {project.fullDescription}
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 mt-12">Services Provided</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {project.services.map((service, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-slate-300"
                  >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                    {service}
                  </li>
                ))}
              </ul>
              
              <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3 mb-12">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-slate-800 rounded-full text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.2} className="lg:col-span-1">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-xl font-semibold mb-6">Project Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center mr-4">
                      <Calendar size={20} className="text-indigo-400" />
                    </div>
                    <div>
                      <span className="block text-sm text-slate-400 mb-1">Year</span>
                      <span className="text-white">{project.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center mr-4">
                      <Users size={20} className="text-indigo-400" />
                    </div>
                    <div>
                      <span className="block text-sm text-slate-400 mb-1">Client</span>
                      <span className="text-white">{project.client}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center mr-4">
                      <Globe size={20} className="text-indigo-400" />
                    </div>
                    <div>
                      <span className="block text-sm text-slate-400 mb-1">Category</span>
                      <span className="text-white">{project.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-700/50">
                  <a 
                    href="#" 
                    className="btn btn-primary w-full justify-center group"
                  >
                    View Live Project
                    <ArrowUpRight className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Next/Previous Projects */}
      <section className="pb-24">
        <div className="container-custom">
          <h3 className="text-2xl font-semibold mb-8 text-center">Explore More Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="fade-right">
              <Link 
                to={`/work/${prevProject.id}`} 
                className="group block bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={prevProject.image} 
                    alt={prevProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-indigo-400 text-sm">{prevProject.category}</span>
                  <h4 className="text-xl font-semibold mt-2 mb-2">{prevProject.title}</h4>
                  <span className="inline-flex items-center text-slate-400 group-hover:text-white transition-colors">
                    <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Previous Project
                  </span>
                </div>
              </Link>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-left">
              <Link 
                to={`/work/${nextProject.id}`} 
                className="group block bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={nextProject.image} 
                    alt={nextProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-indigo-400 text-sm">{nextProject.category}</span>
                  <h4 className="text-xl font-semibold mt-2 mb-2">{nextProject.title}</h4>
                  <span className="inline-flex items-center text-slate-400 group-hover:text-white transition-colors justify-end w-full">
                    Next Project
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;