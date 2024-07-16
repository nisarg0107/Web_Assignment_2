import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';

const AccountPage = () => {
  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  });

  const [showForm, setShowForm] = useState(true);
  const [confirmation, setConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Are you sure you want to save?");
    if (confirmed) {
      setConfirmation(true);
      setShowForm(false);
    }
  };

  const handleEdit = () => {
    setShowForm(true);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card className="shadow border-0">
            <CardBody>
              <CardTitle tag="h5" className="text-center mb-4">My Account</CardTitle>
              {showForm ? (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" id="firstName" name="firstName" value={shippingAddress.firstName} onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" id="lastName" name="lastName" value={shippingAddress.lastName} onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="addressLine1">Address Line 1</Label>
                    <Input type="text" id="addressLine1" name="addressLine1" value={shippingAddress.addressLine1} onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="addressLine2">Address Line 2</Label>
                    <Input type="text" id="addressLine2" name="addressLine2" value={shippingAddress.addressLine2} onChange={handleChange} />
                  </FormGroup>
                  <FormGroup row>
                    <Label for="city" sm={2}>City</Label>
                    <Input type="text" id="city" name="city" value={shippingAddress.city} onChange={handleChange} required />
                    <Label for="state" sm={2}>State</Label>
                    <Input type="text" id="state" name="state" value={shippingAddress.state} onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup row>
                    <Label for="postalCode" sm={2}>Postal Code</Label>
                    <Input type="text" id="postalCode" name="postalCode" value={shippingAddress.postalCode} onChange={handleChange} required />
                    <Label for="country" sm={2}>Country</Label>
                    <Input type="text" id="country" name="country" value={shippingAddress.country} onChange={handleChange} required />
                  </FormGroup>
                  <Button type="submit" color="success" className="mx-auto d-block">Save</Button>
                </Form>
              ) : (
                <div className="text-muted">
                  <p><strong>First Name:</strong> {shippingAddress.firstName}</p>
                  <p><strong>Last Name:</strong> {shippingAddress.lastName}</p>
                  <p><strong>Address Line 1:</strong> {shippingAddress.addressLine1}</p>
                  <p><strong>Address Line 2:</strong> {shippingAddress.addressLine2}</p>
                  <p><strong>City:</strong> {shippingAddress.city}</p>
                  <p><strong>State:</strong> {shippingAddress.state}</p>
                  <p><strong>Postal Code:</strong> {shippingAddress.postalCode}</p>
                  <p><strong>Country:</strong> {shippingAddress.country}</p>
                </div>
              )}
              {!showForm && (
                <Button color="success" className="mt-3 float-right" onClick={handleEdit}>Edit</Button>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
