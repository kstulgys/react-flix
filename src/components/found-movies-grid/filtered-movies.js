import React, { lazy, Suspense } from "react";
import { useAppContext } from "../../context";
import { GridWrapper } from "./index";
import Movie from "./movie";

export default function FilteredMovies() {
  const {
    state: { filteredMovies }
  } = useAppContext();

  return (
    <GridWrapper>
      {filteredMovies.map(({ id, title, poster_path }) => {
        return (
          <Movie key={id} id={id} title={title} poster_path={poster_path} />
        );
      })}
    </GridWrapper>
  );
}
