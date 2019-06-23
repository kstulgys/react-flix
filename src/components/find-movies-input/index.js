import React, { useState } from "react"
import axios from 'axios'
import { FormInput, Button } from "shards-react"
import { useAppContext } from "../../context"
import { searchMovies } from "../../tmdbAPI"
import { navigate } from "@reach/router"

export default function SearchMoviesInput() {
  const [inputValue, setValue] = useState("")
  const { dispatch } = useAppContext()

  // let source
  // async function search(inputValue) {
  //   // Check if we made a request
  //   if (source) {
  //     // Cancel the previous request before making a new request
  //     source.cancel('Operation canceled due to new request.')
  //   }
  //   // Create a new CancelToken
  //   source = axios.CancelToken.source()
  //   try {
  // await searchMovies(inputValue, { cancelToken: source.token }).then(filteredMovies => {
  //   dispatch({ type: "FILTERED_MOVIES", filteredMovies })
  // })
  //   } catch (error) {
  //     if (axios.isCancel(error)) {
  //       // Handle if request was cancelled
  //       console.log("Request canceled", error.message)
  //     } else {
  //       // Handle usual errors
  //       console.log("Something went wrong: ", error.message)
  //     }
  //   }
  // }

  async function doSearch(e) {
    e.preventDefault()
    await searchMovies(inputValue).then(filteredMovies => {
      dispatch({ type: "FILTERED_MOVIES", filteredMovies })
    })
  }

  function handleChange(e) {
    navigate('/')
    const { value } = e.target
    // search(value)
    setValue(value)
  }

  function handleFocus() {
    dispatch({ type: "NEW_GENRE_ID", genreId: "10101" })
  }

  return (
    <div className="w-100">
      <form className="d-flex col-12 col-md-12 col-lg-6 px-0" onSubmit={doSearch}>
        {/* <div class="input-group input-group-seamless">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fa fa-search fa-lg" />
            </div>
          </div> */}
        <FormInput
          onFocus={handleFocus}
          value={inputValue}
          size="lg"
          placeholder="Search movies..."
          className=""
          onChange={handleChange}
        />
        <Button size='lg' outline theme="dark" className='ml-2' type='submit' data-testid='search-button'>Search</Button>
        {/* </div> */}
      </form>
    </div >
  )
}
