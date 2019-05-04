import React, { Component } from "react";
import Styled from "styled-components";
import { Poster } from "./Movie";
import Overdrive from 'react-overdrive'

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetail extends Component {
  state = {
    movie: {}
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=d5c2b32407e3b55f5f9bbe921cac355c&language=en-US`
      );
      const movie = await res.json();
      this.setState({
        movie: movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  

  render() {
    const { movie } = this.state
    let recomended = 'yes'

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt={movie.title}
            />
          </Overdrive>
          <div>
            {recomended === 'yes' ? (
                <h1> Get this movie</h1>
              ) : (
                <h1> Dont get this movie</h1>
              )
            }
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;


const MovieWrapper = Styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = Styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
    margin-top: -3rem;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
