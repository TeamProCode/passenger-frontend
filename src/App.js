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
import SignUp from "./pages/SignUp"



const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [photos, setPhotos] = useState([])
  const [destinations, setDestinations] = useState([])

  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(loggedInUser)
    }
    readDestinations()
  }, [])

  const url = "http://localhost:3000"
  const readDestinations = () => {
    fetch(`${url}/destinations`)
      .then((response) => response.json())
      .then((payload) => setDestinations(payload))
      .catch((error) => console.log("Destination read error", error))
  }
  // const url = "https://passenger-back.onrender.com"

  const readPhotos = () => {
    fetch(`${url}/photos`)
      .then((response) => response.json())
      .then((payload) => setPhotos(payload))
      .catch((error) => console.log(error))
    }
  
  const createDestination = (createdDestination) => {
    fetch(`${url}/destinations`, {
      body: JSON.stringify(createdDestination),
      headers: {
        "Content-Type": "application/json",
      },
    method: "POST"
  })
    .then((response) => response.json())
    .then(() => readDestinations())
    .catch((errors) => console.log("Destionation create errors:", errors))
}

const updateDestination = (currentDestination, id) => {
  fetch(`${url}/destinations/${id}`, {
    body: JSON.stringify(currentDestination),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
  })
    .then((response) => response.json())
    .then(() => readDestinations())
    .catch((error) => console.log("Update destinaiton errors: ", error))
}

const deleteDestination= (id) => {
  fetch(`${url}/destinations/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => readDestinations())
    .catch((errors) => console.log("delete errors:", errors))
}
// authentication methods
const login = (userInfo) => {
  console.log("we're here")
  fetch(`${url}/login`, {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
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
  .then((payload) => {
    localStorage.setItem("user", JSON.stringify(payload))
    console.log(payload)
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
  .then((payload) => {
    localStorage.setItem("user", JSON.stringify(payload))
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
    method: "DELETE",
  })
  .then((payload) => {
    localStorage.removeItem("token")  
    localStorage.removeItem("user")  
    setCurrentUser(null)
  })
  .catch(error => console.log("log out errors: ", error))
}

  const createPhoto = (photo) => {
    console.log(photo)
  }

  const updatePhoto = (photo, photoId) => {
    console.log("photo:", photo)
    console.log("id:", photoId)
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
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/login" element={<SignIn login={login}  />} />
        <Route path="/destinationindex" element={<DestinationIndex destinations={destinations} />} />
        <Route path="/destinationshow/:id" element={<DestinationShow destinations={destinations} deleteDestination={deleteDestination} photos={photos} readPhotos={readPhotos} updatePhoto={updatePhoto} />} />
        <Route path="/destinationnew" element={<DestinationNew createDestination={createDestination} currentUser={currentUser} />} />
        <Route path="/destinationshow/:id/photonew" element={<PhotoNew
          photos={photos} destinations={destinations} createPhoto={createPhoto} />} />
        <Route path="/destinationedit/:id" element={<DestinationEdit destinations={destinations} updateDestination={updateDestination} currentUser={currentUser}/>} />
        <Route path="/destinationshow/:destinationId/photoedit/:photoId" element={<PhotoEdit destinations={destinations} photos={photos} updatePhoto={updatePhoto} deletePhoto={deletePhoto} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}


export default App