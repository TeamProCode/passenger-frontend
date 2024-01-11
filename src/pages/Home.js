import React from 'react'
import backgroundPicture from "../assests/homeBg.png"
// import './Home.css'

const Home = () => {
  return (
    <div >Welcome to the home page
        <img  className='home-bg' src={backgroundPicture} alt="Home background image" />
    </div>

  )
}

export default Home