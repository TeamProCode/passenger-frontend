import React, { useState, useRef } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import backgroundPicture from "../assests/homeBg.png";
import Sign from "../assests/Sign.svg";
import { useNavigate } from 'react-router-dom';

const SignIn = ({ login }) => {
  const formRef = useRef()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const navigate = useNavigate()
  const handleSignIn = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = { 
      user:{ email: data.email, password: data.passowrd }
    }
    login(userInfo)
    navigate("/destinationindex")
    toggleModal();
  }

  const backgroundStyle = {
    backgroundImage: `url(${backgroundPicture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '65vh',
    position: 'relative',
  };

  const newSignStyle = {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    
    <div className="homeflex">
        <div style={backgroundStyle}>
          <div style={newSignStyle}>
            <img
            alt="Sign-In/Sign-Up"
            src={Sign}
            width={480}
            height={80}
            />
          </div>
      </div>
    <div className="sign-flex">
      <Form ref={formRef} onSubmit={handleSignIn} className="sign-form">
        <FormGroup className="new-destination-style">
          <Label for="email">Email</Label>
          <Input type="email" name="email" />
        </FormGroup>
        <FormGroup className="new-destination-style">
          <Label for="password">Password</Label>
          <Input type="password" name="password" />
        </FormGroup>
        <div className="button-container"> {/* Container for both buttons */}
          <Input type="submit" value="login" style={{ backgroundColor: '#B6706E', marginBottom: '10px' }}>Login</Input>
          <Button color="info" onClick={toggleModal} style={{ backgroundColor: '#195789', outline: 'none' }}>Create an Account</Button>
        </div>
      </Form>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Sign Up</ModalHeader>
        <ModalBody>
          {/* Sign-up form fields */}
          <Form>
            <FormGroup>
              <Label for="newEmail">Email</Label>
              <Input type="email" id="newEmail" />
            </FormGroup>
            <FormGroup>
              <Label for="newPassword">Password</Label>
              <Input type="password" id="newPassword" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSignIn} style={{ backgroundColor: '#195789'}} >Create Account</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    </div>
  );
};


export default SignIn;
