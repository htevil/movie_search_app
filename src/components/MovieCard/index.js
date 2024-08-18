// MoviesCard.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addMovies, removeMovies } from '../../slice/watchlistSlice/watchlistSlice';
import Detail from '../../components/Modal';
import star from "../../assets/star.svg";
import "./index.css";

export default function MoviesCard({ movie }) {
  const dispatch = useDispatch();
  const { listedmovies } = useSelector(state => state.listedmovies);
  const [isActive, setIsActive] = useState(false);

  const { id, rank, title, genres, ratings, year, image_url, director } = movie;
  const formattedGenres = genres.replace(/\[|\]|'/g, '').replace(/\s*,\s*/g, ',');

  const handleWatchlistToggle = (event) => {
    const movieId = event.target.value;
    const isMovieListed = listedmovies.includes(movieId);

    if (isMovieListed) {
      dispatch(removeMovies(movieId));
    } else {
      dispatch(addMovies(movieId));
    }
  };

  useEffect(() => {
    setIsActive(listedmovies.includes(movie.id));
  }, [listedmovies, movie.id]);

  return (
    <div className="card" id={`movie-${id}`}>
      <div className='poster' style={{ backgroundImage: `url(${image_url})` }}>
        <button
          className={`watchlist ${isActive ? 'active' : ''}`}
          value={id}
          onClick={handleWatchlistToggle}
        ></button>
        <div className='rank'>{rank}</div>
      </div>
      <div className='detail' style={{ marginTop: '5px', marginBottom: '5px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '160px', fontWeight: '500', color: '#FBF6E2' }}>{title}</div>
          <div style={{ width: '32px', fontSize: '12px' }}>{year}</div>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <span style={{ color: '#525CEB', fontWeight: '700' }}>Genre: </span>
          <span style={{ fontSize: '12px' }}>{formattedGenres}</span>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <span style={{ color: '#525CEB', fontWeight: '700' }}>Director: </span>
          <span style={{ fontSize: '12px' }}>{director}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <img src={star} alt="Rating" />{ratings}
          </span>
          <Detail movie={movie} />
        </div>
      </div>
    </div>
  );
}
