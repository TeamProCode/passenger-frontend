import React, { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import DestinationEdit from "./pages/DestinationEdit"
import DestinationIndex from "./pages/DestinationIndex"
import DestinationNew from "./pages/DestinationNew"
import PhotoNew from "./pages/PhotoNew"
import PhotoEdit from "./pages/PhotoEdit"
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
  const [currentUser, setCurrentUser] = useState(null)
  
// authentication methods
const login = (userInfo) => {
  fetch(`${url}/login`, {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "POST"
  })
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    // store the token
    localStorage.setItem("token", response.headers.get("Authorization"))
    return response.json()
  })
  .then(payload => {
    setCurrentUser(payload)
  })
  .catch(error => console.log("login errors: ", error))
}

const signup = (userInfo) => {
  fetch(`${url}/signup`, {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "POST"
  })
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    // store the token
    localStorage.setItem("token", response.headers.get("Authorization"))
    return response.json()
  })
  .then(payload => {
    setCurrentUser(payload)
  })
  .catch(error => console.log("login errors: ", error))
}

const logout = () => {
  fetch(`${url}/logout`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token") 
    },
    method: "DELETE"
  })
  .then(payload => {
    localStorage.removeItem("token")  
    setCurrentUser(null)
  })
  .catch(error => console.log("log out errors: ", error))
}

  const [destinations, setDestinations] = useState([])
  useEffect(() => {
    readDestinations()
  }, [])

  const readDestinations = () => {
    fetch("http://localhost:3000/destinations")
      .then((response) => response.json())
      .then((payload) => setDestinations(payload))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token")
    if (loggedInUser) {
      setCurrentUser(loggedInUser)
    }
    readDestinations()
  }, [])
const url = "http://localhost:3000/"
  const [photos, setPhotos] = useState([])
 
    useEffect(() => {
      readPhotos()
    }, [])
  
    const readPhotos = () => {
      fetch("http://localhost:3000/photos")
        .then((response) => response.json())
        .then((payload) => setPhotos(payload))
        .catch((error) => console.log(error))
    }
  
  const createDestination = (destination) => {
    fetch("http://localhost:3000/destinations", {
    body: JSON.stringify(destination),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then((response) => response.json())
    .then(() => readDestinations())
    .catch((errors) => console.log("Destionation create errors:", errors))
}
    // console.log(destination)
  console.log(photos)
  const createPhoto = (photo) => {
    console.log(photo)
  }
  const updateDestination = (destination, destinationId) => {
    console.log("destination:", destination)
    console.log("id:", destinationId)
  }

  const updatePhoto = (photo, photoId) => {
    console.log("photo:", photo)
    console.log("id:", photoId)
  }

  const deleteDestination = (destination, destinationId) => {
    console.log("destination:", destination)
    console.log("id:", destinationId)
  }
  const deletePhoto = (photo, photoId) => {
    console.log("photo", photo)
    console.log("id", photoId)
  }
  return (
    <>
      <Header current_user={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn login={login} signup={signup} />} />
        <Route path="/destinationindex" element={<DestinationIndex destinations={destinations} />} />
        <Route path="/destinationshow/:id" element={<DestinationShow destinations={destinations} deleteDestination={deleteDestination} photos={photos} updatePhoto={updatePhoto} />} />
        <Route path="/destinationnew" element={<DestinationNew createDestination={createDestination} />} />
        <Route path="/destinationshow/:id/photonew" element={<PhotoNew
          destinations={destinations} createPhoto={createPhoto} />} />
        <Route path="/destinationedit/:id" element={<DestinationEdit destinations={destinations} updateDestination={updateDestination} />} />
        <Route path="/destinationshow/:destinationId/photoedit/:photoId" element={<PhotoEdit destinations={destinations} photos={photos} updatePhoto={updatePhoto} deletePhoto={deletePhoto} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}


export default App