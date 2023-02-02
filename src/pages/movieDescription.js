import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../context";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./movieDescription.css";

const MovieDescription = () => {
  const [movieData, setMovieData] = useState([]);
  const { state, setState } = useContext(MovieContext);

  const { id } = useParams();
  // console.log("ID", id);

  useEffect(() => {
    moviesDescription();
  }, [id]);

  const moviesDescription = () => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-synopses",
      params: { tconst: id },
      headers: {
        "X-RapidAPI-Key": "4840b57dbbmshfe6dc67ab3ba8bcp1bd5bcjsn006b80f4ec62",
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

  // console.log("State", state);

  return (
    <div className="about-movie">
      <img src={state?.imageUrl} alt="About it" className="descript-image" />
      <p>
        {movieData[0]?.text
          ? movieData[0]?.text.slice(0, 100)
          : "No Description here"}
      </p>
    </div>
  );
};

export default MovieDescription;
