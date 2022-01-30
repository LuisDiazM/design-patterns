package domain

type SensorOperations interface {
	ReadSensorValue() float32
	ReceiveCommand(command string)
}
