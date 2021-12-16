import axios from 'axios';

const BASE_URL = `https://mock-api.driven.com.br/api/v4/cineflex`;

function getMovies() {
    const promise = axios.get(`${BASE_URL}/movies`);
    return promise;
}

export {
    getMovies
}