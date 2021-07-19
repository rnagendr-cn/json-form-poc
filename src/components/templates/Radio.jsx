import React from "react"
import slugToText from "../../utils/slugToText"
import "./Radio.css"

const Radio = ({ data, dispatch }) => {
  let id = data.name,
    label = slugToText(data.name),
    defaultValue = data.value,
    required = data.required

  return (
    <>
      <label for={id} className="radio__label">
        {label}
      </label>
      <input
        id={id}
        className="radio"
        type="radio"
        checked={defaultValue}
        required={required}
        onChange={(e) => {
          dispatch({ value: e.target.checked, i: data.i })
        }}
      />
    </>
  )
}

export default Radio
