import React from 'react';
 
const MoviesShow = props => {
  return (
    <div>
      <h3>Movies Show Component!</h3>
      <p>{props.match.params.movieId}</p>
      {console.log(props)}
    </div>
  )
}

export default MoviesShow;
