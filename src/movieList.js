import React, { useEffect, useState } from "react"
import { getPopular } from "./tmdbAPI"

export default function MovieList() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getPopular().then(res => {
      console.log(res)
      setMovies(res)
    })
  }, [])

  return (
    <ul
      className="movie-list mx-0 px-0"
      style={{
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "auto"
        // overflowX: "auto",
        // minWidth: "100%",
        // padding: "5rem 0"
      }}
    >
      {movies.map(({ id, title, poster_path }) => {
        return (
          <li
            key={id}
            className="mr-3 mt-3"
            // className="mx-4 shadow-lg movie-list__card rounded"
            style={{ flex: "0 0 auto" }}
          >
            <div className="movie-list__card--image-container rounded">
              <img src={poster_path} alt="poster" className="rounded" />
            </div>
            {/* <div className="movie-list__card--content p-4 text-light h-100 w-100 d-flex flex-column align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-around w-75">
                <span>
                  <i class="far fa-thumbs-up fa-lg" />
                </span>
                <span>
                  <i class="far fa-thumbs-down fa-lg" />
                </span>
                <span>
                  <i class="far fa-heart fa-lg" />
                </span>
              </div>
              <h5 className="text-light m-0">{title}</h5>
            </div> */}
          </li>
        )
      })}
    </ul>
  )
}
