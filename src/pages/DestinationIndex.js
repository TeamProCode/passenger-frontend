import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";

const DestinationIndex = ({ destinations }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {destinations.map((destination, index) => (
        <Card
          style={{
            width: "14rem",
            margin: "10px", 
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
            
            <NavLink to={`/destinationshow/${destination.id}`}>See More Details</NavLink>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default DestinationIndex;
