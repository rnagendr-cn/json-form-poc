import React, { useEffect, useReducer } from "react"
import {
  TextBox,
  NumberInput,
  Checkbox,
  Radio,
  Dropdown,
  DateRange,
} from "./templates"
import { json } from "../data/json"
import "./Unique.css"

const Unique = () => {
  // Reducer setup ---------------------------------------------------
  const initializeData = () =>
    json.properties.map((d, i) => ({
      i,
      ...d,
    }))

  const reducer = (data, action) =>
    data.map((d) => {
      if (action.i === d.i)
        return {
          ...d,
          value: action.value,
        }
      else return d
    })

  const [data, dispatch] = useReducer(reducer, initializeData())

  useEffect(() => {
    console.log(data)
  }, [data])

  // Inputs logic ---------------------------------------------------
  const generateInputs = (d) => {
    const inputType = (d) => {
      const mapping = {
        string: <TextBox data={d} dispatch={dispatch} />,
        number: <NumberInput data={d} dispatch={dispatch} />,
        checkbox: <Checkbox data={d} dispatch={dispatch} />,
        radio: <Radio data={d} dispatch={dispatch} />,
        dropdown: <Dropdown data={d} dispatch={dispatch} />,
        dateRange: <DateRange data={d} dispatch={dispatch} />,
      }
      return mapping[d.type]
    }

    return d.map((input) => inputType(input))
  }

  const validateForm = () => {
    console.log("submitted!")
    return true
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form is valid!")
      // Make API call
    } else {
      console.log("Errors!")
      // throw errors
    }
  }

  return (
    <form className="customLayout" onSubmit={handleSubmit}>
      {generateInputs(data)}
      <button className="submit" type="submit">
        Submit
      </button>
      {/* <DateRange /> */}
    </form>
  )
}

export default Unique
