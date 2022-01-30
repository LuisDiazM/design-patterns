package concretesensors

import (
	"factory/domain"
	"fmt"
)

type TemperatureSensor struct {
	Name string
}

func ConcreteTemperatureSensor() domain.SensorOperations {
	return &TemperatureSensor{
		Name: "DHT22",
	}
}

func (s *TemperatureSensor) ReadSensorValue() float32 {
	return 30.0
}

func (s *TemperatureSensor) ReceiveCommand(command string) {
	fmt.Println(fmt.Sprintf("temperature %s", command))
}
