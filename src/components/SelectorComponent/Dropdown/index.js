import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setcurrentPage } from '../../../slice/movieSlice/movieSlice';
import { getMoviesByfilter } from '../../../api/movies';
import { getAllGenres } from "../../../api/movies";
import { SlButton, SlDropdown, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';
import "./index.css"

export default function Dropdown() { 
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState('');
    const { genres } = useSelector((state) => state.movies);
    const [isActive, setIsActive] = useState(false); 
    const [isActive1, setIsActive1] = useState(false); 

    const handleChange = (event) => {
      if(event.target.value===selectedValue){
        setSelectedValue("");
        dispatch(getMoviesByfilter("genre:"));
      }else{
        setSelectedValue(event.target.value);
        console.log(event.target.value)
        let value = `genre:${event.target.value}`
        window.scrollTo(0, 0);
        dispatch(setcurrentPage(1));
        dispatch(getMoviesByfilter(value));
      }
      setIsActive(!isActive); 
    };

    useEffect(() => {
      dispatch(getAllGenres());
    }, []);

    useEffect(() => {
      if (selectedValue) {
        setIsActive1(true)
      } else {
        setIsActive1(false)
      }
    }, [selectedValue]);

    return (
      <SlDropdown placement="top-start">
        <SlButton className={`btn2 ${isActive ? 'activedb' : ''}`} variant="text" slot="trigger" value={selectedValue}>
          { (selectedValue === "")? "Genres" : selectedValue  }
        </SlButton>
        <SlMenu>
          {genres?.length > 0 && genres.map((item) => (
            <SlMenuItem className={`menu ${isActive1 && item === selectedValue ? 'activedd' : ''}`} value={item} id={item} onClick={handleChange} >
              {item}
            </SlMenuItem>
          ))}
        </SlMenu>
      </SlDropdown>
    );
}