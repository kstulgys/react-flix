import axios from "axios"

// const BASE_URL = `https://api.themoviedb.org/3/movie/550?api_key=${
//   process.env.API_KEY
// }`

export const getPopular = async (mediaType = "all") => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${
      process.env.API_KEY
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

  // const data = await Promise.all(posterPromises)

  console.log({ data })
  // console.log({ posterData: data })

  return data
  // console.log({ res })
}
