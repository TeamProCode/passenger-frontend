import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import NotFound from "../../pages/NotFound"

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const errorText = screen.getByText(/not found/i)
    expect(errorText).toBeInTheDocument()
  })
})
