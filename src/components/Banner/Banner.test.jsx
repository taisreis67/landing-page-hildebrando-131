import React from "react"
import { render, screen } from "@testing-library/react"

import bannerImage from "../../images/residencial-hildebrando-131-osasco-parallax.jpg"
import Banner from "."

describe("Banner", () => {
  it("renders correctly", async () => {
    render(<Banner src={bannerImage} title="Fachada Hildebrando 131" />)

    expect(screen.getByRole('img', { name: /fachada hildebrando 131/i })).toBeInTheDocument()
  })
})