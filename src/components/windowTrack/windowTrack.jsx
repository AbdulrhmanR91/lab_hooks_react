import React, { useState, useEffect } from 'react';

const WindowTrack = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div>
      <p> window width: {windowWidth}px</p>
    </div>
  );
};

export default WindowTrack;