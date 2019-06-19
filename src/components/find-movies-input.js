import React, { useState } from "react"
import { FormInput } from "shards-react"
import { useAppContext } from "../context"
import { searchMovies } from "../tmdbAPI"

export default function SearchMoviesInput() {
  const [inputValue, setValue] = useState("")
  const { dispatch } = useAppContext()

  async function search(inputValue) {
    searchMovies(inputValue).then(filteredMovies => {
      dispatch({ type: "FILTERED_MOVIES", filteredMovies })
    })
  }

  function handleChange(e) {
    const { value } = e.target
    search(value)
    setValue(value)
  }

  function handleFocus() {
    dispatch({ type: "NEW_GENRE_ID", genreId: "10101" })
  }

  return (
    <div className="w-100">
      <form className="col-12 col-md-12 col-lg-6 px-0">
        <div class="input-group input-group-seamless">
          <div class="input-group-append">
            <div class="input-group-text mr-3">
              <i class="fa fa-search fa-lg" />
            </div>
          </div>
          <FormInput
            onFocus={handleFocus}
            value={inputValue}
            size="lg"
            placeholder="Search movies..."
            className="m-0"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  )
}
