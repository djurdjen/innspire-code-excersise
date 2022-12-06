export interface IMovieDetailModel {
  title: string
  year: string
  rating: string
  image: string
  id: string
  plot: string
  directors: string,
  genre: string,
  stars: string
  runtime: string,
  languages: string,
  releaseDate: string
}

export const emptyMovieDetailModel: IMovieDetailModel = {
  title: "",
  year:  "",
  rating:  "",
  image:  "",
  id:  "",
  plot:  "",
  directors: "",
  genre: "",
  stars: "",
  runtime: "",
  languages: "",
  releaseDate: ""
};
