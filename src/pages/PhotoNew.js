import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';

const PhotoNew = ({ createPhoto }) => {
  const navigate = useNavigate();
  const [newPhoto, setNewPhoto] = useState({
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewPhoto({ ...newPhoto, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    createPhoto(newPhoto);
    navigate("/destinationshow");
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
