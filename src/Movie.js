import React from 'react'  
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Styled from "styled-components";
import Overdrive from 'react-overdrive'
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'


const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={movie.id}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
  </Link>
);


Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired
}

export const Poster = Styled.img`
    box-shadow: 0 0 35px black;
`;

export default Movie;