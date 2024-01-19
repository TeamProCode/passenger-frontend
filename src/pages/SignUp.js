import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";

const Signup = ({ signup }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // store the form entries in a variable
    const formData = new FormData(formRef.current);
    // create an object from the entries
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    signup(userInfo);
    navigate("/");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', alignItems: 'center', margin: 0 }} >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{ maxWidth: "300px", margin: "0 auto" }}
      >
        <FormGroup className="new-destination-style">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        </FormGroup>
        
        <FormGroup className="new-destination-style">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        </FormGroup>

        <FormGroup className="new-destination-style">
        <label>Confirm Password:</label>
        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        </FormGroup>

        <input
          type="submit"
          value="Submit"
          style={{
            backgroundColor: "#195789",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
          }}
        />
      </form>

      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }} >
        Already registered? <a href="/login"> Login </a> here.
      </div>
    </div>
  );
};
export default Signup;
