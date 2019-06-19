import React from "react"
import { useAppContext } from "../../context"

export default function FilteredMovies() {
  const {
    state: { filteredMovies }
  } = useAppContext()

  return (
    <div className="d-flex flex-wrap px-0 w-100">
      {filteredMovies.map(({ id, title, poster_path }) => {
        return (
          <div
            key={id}
            className="mt-4 rounded col-12 px-0 mx-0 col-md-6 pr-md-4 col-lg-4"
            // style={{ width: "400px" }}
          >
            <img
              src={poster_path}
              alt="poster"
              className="rounded shadow"
              style={{ objectFit: "cover", width: "100%", height: "300px" }}
            />
          </div>
        )
      })}
    </div>
  )
}
