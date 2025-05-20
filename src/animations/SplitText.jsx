import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SplitText = ({ children, className, type = 'chars', delay = 0, stagger = 0.03 }) => {
  const textRef = useRef(null);
  
  useEffect(() => {
    if (!textRef.current) return;
    
    let chars;
    const element = textRef.current;
    
    // Split text into individual characters
    if (type === 'chars') {
      const text = element.textContent;
      element.textContent = ''; // Clear the element
      
      const spans = text.split('').map(char => {
        const span = document.createElement('span');
        span.className = 'split-text-char inline-block opacity-0 translate-y-8';
        span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spaces
        return span;
      });
      
      spans.forEach(span => element.appendChild(span));
      chars = spans;
    } else if (type === 'words') {
      const text = element.textContent;
      element.textContent = ''; // Clear the element
      
      const spans = text.split(' ').map(word => {
        const span = document.createElement('span');
        span.className = 'split-text-char inline-block opacity-0 translate-y-8';
        span.textContent = word;
        return span;
      });
      
      spans.forEach((span, i) => {
        element.appendChild(span);
        if (i < spans.length - 1) {
          element.appendChild(document.createTextNode(' '));
        }
      });
      chars = spans;
    }
    
    // Animate the characters
    gsap.to(chars, {
      duration: 0.8,
      opacity: 1,
      y: 0,
      stagger: stagger,
      ease: 'power3.out',
      delay: delay
    });
    
    return () => {
      // Cleanup animation on unmount
      gsap.killTweensOf(chars);
    };
  }, [children, type, delay, stagger]);
  
  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
};

export default SplitText;