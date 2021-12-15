
from gateway import SensorOperations
from concreteSensors.temperature import Temperature
from creatorFactory import Creator


class CreateTemperatureSensor(Creator):
    
    def info(self) -> None:
        print("Temperature works")

    def factoryMethod(self) -> SensorOperations:
        return Temperature()