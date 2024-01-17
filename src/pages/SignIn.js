import React, { useState, useRef } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import backgroundPicture from "../assests/homeBg.png";
import Sign from "../assests/Sign.svg";
import { useNavigate } from 'react-router-dom';

const SignIn = ({signup}) => {
  const formRef = useRef()
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.id]: e.target.value });
  };

  const handleSignIn = () => {
    navigate("/destinationindex")
    console.log('Signing in:', signInData);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const navigate = useNavigate()
  const handleSignUp = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = { 
      "user":{email: data.email, password: data.passowrd}
    }
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
      <Form className="sign-form">
        <FormGroup className="new-destination-style">
          <Label for="email">Email</Label>
          <Input type="email" id="email" onChange={handleChange} value={signInData.email} />
        </FormGroup>
        <FormGroup className="new-destination-style">
          <Label for="password">Password</Label>
          <Input type="password" id="password" onChange={handleChange} value={signInData.password} />
        </FormGroup>
        <div className="button-container"> {/* Container for both buttons */}
          <Button ref={formRef} onClick={handleSignIn} style={{ backgroundColor: '#B6706E', marginBottom: '10px' }}>Login</Button>
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
          <Button onClick={handleSignUp} style={{ backgroundColor: '#195789'}} >Create Account</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    </div>
  );
};


export default SignIn;
