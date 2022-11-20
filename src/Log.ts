import { appendFile } from "fs";
import { normalize, join } from "path";

export default class Log {
  constructor(public root: string) {}

  info(path: string, data: string) {
    const time = new Date().toLocaleString("zh-TW");
    appendFile(join(this.root, `log/${normalize(path)}`), data + "\n", (err) =>
      console.error(err)
    );
  }
}
