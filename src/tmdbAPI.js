import axios from "axios"

// const BASE_URL = `https://api.themoviedb.org/3/movie/550?api_key=${
//   process.env.API_KEY
// }`
//https://api.themoviedb.org/3/discover/movie?api_key=d0d718f69479577b4a5732c80cbb43d8&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018&vote_average.gte=8

export const getPopular = async (mediaType = "all") => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${
    process.env.REACT_APP_API_KEY
    }`
  )

  const data = res.data.results.map(movie => {
    let title = movie.original_title || movie.original_name || movie.title || ""
    return {
      poster_path: `http://image.tmdb.org/t/p/w200/${movie.poster_path}`,
      title,
      id: movie.id
    }
  })

  return data
}

export const getFiltered = async (page = 1, primary_release_year = '2019', vote_average = '8', genreId = '35') => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_year=${primary_release_year}&vote_average.gte=${vote_average}&&with_genres=${genreId}`
  )
  console.log('filtered', res.data.results)
  const data = res.data.results.map(movie => {
    let title = movie.original_title || movie.original_name || movie.title || ""
    return {
      poster_path: `http://image.tmdb.org/t/p/w400/${movie.poster_path}`,
      title,
      id: movie.id
    }
  })

  return data
}
