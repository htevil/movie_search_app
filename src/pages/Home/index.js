// Home.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../api/movies';
import { setcurrentPage } from '../../slice/movieSlice/movieSlice';
import Navbar from '../../components/Navbar';
import MovieCard from '../../components/MovieCard';
import Swiper from '../../components/swiper';
import Pagination from '../../components/Pagination';
import loader from '../../assets/loader.svg';
import NMF from '../../assets/NFM.png';

const ITEMS_PER_PAGE = 20; // Adjust this value as needed

const Home = () => {
  const dispatch = useDispatch();
  const { movies, currentPage } = useSelector((state) => state.movies);
  const [dataload, setDataload] = useState(true);

  const totalMovies = movies.length;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalMovies);
  const paginatedMovies = movies.slice(startIndex, endIndex);
  const totalPages = Math.ceil(totalMovies / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    dispatch(setcurrentPage(pageNumber));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setDataload(true);
      await dispatch(getMovies());
      setDataload(false);
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <Swiper />
      </div>
      <div className="container1">
        <Navbar />
        <section className="content">
          {dataload ? (
            <div
              style={{
                width: '85vw',
                height: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={loader} style={{ width: '200px', opacity: '0.4' }} alt="Loading..." />
              <span style={{ color: 'white', marginTop: '10px' }}>Loading&hellip;</span>
            </div>
          ) : movies.length > 0 ? (
            paginatedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <div
              style={{
                width: '85vw',
                height: '550px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={NMF} style={{ width: '380px', opacity: '0.4' }} alt="No Movies Found" />
              <span style={{ fontSize: '16px', color: 'white', opacity: '0.7' }}>
                No movies found&hellip;
              </span>
            </div>
          )}
        </section>
        <Pagination totalPages={totalPages} handlePageChange={handlePageChange} />
      </div>
    </>
  );
};

export default Home;
