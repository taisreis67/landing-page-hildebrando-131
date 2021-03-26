import React from "react"
import { render, screen } from "@testing-library/react"

import CentralImage from "."

describe("CentralImage", () => {
  it.skip("renders correctly", async () => {
    render(<CentralImage />)

    expect(screen.getByText(/Tour Virtual/i)).toBeInTheDocument()
  })
})