import axios from "axios"

export const getPopular = async (mediaType = "all") => {
  const { data = {}
  } = await axios.get(
    `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${
    process.env.REACT_APP_API_KEY
    }`
  )

  const formatedData = data.results.map(movie => {
    let title = movie.original_title || movie.original_name || movie.title || ""
    return {
      poster_path: `http://image.tmdb.org/t/p/w200/${movie.poster_path}`,
      title,
      id: movie.id
    }
  })

  return formatedData
}

export const getFiltered = async ({ page, primary_release_year, vote_average, genreId }) => {
  const { data = {} } = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_year=${primary_release_year}&vote_average.gte=${vote_average}&&with_genres=${genreId}`
  )
  const formatedData = data.results.map(movie => {
    let title = movie.original_title || movie.original_name || movie.title || ""
    return {
      poster_path: `http://image.tmdb.org/t/p/w400/${movie.poster_path}`,
      title,
      id: movie.id
    }
  })

  return formatedData
}

export const getGenreIds = async () => {
  const { data = {} } = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
  return data.genres
}

export const searchMovies = async (query = "", page = 1) => {
  const { data = {} } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  )

  const formatedData = data.results.map(movie => {
    let title = movie.original_title || movie.original_name || movie.title || ""
    return {
      poster_path: `http://image.tmdb.org/t/p/w400/${movie.poster_path}`,
      title,
      id: movie.id
    }
  })

  return formatedData
}

export const getMovieInfo = async (movieId) => {
  const { data = {} } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
  console.log({ data })
  let title = data.title || data.original_title || data.original_name || ""

  const formatedData = {
    poster_path: `http://image.tmdb.org/t/p/w500/${data.poster_path}`,
    title,
    id: data.id,
    overview: data.overview
  }
  return formatedData
}



// function formatData(data) {
//   return data.results.map(movie => {
//     let title = movie.original_title || movie.original_name || movie.title || ""
//     return {
//       poster_path: `http://image.tmdb.org/t/p/w400/${movie.poster_path}`,
//       title,
//       id: movie.id
//     }
//   })
// }



