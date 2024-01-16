
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, FormGroup, Input, Label, Button} from "reactstrap"

const DestinationEdit = ({ destinations, updateDestination }) => {
  const { id } = useParams()
  let currentDestination = destinations?.find((destination) => destination.id === +id)

  const [editDestination, setEditDestination] = useState({
    location: currentDestination.location,
    climate: currentDestination.climate,
    language: currentDestination.language,
    description: currentDestination.description,
    image: currentDestination.image
  })
  const handleChange = (e) => {
    setEditDestination({ ...editDestination, [e.target.id]: e.target.value })
  }
  // const handleSubmit = () => {
  //   updateDestination(editDestination, currentDestination.id)
  // }
  const navigate = useNavigate()
const handleSubmit = () => {
  updateDestination(editDestination, currentDestination.id)
  navigate(`/destinationshow/${currentDestination.id}`);
}
  return(
  <div>
  <Form>
  <FormGroup>
    <Label for="location">Location</Label>
    <Input type="text"  id="location" onChange={handleChange} value={editDestination.location}/>
  </FormGroup>
  <FormGroup>
    <Label for="climate">Climate</Label>
    <Input type="text" id="climate" onChange={handleChange}value={editDestination.climate}/>
  </FormGroup>
  <FormGroup>
    <Label for="language">Language</Label>
    <Input type="text" id="language" onChange={handleChange}value={editDestination.language}/>
  </FormGroup>
  <FormGroup>
    <Label for="description">Description</Label>
    <Input type="text" id="description" onChange={handleChange}value={editDestination.description}/>
  </FormGroup>
  <FormGroup>
    <Label for="image">Image</Label>
    <Input type="img" id="image" onChange={handleChange}value={editDestination.image}/>
  </FormGroup>
</Form>
  <Button onClick={handleSubmit} id="submit">
  Submit Destination Update
</Button>
</div>
  )
}

export default DestinationEdit