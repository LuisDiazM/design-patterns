/** @format */

import { SensorOperations } from "./gateway";

export abstract class Creator {
  public abstract factoryMethod(): SensorOperations;

  public info(): void {
    console.log(this.factoryMethod().receiveCommand("enable"));
  }
}
