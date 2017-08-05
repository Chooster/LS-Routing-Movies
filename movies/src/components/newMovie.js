import React from 'react';
import { newMovie } from '../Actions';
import { connect } from 'react-redux';

let title, director, metascore, stars, id;

let newMovieComponent = ({dispatch}) => {

  return (
    <form className='newMovie' onSubmit={ (e) => {
      e.preventDefault();
      let newMovieObj = {
        title: title.value,
        director: director.value,
        metascore: metascore.value,
        stars: stars.value.split(','),
        id: Number(id.value),
      };
      dispatch(newMovie(newMovieObj));
      title.value = '';
      metascore.value = '';
      director.value = '';
      stars.value = '';
      id.value = '';
    }}>
      <label>Title</label>
      <input ref={(input) => { title = input }}/>
      <br/>
      <label>Director</label>
      <input ref={(input) => { director = input }}/>
      <br/>
      <label>Metascore</label>
      <input ref={(input) => { metascore = input }}/>
      <br/>
      <label>Stars</label>
      <input ref={(input) => { stars = input }}/>
      <br/>
      <label>Id</label>
      <input ref={(input) => { id = input }}/>
      <br />
      <button> Submit </button>
    </form>


  )
};

newMovieComponent = connect()(newMovieComponent);
export default newMovieComponent;
