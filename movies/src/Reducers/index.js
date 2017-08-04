import { combineReducers } from 'redux';
import { getMovies } from '../Actions';

const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return action.payload.data;
    default:
      return movies;
  }
};


const rootReducer = combineReducers({
  movies: moviesReducer
});

export default rootReducer;
