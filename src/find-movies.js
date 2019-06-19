import React from "react"
import FindMovieFields from "./components/find-movies-fields"
import SearchMovieInput from "./components/find-movies-input"
import FilteredMovies from "./components/filtered-movies"

export default function FindMovies() {
  return (
    <section className="d-flex flex-column flex-md-row h-100 mt-md-4">
      <div className="col-12 px-md-0 col-md-3">
        <FindMovieFields />
      </div>
      <div className="col-12 pr-md-0 ml-md-2 col-md-9 d-flex flex-column mt-4 mt-md-0">
        <SearchMovieInput />
        <FilteredMovies />
      </div>
    </section>
  )
}
