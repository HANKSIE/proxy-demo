import Interceptable from "./Interceptable";
import Log from "./Log";

export default class Robot extends Interceptable {
  constructor(public id: string) {
    super();
  }

  public carry(type: string, weight: number) {
    console.log(`機器人${this.id}正在搬運重量${weight}kg的${type}`);
  }

  protected intercept(
    robot: Robot,
    method: string | Symbol,
    args: any[]
  ): void {
    Log.info(
      `robot "${robot.id}" action: [${method}] args: [${args.join(",")}]`
    );
  }
}
