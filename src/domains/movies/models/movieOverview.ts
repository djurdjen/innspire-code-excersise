export interface IMovieOverviewModelEntry {
  title: string
  year: string
  rating: string
  image: string
  id: string
  plot: string
}

export interface IMovieOverviewModel {
  data: IMovieOverviewModelEntry[]
}

export const emptyMovieOverviewModel: IMovieOverviewModel = {
  data: []
};
