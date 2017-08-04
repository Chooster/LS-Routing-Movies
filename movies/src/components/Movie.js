import React, { Component } from 'react';
import { getMovie, getMovies } from '../Actions';
import { connect } from 'react-redux';

class Movie extends Component {
  componentWillMount(props) {
    this.props.getMovie(this.props.match.params.id);
    this.props.getMovies();
  }
  render() {
    let movie = this.props.movie.length > 1 ? this.props.movie[this.props.match.params.id] : this.props.movie;
    console.log(movie);
    if (movie.length < 1) return ( <h1> NO ACTOR FOUND MY FROIND </h1>)
    return (
      <div>
      <p> Title: {movie.title} </p>
      <p> Director: {movie.director} </p>
      <p> Actors :
      {movie.stars.map((star, i) => {
        return (
          <a key={i} href={`http://google.com?q=${star}`}  target='/' className='stars'>
            {star}
          </a>
        );
      })}
      </p>
      <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies
  }
};

export default connect(mapStateToProps, { getMovie, getMovies })(Movie);
