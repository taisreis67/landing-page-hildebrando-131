import React from "react"
import { render, screen } from "@testing-library/react"

import Footer from "."

describe("Footer", () => {
  it.skip("renders correctly", async () => {
    render(<Footer />)

    expect(screen.getByText(/Tour Virtual/i)).toBeInTheDocument()
  })
})