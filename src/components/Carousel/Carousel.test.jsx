import React from "react"
import { render, screen } from "@testing-library/react"

import imagesMock from "../../helpers/imagesMock"
import colors from '../../styles/colors'
import Carousel from "."

describe("Carousel", () => {
  it("renders correctly", async () => {
    render(<Carousel images={imagesMock.data.close} background={colors.beige} color={colors.darkBrowm} />)

    expect(screen.getByText(/Finals test/i)).toBeInTheDocument()
  })
})