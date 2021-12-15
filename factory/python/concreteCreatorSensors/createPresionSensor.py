
from concreteSensors.presion import Presion
from gateway import SensorOperations
from creatorFactory import Creator

class CreatePresionSensor(Creator):

    def info(self) -> None:
        print("presion works!!")

    def factoryMethod(self) -> SensorOperations:
        return Presion()

