import React, { lazy, Suspense } from "react";
import { Router, Link } from "@reach/router";
import FilteredMovies from "./filtered-movies";
import Loader from "../loader";

const MovieInfo = lazy(() => import("./movie-info"));

export default function MoviesGrid() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <FilteredMovies path="/" />
        <MovieInfo path="/:movieId" />
      </Router>
    </Suspense>
  );
}

export const GridWrapper = ({ children }) => {
  return <div className="d-flex flex-wrap px-0 mt-4 w-100">{children}</div>;
};
