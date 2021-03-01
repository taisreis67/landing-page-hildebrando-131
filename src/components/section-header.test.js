import React from "react"
import { render, screen } from "@testing-library/react"

import SectionHeader from "./section-header"

describe("SectionHeader", () => {
  it("renders correctly", () => {
    render(<SectionHeader title="Meu Titulo" description="Minha Descrição" />)

    expect(screen.getByText(/Meu Titulo/)).toBeInTheDocument()
    expect(screen.getByText(/Minha Descrição/)).toBeInTheDocument()
  })
})