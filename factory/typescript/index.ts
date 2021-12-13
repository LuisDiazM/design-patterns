import { CreateTemperatureSensor } from './concreteCreatorSensors/createTemperatureSensor';
import { CreatePresionSensor } from './concreteCreatorSensors/createPresionSensor';
import { Creator } from './creatorFactory';

function createSensor(creator: Creator){
    creator.info()
}


createSensor(new CreateTemperatureSensor())
createSensor(new CreatePresionSensor())