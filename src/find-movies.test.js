import "jest-dom/extend-expect";
import React from "react";
import FindMovies from "./find-movies";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";
import { Provider } from "./context";
import {
  searchMovies as mockSearchMovies
  // getPopular,
  // getFiltered,
  // getGenreIds
} from "./tmdbAPI";

// afterEach(cleanup)

jest.mock("./tmdbAPI", () => {
  return {
    searchMovies: jest.fn(() =>
      Promise.resolve([{ id: 1, title: "test-1", poster_path: "test-path" }])
    ),
    getPopular: jest.fn(() => Promise.resolve([{}])),
    getFiltered: jest.fn(() => Promise.resolve([{}])),
    getGenreIds: jest.fn(() => Promise.resolve([{}]))
  };
});

test("1. input onChange gets updated, 2. button onClick fires searchMovies request with input value, 3. Results are in the document", async () => {
  const { debug, getByPlaceholderText, getByTestId } = render(
    <Provider>
      <FindMovies />
    </Provider>
  );
  const testText = "some movie title";
  const input = getByPlaceholderText("Search movies...");
  fireEvent.change(input, { target: { value: testText } });
  expect(input.value).toBe(testText);

  const button = getByTestId("search-button");
  fireEvent.click(button);
  expect(mockSearchMovies).toHaveBeenCalledTimes(1);
  expect(mockSearchMovies).toHaveBeenCalledWith(testText);

  await wait(() => expect(getByTestId("found-movie-item")).toBeInTheDocument());
});
