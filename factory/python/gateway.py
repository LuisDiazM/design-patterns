from abc import ABC, abstractmethod


class SensorOperations(ABC):
    
    @abstractmethod
    def readSensorValue(self)-> float:
        pass

    @abstractmethod
    def receiveCommand(self, command: str) -> None:
        pass