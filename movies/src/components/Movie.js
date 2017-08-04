import React, { Component } from 'react';
// import getMovie from '../Actions';
import { connect } from 'react-redux';

class Movie extends Component {
  constructor(props) {
    super(props);
    // if (this.props.movies.length)
  }
  componentDidMount() {
    console.log('hi');
  }
  render() {
    console.log(this.props.movies[this.props.match.params.id]);
    console.log(this.props.movies.filter((movie) => {
      return movie.id === this.props.match.params.id;
    }))
    return (<div>{
      this.props.movies.filter((movie) => {
        return movie.id === this.props.match.params.id;
      })
    }</div>);
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};

export default connect(mapStateToProps, {  })(Movie);
