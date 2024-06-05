import React, { useState } from 'react';
import { Card, CardBody, CardImg, CardTitle, Button, Input, CardText } from 'reactstrap';
import image1 from '../Images/redlabel2.jpg';
import image2 from '../Images/ballantine.jpg';
import image3 from '../Images/jd.jpg';
import image4 from '../Images/cr.jpg';
import image5 from '../Images/bl.jpg';
import './AllProducts.css';

const products = [
  { id: 1, name: 'RedLabel', description: 'RedLabel 10 years old', image: image1 , price: 42.36 },
  { id: 2, name: 'Ballantine', description: 'Ballantine 12 years old', image: image2, price: 39.64 },
  { id: 3, name: 'Jack Daniel', description: 'Jack Daniel 8 years old', image: image3, price: 35.79 },
  { id: 4, name: 'Chivas Regal', description: 'Chivas Regal 18 years old', image: image4, price: 60.21 },
  { id: 5, name: 'Black Label', description: 'Black Label 5 years old', image: image5, price: 154.32 },
];

const AllProducts = ({ addToCart }) => {
  const [quantity, setQuantity] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantity({ ...quantity, [id]: value });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Card className="product-card shadow-sm border-0 h-100">
              <CardImg top width="100%" src={product.image} alt={product.name} className="card-img-top" />
              <CardBody className="d-flex flex-column">
                <CardTitle tag="h5" className="text-primary">{product.name}</CardTitle>
                <CardText className="flex-grow-1">{product.description}</CardText>
                <div className="mb-3">
                  <strong className="text-secondary">${product.price.toFixed(2)}</strong>
                </div>
                <Input type="number" value={quantity[product.id] || 1} onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))} className="mb-3 rounded-pill" />
                <Button color="success" onClick={() => addToCart({ ...product, quantity: quantity[product.id] || 1 })} className="mt-auto rounded-pill">Add to Cart</Button> 
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
