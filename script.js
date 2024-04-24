// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

Car.prototype.getMakeModel = () =>{
	return (make, model);
}

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model);
	this.topSpeed = topSpeed
}
Object.setPrototypeOf(SportsCar,Car);

SportsCar.prototype.getTopSpeed = ()=>{
	return topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
