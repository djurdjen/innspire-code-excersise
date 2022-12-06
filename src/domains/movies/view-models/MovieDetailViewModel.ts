import { ViewModelBase } from "@/services/view-model-base";
import { getMovieDetailData } from "../clients/clients";
import { mapMovieDetailModel } from "../mappers/mapMovieDetailModel";
import { emptyMovieDetailModel, IMovieDetailModel } from "../models/movieDetail";

export class MovieDetailViewModel extends ViewModelBase<IMovieDetailModel> {

  constructor(private id: string) {
    super(emptyMovieDetailModel, true);
    this.waitFor([this.getAndSetMovieDetailData()]);
  }

  private async getAndSetMovieDetailData (): Promise<void> {
    const response = await getMovieDetailData(this.id);
    this.updateModel(mapMovieDetailModel(response)); 
  }

  public getComposable () {
    return {
      
    };
  }
}
