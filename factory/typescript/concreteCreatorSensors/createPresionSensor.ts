/** @format */

import { Creator } from "../creatorFactory";
import { SensorOperations } from "../gateway";
import { Presion } from "../concreteSensors/presion";

export class CreatePresionSensor implements Creator {
  public info(): void {
    console.log("presion works!!")
  }
  public factoryMethod(): SensorOperations {
    return new Presion();
  }
}
