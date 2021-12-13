/** @format */

export interface SensorOperations {
  readSensorValue(): number;
  receiveCommand(command: string): void;
}
