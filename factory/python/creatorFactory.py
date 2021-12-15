from abc import ABC, abstractmethod
from gateway import SensorOperations

class Creator(ABC):

    @abstractmethod
    def info(self)->None:
        pass

    @abstractmethod
    def factoryMethod(self)->SensorOperations:
        pass


