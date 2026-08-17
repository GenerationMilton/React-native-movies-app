import axios from "axios";

export const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    language: "es-MX",
    api_key: "cbbfb48f0ec7d7ee50850a22a3b024fc",
  },
});
