import { render } from "react-dom"
import h from "components/htm_create_element"

import HelloWorld from "components/hello_world"

render(
  h`<${HelloWorld} />`,
  document.getElementById("root")
)