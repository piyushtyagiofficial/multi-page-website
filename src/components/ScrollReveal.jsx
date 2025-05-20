import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ 
  children, 
  className = '', 
  animation = 'fade-up', 
  delay = 0,
  duration = 1,
  threshold = 0.1,
  stagger = 0.1 
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    let animationProps = {};
    
    // Set initial state based on animation type
    switch (animation) {
      case 'fade-up':
        gsap.set(element, { y: 50, opacity: 0 });
        animationProps = { y: 0, opacity: 1 };
        break;
      case 'fade-down':
        gsap.set(element, { y: -50, opacity: 0 });
        animationProps = { y: 0, opacity: 1 };
        break;
      case 'fade-left':
        gsap.set(element, { x: -50, opacity: 0 });
        animationProps = { x: 0, opacity: 1 };
        break;
      case 'fade-right':
        gsap.set(element, { x: 50, opacity: 0 });
        animationProps = { x: 0, opacity: 1 };
        break;
      case 'zoom-in':
        gsap.set(element, { scale: 0.9, opacity: 0 });
        animationProps = { scale: 1, opacity: 1 };
        break;
      case 'zoom-out':
        gsap.set(element, { scale: 1.1, opacity: 0 });
        animationProps = { scale: 1, opacity: 1 };
        break;
      case 'stagger-children':
        // For staggered children animations
        const children = element.children;
        gsap.set(children, { y: 30, opacity: 0 });
        animationProps = { y: 0, opacity: 1, stagger: stagger };
        break;
      default:
        gsap.set(element, { opacity: 0 });
        animationProps = { opacity: 1 };
    }
    
    // Create the scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        toggleActions: 'play none none none'
      }
    });
    
    if (animation === 'stagger-children') {
      tl.to(element.children, {
        ...animationProps,
        duration,
        ease: 'power3.out',
        delay
      });
    } else {
      tl.to(element, {
        ...animationProps,
        duration,
        ease: 'power3.out',
        delay
      });
    }
    
    // Cleanup
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [animation, delay, duration, threshold, stagger]);
  
  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;