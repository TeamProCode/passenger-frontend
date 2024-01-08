import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import Home from "../../pages/Home"


describe("<Home />", () => {
  it("renders a background with a src and alt", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const background = screen.getByRole("img")
    expect(background).toHaveAttribute("src", "homeBg.png")
    expect(background).toHaveAttribute("alt", "Home background image")
  })
  })