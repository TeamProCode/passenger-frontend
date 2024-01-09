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
            alt={`profile of a Destination named ${currentDestination.name}`}
            src={currentDestination.image}
            className="Destination-show-img"
          />
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