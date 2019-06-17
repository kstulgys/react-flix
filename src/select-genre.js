import React from "react"
import { FormSelect } from "shards-react"

export default function FormSelectDemo() {
  return (
    <FormSelect size="md" placeholder="">
      <option value="first">Genre</option>
      <option value="second">This is the second option.</option>
      <option value="third" disabled>
        This option is disabled.
      </option>
    </FormSelect>
  )
}
