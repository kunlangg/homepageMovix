// Shows.js
import { useEffect, useState, useRef } from 'react';
import './assets/showsstyle.css';
import { getMovieList, searchMovie } from "./api";

const Shows = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const movieContainerRef = useRef(null);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className='Movie-wrapper' key={i}>
          <img
            className='Movie-image'
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
          <div className='Movie-title'>{movie.title}</div>
          <div className='Movie-date'>{movie.release_date}</div>
          <div className='Movie-rate'>{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const scroll = (direction) => {
    const { current } = movieContainerRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CARI FILM ANDA</h1>
        <input
          placeholder='Cari Film Kesayangan'
          className='Movie-search'
          onChange={({ target }) => search(target.value)}
        />
        <div className='Movie-scroll-button left' onClick={() => scroll('left')}>&lt;</div>
        <div className='Movie-container' ref={movieContainerRef}>
          <PopularMovieList />
        </div>
        <div className='Movie-scroll-button right' onClick={() => scroll('right')}>&gt;</div>
      </header>
    </div>
  );
};

export default Shows;
