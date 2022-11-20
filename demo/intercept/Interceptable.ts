import interceptable from "./utils/interceptable";

export default abstract class Interceptable {
  constructor() {
    return interceptable(this, this.intercept);
  }

  protected abstract intercept(
    target: Interceptable,
    method: string | Symbol,
    args: any[]
  ): void;
}
