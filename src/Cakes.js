import React, { useState } from 'react';
import './index.css';

export default function Cakes() {
  const [cartItems, setCartItems] = useState([]);

  const Products = [
    {
      name: "Chocolate Cake",
      description: "Melting Chocolate Cake",
      price: 599,
      src: './pictures/img1.jpg',
    },
    {
      name: "Vanilla Cake",
      description: "Fresh vanilla cake ",
      price: 499,
      src: './pictures/img2.jpg',
    },
    {
      name: "Rainbow cake",
      description: "Fresh Rain bow cake",
      price: 499,
      src: './pictures/img3.jpg',
    },
    {
      name: "White Forest cake",
      description: "Eggless white forest cake",
      price: 599,
      src: './pictures/img4.jpg',
    },
    {
      name: "Pink cake",
      description: "80 Rose Pink Strawberry",
      price: 599,
      src: './pictures/img5.jpg',
    },
    {
      name: "Black Forest",
      description: "Fresh Black Forest",
      price: 699,
      src: './pictures/img6.jpg',
    },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className='Main'>
      {Products.map((product, index) => (
        <div key={index} className='Cakes'>
          <div><img width="180px" height="170px" src={product.src} alt='images' /></div>
          <div><b>{product.name}</b></div>
          <div><i>{product.description}</i></div>
          <div>{product.price}.Rs</div>
          <div><button onClick={() => addToCart(product)}>Add</button></div>
        </div>
      ))}
    </div>
  );
}
