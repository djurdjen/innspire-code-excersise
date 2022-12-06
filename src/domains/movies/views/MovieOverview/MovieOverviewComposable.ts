import { computed, ComputedRef, ref, Ref } from "vue";
import { IMovieOverviewModelEntry } from "@/domains/movies/models/movieOverview";
import { getOrCreateAllMoviesModel } from "@/domains/movies/view-models/AllMoviesViewModel";

export class MovieOverviewComposable {
  data: Ref<IMovieOverviewModelEntry[]>

  resultsPerPage = 9
  resultMultiplier = ref(1)
  viewModel = getOrCreateAllMoviesModel()

  constructor(){
    this.data = this.viewModel.viewModelRefs.data;
  }

  private setResultMultiplier () {
    this.resultMultiplier.value = this.resultMultiplier.value + 1;
  }

  private get paginatedData(): ComputedRef<IMovieOverviewModelEntry[]> {
    return computed(() => this.data.value.filter((_, key) => {
      return (key + 1) < (this.resultsPerPage * this.resultMultiplier.value);
    }));
  }

  private get totalPages(): ComputedRef<number> {
    return computed(() => Math.ceil(this.data.value.length / this.resultsPerPage));
  }

  private get reachedMaximumEntries (): ComputedRef<boolean> {
    return computed(() => (this.resultsPerPage * this.resultMultiplier.value) >= this.data.value.length);
  }

  public getComposable () {
    return {
      paginatedData: this.paginatedData,
      totalPages: this.totalPages,
      reachedMaximumEntries: this.reachedMaximumEntries,
      isReady: this.viewModel.isReady,
      setResultMultiplier: this.setResultMultiplier.bind(this)
    };
  }
}
