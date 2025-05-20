import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Star, Heart, Zap, Award } from "lucide-react";

import SplitText from "../animations/SplitText";
import ScrollReveal from "../components/ScrollReveal";
import ParallaxSection from "../components/ParallaxSection";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const teamRef = useRef(null);

  useEffect(() => {
    if (teamRef.current) {
      const teamCards = teamRef.current.querySelectorAll(".team-card");

      gsap.fromTo(
        teamCards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const team = [
    {
      name: "Alex Morgan",
      role: "Creative Director",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600",
      linkedin: "#",
    },
    {
      name: "Sophia Lee",
      role: "Lead Designer",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      linkedin: "#",
    },
    {
      name: "James Wilson",
      role: "Technical Director",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600",
      linkedin: "#",
    },
    {
      name: "Emma Chen",
      role: "Marketing Strategist",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
      linkedin: "#",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6">
              <SplitText delay={0.2}>
                We Create Digital Experiences That Matter
              </SplitText>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl">
              Elite8 Digital is a creative agency focused on delivering
              exceptional digital experiences that drive business growth and
              user engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div className="h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Our Team Collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <h2 className="text-4xl font-semibold mb-6">Our Story</h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                Founded in 2019, Elite8 Digital was born from a shared passion
                for creating digital experiences that blend creativity with
                functionality.
              </p>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Today, we're a diverse team of designers, developers,
                strategists, and creatives who are committed to pushing
                boundaries and delivering exceptional results.
              </p>
              <Link to="/contact" className="btn btn-primary group">
                Work With Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="pb-24 bg-slate-900/50">
        <div className="container-custom py-24">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="mb-6">Our Core Values</h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-xl">
                The principles that guide our work and define our culture
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger-children" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  Icon: Star,
                  title: "Excellence",
                  text: "We deliver exceptional quality in everything we do.",
                },
                {
                  Icon: Heart,
                  title: "Passion",
                  text: "We bring energy and dedication to every project.",
                },
                {
                  Icon: Zap,
                  title: "Innovation",
                  text: "We embrace creativity and emerging tech.",
                },
                {
                  Icon: Award,
                  title: "Integrity",
                  text: "We prioritize honest and ethical practices.",
                },
              ].map(({ Icon, title, text }, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={32} className="text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-24">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="mb-6">Meet Our Team</h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-xl">
                The creative minds behind our exceptional work
              </p>
            </div>
          </ScrollReveal>

          <div
            ref={teamRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <div key={index} className="team-card group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <a
                        href={member.linkedin}
                        className="w-full btn btn-primary text-center"
                      >
                        Connect
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-indigo-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <ParallaxSection className="section bg-slate-900 relative" speed={-0.05}>
        <div className="container-custom relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="bg-gradient-to-br from-indigo-900/70 to-slate-900 p-12 md:p-16 rounded-3xl border border-indigo-500/20 shadow-xl shadow-indigo-900/10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="mb-6">Ready to Bring Your Vision to Life?</h2>
                <p className="text-xl text-slate-300 mb-10">
                  Whether you have a specific project in mind or want to explore
                  how we can help your business grow, we'd love to hear from
                  you.
                </p>
                <Link
                  to="/contact"
                  className="btn btn-primary text-lg px-10 py-5"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl" />
        </div>
      </ParallaxSection>
    </div>
  );
};

export default About;
