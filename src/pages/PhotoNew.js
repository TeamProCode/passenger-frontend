import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate, useParams } from 'react-router-dom';

const PhotoNew = ({ destinations, createPhoto }) => {

  const { id } = useParams()
  let currentDestination = destinations?.find((destination) => destination.id === +id)

  const navigate = useNavigate();
  const [newPhoto, setNewPhoto] = useState({
    image: "",
    description: "",
    destination_id: currentDestination.id
  });

  const handleChange = (e) => {
    setNewPhoto({ ...newPhoto, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    createPhoto(newPhoto);
    navigate(`/destinationshow/${currentDestination.id}`);
  };

  const newPhotoStyle = {
    position: 'absolute',
    textAlign: 'center',
    marginTop: '2px',
    left: '0',
  };

  return (
    <div>
      <div style={newPhotoStyle}>
      </div>
      <div className='photo-flex'>
        <Form>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input role="textbox-image" type="img" id="image" onChange={handleChange} value={newPhoto.image} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input role="textbox-description" type="text" id="description" onChange={handleChange} value={newPhoto.description} />
          </FormGroup>
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default PhotoNew;
