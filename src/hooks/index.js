import { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "../context";

export const useFetchTMDB = ({ url, action, imageWidth }) => {
  const { state, dispatch } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPopular = async (mediaType = "all") => {
    const { data = {} } = await axios.get(
      `${url}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    const formatedData = data.results.map(movie => {
      let title =
        movie.original_title || movie.original_name || movie.title || "";
      return {
        poster_path: `http://image.tmdb.org/t/p/w${imageWidth}/${
          movie.poster_path
        }`,
        title,
        id: movie.id
      };
    });

    return formatedData;
  };

  useEffect(() => {
    getPopular().then(trendingMovies => {
      dispatch({
        type: action,
        trendingMovies
      });
      setData(trendingMovies);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    data
  };
};
