import { getByRole, render, screen } from "@testing-library/react"
import DestinationIndex from "../../pages/DestinationIndex"
import mockDestinations from "../../mockDestinations"
import { BrowserRouter } from "react-router-dom"
import destinations from "../../mockDestinations"

describe("<DestinationIndex />", () => {
  it("renders without crashing", () => { })
  it("renders destinations", () => {
    render(
      <BrowserRouter>
        <DestinationIndex destinations={mockDestinations} />
      </BrowserRouter>
    )
    mockDestinations.forEach((destination) => {
      const destinationLocation = screen.getByText(destination.location)
      expect(destinationLocation).toBeInTheDocument()


      const climate = screen.getByText(`Climate: ${destination.climate}`)
      expect(climate).toBeInTheDocument()
      const description = screen.getByText(`Description: ${destination.description}`)
      expect(description).toBeInTheDocument()
      screen.logTestingPlaygroundURL()
    })
  })
})