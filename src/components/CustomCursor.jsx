import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRefs = [useRef(null), useRef(null), useRef(null)];
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('a, button, .magnetic');

    const onMouseMove = (e) => {
      cursorRefs.forEach((cursorRef, i) => {
        if (!cursorRef.current) return;

        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3 + i * 0.8, // Increased delay per layer (was 0.1)
          ease: 'elastic.out(1, 0.8),',
        });
      });
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    const magneticHandlers = new Map();

    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnter);
      link.addEventListener('mouseleave', onMouseLeave);

      if (link.classList.contains('magnetic')) {
        const moveHandler = (e) => {
          const bound = link.getBoundingClientRect();
          const strength = 0.3;
          const x = ((e.clientX - bound.left) / bound.width - 0.5) * bound.width * strength;
          const y = ((e.clientY - bound.top) / bound.height - 0.5) * bound.height * strength;

          gsap.to(link, { x, y, duration: 0.3, ease: 'power2.out' });
        };

        const leaveHandler = () => {
          gsap.to(link, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
        };

        magneticHandlers.set(link, { moveHandler, leaveHandler });

        link.addEventListener('mousemove', moveHandler);
        link.addEventListener('mouseleave', leaveHandler);
      }
    });

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);

      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnter);
        link.removeEventListener('mouseleave', onMouseLeave);

        if (link.classList.contains('magnetic')) {
          const { moveHandler, leaveHandler } = magneticHandlers.get(link) || {};
          if (moveHandler) link.removeEventListener('mousemove', moveHandler);
          if (leaveHandler) link.removeEventListener('mouseleave', leaveHandler);
        }
      });
    };
  }, []);

  const cursors = [
    { size: 20, opacity: 1, bg: '#fff', top: 0, left: 0 },
    { size: 40, opacity: 1, bg: '#4f46f2', top: -5, left: -5 },
    { size: 60, opacity: 1, bg: '#4f46e5', top: -10, left: -10 },
  ];

  return (
    <>
      {cursors.map(({ size, opacity, bg, top, left }, idx) => (
        <div
          key={idx}
          ref={cursorRefs[idx]}
          className={`custom-cursor ${isHovering ? 'hover' : ''}`}
          style={{
            pointerEvents: 'none',
            position: 'fixed',
            top: top,
            left: left,
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor: bg,
            mixBlendMode: 'difference',
            opacity: opacity,
            zIndex: 9999 - idx,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s ease',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
