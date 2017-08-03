import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to="/movies">Home</Link>
      <Link to="/movies/:id">Movies</Link>
    </div>
  );
};

export default Navigation;
