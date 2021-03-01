import React from "react"
import renderer from "react-test-renderer"
import SectionHeader from "./section-header"

describe("SectionHeader", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SectionHeader title="Chuchu" description="chuchu chu chuchu" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})