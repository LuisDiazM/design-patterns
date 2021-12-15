from gateway import SensorOperations

class Temperature(SensorOperations):
    
    def readSensorValue(self) -> float:
        return  10.0

    def receiveCommand(self, command: str) -> None:
        pass