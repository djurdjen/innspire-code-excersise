import { IMovieOverviewResponse } from "../clients/types";
import { IMovieOverviewModel } from "../models/movieOverview";

export function mapMovieOverviewModel(data: IMovieOverviewResponse): IMovieOverviewModel {
  return {
    data: data.results.map(result => ({
      title: result.title,
      year: result.description,
      rating: result.imDbRating,
      image: result.image,
      id: result.id,
      plot: result.plot
    }))
  };
}
