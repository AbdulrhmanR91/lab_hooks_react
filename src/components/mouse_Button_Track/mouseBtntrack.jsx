import React, { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="p-4 bg-green-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-2">Mouse Tracker</h2>
      <p className="text-xl">Mouse position: ({mousePosition.x}, {mousePosition.y})</p>
      <p className="text-xl mt-2">Button click count: {clickCount}</p>
      <button 
        onClick={handleButtonClick}
      >
        Click
      </button>
    </div>
  );
};

export default MouseTracker;