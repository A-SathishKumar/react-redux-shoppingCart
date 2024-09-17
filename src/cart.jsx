import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, removeProduct, calculateTotals } from './cartslice.js';
import './App.css';  // Import the CSS file

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [items, dispatch]);

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleRemoveProduct = (item) => {
    dispatch(removeProduct(item));
  };

  return (
    <div className="main-container">
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {items.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <div className="item-details">
              <h4>{item.title}</h4>
              <p><strong>Description:</strong> {item.description}</p>
              <p><strong>Rating:</strong> {item.rating} / 5</p>
              <p><strong>Price:</strong> ${item.price}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => handleRemove(item)}>-</button>
              <span className="quantity">{item.quantity}</span>
              <button onClick={() => handleAdd(item)}>+</button>
            </div>
            <button className="remove-button" onClick={() => handleRemoveProduct(item)}>Remove</button>
          </div>
        ))}
        <div className="cart-total">
          <h3>Total Quantity: {totalQuantity}</h3>
          <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
