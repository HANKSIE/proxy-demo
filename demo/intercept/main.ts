import Database from "./Database";
import Log from "./Log";
import LoggableDatabase from "./LoggableDatabase";
import User from "./User";
import interceptable from "./utils/interceptable";

Log.clear();

const stephen: User = {
  id: "N12345678",
  name: "stephen",
};

const productDB = interceptable(
  new Database("products"),
  (db, method, args) => {
    Log.info(
      `Database table:${db.table} action: [${method}] args: [${args
        .map((arg) => JSON.stringify(arg))
        .join(",")}]`
    );
  }
);

productDB.create(stephen);
productDB.delete(stephen);

//------------------------------------------------

const userDB = new LoggableDatabase<User>("users");

const larry: User = {
  id: "N11111111",
  name: "larry",
};
userDB.create(larry);
userDB.delete(larry);
