import React from 'react'
import { useParams, NavLink } from "react-router-dom"
import { Button } from 'reactstrap'




const DestinationShow = ({ destinations, photos, deleteDestination, }) => {
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
    deleteDestination(currentDestination, currentDestination.id)
  }

  // console.log((currentPhotos))
  console.log((destinations))
  console.log((currentPhotos))
  return (
    <main className="">
      {currentDestination && (
        <>
          <img
            alt={`profile of a Destination named ${currentDestination.location}`}
            src={currentDestination.image}
            className="Destination-show-img"
            role="main-destination-image"
            style={{ width: "300px", height: "auto" }}
          />
          <p>Location: {currentDestination.location}</p>
          <p>Climate: {currentDestination.climate}</p>
          <p>Language: {currentDestination.language}</p>
          <p>Description: {currentDestination.description}</p>
          <NavLink to={`/destinationedit/${currentDestination.id}`} className="nav-link">
            Edit Destination
          </NavLink>
          <NavLink to={'/destinationindex'} className="nav-link">
            <Button onClick={handleDelete}>
              Remove This Destination
            </Button>
          </NavLink>


          {displayPhotos(currentPhotos).map((photoObject, index
          ) => {
            return (
              <div key={index}> <img role="photo-data" src={photoObject.image} alt={photoObject.alt} />
                <p>{photoObject.description}</p>
                <NavLink to={`photoedit/${photoObject.id}`}
                  className="nav-link">
                  <button>
                    Edit Photo
                  </button>
                </NavLink>
              </div>
            )
          })}
          <NavLink to={`/destinationshow/${id}/photonew`}>
            <button>Add Photos </button>
          </NavLink>
        </>
      )
      }

    </main >
  )
}


export default DestinationShow