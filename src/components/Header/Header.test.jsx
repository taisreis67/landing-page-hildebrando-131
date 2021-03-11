import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"

import Header from "."

describe("Header", () => {
  it("renders correctly", async () => {
    render(<Header siteTitle="Hildebrando 131" />)
    const buttonElement = screen.getByRole('button', {
      name: /botão para abrir o menu de navegação do site/i
    })

    await waitFor(() => {
      fireEvent.click(buttonElement)
    })

    expect(screen.getByRole('img', {name: /hildebrando 131/i})).toBeInTheDocument()
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/lazer/i)).toBeInTheDocument()
    expect(screen.getByText(/implantação/i)).toBeInTheDocument()
    expect(screen.getByText(/projeto/i)).toBeInTheDocument()
    expect(screen.getByText(/tour virtual/i)).toBeInTheDocument()
    expect(screen.getByText(/localização/i)).toBeInTheDocument()
    expect(screen.getByText(/realização/i)).toBeInTheDocument()
  })
})