from concreteCreatorSensors.createPresionSensor import CreatePresionSensor
from concreteCreatorSensors.createTemperatureSensor import CreateTemperatureSensor
from creatorFactory import Creator
from dotenv import load_dotenv

load_dotenv()

def createSensors(creator: Creator):
    creator.info()


createSensors(CreatePresionSensor())
createSensors(CreateTemperatureSensor())