class Car {
    constructor(model, wheel){
        this.model = model
        this.wheel = wheel
    }

    showDetails(){
        console.log("Model: ", this.model)
        console.log("Wheel count: ", this.wheel)
    }
}

const car = new Car("BNW", 4)
car.showDetails()

class SuperCar extends Car{
    constructor(model, wheel, seat){
        super(model, wheel)
        this.seat = seat
    }

    showDetails(){
        super.showDetails()
        console.log("Seats: ", this.seat)
    }
}

const superCar = new SuperCar("BMWSuper", 4, 2)
superCar.showDetails()