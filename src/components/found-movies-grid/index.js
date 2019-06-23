import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context";
import { Router, Link } from "@reach/router";
import { getMovieInfo } from "../../tmdbAPI";

export default function MoviesGrid() {
  return (
    <Router>
      <FilteredMovies path="/" />
      <MovieInfo path="/:movieId" />
    </Router>
  );
}

function FilteredMovies() {
  const {
    state: { filteredMovies }
  } = useAppContext();

  return (
    <GridWrapper>
      {filteredMovies.map(({ id, title, poster_path }) => {
        return (
          <div
            data-testid="found-movie-item"
            key={`${id}-${title}`}
            className="rounded col-12 px-0 mb-4 col-md-6 pr-md-4 col-lg-4 w-100"
          >
            <Link to={`/${id}`}>
              <img
                src={poster_path}
                alt="poster"
                className="rounded shadow"
                style={{ objectFit: "cover", width: "100%", height: "300px" }}
              />
            </Link>
          </div>
        );
      })}
    </GridWrapper>
  );
}

function MovieInfo({ movieId }) {
  const [movieInfo, setMovieInfo] = useState(null);
  useEffect(() => {
    getMovieInfo(movieId).then(movieInfo => setMovieInfo(movieInfo));
  }, [movieId]);
  return (
    <GridWrapper>
      <div className="w-100">
        {!movieInfo ? (
          <div>
            {" "}
            <h1>Loading...</h1>{" "}
          </div>
        ) : (
          <div className="d-flex">
            <div className="col-6 p-0">
              <img
                src={movieInfo.poster_path}
                className="rounded"
                alt="poster"
                style={{ width: "100%" }}
              />
            </div>

            <div className="col-6 p-0 pl-4">
              <h4>{movieInfo.title}</h4>
              <h5>{movieInfo.overview}</h5>
            </div>
          </div>
        )}
      </div>
    </GridWrapper>
  );
}

function GridWrapper({ children }) {
  return <div className="d-flex flex-wrap px-0 mt-4 w-100">{children}</div>;
}
