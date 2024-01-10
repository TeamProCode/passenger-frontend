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
          />
          <p>Location: {currentDestination.location}</p>
          <p>Climate: {currentDestination.climate}</p>
          <p>Language: {currentDestination.language}</p>
          <p>Description: {currentDestination.description}</p>

          {displayPhotos(currentPhotos).map((objects, index
          ) => {
            return (
              <div key={index}
              ><img src={objects.photo}  alt={objects.alt}/>
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