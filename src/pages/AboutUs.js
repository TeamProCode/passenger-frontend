import React from 'react'
import About from "../assests/About.svg";
import backgroundPicture from "../assests/homeBg.png";

const AboutUs = () => {

  const backgroundStyle = {
    backgroundImage: `url(${backgroundPicture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '65vh',
    position: 'relative',
  };

  const newDestStyle = {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div className="homeflex">
        <div style={backgroundStyle}>
          <div style={newDestStyle}>
            <img
            alt="About Us"
            src={About}
            width={480}
            height={80}
            />
          </div>
      </div>
      <div className="bioflex">
  <div className="biobox">

      <div className="title">Joseph Kong</div>

      <div className="parabio">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.    
          </p>
      </div>
  </div>

  <div className="imagebiokong"></div>
</div>

<div className="bioflex">
  <div className="biobox">

      <div className="title">Andre Locsin</div>

      <div className="parabio">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>
      </div>
  </div>

  <div className="imagebioandre"></div>
</div>

<div className="bioflex">
  <div className="biobox">

      <div className="title">Emery Winkeljohn</div>

      <div className="parabio">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   
          </p>
      </div>
  </div>

  <div className="imagebioem"></div>
</div>

<div className="bioflex">
  <div className="biobox">

      <div className="title">Anthony Holt</div>

      <div className="parabio">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.    
          </p>
      </div>
  </div>

  <div className="imagebioant"></div>
</div>
    </div>
  )
}

export default AboutUs