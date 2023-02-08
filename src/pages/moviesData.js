import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context";
import "./moviesData.css";
import Header from "./Header";

const MoviesData = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const { state, setState } = useContext(MovieContext);

  const handleDescription = (id, movie) => {
    // /movies/tt1515091
    //  /title/123
    // console.log(id.split('/'))
    const moviesId = id.split("/");
    // console.log(moviesId);
    navigate("/movies/" + moviesId[2]);

    //  movie.image.url
    // console.log("MOVIE", movie);

    setState((oldState) => ({ ...oldState, imageUrl: movie?.image?.url }));
  };

  useEffect(() => {
    moviesData();
  }, []);

  const moviesData = () => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/v2/find",
      params: { title: "game of", limit: "20", sortArg: "moviemeter,asc" },
      headers: {
        "X-RapidAPI-Key": "e382f7fbc9mshd40fb03cea68541p1a19b9jsn6b0a16e430d8",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("Api Data", response.data.results);
        setMovies(response.data.results);
      })

      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <div className="movie-data">
        {movies.map((el, i) => (
          <div className="movies-data" key={i}>
            <img src={el.image?.url} alt="Movies" />
            <p>{el.title}</p>
            <p
              className="play-now"
              onClick={() => handleDescription(el.id, el)}
            >
              Play now
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesData;
