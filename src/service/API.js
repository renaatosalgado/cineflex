import axios from "axios";

const BASE_URL = `https://mock-api.driven.com.br/api/v4/cineflex`;

function getMovies() {
  const promise = axios.get(`${BASE_URL}/movies`);
  return promise;
}

function getShowtimes(movieId) {
  const promise = axios.get(`${BASE_URL}/movies/${movieId}/showtimes`);
  return promise;
}

export { getMovies, getShowtimes };
