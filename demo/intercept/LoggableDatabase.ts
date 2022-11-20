import Interceptable from "./Interceptable";
import Log from "./Log";

export default class LoggableDatabase<T> extends Interceptable {
  constructor(protected table: string) {
    super();
  }

  protected intercept(
    db: LoggableDatabase<T>,
    method: string | Symbol,
    args: any[]
  ): void {
    Log.info(
      `Database table:${db.table} action: [${method}] args: [${args
        .map((arg) => JSON.stringify(arg))
        .join(",")}]`
    );
  }

  create(instance: T) {
    console.log(`db.${this.table} create`);
  }

  delete(instance: T) {
    console.log(`db.${this.table} delete`);
  }
}
