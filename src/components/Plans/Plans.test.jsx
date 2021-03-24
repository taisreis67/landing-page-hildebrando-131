import React from "react"
import { render, screen } from "@testing-library/react"

import imagesMock from "../../helpers/imagesMock"
import colors from '../../styles/colors'
import Plans from "."

console.log(imagesMock.data);

const content = [
  {
    area: "Area test",
    description: 'Description test',
    finals: "Finals test",
    image: imagesMock.data.plans.edges[0].node.base
  }
];

describe("Plants", () => {
  it("renders correctly", async () => {
    const plansColors = {
      background: colors.beige,
      color: colors.browm
    }
    render(<Plans images={imagesMock.data.plans} colors={plansColors} content={content} />)
    expect(screen.getByText(/Area test/i)).toBeInTheDocument()
    expect(screen.getByText(/Description test/i)).toBeInTheDocument()
    expect(screen.getByText(/Finals test/i)).toBeInTheDocument()
  })
})