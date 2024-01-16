import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import backgroundPicture from "../assests/homeBg.png";
import Destinations from "../assests/Destinations.svg";

const DestinationIndex = ({ destinations }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundPicture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "65vh",
    position: "relative",
  };

  const newDestStyle = {
    position: "absolute",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className="homeflex">
      <div style={backgroundStyle}>
        <div style={newDestStyle}>
          <img alt="Destinations" src={Destinations} width={480} height={80} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {destinations.map((destination, index) => (
          <Card
            style={{
              width: "14rem",
              margin: "40px",
              backgroundColor: "rgba(215, 188, 152, 0.6)",
            }}
            key={index}
          >
            <img
              alt={`profile of a destination ${destination.location}`}
              src={destination.image}
              style={{ width: "100%", height: "150px" }}
            />
            <CardBody style={{ fontFamily: "Manuale, serif" }}>
              <CardTitle tag="h5">{destination.location}</CardTitle>
              <CardSubtitle className="" tag="h6">
                Climate: {destination.climate}
              </CardSubtitle>

              <CardSubtitle>Language: {destination.language}</CardSubtitle>

              <CardSubtitle>
                Description: {destination.description}
              </CardSubtitle>

              <NavLink to={`/destinationshow/${destination.id}`}>
                See More Details
              </NavLink>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DestinationIndex;
