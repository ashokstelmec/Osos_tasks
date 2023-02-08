import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../context";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "./movieDescription.css";

const MovieDescription = () => {
  const [movieData, setMovieData] = useState([]);
  const { state, setState } = useContext(MovieContext);

  const { id } = useParams();

  useEffect(() => {
    moviesDescription();
  }, [id]);

  const moviesDescription = () => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-synopses",
      params: { tconst: id },
      headers: {
        "X-RapidAPI-Key": "e382f7fbc9mshd40fb03cea68541p1a19b9jsn6b0a16e430d8",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("Response", response.data);
        setMovieData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  return (
    <>
      <div className="movie-description">
        <Header />
        <div className="about-movie">
          <img
            src={state?.imageUrl}
            alt="About it"
            className="descript-image"
          />
          <button className="watch-now-button">Watch now</button>
          <button className="watch-later-button">Watch Later</button>
          <br />
          <br />
          <br />
          <p>
            {movieData[0]?.text
              ? movieData[0]?.text.slice(0, 500)
              : "No Description here"}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieDescription;
