import React from "react"
import TextBox from "./templates/TextBox"
import { isObject } from "lodash"
import { json } from "../data/json"
import slugToText from "../utils/slugToText"
import "./Unique.css"

const Unique = () => {
  console.log(json)

  const inputType = (d) => {
    if (d.type === "string") {
      return (
        <TextBox
          id={d.name}
          label={slugToText(d.name)}
          defaultValue={d.value}
          required={d.required}
        />
      )
    }
  }

  const generateInputs = (json) => {
    if (isObject(json.properties)) {
      const names = Object.keys(json.properties)
      console.log(names)
      return names.map((name) => {
        return inputType(json.properties[name])
      })
    }
  }

  return <div className="customLayout">{generateInputs(json)}</div>
}

export default Unique
