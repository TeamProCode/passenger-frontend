import React, { useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { Form, FormGroup, Input, Label, Button} from "reactstrap"

const PhotoEdit = ({ destinations, photos, updatePhoto, deletePhoto }) => {
  const { destinationId, photoId } = useParams()
  let currentDestination = destinations?.find((destination) => destination.id === +destinationId)
    console.log(currentDestination)
  let currentPhoto = photos?.find((photo) => photo.id === +photoId)
  
  console.log("photoid:", photoId)
  console.log("destinationid:", destinationId)
  
  const [editPhoto, setEditPhoto] = useState({
    image: currentPhoto.image,
    description: currentPhoto.description,
    destination_id: currentDestination.destinationId
  })
  const handleChange = (e) => {
    setEditPhoto({ ...editPhoto, [e.target.id]: e.target.value })
  }
const navigate = useNavigate()
const handleSubmit = () => {
  updatePhoto(editPhoto, currentPhoto.id)
  navigate(`/destinationshow/${currentDestination.id}`)
}
const handleDelete = () => { 
  deletePhoto(currentPhoto, photoId)
  navigate(`/destinationshow/${currentDestination.id}`)
}
  return (
        <div>
        <Form>
        <FormGroup>
          <Label for="image"> Image </Label>
          <Input type="img" id="image" onChange={handleChange} value={editPhoto.image}/>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="text" id="description" onChange={handleChange}value={editPhoto.description}/>
        </FormGroup>
        </Form>
        <Button onClick={handleSubmit} id="submit">
        Submit Updated Photo
      </Button>
        <Button onClick={handleDelete} id="delete">
        Delete This Photo
      </Button>
      </div>
        )
      }
      
export default PhotoEdit