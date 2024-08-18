import { setwatchlist } from "../slice/watchlistSlice/watchlistSlice";


export const getwatchlist = (value1,value2) => dispatch => {
    console.log(value1, value2)
  const data = value1.filter(obj => value2.includes(obj.id));
  dispatch(setwatchlist(data));
};