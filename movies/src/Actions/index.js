import axios from 'axios';

export const getMovies = () => {
  const promise = axios.get('http://localhost:5000/movies');
  return {
    type: 'GET_MOVIES',
    payload: promise
  }
};

export const getMovie = (id) => {
  const promise = axios.get(`http://localhost:5000/movies/${id}`);
  return {
    type: 'GET_MOVIES',
    payload: promise
  }
};
