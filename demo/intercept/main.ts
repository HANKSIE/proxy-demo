import Log from "./Log";
import Robot from "./Robot";
import User from "./User";
import interceptable from "./utils/interceptable";

const stephen = interceptable(
  new User("N12345678", "stephen"),
  (user, method, args) => {
    Log.info(`user "${user.id}" action: [${method}] args: [${args.join(",")}]`);
  }
);

stephen.goto("台北");
stephen.sleep("9點半");

const robot = new Robot("super-123");
robot.carry("保險箱", 300);
