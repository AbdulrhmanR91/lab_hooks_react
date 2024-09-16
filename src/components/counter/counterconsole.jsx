import React, { useState, useEffect } from "react";
import '../products/counter.css';

const Counterconsole = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };


  useEffect(() => {
    console.log(`The counter value is now ${quantity}`);
  }, [quantity]); 

  return (
    <div className="container">
      <span className="quantity">{quantity}</span>
      <button className="increment" onClick={increment}> + </button>
    </div>
  );
};

export default Counterconsole;
