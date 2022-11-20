import Log from "./src/log";
import Robot from "./src/Robot";
import User from "./src/User";
import interceptable from "./src/utils/interceptable";

const log = new Log(__dirname);

const stephen = interceptable(
  new User("N12345678", "stephen"),
  (user, method, args) => {
    // 記錄使用者行為
    const data = `[${new Date().toLocaleString("zh-TW")}] user "${
      user.id
    }" action: [${method}] args: [${args.join(",")}]`;
    log.info("user.txt", data);
    console.log(data);
  }
);

stephen.goto("台北");
stephen.sleep("9點半");

const robot = new Robot("super-123");
robot.carry("保險箱", 300);
