import React, { Component } from 'react';
import { getMovie } from '../Actions';
import { connect } from 'react-redux';

class Movie extends Component {
  componentWillMount(props) {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    let movie = this.props.movie;
    if (movie.length < 1) return ( <h1> NO ACTOR FOUND MY FROIND </h1>)
    return (
      <div>
      <p> Title: {movie.title} </p>
      <p> MetaScore: {movie.metascore} </p>
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
    movie: state.movie
  }
};

export default connect(mapStateToProps, { getMovie })(Movie);
