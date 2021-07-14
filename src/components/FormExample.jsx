import React, { useState, useEffect } from "react"
import { JsonForms } from "@jsonforms/react"
import { person } from "@jsonforms/examples"
import { materialRenderers, materialCells } from "@jsonforms/material-renderers"

const schema = person.schema
const uischema = person.uischema
const initialData = person.data

const FormExample = () => {
  const [data, setData] = useState(initialData)

  console.log(schema, uischema, initialData)

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={materialRenderers}
      cells={materialCells}
      onChange={({ data, _errors }) => setData(data)}
    />
  )
}

export default FormExample
