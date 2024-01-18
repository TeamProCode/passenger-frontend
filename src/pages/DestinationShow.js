import React from 'react';
import { useParams, NavLink } from "react-router-dom"
import { Button } from 'reactstrap'


const DestinationShow = ({ destinations, photos, deleteDestination }) => {
  const { id } = useParams()
  let currentPhotos = photos.filter((photo) => photo.destination_id === +id)
  let currentDestination = destinations.find((destination) => destination.id === +id)
  // let currentPhoto =  currentPhotos.find((photo) => photo.id === +{photoID})

  const displayPhotos = (array) => {
    return (array.map((object) => {
      return object
    }))
  }

  const handleDelete = () => {
    deleteDestination(currentDestination.id)
  }

  // console.log((currentPhotos))
  console.log((destinations))
  console.log((currentPhotos))

return (
<main className="show-flex">
  {currentDestination && (
    <>
      <img
        alt={`profile of a Destination named ${currentDestination.location}`}
        src={currentDestination.image}
        className="Destination-show-img"
        role="main-destination-image"
        style={{ width: "600px", height: "auto", marginTop: '80px', marginBottom: '20px' }}
      />
      <div className="border-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <p>Location: {currentDestination.location}</p>
        <p>Climate: {currentDestination.climate}</p>
        <p>Language: {currentDestination.local_language}</p>
        <p>Description: {currentDestination.description}</p>
        <NavLink to={`/destinationedit/${currentDestination.id}`} className="nav-link">
          <Button style={{ backgroundColor: '#B6706E', marginBottom: '10px' }}>
            Edit Destination
          </Button>
        </NavLink>
        <NavLink to={'/destinationindex'} className="nav-link">
          <Button onClick={handleDelete} style={{ backgroundColor: '#195789' }} >
            Remove This Destination
          </Button>
        </NavLink>
      </div>

      {displayPhotos(currentPhotos).map((photoObject, index) => {
        return (
          <div key={index} className="text-center">
            <img role="photo-data" src={photoObject.image} alt={photoObject.alt} style={{ width: "600px", height: "auto", marginTop: '80px' }} />
            <p>{photoObject.description}</p>
            <NavLink to={`photoedit/${photoObject.id}`} className="nav-link">
              <Button style={{ backgroundColor: '#B6706E', marginBottom: '10px' }}>
                Edit Photo
              </Button>
            </NavLink>
          </div>
        );
      })}
      <NavLink to={`/destinationshow/${id}/photonew`}>
        <Button style={{ backgroundColor: '#195789' }} > Add Photos </Button>
      </NavLink>
    </>
  )}
</main>
 )
}

export default DestinationShow

