import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>  
      )
    })
    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Home"))
        expect(screen.getByText("Home")).toBeInTheDocument()
        userEvent.click(screen.getByText("Take Me to Destinations"))
        expect(screen.getByText("Take Me to Destinations")).toBeInTheDocument()
        userEvent.click(screen.getByText("Add to Destinations"))
        expect(screen.getByText("Add to Destinations")).toBeInTheDocument()
        userEvent.click(screen.getByText("About Us"))
        expect(screen.getByText("About Us")).toBeInTheDocument()
        userEvent.click(screen.getByText("Sign-in/Sign-up"))
        expect(screen.getByText("Sign-in/Sign-up")).toBeInTheDocument()
    })
  })