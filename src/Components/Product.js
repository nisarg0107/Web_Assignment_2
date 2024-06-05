
import React from 'react';
import { Card, Button } from 'reactstrap';

const Product = ({ id, name, description, image, price, addToCart }) => {
  return (
    <Card className="product-card shadow border-0 rounded overflow-hidden">
      <img src={image} alt={name} className="product-img img-fluid mx-auto d-block" style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column justify-content-between bg-light p-4">
        <div>
          <h5 className="card-title text-primary">{name}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <p className="card-text text-dark font-weight-bold">${price}</p>
          <Button color="success" onClick={() => addToCart({ id, name, image, price })} className="btn-sm">Add to Cart</Button>
        </div>
      </div>
    </Card>
  );
};

export default Product;