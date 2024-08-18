// Watchlist.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import MovieCard from "../../components/MovieCard";
import Swiper from "../../components/swiper";
import { getwatchlist } from "../../Reducers/listedmovies";
import NMW from "../../assets/NMW.png";

const Watchlist = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const { listedmovies, wmovies } = useSelector((state) => state.listedmovies);

  useEffect(() => {
    dispatch(getwatchlist(movies, listedmovies));
  }, [dispatch, listedmovies, movies]);

  return (
    <>
      <div className="container">
        <Swiper />
      </div>
      <div className="container1">
        <Navbar />
        <section className="content">
          {wmovies?.length > 0 ? (
            wmovies.map((wmovie) => <MovieCard key={wmovie.id} movie={wmovie} />)
          ) : (
            <div
              style={{
                width: "85vw",
                height: "500px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={NMW}
                alt="No Movies in Watchlist"
                style={{ width: "300px", opacity: "0.4" }}
              />
              <span
                style={{
                  fontSize: "16px",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                No movie in WatchList
              </span>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Watchlist;
