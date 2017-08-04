import React, { Component } from 'react';
import { getMovies } from '../Actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MoviesList extends Component {

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.movies.map((item, i) => {
            return (
              <li key={item.id}>
                <Link to={`/movies/${item.id}`}  >{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};

export default connect(mapStateToProps, { getMovies })(MoviesList);
