import React from "react"
import { render } from "@testing-library/react"

import Carousel from "."

describe("Carousel", () => {
  it.skip("renders correctly", async () => {
    render(<Carousel pathName='recreation' />);

    const displayedImage = document.querySelector('img');
    expect(displayedImage[0].src).toContain('recreation');
  })
})