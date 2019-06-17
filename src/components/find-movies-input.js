import React from 'react'
import { FormInput, Button } from "shards-react"

export default function SearchMoviesInput() {
  return (
    <div className='w-100'>
      <div className='col-12 col-md-4 p-0'>
        <FormInput size="lg" placeholder="Search" className='m-0' />
      </div>
    </div>
  )
}