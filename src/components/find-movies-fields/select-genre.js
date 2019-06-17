import React from "react"
import { FormSelect } from "shards-react"

export default function FormSelectDemo() {
  return (
    <div>
      <h5 className="text-light font-weight-bold">Genre</h5>
      <FormSelect size="lg" placeholder="">
        <option value="first">Drama</option>
        <option value="second">Sci-fi</option>
        <option value="third" disabled>
          This option is disabled.
      </option>
      </FormSelect>
    </div>
  )
}
