from gateway import SensorOperations


class Presion(SensorOperations):
    
    def readSensorValue(self) -> float:
        return 20.0

    def receiveCommand(self, command: str) -> None:
        pass