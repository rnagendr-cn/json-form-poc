import React, { useState, useEffect } from "react"
import DateRangePicker from "@wojtekmaj/react-daterange-picker"
// import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/entry.nostyle"
import slugToText from "../../utils/slugToText"
import "./DateRange.css"

const Checkbox = ({ data, dispatch }) => {
  // console.log(data, dispatch)
  let id = data.name,
    label = slugToText(data.name),
    defaultValue = data.value
  // required = data.required

  const [value, onChange] = useState([
    new Date(defaultValue[0]),
    new Date(defaultValue[1]),
  ])

  useEffect(() => {
    dispatch({ value, i: data.i })
  }, [value])

  return (
    <>
      <label for={id} className="dateRange__label">
        {label}
      </label>
      <DateRangePicker onChange={onChange} value={value} />
    </>
  )
}

export default Checkbox
