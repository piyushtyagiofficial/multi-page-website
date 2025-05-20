import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowRight, Filter } from 'lucide-react';

import SplitText from '../animations/SplitText';
import ScrollReveal from '../components/ScrollReveal';
import { projects, categories } from '../data/projects';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const projectsRef = useRef(null);
  
  useEffect(() => {
    // Filter projects based on active category
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
    
    // Animate the filtered projects
    if (projectsRef.current) {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: 'power3.out',
          clearProps: 'all'
        }
      );
    }
  }, [activeCategory]);
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setIsMobileFiltersOpen(false);
  };
  
  return (
    <div className="work-page">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              <SplitText delay={0.2}>Our Work</SplitText>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Explore our portfolio of innovative digital solutions across various industries and platforms.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="pb-24">
        <div className="container-custom">
          {/* Filter Categories */}
          <div className="mb-12">
            {/* Mobile Filter Button */}
            <div className="md:hidden mb-4">
              <button 
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                className="flex items-center space-x-2 px-4 py-3 bg-slate-800 rounded-lg text-white"
              >
                <Filter size={18} />
                <span>Filter: {activeCategory}</span>
              </button>
              
              {isMobileFiltersOpen && (
                <div className="mt-2 p-4 bg-slate-800 rounded-lg shadow-xl">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`block w-full text-left px-4 py-3 rounded ${
                        activeCategory === category
                          ? 'bg-indigo-600 text-white'
                          : 'text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Desktop Filter Tabs */}
            <div className="hidden md:flex space-x-4 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div 
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project) => (
              <ScrollReveal 
                key={project.id} 
                animation="fade-up"
                className="project-card group block h-[400px]"
              >
                <Link to={`/work/${project.id}`} className="relative w-full h-full">
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
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-slate-400">No projects found in this category.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="pb-24">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 md:p-16 rounded-3xl border border-slate-700 text-center">
              <h2 className="mb-6">Have a Project in Mind?</h2>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                We're always looking for exciting new challenges and collaborations. Let's discuss how we can help bring your vision to life.
              </p>
              <Link 
                to="/contact" 
                className="btn btn-primary text-lg px-10 py-5"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Work;