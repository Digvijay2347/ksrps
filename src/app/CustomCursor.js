import React, { useState, useEffect } from 'react';

function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const scrollX = document.documentElement.scrollLeft;
      const scrollY = document.documentElement.scrollTop;
      setMouse({
        x: event.clientX + scrollX,
        y: event.clientY + scrollY,
      });
    };
  
    document.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{
        left: `${mouse.x}px`,
        top: `${mouse.y}px`,
        transform: isStuck? 'translate(-50%, -50%) scale(2)' : 'translate(-50%, -50%)',
      }}
    >
      <div className="cursor-inner" />
    </div>
  );
}

export default CustomCursor;