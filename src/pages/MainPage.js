import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context";
import "./MainPage.css";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const { state, setState } = useContext(MovieContext);

  const handleDescription = (id, movie) => {
    // /movies/tt1515091
    //  /title/123
    // console.log(id.split('/'))
    const moviesId = id.split("/");
    navigate("/movies/" + moviesId[2]);

    //  movie.image.url
    // console.log("MOVIE", movie);

    setState((oldState) => ({ ...oldState, imageUrl: movie?.image?.url }));
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/v2/find",
      params: { title: "game of", limit: "20", sortArg: "moviemeter,asc" },
      headers: {
        "X-RapidAPI-Key": "4840b57dbbmshfe6dc67ab3ba8bcp1bd5bcjsn006b80f4ec62",
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
  }, []);

  return (
    <>
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

export default MainPage;
