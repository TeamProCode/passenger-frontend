import React from 'react';
import Lost from '../assests/lost.jpeg';

function NotFound() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    marginTop: '75px',
    fontFamily: 'Marck Script, cursive',
    fontSize: '34px',
    textAlign: 'center',
  };

  const imageStyle = {
    display: 'inline-block',
    marginTop: '20px', 
  };

  return (
    <div style={containerStyle}>
      <div>
        It Appears You're Lost. Check Your Coordinates..
      </div>
      <div style={imageStyle}>
        <img
          alt="Not Found"
          src={Lost}
          width={480}
          height={280}
        />
      </div>
    </div>
  );
}

export default NotFound;
