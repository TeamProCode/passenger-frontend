import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import DestinationNew from '../../pages/DestinationNew'

describe("<DestinationNew />", () => {

    const renderNew = () => {
        render(
            <BrowserRouter>
                <DestinationNew />
            </BrowserRouter>
        )
    }
    it("render a new destination form", () => {
        renderNew()
        // screen.logTestingPlaygroundURL()
        const locationInput = screen.getByRole("textbox-location", {
            id: /location/i
        })
        expect(locationInput).toBeInTheDocument()

        const climateInput = screen.getByRole("textbox-climate", {
            id: /climate/i
        })
        expect(climateInput).toBeInTheDocument()

        const languageInput = screen.getByRole("textbox-language", {
            id: /language/i
        })
        expect(languageInput).toBeInTheDocument()

        const descriptionInput = screen.getByRole("textbox-description", {
            id: /description/i
        })
        expect(descriptionInput).toBeInTheDocument()

        const imageInput = screen.getByRole("textbox-image", {
            id: /image/i
        })
        expect(imageInput).toBeInTheDocument()
    })

    it("has a form with entries for location, climate, language, description and image.", () => {
        renderNew()
        const formLocation = screen.getByText(/location/i)
        expect(formLocation.getAttribute("For")).toEqual("location")

        const formClimate = screen.getByText(/climate/i)
        expect(formClimate.getAttribute("For")).toEqual("climate")

        const formLanguage = screen.getByText(/language/i)
        expect(formLanguage.getAttribute("For")).toEqual("language")

        const formDescription = screen.getByText(/Description/i)
        expect(formDescription.getAttribute("For")).toEqual("description")

        const formImage = screen.getByText(/Image/i)
        expect(formImage.getAttribute("For")).toEqual("image")
    })

})