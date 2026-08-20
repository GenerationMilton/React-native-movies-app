import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { movieApi } from "../api/movie-api";

export const getMovieByIdAction = async (id: number | string) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>(`/${id}`);

    // console.log(JSON.stringify(data, null, 2));
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
