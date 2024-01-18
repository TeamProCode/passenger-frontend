
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, FormGroup, Input, Label, Button} from "reactstrap"

const DestinationEdit = ({ destinations, updateDestination, currentUser }) => {
  const { id } = useParams()
  let currentDestination = destinations?.find((destination) => destination.id === +id)

  const [editDestination, setEditDestination] = useState({
    location: currentDestination.location,
    climate: currentDestination.climate,
    local_language: currentDestination.local_language,
    description: currentDestination.description,
    image: currentDestination.image,
    destination_id: currentDestination.id,
    user_id: currentUser.id
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
    <Input type="text"  id="location" name="location" onChange={handleChange} value={editDestination.location}/>
  </FormGroup>
  <FormGroup>
    <Label for="climate">Climate</Label>
    <Input type="text" id="climate" name="climate" onChange={handleChange}value={editDestination.climate}/>
  </FormGroup>
  <FormGroup>
    <Label for="local_language">Language</Label>
    <Input type="text" id="local_language" name="local_langauge" onChange={handleChange}value={editDestination.local_language}/>
  </FormGroup>
  <FormGroup>
    <Label for="description">Description</Label>
    <Input type="text" id="description" name="description" onChange={handleChange}value={editDestination.description}/>
  </FormGroup>
  <FormGroup>
    <Label for="image">Image</Label>
    <Input type="img" id="image" name="image" onChange={handleChange}value={editDestination.image}/>
  </FormGroup>
</Form>
  <Button onClick={handleSubmit} id="submit">
  Submit Destination Update
</Button>
</div>
  )
}

export default DestinationEdit