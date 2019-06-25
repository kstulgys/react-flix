import React, { useEffect, useState } from "react";
import { useAppContext } from "./context";
import { Link } from "@reach/router";
import { useFetchTMDB } from "./hooks";
import Loader from "./components/loader";
const url = ` https://api.themoviedb.org/3/trending/All/week`;

export default function TrendingMovies() {
  // const {
  //   state: { trendingMovies },
  //   dispatch
  // } = useAppContext();

  const { loading, data } = useFetchTMDB({
    url,
    imageWidth: 200,
    action: "TRENDING_MOVIES"
  });

  return (
    <div className="">
      <h3 className="m-0 font-weight-bold">Trending this week</h3>
      <ul
        className="movie-list mx-0 px-0 pb-2"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto"
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          data.map(({ id, title, poster_path }) => {
            return (
              <li
                key={`${id}-${title}`}
                className="mr-4 mt-4 shadow"
                style={{ flex: "0 0 auto" }}
              >
                <div className="movie-list__card--image-container rounded">
                  <Link to={`/${id}`}>
                    <img src={poster_path} alt="poster" className="rounded" />
                  </Link>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
