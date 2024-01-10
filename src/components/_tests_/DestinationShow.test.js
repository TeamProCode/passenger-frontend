import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import DestinationShow from "../../pages/DestinationShow"
import mockPhotos from "../../mockPhotos"
import mockDestinations from "../../mockDestinations"
import destinations from "../../mockDestinations"
import photos from "../../mockPhotos"

// import DestinationIndex from "../../pages/DestinationIndex"


const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/destinationshow/1"]}>
      <Routes>
        <Route path="/destinationshow/:id" element={<DestinationShow destinations={mockDestinations} photos={mockPhotos} />} />
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
    expect((screen.getByRole('main-destination-image'))).toBeIntheDocument
  })
  it("renders the specific details about each destination", () => {
    renderShow()
    expect((screen.getByText(`Climate: ${destinations[0].climate}`)).toBeIntheDocument)
    expect((screen.getByText(`Location: ${destinations[0].location}`)).toBeIntheDocument)
    expect((screen.getByText(`Language: ${destinations[0].language}`)).toBeIntheDocument)
  })
})


describe("<DesitnationShow />", () => {
  it("renders all descriptions for photos", () => {
    renderShow()
    expect((screen.getByText(`${photos[0].description}`)).toBeIntheDocument)
  })
}
)

// describe("<DestinationShow />", () => {
//   it("renders without crashing", () => { })
//   it("renders photo and description", () => {
//     render(
//       <BrowserRouter>
//         <DestinationShow destinations={mockDestinations} photos={mockPhotos} />
//       </BrowserRouter>
//     )
//     mockDestinations.forEach(() => {
//       const showLocation = screen.getByRole('photo-data', {
//         name: /profile of a destination san diego, ca, usa/i
//       })

//       expect(showLocation).toHaveAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/7e/San_Diego_Skyline_-_Illustration.jpg")
//       expect(showLocation).toHaveAttribute("alt", "San Diego sunset")
//       screen.logTestingPlaygroundURL()

//       mockPhotos.forEach((photo) => {
//         const destinationPhoto = screen.getByRole(photo.image)
//         expect(destinationPhoto).toBeInTheDocument()

//         const description = screen.getByAltText(`Description: ${destination.description}`)
//       })
//     })
//   })
// })
