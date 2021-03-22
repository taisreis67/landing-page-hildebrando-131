import React from "react"
import { render, screen } from "@testing-library/react"

import colors from '../../styles/colors'
import Plans from "."

describe("Plants", () => {
  it.skip("renders correctly", async () => {
    const plansColors = {
      background: colors.beige,
      color: colors.browm
    }
    render(<Plans pathImage="plans" colors={plansColors} />)

    expect(screen.getByText(/finais 1 e 2/i)).toBeInTheDocument()
  })
})