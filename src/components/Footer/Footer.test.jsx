import React from "react"
import { render, screen } from "@testing-library/react"

import Footer from "."

describe("Footer", () => {
  it("renders correctly", () => {
    render(<Footer siteTitle="Meu Titulo" />)

    expect(screen.getByText(/Meu Titulo/)).toBeInTheDocument()
  })
})