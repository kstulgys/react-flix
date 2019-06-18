import dotenv from "dotenv"
import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import Nav from "./Nav"
import TrendingMovies from "./trending-movies"
import FindMovies from "./find-movies"
import { Provider, useAppContext } from "./context/index"

import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import "./styles.css"
dotenv.config()

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
