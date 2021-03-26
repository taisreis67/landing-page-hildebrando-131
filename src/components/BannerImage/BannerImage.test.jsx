import React from "react"
import { render, screen } from "@testing-library/react"

import BannerImage from "."

describe("BannerImage", () => {
  it.skip("renders correctly", async () => {
    render(<BannerImage />)

    expect(screen.getByText(/Tour Virtual/i)).toBeInTheDocument()
  })
})