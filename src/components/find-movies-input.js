import React, { useState } from 'react'
import { FormInput } from "shards-react"
import { useAppContext } from '../context'
import { searchMovies } from '../tmdbAPI'

export default function SearchMoviesInput() {
  const [inputValue, setValue] = useState("")
  const { state, dispatch } = useAppContext()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: "NEW_GENRE_ID", genreId: '10101' })
    searchMovies(inputValue).then(filteredMovies => {
      dispatch({ type: 'FILTERED_MOVIES', filteredMovies })
    })
    setValue("")
  }

  function handleFocus() {
    dispatch({ type: "NEW_GENRE_ID", genreId: '10101' })
  }

  return (
    <div className='w-100'>
      <form className='col-12 col-md-4 p-0' onSubmit={handleSubmit}>
        <div class="input-group input-group-seamless">
          <div class="input-group-append">
            <div class="input-group-text mr-3">
              <i class="fa fa-search fa-lg"></i>
            </div>
          </div>
          <FormInput
            onFocus={handleFocus}
            value={inputValue} size="lg" placeholder="Search movies..." className='m-0' onChange={(e) => setValue(e.target.value)} />
        </div>
      </form>
    </div>
  )
}