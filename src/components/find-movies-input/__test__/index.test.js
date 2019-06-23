// // import 'jest-dom/extend-expect'
import React from 'react'
import FindMoviesInput from '../index'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Provider } from '../../../context'
import { searchMovies as mockSearchMovies } from "../../../tmdbAPI"

afterEach(cleanup)

test('sample test', () => {
  console.log('test in input')
  // const { debug, queryByPlaceholderText } = render(
  //   <Provider>
  //     <FindMoviesInput />
  //   </Provider>
  // )
  // const testText = 'some movie title'
  // const input = queryByPlaceholderText('Search movies...')

  // fireEvent.change(input, { target: { value: testText } })
  // expect(input.value).toBe(testText)
})

