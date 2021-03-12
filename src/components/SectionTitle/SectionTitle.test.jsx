import React from "react"
import { render, screen } from "@testing-library/react"

import SectionTitle from "."

describe("SectionTitle", () => {
  it("renders correctly", async () => {
    render(<SectionTitle title="Lazer" />)

    expect(screen.getByText(/lazer/i)).toBeInTheDocument()
  })
})