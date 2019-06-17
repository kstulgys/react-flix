import React, { useState } from 'react'
import Slider from './slider'
import SelectGenre from "./select-genre"
import { useAppContext } from '../../context'
import { Button } from 'shards-react'

export default function FindMoviesFields() {
  return (
    <div className='bg-dark px-4 py-5  rounded'>
      <div className=''>
        <SelectGenre />
      </div>
      <br />
      <Slider title='Releas year +' min="1990" max="2019" defaultVal="2019" />
      <br />
      <Slider title='Average rating +' min="5" max="10" defaultVal="8" />
      <br />
      <br />
      <Button size='lg' className='w-100' theme="danger"><h5 className='m-0 text-light font-weight-bold'>Search</h5></Button>
    </div>
  )
}
