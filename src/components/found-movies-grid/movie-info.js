import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useAppContext } from "../../context";
import { Router, Link } from "@reach/router";
import { getMovieInfo } from "../../tmdbAPI";
import { GridWrapper } from "./index";
import Loader from "../loader";
export default function MovieInfo({ movieId }) {
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    getMovieInfo(movieId).then(movieInfo => setMovieInfo(movieInfo));

    return () => {
      setMovieInfo(null);
    };
  }, [movieId]);

  return !movieInfo ? (
    <Loader />
  ) : (
    <GridWrapper>
      <div className="w-100">
        <div className="d-flex">
          <div className="col-6 p-0">
            <img
              src={movieInfo && movieInfo.poster_path}
              className="rounded"
              alt="poster"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-6 p-0 pl-4">
            <h4>{movieInfo && movieInfo.title}</h4>
            <h5>{movieInfo && movieInfo.overview}</h5>
          </div>
        </div>
        )
      </div>
    </GridWrapper>
  );
}
