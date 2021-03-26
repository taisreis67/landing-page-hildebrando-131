import React from "react"
import { render, screen } from "@testing-library/react"

import SectionTitle from "."

describe("SectionTitle", () => {
  it("renders correctly", async () => {
    render(<SectionTitle title="Lazer" background="#fff" color="#fff" />)

    expect(screen.getByText(/Lazer/i)).toBeInTheDocument()
  })

  it("renders correctly with subtitle", async () => {
    render(<SectionTitle title="Lazer" subtitle="Meu lazer" background="#fff" color="#fff" />)

    expect(screen.getByText(/lazer/i)).toBeInTheDocument()
    expect(screen.getByText(/Meu lazer/i)).toBeInTheDocument()
  })
})