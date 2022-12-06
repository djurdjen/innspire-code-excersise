import { ViewModelBase } from "@/services/view-model-base";
import { getMovieOverviewData } from "../clients/clients";
import { mapMovieOverviewModel } from "../mappers/mapMovieOverviewModel";
import { emptyMovieOverviewModel, IMovieOverviewModel } from "../models/movieOverview";

let AllMoviesModelInstance: AllMoviesViewModel | undefined;

export class AllMoviesViewModel extends ViewModelBase<IMovieOverviewModel> {
  constructor() {
    super(emptyMovieOverviewModel, true);
    this.waitFor([this.getAndSetMovieData()]);
  }

  private async getAndSetMovieData (): Promise<void> {
    const response = await getMovieOverviewData();
    this.updateModel(mapMovieOverviewModel(response));
  }
}

export function getOrCreateAllMoviesModel(): AllMoviesViewModel {
  if(!AllMoviesModelInstance) {
    AllMoviesModelInstance = new AllMoviesViewModel();
  } 
  return AllMoviesModelInstance;
}
