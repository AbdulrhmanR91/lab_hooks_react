import React, { useState } from "react";
import Counter from './counter';
import { products } from "../../ProductData";
import './product.css';

const Products = () => {
  const [productslist, setProductslist] = useState(products);

  const addNewProduct = () => {
    const newProduct = {
      id: productslist.length + 1,
      name: "New Product",
      description: " ",
      img:"",
      price: 100 + productslist.length * 10,
    };

    setProductslist([...productslist, newProduct]); 
  };

  return (
    <div className="productsContainer">
      <button onClick={addNewProduct} className="addProductButton">
        Add New Product
      </button>

      {productslist.map((product) => (
        <div key={product.id} className="productConainer">
          <img src={product.img} alt={product.name} className="productImage" />
          <h2 className="productName">{product.name}</h2>
          <p className="productDescription">{product.description}</p>
          <p className="productPrice">${product.price}</p>

          <div className="counterContainer">
            <Counter />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
