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

// const SignUp = ({ signup }) => {
//     const formRef = useRef()
//     const navigate = useNavigate()
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const toggleModal = () => {
//         setIsModalOpen(!isModalOpen);
//       };

//     const handleSignUp = (e) => {
//     // Handle sign-up
//         e.preventDefault()
//         const formData = new FormData(formRef.current)
//         const data = Object.fromEntries(formData)
//         const userInfo = {
//             user:{ email: data.email, password: data.password }
//         }
//         signup(userInfo)
//         navigate("/destinationindex")
//         console.log('Signing up');
//         // Close the modal after successfully creating an account
//     }

//     return (
//         <>
//     <form ref={formRef} onSubmit={handleSignUp}>
//         <FormGroup>
//         <Label for="email">Email</Label>
//         <input type="email" name="email" />
//         </FormGroup>
//         <FormGroup>
//         <Label for="new-password">Password</Label>
//         <input type="password" name="password" />
//         </FormGroup>
//     </form>
//     <Button onClick={handleSignUp} style={{ backgroundColor: '#195789'}} >Create Account</Button>{' '}
//     <Button color="secondary" onClick={toggleModal}>Cancel</Button>
//     </>
//     )
// }

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
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{ maxWidth: "300px", margin: "0 auto" }}
      >
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          style={{ width: "100%", marginBottom: "10px" }}
        />

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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        Already registered, <a href="/login">Login</a> here.
      </div>
    </div>
  );
};
export default Signup;
