import React, { useState } from 'react';
import ProductsPage from './Components/AllProducts';
import CartPage from './Components/Cart';
import AccountPage from './Components/Account';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    setCartItems([...cartItems, { ...item, id: cartItems.length + 1 }]);
  };

  const removeFromCart = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#28a745' }}>
          <div className="container">
            <Link className="navbar-brand" to="/">Bar Shop</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" style={{ color: '#FFF' }}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart" style={{ color: '#FFF' }}>Cart ({cartItems.length})</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/account" style={{ color: '#FFF' }}>My Account</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-5">
          <Routes>
            <Route exact path="/" element={<ProductsPage addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
