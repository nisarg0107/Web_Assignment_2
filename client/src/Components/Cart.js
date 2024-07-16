import React, { useState } from 'react';

const CartPage = ({ cartItems, removeFromCart }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCheckout = () => {
    setShowMessage(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="my-4">Your Cart</h2>
      <div className="row">
        <div className="col-md-8">
          <ul className="list-group">
            {cartItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
                  <span>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</span>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <hr />
              <p>Total Items: {cartItems.length}</p>
              <p>Total Price: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
              <button color='#28a745' onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
      {showMessage && <p className="mt-3">Thank you for your purchase!</p>}
    </div>
  );
};

export default CartPage;
