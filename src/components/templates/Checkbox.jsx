import React from "react"
import slugToText from "../../utils/slugToText"
import "./Checkbox.css"

const Checkbox = ({ data, dispatch }) => {
  let id = data.name,
    label = slugToText(data.name),
    defaultValue = data.value,
    required = data.required

  return (
    <>
      <label for={id} className="checkbox__label">
        {label}
      </label>
      <input
        id={id}
        className="checkbox"
        type="checkbox"
        checked={defaultValue}
        required={required}
        onChange={(e) => {
          dispatch({ value: e.target.checked, i: data.i })
        }}
      />
    </>
  )
}

export default Checkbox
