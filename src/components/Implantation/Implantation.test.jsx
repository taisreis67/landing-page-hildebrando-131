import React from "react"
import { render, screen } from "@testing-library/react"

import Implantation from "."

describe("Implantation", () => {
  it("renders correctly", async () => {
    const list = [
      'Piscina adulto',
      'Deck molhado',
    ]
    render(<Implantation listItens={list} />)

    expect(screen.getByText(/piscina adulto/i)).toBeInTheDocument()
  })
})