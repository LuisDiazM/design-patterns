import { Creator } from '../creatorFactory';
import { SensorOperations } from '../gateway';
import { Temperature } from '../concreteSensors/temperature';

export class CreateTemperatureSensor implements Creator{
    public info(): void {
       console.log('temperature works!!')
    }

    public factoryMethod(): SensorOperations {
        return new Temperature()
    }

}