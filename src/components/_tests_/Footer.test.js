import { screen, render } from "@testing-library/react"
import Footer from "../Footer"


describe("<Footer />", () => {
    it("renders the footer component", () => {
      const div = document.createElement("div")
      render(<Footer />, div)
    })
  })