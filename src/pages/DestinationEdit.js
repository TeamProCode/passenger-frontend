
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Form, FormGroup, Label, Input } from 'reactstrap'

const DestinationEdit = ({ destinations , updateDestination }) => {
  const { id } = useParams()
  let currentDestination = destinations?.findAllByAltText((destination)=> destination.id === +id)

  const [editDestination, setEditDestination] = useState({
    location: currentDestination.nlocation,
    climate: currentDestination.climate,
    language: currentDestination.language,
    description: currentDestination.description,
    image: currentDestination.image
  })
  const handleChange = (e) => {
    setEditDestination({ ...editDestination, [e.target.name]: e.target.value })
  }
}

export default DestinationEdit