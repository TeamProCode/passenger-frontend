import { render, screen } from "@testing-library/react"
import AboutUs from "../../pages/AboutUs"


describe("<AboutUs/>", () => {
    it("renders About Us", () => {
      const div = document.createElement("div")
      render(<AboutUs />, div)
      screen.logTestingPlaygroundURL()
      screen.getByText(/aboutus/i)
    })
  })