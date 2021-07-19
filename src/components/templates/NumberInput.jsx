import React from "react"
import slugToText from "../../utils/slugToText"
import "./NumberInput.css"

const NumberInput = ({ data, dispatch }) => {
  let id = data.name,
    label = slugToText(data.name),
    defaultValue = data.value,
    required = data.required,
    min,
    max,
    placeholder,
    readOnly

  return (
    <>
      <label for={id} className="numberInput__label">
        {label}
      </label>
      <input
        id={id}
        className="numberInput"
        type="number"
        value={defaultValue}
        required={required}
        min={min}
        max={max}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={(e) => {
          dispatch({ value: Number(e.target.value), i: data.i })
        }}
      />
    </>
  )
}

export default NumberInput
