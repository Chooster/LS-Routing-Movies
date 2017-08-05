import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navbar'>
      <Link to="/movies">Home</Link>
      <Link to="/new_movie">Add Movie</Link>
    </div>
  );
};

export default Navigation;
