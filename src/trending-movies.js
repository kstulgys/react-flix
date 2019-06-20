import React, { useEffect, useState } from "react"
import { useAppContext } from './context'
import { Link } from "@reach/router"

export default function MovieList() {
  const { state: { trendingMovies }, dispatch } = useAppContext()

  return (
    <div className=''>
      <h3 className="m-0 font-weight-bold">Trending this week</h3>
      <ul
        className="movie-list mx-0 px-0 pb-2"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto"
        }}
      >
        {trendingMovies.map(({ id, title, poster_path }) => {
          return (
            <li
              key={id}
              className="mr-4 mt-4 shadow"
              // className="mx-4 shadow-lg movie-list__card rounded"
              style={{ flex: "0 0 auto" }}
            >
              <div className="movie-list__card--image-container rounded">
                <Link to={`/${id}`}>
                  <img src={poster_path} alt="poster" className="rounded" />
                </Link>
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
    </div>
  )
}
