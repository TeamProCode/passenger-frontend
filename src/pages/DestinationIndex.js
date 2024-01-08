import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const DestinationIndex = ({ destinations }) => {
  return(
    destinations.map((destination, index) => {
      return (
        <Card
          style={{
            width: "14rem"
          }}
          key={index}
        >
          <img alt={`profile of a destination ${destination.location}`} src={destination.image} />
          <CardBody>
            <CardTitle tag="h5">{destination.location}</CardTitle>
            <CardSubtitle className="" tag="h6">
              Climate: {destination.climate}
            </CardSubtitle>

            <CardSubtitle>
              Language: {destination.language}
            </CardSubtitle>

            <CardSubtitle>
              Description: {destination.description}
            </CardSubtitle>
            
            <Button>See More Details</Button>
          </CardBody>
        </Card>
      )
    })
  )}
  

export default DestinationIndex