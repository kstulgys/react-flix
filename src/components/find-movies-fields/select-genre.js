import React from "react"
import { FormSelect } from "shards-react"
import { useAppContext } from '../../context'

export default function FormSelectDemo() {
  const { state: { genres, genreId }, dispatch } = useAppContext()

  function handleChange(e) {
    const genreId = e.target.value
    dispatch({ type: "NEW_GENRE_ID", genreId })
  }

  return (
    <div>
      <h5 className="text-light font-weight-bold">Genre</h5>
      <FormSelect size="lg" onChange={handleChange} value={genreId}>
        <option key='10101' value='10101'>Select Genre</option>
        {genres.map(({ name, id }) => {
          return <option key={id} value={id}>{name}</option>
        })}
      </FormSelect>
    </div>
  )
}
