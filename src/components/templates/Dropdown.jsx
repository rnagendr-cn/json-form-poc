import React from "react"
import slugToText from "../../utils/slugToText"
import "./Dropdown.css"

const Dropdown = ({ data, dispatch }) => {
  let id = data.name,
    label = slugToText(data.name),
    defaultValue = data.value,
    required = data.required

  return (
    <>
      <label for={id} className="dropdown__label">
        {label}
      </label>
      <select
        id={id}
        className="dropdown"
        value={defaultValue}
        required={required}
        onChange={(e) => {
          dispatch({ value: e.target.value, i: data.i })
        }}>
        {data.options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default Dropdown
