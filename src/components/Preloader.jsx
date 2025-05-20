import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const loaderRef = useRef(null);
  const percentageRef = useRef(null);
  const progressBarRef = useRef(null);
  
  useEffect(() => {
    const loader = loaderRef.current;
    const percentage = percentageRef.current;
    const progressBar = progressBarRef.current;
    
    // Animate the loader
    let count = { value: 0 };
    
    gsap.to(count, {
      value: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        const currentValue = Math.floor(count.value);
        percentage.textContent = `${currentValue}%`;
        gsap.to(progressBar, {
          width: `${currentValue}%`,
          duration: 0.1,
          ease: 'none'
        });
      }
    });
    
    // Text reveal animation
    gsap.set('.preloader-title span', { 
      y: 100, 
      opacity: 0 
    });
    
    gsap.to('.preloader-title span', {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 1,
      ease: 'back.out'
    });
  }, []);
  
  return (
    <div ref={loaderRef} className="preloader fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-[9999]">
      <h1 className="preloader-title mb-16 overflow-hidden">
        {Array.from('ELITE8.DIGITAL').map((char, index) => (
          <span key={index} className="inline-block transform">
            {char === '.' ? <span className="text-indigo-600">.</span> : char}
          </span>
        ))}
      </h1>
      
      <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div 
          ref={progressBarRef}
          className="h-full bg-indigo-600 rounded-full" 
          style={{ width: '0%' }}
        ></div>
      </div>
      
      <div ref={percentageRef} className="text-xl mt-4 font-light">0%</div>
    </div>
  );
};

export default Preloader;