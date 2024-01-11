import React from 'react'
import { useParams } from "react-router-dom"


const DestinationShow = ({ destinations, photos }) => {
  const { id } = useParams()
  let currentPhotos = photos.filter((photo) => photo.destination_id === +id)
  let currentDestination = destinations.find((destination) => destination.id === +id)


  const displayPhotos = (array) => {
    return (array.map((object) => {
      return object
    }))
  }

  // console.log((currentPhotos))
  console.log((destinations))
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

          {displayPhotos(currentPhotos).map((objects, index
          ) => {
            return (
              <div key={index}
              ><img role="photo-data" src={objects.photo}  alt={objects.alt}/>
              <p >{ objects.description }</p>
              </div>
              )
          })}
    </>
  )
}
    </main >
  )
}


export default DestinationShow