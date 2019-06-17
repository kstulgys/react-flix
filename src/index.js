import dotenv from "dotenv"
import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import Nav from "./Nav"
import MovieList from "./movieList"
import SelectGenre from "./select-genre"
import { FormInput } from "shards-react"
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import "./styles.css"
dotenv.config()

function App() {
  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      <Nav />
      <div className="container-fluid">
        <h3 className="m-0 mt-5 font-weight-bold">Trending this week</h3>
        <MovieList />
        <section className="d-flex">
          <div className="p-5 p-md-4 mt-4 col-12 col-md-4 col-lg-2 bg-dark shadow-lg bg-danger rounded text-light">
            <div>
              <p className="text-light font-weight-bold mb-2">Genre</p>
              <SelectGenre />
            </div>
            <br />
            <div>
              <p className="text-light font-weight-bold mb-2">Search</p>
              <FormInput size="md" placeholder="Search" />
            </div>
            <br />

            <div class="w-100">
              <p className="text-light font-weight-bold mb-2">Year from</p>
              <input
                className="w-100"
                type="range"
                min="1"
                max="100"
                value="50"
                id="myRange"
              />
            </div>

            <div class="w-100">
              <p className="text-light font-weight-bold mb-2">Year to</p>
              <input
                className="w-100"
                type="range"
                min="1"
                max="100"
                value="50"
                id="myRange"
              />
            </div>
            <br />

            <div>
              <button className="btn btn-danger w-100 font-weight-bold">
                Search
              </button>
            </div>
          </div>
        </section>

        <section className="vh-100" />
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
