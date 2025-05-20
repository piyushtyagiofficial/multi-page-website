import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

import SplitText from '../animations/SplitText';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: 'default'
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const mapRef = useRef(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We\'ll get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        service: 'default'
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }, 1000);
  };
  
  useEffect(() => {
    // Animate map pin
    if (mapRef.current) {
      gsap.to('.map-pin', {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }, []);
  
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              <SplitText delay={0.2}>Get in Touch</SplitText>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal animation="fade-right">
              <div className="bg-slate-800/50 p-8 md:p-12 rounded-2xl border border-slate-700/50">
                <h2 className="text-3xl font-semibold mb-8">Send Us a Message</h2>
                
                {formStatus.submitted && (
                  <div className={`mb-8 p-4 rounded-lg ${formStatus.success ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-slate-300 mb-2">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-300 mb-2">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-slate-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-slate-300 mb-2">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                    >
                      <option value="default">Select a service</option>
                      <option value="web-design">Web Design & Development</option>
                      <option value="branding">Brand Identity & Strategy</option>
                      <option value="marketing">Digital Marketing & SEO</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-slate-300 mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary group"
                  >
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </form>
              </div>
            </ScrollReveal>
            
            {/* Contact Info */}
            <ScrollReveal animation="fade-left">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mr-4">
                        <Mail size={24} className="text-indigo-400" />
                      </div>
                      <div>
                        <span className="block text-sm text-slate-400 mb-1">Email Us</span>
                        <a href="mailto:info@elite8digital.com" className="text-white hover:text-indigo-400 transition-colors">info@elite8digital.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mr-4">
                        <Phone size={24} className="text-indigo-400" />
                      </div>
                      <div>
                        <span className="block text-sm text-slate-400 mb-1">Call Us</span>
                        <a href="tel:+15551234567" className="text-white hover:text-indigo-400 transition-colors">+1 (555) 123-4567</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mr-4">
                        <MapPin size={24} className="text-indigo-400" />
                      </div>
                      <div>
                        <span className="block text-sm text-slate-400 mb-1">Visit Us</span>
                        <address className="text-white not-italic">
                          123 Creative Street<br />
                          San Francisco, CA 94103<br />
                          United States
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Office Hours */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Office Hours</h3>
                  <div className="space-y-3 text-slate-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div 
                  ref={mapRef}
                  className="relative h-80 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/60"></div>
                  
                  {/* Map content (placeholder) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="map-pin w-12 h-12 mx-auto bg-indigo-600/80 rounded-full flex items-center justify-center">
                        <MapPin size={24} className="text-white" />
                      </div>
                      <p className="mt-4 text-white font-medium">Elite8 Digital</p>
                      <p className="text-slate-400 text-sm">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="pb-24">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="mb-6">Frequently Asked Questions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-xl">
                Find answers to common questions about our services and process
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            <ScrollReveal animation="fade-up" delay={0.1}>
              <div>
                <h3 className="text-xl font-semibold mb-3">What services do you offer?</h3>
                <p className="text-slate-400">
                  We offer a comprehensive range of services including web design 
                  and development, brand identity and strategy, digital marketing, 
                  UI/UX design, e-commerce solutions, and content creation.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div>
                <h3 className="text-xl font-semibold mb-3">How much does a typical project cost?</h3>
                <p className="text-slate-400">
                  Project costs vary based on scope, complexity, and specific requirements. 
                  We provide detailed proposals after understanding your needs during an initial consultation.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.3}>
              <div>
                <h3 className="text-xl font-semibold mb-3">What is your project process?</h3>
                <p className="text-slate-400">
                  Our process typically includes discovery, planning, design, development, 
                  testing, and launch phases. We maintain clear communication throughout 
                  and involve clients at key decision points.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-3">How long does a project take?</h3>
                <p className="text-slate-400">
                  Project timelines depend on scope and complexity. A basic website might 
                  take 4-6 weeks, while more complex projects can take 3-6 months. We'll 
                  provide a timeline estimate during our initial consultation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;