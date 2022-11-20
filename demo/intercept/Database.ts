export default class Database<T> {
  constructor(public table: string) {}
  create(instance: T) {
    console.log(`db.${this.table} create`);
  }

  delete(instance: T) {
    console.log(`db.${this.table} delete`);
  }
}
