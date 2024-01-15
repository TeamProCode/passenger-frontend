import React from 'react';
import minigit from '../assests/minigit.svg'

const Github = () => {
    const gitHubURL = 'https://github.com/TeamProCode';
  
    return (
      <a href={gitHubURL} target="_blank">
        <img
          alt="ProCode Github"
          width={"32"}
          height={"32"}
          src={minigit}
        />
      </a>
    );
  };
  
export default Github;
