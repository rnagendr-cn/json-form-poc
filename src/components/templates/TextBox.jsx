import React, { useEffect, useState } from "react"
import "./TextBox.css"

const TextBox = ({
  id,
  label,
  required,
  minLength,
  maxLength,
  placeholder,
  readOnly,
  defaultValue,
}) => {
  const [text, setText] = useState(defaultValue)

  useEffect(() => {
    console.log(text)
  }, [text])

  return (
    <>
      <label for={id} className="textInput__label">
        {label}
      </label>
      <input
        id={id}
        className="textInput"
        type="text"
        value={text}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
    </>
  )
}

export default TextBox
