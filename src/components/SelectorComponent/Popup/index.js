import React, { useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import { getMoviesByfilter } from "../../../api/movies";
import { setcurrentPage } from "../../../slice/movieSlice/movieSlice";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button
} from '@chakra-ui/react';

export default function Popup() {
  const dispatch = useDispatch();
  const initialFocusRef = useRef();
  const [rating, setRating] = useState(1.0);

  const onRatingChange = (event) => {
    setRating(parseFloat(event.target.value));
  };

  const onRatingSearch = () => {
    console.log(rating);
    let value = `rating:${rating}`;
    dispatch(getMoviesByfilter(value));
    window.scrollTo(0, 0);
    dispatch(setcurrentPage(1));
  };

  const onRatingReset = () => {
    setRating(1.0);
    dispatch(getMoviesByfilter("1"));
  };

  return (
    <Popover initialFocusRef={initialFocusRef} placement='bottom' closeOnBlur={false} >
      <PopoverTrigger>
        <Button w="fit-content" h="fit-content" fontSize='14px' fontWeight='400' color="#F5F7F8" padding='10px 5px 10px 5px' margin='5px' backgroundColor='transparent' borderRadius='4px' _hover={{ backgroundColor: "#17153B", color: "#525CEB"}}>{rating === 1.0 ? "Rating" : rating.toFixed(1)}</Button>
      </PopoverTrigger>

      <PopoverContent color='white' bg='rgba(0, 0, 0, 0.9)'  w="240px" h="fit-content" p="5px 10px 5px 10px" borderRadius='4px'>
        <PopoverArrow bg='rgba(0, 0, 0, 0.9)' />
        <PopoverHeader display='flex' alignItems='center' justifyContent='flex-end'>
          <PopoverCloseButton w="5px" bg='transparent' color="#F5F7F8" _hover={{backgroundColor: "rgba(0,0,0,0.2)", color: "#525CEB"}} />
        </PopoverHeader>

        <PopoverBody w='100%' m='5px 0px 2.5px 0px ' >
          <input type="range" min="1.0" max="10.0" step="0.1" value={rating} style={{ width:'96%', height:'6px', margin:'5px 0px 2.5px 0px', color:"#F5F7F8" }} onChange={onRatingChange} />
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-around',margin:'5px 0px 8px 0px'  }} >
          <span style={{color:'#F5EDED'}}>1</span>
          <span style={{color:'#F5EDED'}}>2</span>
          <span style={{color:'#F5EDED'}}>3</span>
          <span style={{color:'#F5EDED'}}>4</span>
          <span style={{color:'#F5EDED'}}>5</span>
          <span style={{color:'#F5EDED'}}>6</span>
          <span style={{color:'#F5EDED'}}>7</span>
          <span style={{color:'#F5EDED'}}>8</span>
          <span style={{color:'#F5EDED'}}>9</span>
          <span style={{color:'#F5EDED'}}>10</span>
          </div>
        </PopoverBody>

        <PopoverFooter border='0' display='flex' alignItems='center' justifyContent='space-between' pb={4} >
          <Button w="fit-content" h="fit-content" fontSize='12px' fontWeight='00' color="#F5F7F8" padding='5px' backgroundColor='transparent' borderRadius='4px' _hover={{ backgroundColor: "rgba(0,0,0,0.2)", color: "#525CEB"}} onClick={onRatingSearch}>Apply</Button>
          <Button w="fit-content" h="fit-content" fontSize='12px' fontWeight='600' color="#F5F7F8" padding='5px' backgroundColor='transparent' borderRadius='4px' _hover={{ backgroundColor: "rgba(0,0,0,0.2)", color: "#525CEB"}} onClick={onRatingReset}>Reset</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}