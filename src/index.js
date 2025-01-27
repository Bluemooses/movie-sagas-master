import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("GET_MOVIES", getMovies);
  yield takeEvery("GET_THIS_MOVIE", getThisMovie);
  yield takeEvery("GET_GENRES", getGenres);
  yield takeEvery("EDIT_MOVIES", editMovies);
  yield takeEvery("UPDATE_MOVIES", updateMovies);
}

function* getMovies() {
  try {
    const response = yield axios.get("/movie");
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch (err) {
    console.log("SAGA get ERR", err);
  }
}
function* getThisMovie(action) {
  console.log("client side GET", action.payload.id);
  try {
    let response = yield axios.get(`/details/${action.payload.id}`);
    console.log("details GET saga response", response.data);
    //gives selected movie details to detail reducer
    yield put({
      type: "SET_DETAILS",
      payload: response.data,
    });
  } catch (error) {
    console.log("error in details GET client side", error);
  }
}

function* getGenres(action) {
  try {
    let result = yield axios.get(`/movie/genres/${action.payload}`);
    yield put({
      type: "SET_GENRES",
      payload: result.data,
    });
  } catch (error) {
    console.log("error in get genres", error);
  }
}

function* editMovies(action) {
  try {
    console.log(action.payload);
    yield axios.put(`/movie/edit/${action.payload.id}`, {
      title: action.payload.title,
      description: action.payload.description,
    });
    yield put({
      type: "GET_MOVIES",
    });
  } catch (error) {
    console.log("error in movies edit");
  }
}

function* updateMovies(action) {
  try {
    console.log(action.payload);
    yield put({
      type: "GET_THIS_MOVIE",
    });
  } catch (error) {
    console.log("Err in update");
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

const details = (
  state = {
    id: 0,
    title: "",
    poster: "",
    description: "",
  },
  action
) => {
  switch (action.type) {
    case "SET_DETAILS":
      return (state = action.payload);
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    details,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
