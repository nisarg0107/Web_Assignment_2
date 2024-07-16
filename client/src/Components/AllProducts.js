import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardImg, CardTitle, Button, Input, CardText } from 'reactstrap';
import './AllProducts.css';

const AllProducts = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleQuantityChange = (id, value) => {
    setQuantity({ ...quantity, [id]: value });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product._id}>
            <Card className="product-card shadow-sm border-0 h-100">
              <CardImg top width="100%" src={product.image} alt={product.name} className="card-img-top" />
              <CardBody className="d-flex flex-column">
                <CardTitle tag="h5" className="text-primary">{product.name}</CardTitle>
                <CardText className="flex-grow-1">{product.description}</CardText>
                <div className="mb-3">
                  <strong className="text-secondary">${product.pricing.toFixed(2)}</strong>
                </div>
                <Input type="number" value={quantity[product._id] || 1} onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value, 10))} className="mb-3 rounded-pill" />
                <Button color="success" onClick={() => addToCart({ ...product, quantity: quantity[product._id] || 1 })} className="mt-auto rounded-pill">Add to Cart</Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
