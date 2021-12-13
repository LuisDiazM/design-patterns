/** @format */

import { SensorOperations } from "../gateway";

export class Temperature implements SensorOperations {
  readSensorValue(): number {
    return Math.random() * 10;
  }
  receiveCommand(command: string): void {
    console.log(`implement this command ${command}`);
  }
}
