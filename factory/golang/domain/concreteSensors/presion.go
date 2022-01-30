package concretesensors

import (
	"factory/domain"
	"fmt"
)

type PresionSensor struct {
	Name string
}

func ConcretePresionSensor() domain.SensorOperations {
	return &PresionSensor{
		Name: "Presion DHT11",
	}
}

func (s *PresionSensor) ReadSensorValue() float32 {
	return 300.0
}

func (s *PresionSensor) ReceiveCommand(command string) {
	fmt.Println(fmt.Sprintf("presion %s", command))
}
