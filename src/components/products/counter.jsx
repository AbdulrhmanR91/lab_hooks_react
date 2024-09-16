import React, { useState } from "react";
import '../products/counter.css';

const Counter = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="container">
      <button className="decrement" onClick={decrement}> - </button>
      <span className="quantity">{quantity}</span>
      <button className="increment" onClick={increment}> + </button>
    </div>
  );
};

export default Counter;
