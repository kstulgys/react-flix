import React, { createContext, useReducer, useContext, useEffect } from 'react'
import { getPopular, getFiltered, getGenreIds } from "../tmdbAPI"

const AppContext = createContext();
const useAppContext = () => useContext(AppContext)

const initialState = {
  genres: [],
  filteredMovies: [],
  trendingMovies: [],
  page: 1,
  primary_release_year: '2018',
  vote_average: '8',
  genreId: '878'
}

function reducer(state, action) {
  switch (action.type) {
    case 'PAGE_CHANGED':
      return { ...state, page: action.page }
    case 'YEAR_CHANGED':
      return { ...state, primary_release_year: action.year }
    case 'VOTE_CHANGED':
      return { ...state, vote_average: action.vote }
    case 'GENRE_CHANGED':
      return { ...state, genreId: action.genreId }
    case 'TRENDING_MOVIES':
      return { ...state, trendingMovies: action.trendingMovies }
    case 'FILTERED_MOVIES':
      return { ...state, filteredMovies: action.filteredMovies }
    case 'GENRES':
      return { ...state, genres: action.genres }
    case 'NEW_GENRE_ID':
      return { ...state, genreId: action.genreId }
    case 'VOTE_AVERAGE_CHANGED':
      return { ...state, vote_average: action.vote_average }
    case 'RELEASE_YEAR_CHANGED':
      return { ...state, primary_release_year: action.primary_release_year }
    default:
      return state;
  }
}

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getPopular().then(trendingMovies => {
      dispatch({ type: 'TRENDING_MOVIES', trendingMovies })
    })

    getFiltered({ ...state }).then(filteredMovies => {
      dispatch({ type: 'FILTERED_MOVIES', filteredMovies })
    })

    getGenreIds().then(genres => {
      dispatch({ type: 'GENRES', genres })
    })
  }, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { Provider, useAppContext }