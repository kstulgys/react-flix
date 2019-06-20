import dotenv from "dotenv"
import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import Nav from "./nav-bar"
import TrendingMovies from "./trending-movies"
import FindMovies from "./find-movies"
import { Router, Link } from "@reach/router"
import { Provider, useAppContext } from "./context/index"

import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import "./styles.css"
dotenv.config()

function HomeScreen() {
  return (
    <div>
      <h1>Home Screen</h1>
      <div>
        <Link to='/:movieId'>Movie Screen</Link>
      </div>
    </div>
  )
}

function MovieScreen() {
  return (
    <div>
      <h1>Movie Screen</h1>
      <div>
        <Link to='/'>Home screen</Link>
      </div>
    </div>
  )
}

// function RootApp() {
//   return (
//     <div className="bg-light" style={{ minHeight: "100vh" }}>
//       <Nav />
//       <Router>
//         <HomeScreen path='/' />
//         <MovieScreen path='/:movieId' />
//       </Router>
//     </div>
//   )
// }

function App() {
  const { state } = useAppContext()
  console.log({ state })
  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      <Nav />
      <div className="container-fluid py-5 px-0 px-md-4">
        <TrendingMovies />
        <FindMovies />
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement
)
