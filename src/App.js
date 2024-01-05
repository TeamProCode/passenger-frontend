import React, { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import DestinationEdit from "./pages/DestinationEdit"
import DestinationIndex from "./pages/DestinationIndex"
import DestinationNew from "./pages/DestinationNew"
import DestinationShow from "./pages/DestinationShow"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
import mockDestinations from "./mockDestinations"
import { Routes, Route } from "react-router-dom"
import "./components/Footer.css"
import "./components/Header.css"
import SignIn from "./pages/SignIn"


function App() {
  const [destinations, setDestinations] = useState(mockDestinations)
  console.log(destinations)
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinationindex" element={<DestinationIndex />} />
        <Route path="/destinationshow" element={<DestinationShow />} />
        <Route path="/destinationnew" element={<DestinationNew />} />
        <Route path="/destinationedit" element={<DestinationEdit />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App