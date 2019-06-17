import React, { useEffect } from "react"

export default function Nav() {
  return (
    <nav className="shadow w-100 bg-dark">
      <div className="container py-4 d-flex align-items-center">
        <h3 className="text-danger m-0 font-weight-bold">Reactflix</h3>
        <a href="/#" className="btn ml-auto font-weight-bold text-light">
          Sign In
        </a>
      </div>
    </nav>
  )
}
