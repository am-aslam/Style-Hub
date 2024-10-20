import React, { createContext, useState } from 'react';

// Create the context
export const CardContext = createContext();

// Create a provider component
export const CardProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState([]);

  const addToCard = (product) => {
    setCardItems((prevItems) => {
      // Check if the product is already in the cart
      if (prevItems.find(item => item.id === product.id)) {
        return prevItems; // If it's already there, return the current state
      }
      return [...prevItems, product]; // Add the product if it's not already in the cart
    });
  };

  return (
    <CardContext.Provider value={{ cardItems, addToCard }}>
      {children}
    </CardContext.Provider>
  );
};


export default CardProvider;