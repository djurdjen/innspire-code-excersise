import { IMovieDetailResponse } from "@/domains/movies/clients/types";
import { IMovieDetailModel } from "../models/movieDetail";

export function mapMovieDetailModel(data: IMovieDetailResponse): IMovieDetailModel {
  return {
    title: data.title,
    year: data.year,
    rating: data.imDbRating,
    image: data.image,
    id: data.id,
    plot: data.plot,
    directors: data.directors,
    genre: data.genres,
    stars: data.stars,
    runtime: data.runtimeStr,
    languages: data.languages,
    releaseDate: data.releaseDate
  };
}
