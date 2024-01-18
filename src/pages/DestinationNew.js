import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import NewDestination from "../assests/NewDestination.svg";
import backgroundPicture from "../assests/homeBg.png";

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

  const backgroundStyle = {
    backgroundImage: `url(${backgroundPicture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '65vh',
    position: 'relative',
  };

  const newDestStyle = {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
      <div className="homeflex">
        <div style={backgroundStyle}>
          <div style={newDestStyle}>
            <img
            alt="New Destination"
            src={NewDestination}
            width={480}
            height={80}
            />
          </div>
      </div>
      
      <div className='destination-flex'>
        <Form>
          <FormGroup className="new-destination-style">
            <Label for="location">Location</Label>
            <Input role="textbox-location" type="text" id="location" onChange={handleChange} value={newDestination.location} />
          </FormGroup>
          <FormGroup className="new-destination-style">
            <Label for="climate">Climate</Label>
            <Input role="textbox-climate" type="text" id="climate" onChange={handleChange} value={newDestination.climate} />
          </FormGroup>
          <FormGroup className="new-destination-style">
            <Label for="language">Language</Label>
            <Input role="textbox-language" type="text" id="language" onChange={handleChange} value={newDestination.language} />
          </FormGroup>
          <FormGroup className="new-destination-style">
            <Label for="description">Description</Label>
            <Input role="textbox-description" type="text" id="description" onChange={handleChange} value={newDestination.description} />
          </FormGroup>
          <FormGroup className="new-destination-style">
            <Label for="image">Image</Label>
            <Input role="textbox-image" type="text" id="image" onChange={handleChange} value={newDestination.image} />
          </FormGroup>
          <Button onClick={handleSubmit} style={{ backgroundColor: '#195789' }}>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default DestinationNew;
