/** @format */

import { SensorOperations } from "../gateway";

export class Presion implements SensorOperations {
  readSensorValue(): number {
    return Math.random() * 100;
  }
  receiveCommand(command: string): void {
    console.log(`command for pression ${command}`);
  }
}
