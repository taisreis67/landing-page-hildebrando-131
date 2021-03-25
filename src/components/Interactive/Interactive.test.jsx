import React from "react"
import { render, screen } from "@testing-library/react"

import Interactive from "."

describe("Banner", () => {
  it("renders correctly", async () => {
    render(
      <Interactive background="#fff">
        <div>Tour Virtual</div>

        <iframe
          src="https://www.3dexplora.com.br/seutour.aspx?codigo=q5kYoNLfgYv&amp;play=1&amp;hl=0&amp;qs=1&amp;wh=1&amp;lp=0&amp;ts=1"
          allowFullScreen=""
          width="100%"
          height="500px"
          frameBorder="0"
          title="hildebrando 131 tour virtual"
        />
      </Interactive>
    )

    expect(screen.getByText(/Tour Virtual/i)).toBeInTheDocument()
  })
})