import React, { Suspense } from "react";
import { useAppContext } from "../../context";
import { Router, Link } from "@reach/router";
import { getMovieInfo } from "../../tmdbAPI";
import { GridWrapper } from "./index";

export default function Movie({ id, title, poster_path }) {
  // const {
  //   state: { filteredMovies }
  // } = useAppContext();

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
}
