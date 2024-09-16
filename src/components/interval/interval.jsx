import React, { useState, useEffect } from "react";
import '../products/counter.css';

const CounterInterval = () => {
  const [count, setQuantity] = useState(0);

  useEffect(() => {
   
    const intervalId = setInterval(() => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }, 1000);


    return () => {
        clearInterval(intervalId);
    };
  }, []); 


  return (
    <div className="container">
      <span className="quantity">{count}</span>
    </div>
  );
};

export default CounterInterval;
