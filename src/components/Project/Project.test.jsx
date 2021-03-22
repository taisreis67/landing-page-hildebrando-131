import React from "react"
import { render, screen } from "@testing-library/react"

import colors from '../../styles/colors'
import Project from "."

describe("Project", () => {
  it.skip("renders correctly", async () => {
    const projectColors = {
      background: colors.beige,
      color: colors.darkBrowm
    }
    const projectVideo = {
      url: 'https://www.youtube.com/watch?v=PsJbTTN485o',
      title: 'Vídeo do empreendimento Hildebrando 131'
    }
    render(<Project pathImage="project" video={projectVideo} colors={projectColors} />)

    expect(screen.getByRole('img', { name: /fachada do projeto/i })).toBeInTheDocument()
  })
})