import React from "react"
import slugToText from "../../utils/slugToText"
import "./TextBox.css"

const TextBox = ({ data, dispatch }) => {
  let id = data.name,
    label = slugToText(data.name),
    defaultValue = data.value,
    required = data.required,
    minLength,
    maxLength,
    placeholder,
    readOnly

  return (
    <>
      <label for={id} className="textInput__label">
        {label}
      </label>
      <input
        id={id}
        className="textInput"
        type="text"
        value={defaultValue}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={(e) => {
          dispatch({ value: e.target.value, i: data.i })
        }}
      />
    </>
  )
}

export default TextBox
