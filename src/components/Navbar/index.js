import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMovies, getMoviesBySearch } from "../../api/movies";
import { setcurrentPage } from "../../slice/movieSlice/movieSlice";
import { activewatchlist } from "../../slice/watchlistSlice/watchlistSlice";
import { debounce } from "lodash";
import Dropdown from "../SelectorComponent/Dropdown";
import Popup from "../SelectorComponent/Popup";
import logo from "../../assets/oie_transparent.png";
import WatchList from "../../assets/watchList.png";
import "./index.css";
import "./watchlist.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);
  const HeaderRef = useRef(null);
  const FilterRef = useRef(null);
  const WatchListRef = useRef(null);
  const IconContainerRef = useRef(null);
  const textRef = useRef(null);

  const { Active } = useSelector((state) => state.listedmovies);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = HeaderRef.current.offsetHeight;
      if (window.scrollY > (navHeight + 150)) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [HeaderRef]);

  const handleLogos = () => {
    FilterRef.current.style.display = isFixed ? 'flex' : 'none';
    IconContainerRef.current.style.display = isFixed ? 'none' : '';
  };

  useEffect(() => {
    handleLogos();
  }, [isFixed]);

  const onSearchChange = debounce((e) => {
    if (e.target.value.length > 2) { 
      dispatch(getMoviesBySearch(e.target.value));
      dispatch(setcurrentPage(1));
    }else{
      dispatch(getMovies())
    }
  }, 500);

  const callWatchlist = () => {
    if (Active) {
      navigate('/');
      dispatch(activewatchlist(false));
    } else {
      navigate('./Watchlist');
      dispatch(activewatchlist(true));
    }
  };

  return (
    <header ref={HeaderRef} className={`navbar ${isFixed ? 'fixed' : ''}`}>
      <img id="logo" src={logo} alt="logo"/>
      <div className="group">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon" alt="searchlogo">
          <g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g>
        </svg>
        <input type="text" maxLength="40" onChange={onSearchChange} placeholder="Search the movies" />

        <button ref={WatchListRef} onClick={callWatchlist} className={`${isFixed ? 'btn' : 'WatchListBtn'} ${Active ? 'active' : ''}` }>
          <span ref={IconContainerRef} className="IconContainer">
            <img style={{ width:'20px'}}  src={WatchList} alt="watchList.logo" />
          </span>
          <p ref={textRef} className={`${isFixed ? '' : 'text'}`}>WatchList</p>
        </button>
      </div>
      <div className="fitler_btn" ref={FilterRef} >
        <label style={{ fontSize: '12px', color:"#B2B2B2"}}>Filter by: </label>
        <Popup/>
        <Dropdown/>
      </div>
    </header>
  );
}




