import React, { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import DestinationEdit from "./pages/DestinationEdit"
import DestinationIndex from "./pages/DestinationIndex"
import DestinationNew from "./pages/DestinationNew"
import PhotoNew from "./pages/PhotoNew"
import DestinationShow from "./pages/DestinationShow"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
import mockDestinations from "./mockDestinations"
import mockPhotos from "./mockPhotos"
import mockUsers from "./mockUsers"
import { Routes, Route } from "react-router-dom"
import "./components/Footer.css"
import "./components/Header.css"
import SignIn from "./pages/SignIn"


const App = () => {
  const [destinations, setDestinations] = useState(mockDestinations)
  const [photos, setPhotos] = useState(mockPhotos)
  const createDestination = (destination) => {
    console.log(destination)
  }
  const createPhoto = (photo) => {
    console.log(photo)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinationindex" element={<DestinationIndex destinations={destinations} />} />
        <Route path="/destinationshow/:id" element={<DestinationShow destinations={destinations} photos={photos} />} />
        <Route path="/destinationnew" element={<DestinationNew createDestination={createDestination} />} />
        <Route path="/photonew" element={<PhotoNew createPhoto={createPhoto} /> } />
        <Route path="/destinationedit" element={<DestinationEdit />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App