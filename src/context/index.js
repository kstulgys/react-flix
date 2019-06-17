import React, { createContext, useReducer, useContext, useEffect } from 'react'
import { getPopular, getFiltered } from "../tmdbAPI"

const AppContext = createContext();
const useAppContext = () => useContext(AppContext)

const initialState = {
  filteredMovies: [],
  trendingMovies: [],
  page: 1,
  primary_release_year: '2010',
  vote_average: '8',
  genreId: '35'
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
    default:
      return state;
  }
}

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getPopular().then(trendingMovies => {
      console.log({ trendingMovies })
      dispatch({ type: 'TRENDING_MOVIES', trendingMovies })
    })
    getFiltered().then(filteredMovies => {
      console.log({ filteredMovies })
      dispatch({ type: 'FILTERED_MOVIES', filteredMovies })
    })

  }, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { Provider, useAppContext }