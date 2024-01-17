import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';


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
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // store the form entries in a variable
    const formData = new FormData(formRef.current)
    // create an object from the entries
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password },
    }
    signup(userInfo)
    navigate("/")
  } 
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email" />
        <br />
        Password:{" "}
        <input type="password" name="password" placeholder="password" />
        <br />
        Confirm Password:{" "}
        <input
          type="password"
          name="password_confirmation"
          placeholder="confirm password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        Already registered, <a href="/login">Login</a> here.
      </div>
    </div>
  )
}
export default Signup
