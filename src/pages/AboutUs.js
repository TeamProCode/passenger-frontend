import React from "react";
import About from "../assests/About.svg";
import backgroundPicture from "../assests/homeBg.png";

const AboutUs = () => {
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
          <img alt="About Us" src={About} width={480} height={80} />
        </div>
      </div>
      <div className="bioflex">
        <div className="biobox">
          <div className="title">Joseph Kong</div>

          <div className="parabio">
            <p>
              {" "}
              Hi there! I am Joseph (Project Manager of Passenger), a life-long learner who has transitioned to
              software engineering from physical therapy. I have traveled to
              many places both in the U.S. and outside of the country. Fun fact,
              my favorite city is San Diego!
            </p>
          </div>
        </div>

        <div className="imagebiokong"></div>
      </div>

      <div className="bioflex">
        <div className="biobox">
          <div className="title">Andre Locsin</div>

          <div className="parabio">
            <p>
              {" "}
              I’ve traveled, and I like to travel. Time spent in idle is time wasted,
              but time in idle is beauty. I’m André, junior software
              developer & Product Manager of Passenger with a love and hunger
              for exploration and tinkering.
            </p>
          </div>
        </div>

        <div className="imagebioandre"></div>
      </div>

      <div className="bioflex">
        <div className="biobox">
          <div className="title">Emery Winkeljohn</div>

          <div className="parabio">
            <p>
              {" "}
              Hey, Emery here! I serve as the Tech Lead for Passenger. I am an avid environmentalist and outdoors advocate. I spend most of my free time enjoying the Southern California landscape via snowboarding, mountain biking, surfing and hiking! I can't wait to see all of YOUR  outdoor adventures posted on Passenger!
            </p>
          </div>
        </div>

        <div className="imagebioem"></div>
      </div>

      <div className="bioflex">
        <div className="biobox">
          <div className="title">Anthony Holt</div>

          <div className="parabio">
            <p>
              {" "}
              Hi fellow Passengers!! My name is Anthony Holt and I serve as the Design Lead for the site. If I'm not being creative and coming up with new ideas, you can catch me enroute to the closest tropical setting in search of a good time and new things to be inspired by!
            </p>
          </div>
        </div>

        <div className="imagebioant"></div>
      </div>
    </div>
  );
};

export default AboutUs;
