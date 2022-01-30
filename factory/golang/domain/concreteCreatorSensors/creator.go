package concretecreatorsensors

import (
	domain "factory/domain"
	concretesensors "factory/domain/concreteSensors"
)

func Creator(sensor string) domain.SensorOperations {

	if sensor == "temperature" {
		return concretesensors.ConcreteTemperatureSensor()
	} else {
		return concretesensors.ConcretePresionSensor()
	}
}
