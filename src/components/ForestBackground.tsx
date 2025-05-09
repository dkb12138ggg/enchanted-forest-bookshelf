
import React, { useEffect, useRef } from 'react';

const ForestBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create fireflies
    const container = containerRef.current;
    const numberOfFireflies = 15;
    
    // Clear existing fireflies (if any)
    const existingFireflies = container.querySelectorAll('.firefly');
    existingFireflies.forEach(firefly => firefly.remove());
    
    for (let i = 0; i < numberOfFireflies; i++) {
      const firefly = document.createElement('div');
      firefly.className = 'firefly';
      firefly.style.left = `${Math.random() * 100}%`;
      firefly.style.top = `${Math.random() * 100}%`;
      firefly.style.animationDelay = `${Math.random() * 15}s`;
      firefly.style.animationDuration = `${15 + Math.random() * 10}s`;
      
      container.appendChild(firefly);
    }
    
    return () => {
      // Clean up
      const fireflies = container.querySelectorAll('.firefly');
      fireflies.forEach(firefly => firefly.remove());
    };
  }, []);
  
  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-forest-dark bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZyBzdHJva2U9IiMyQTVEMzgiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMCAwTDEwMCAwTTAgMTBMMTAwIDEwTTAgMjBMMTAwIDIwTTAgMzBMMTAwIDMwTTAgNDBMMTAwIDQwTTAgNTBMMTAwIDUwTTAgNjBMMTAwIDYwTTAgNzBMMTAwIDcwTTAgODBMMTAwIDgwTTAgOTBMMTAwIDkwTTAgMEwwIDEwME0xMCAwTTEwIDEwME0yMCAwTTIwIDEwME0zMCAwTTMwIDEwME00MCAwTTQwIDEwME01MCAwTTUwIDEwME02MCAwTTYwIDEwME03MCAwTTcwIDEwME04MCAwTTgwIDEwME05MCAwTTkwIDEwME0xMDAgMEwxMDAgMTAwIi8+PC9nPjwvc3ZnPg==')]"></div>
      <div className="forest-mist animate-mist"></div>
      <div className="forest-mist animate-mist" style={{ animationDelay: '-10s' }}></div>
      <div className="magic-fx"></div>
      <div className="magic-glow animate-pulse"></div>
    </div>
  );
};

export default ForestBackground;
