import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // request.data.results;
      const random = Math.floor(Math.random() * request.data.results.length);
      setMovie(request.data.results[random]);
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPositon: "center",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${
          movie && movie.backdrop_path
        }')`,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{`${
          movie.overview && movie.overview.slice(0, 150)
        } ...`}</h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
