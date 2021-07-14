import React, { useState, useEffect } from "react"
import { JsonForms } from "@jsonforms/react"
import { dataSchema, uiSchema, initialData } from "../data/customUISchema"
import { materialRenderers, materialCells } from "@jsonforms/material-renderers"
import Button from "@material-ui/core/Button"

const schema = dataSchema
const uischema = uiSchema

const CustomSchemas = () => {
  const [data, setData] = useState(initialData)
  const [error, setError] = useState("")
  const [formsErrors, setFormsErrors] = useState([])

  useEffect(() => {
    console.log(data, error, formsErrors)
  }, [data, error, formsErrors])

  const areMandatoryFieldsFilled = (d) => {
    if (d.firstName && d.pincode && d.city) return true
    return false
  }

  const validateData = (data) => {
    if (!areMandatoryFieldsFilled(data)) {
      setError("Please fill the required fields!")
      return
    }
    // Send data to backend
    console.log(data)
  }

  return (
    <>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, _errors }) => {
          setData(data)
          setFormsErrors(_errors)
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => validateData(data)}>
        Submit
      </Button>
    </>
  )
}

export default CustomSchemas
