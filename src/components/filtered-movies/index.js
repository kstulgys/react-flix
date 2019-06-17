import React from 'react'
import { useAppContext } from '../../context'

export default function FilteredMovies() {
  const { state: { filteredMovies }, dispatch } = useAppContext()

  return (
    <div className='d-flex flex-wrap'>
      {filteredMovies.map(({ id, title, poster_path }) => {
        return (
          <div key={id} className='shadow mr-4 mt-4 rounded'>
            <img src={poster_path} alt='poster' className='rounded' style={{ objectFit: 'cover', width: '400px', height: '300px' }} />
          </div>
        )
      })}
    </div>
  )
}



