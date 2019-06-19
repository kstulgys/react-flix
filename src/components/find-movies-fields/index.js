import React, { useState } from "react"
import Slider from "./slider"
import SelectGenre from "./select-genre"
import { useAppContext } from "../../context"
import { Button } from "shards-react"
import { getFiltered } from "../../tmdbAPI"

export default function FindMoviesFields() {
  const { state, dispatch } = useAppContext()

  function handleVoteChange(value) {
    dispatch({ type: "VOTE_AVERAGE_CHANGED", vote_average: value })
  }

  function handleReleaseYearChange(value) {
    dispatch({ type: "RELEASE_YEAR_CHANGED", primary_release_year: value })
  }

  function handleSubmit() {
    getFiltered({ ...state }).then(filteredMovies => {
      dispatch({ type: "FILTERED_MOVIES", filteredMovies })
    })
  }

  return (
    <div className="bg-dark px-4 py-5 rounded">
      <div className="">
        <SelectGenre />
      </div>
      <br />
      <Slider
        title="Year"
        min="1990"
        max="2019"
        currentValue={state.primary_release_year}
        onChange={handleReleaseYearChange}
      />
      <br />
      <Slider
        title="Rating"
        min="5"
        max="10"
        defaultVal="8"
        currentValue={state.vote_average}
        onChange={handleVoteChange}
      />
      <br />
      <br />
      <Button
        disabled={state.genreId === "10101"}
        onClick={handleSubmit}
        size="lg"
        className="w-100"
        theme="danger"
      >
        <h5 className="m-0 text-light font-weight-bold">Search</h5>
      </Button>
    </div>
  )
}
