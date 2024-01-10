import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { MemoryRouter , Routes, Route } from "react-router-dom"
import DestinationShow from "../../pages/DestinationShow"
import mockPhotos from "../../mockPhotos"
import mockDestinations from "../../mockDestinations"

// import DestinationIndex from "../../pages/DestinationIndex"


const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/destinationshow/1"]}>
    <Routes>
      <Route path="/destinationshow/:id" element={<DestinationShow destinations={mockDestinations} photos={mockPhotos}/>} />
    </Routes>
  </MemoryRouter>
  )
}

describe("<DestinationShow />", () => {
  it("renders without crashing", () => {
    renderShow()
  })
  it("renders the main destination image", () => {
    renderShow()
   const image = screen.getByRole('main-destination-image')
  expect(image).toHaveAttribute('src',
  'https://upload.wikimedia.org/wikipedia/commons/7/7e/San_Diego_Skyline_-_Illustration.jpg'
  )

  mockDestinations.forEach((destination) => {
    const destinationLocation = screen.getByText(`Location: ${destination.location}`)
    expect(destinationLocation).toBeInTheDocument()


    const climate = screen.getByText(`Climate: ${destination.climate}`)
    expect(climate).toBeInTheDocument()
    const description = screen.getByText(`Description: ${destination.description}`)
    expect(description).toBeInTheDocument()
      screen.logTestingPlaygroundURL()

  })
  })
})
  
 

//     expect(screen.getByAltText(`${mockPhotos[0].photo} ${mockPhotos}`))

//     )
//   })
// }
// describe("<DestinationShow />", () => {
//   it("renders without crashing", () => {})
//   it("renders photo and description", () => {
//     render(
// <BrowserRouter>
// <DestinationShow destinations={mockDestinations} photos={mockPhotos}/>
// </BrowserRouter>
//     )
//     mockDestinations.forEach(() => {
//       const showLocation = screen.getByRole('img', {
//         name: /profile of a destination san diego, ca, usa/i
//       }) 
       
//       expect(showLocation).toHaveAttribute("src","https://upload.wikimedia.org/wikipedia/commons/7/7e/San_Diego_Skyline_-_Illustration.jpg")
//       expect(showLocation).toHaveAttribute("alt","San Diego sunset")
//       screen.logTestingPlaygroundURL()

      // mockPhotos.forEach((photo) => {
      //   const destinationPhoto = screen.getByRole(photo.image)
      //   expect(destinationPhoto).toBeInTheDocument()

      // const description = screen.getByAltText(`Description: ${destination.description}`)
//   })
// })
// })
