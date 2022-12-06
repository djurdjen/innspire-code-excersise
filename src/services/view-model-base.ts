import { reactive, ref, Ref, ToRefs, toRefs, UnwrapNestedRefs } from "vue";

export class ViewModelBase<IModel extends Record<string, any> & { length?: never; }> {
  private readonly model: UnwrapNestedRefs<IModel> = reactive(<IModel>{});
  private isReadyResolver: null | ((value: UnwrapNestedRefs<IModel> | PromiseLike<UnwrapNestedRefs<IModel>>) => void);
  public onReady: Promise<UnwrapNestedRefs<IModel>>;
  public isReady: Ref<boolean> = ref(false);

  constructor(emptyModel: IModel, isAsync = false) {
    this.isReadyResolver = null;

    this.onReady = new Promise((resolve) => {
      this.isReadyResolver = resolve;
    });

    if(!isAsync) {
      this.setViewModelToReady();
    }

    this.updateModel({...emptyModel});
  }

  protected async waitFor (_promises: Promise<unknown>[]): Promise<void> {
    await Promise.all(_promises);
    this.setViewModelToReady();
  }

  private setViewModelToReady (): void {
    if(this.isReadyResolver){
      this.isReadyResolver(this.model);
      this.isReadyResolver = null;
      this.isReady.value = true;
    }
  }

  protected updateModel (data: IModel): UnwrapNestedRefs<IModel> {
    Object.assign(this.model, data);
    return this.model;
  }

  get viewModel(): IModel {
    return this.model as IModel;
  }

  get viewModelRefs(): ToRefs<UnwrapNestedRefs<IModel>> {
    return toRefs(this.model);
  }
}
