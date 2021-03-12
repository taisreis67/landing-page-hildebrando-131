import React from "react"
import { render, screen } from "@testing-library/react"

import Banner from "."

describe("Banner", () => {
  it("renders correctly", async () => {
    render(<Banner img={{ src: 'hildebrando-131.svg', title='hildebrando 131' }} />)

    expect(screen.getByRole('img', {name: /hildebrando 131/i})).toBeInTheDocument()
  })
})