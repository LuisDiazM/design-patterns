package main

import concretecreatorsensors "factory/domain/concreteCreatorSensors"

func main() {
	temperature := concretecreatorsensors.Creator("temperature")
	presion := concretecreatorsensors.Creator("presion")
	temperature.ReceiveCommand("ola ola")
	presion.ReceiveCommand("print")
}
