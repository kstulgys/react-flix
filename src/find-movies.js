import React from 'react'
import FindMovieFields from './components/find-movies-fields'
import SearchMovieInput from './components/find-movies-input'
import FilteredMovies from './components/filtered-movies'

export default function FindMovies() {
  return (
    <section className="d-flex flex-column flex-md-row h-100 mt-md-4">
      <div className='col-12 col-md-2 p-0'>
        <FindMovieFields />
      </div>
      <div className='col-12 col-md-10 d-flex flex-column mt-4 p-0 ml-md-4 mt-md-0 w-100'>
        <SearchMovieInput />
        <FilteredMovies />
      </div>
    </section>
  )
}