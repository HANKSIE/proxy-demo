import { appendFile } from "fs";
import { normalize, join } from "path";

export default class Log {
  public static prefix = "./demo/intercept/log";
  public static path = "log.txt";

  static info(data: string, locale = "zh-TW", path = "") {
    const time = new Date().toLocaleString(locale);
    appendFile(
      join(Log.prefix, Log.path, normalize(path)),
      `[${time}] ${data} \n`,
      (err) => console.error(err)
    );
  }
}
