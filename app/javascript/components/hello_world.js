import { Component } from "react"
import h from "components/htm_create_element"

export default class HelloWorld extends Component {
  render() {
    return h`
      <h1>Hello World</h1>
    `
  }
}