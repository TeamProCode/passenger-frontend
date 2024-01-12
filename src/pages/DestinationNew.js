import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import NewDestination from "/Users/learnacademy/Desktop/passenger-frontend/src/assests/NewDestination.svg";

const DestinationNew = ({ createDestination }) => {
  const navigate = useNavigate();
  const [newDestination, setNewDestination] = useState({
    location: "",
    climate: "",
    language: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewDestination({ ...newDestination, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    createDestination(newDestination);
    navigate("/destinationindex");
  };

  const newDestStyle = {
    position: 'absolute',
    textAlign: 'center',
    marginTop: '2px',
    left: '0',
  };

  return (
    <div>
      <div style={newDestStyle}>
        <img
          alt="New Destination"
          src={NewDestination}
          width={480}
          height={80}
        />
      </div>
      <div className='destination-flex'>
        <Form>
          <FormGroup>
            <Label for="location">Location</Label>
            <Input role="textbox-location" type="text" id="location" onChange={handleChange} value={newDestination.location} />
          </FormGroup>
          <FormGroup>
            <Label for="climate">Climate</Label>
            <Input role="textbox-climate" type="text" id="climate" onChange={handleChange} value={newDestination.climate} />
          </FormGroup>
          <FormGroup>
            <Label for="language">Language</Label>
            <Input role="textbox-language" type="text" id="language" onChange={handleChange} value={newDestination.language} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input role="textbox-description" type="text" id="description" onChange={handleChange} value={newDestination.description} />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input role="textbox-image" type="img" id="image" onChange={handleChange} value={newDestination.image} />
          </FormGroup>
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default DestinationNew;
