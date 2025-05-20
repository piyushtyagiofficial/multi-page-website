import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ParallaxSection = ({ 
  children, 
  className = '', 
  speed = .8, 
  direction = 'vertical' 
}) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const section = sectionRef.current;
    const content = contentRef.current;

    // Create quickTo setter for smooth updating
    animationRef.current = direction === 'vertical' 
      ? gsap.quickTo(content, 'y', { duration: 0.5, ease: 'power1.out' }) 
      : gsap.quickTo(content, 'x', { duration: 0.5, ease: 'power1.out' });

    const handleParallax = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const sectionTop = section.getBoundingClientRect().top + scrollPosition;
          const offset = scrollPosition - sectionTop;

          const value = offset * speed;
          animationRef.current(value);

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleParallax);

    // Initial call to position content
    handleParallax();

    return () => {
      window.removeEventListener('scroll', handleParallax);
      if (animationRef.current?.kill) {
        animationRef.current.kill();
      }
    };
  }, [speed, direction]);

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div ref={contentRef} className="relative will-change-transform">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
