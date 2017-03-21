var Vehicle = function(mpg, accel) {
    this.mpg = mpg;
    this.acceleration = accel;
}

Vehicle.prototype.startMotor = function() {
    console.log('Vroom VROOM! Listen to my mighty ' + this.mpg + 'mpg engine');
    console.log('I can accelerate ' + this.acceleration + 'mph/h');
}

var Car = function(mpg, reverseSpeed) {
    Vehicle.call(this, mpg, 5.0);
    this.reverseSpeed = reverseSpeed;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.reverse = function() {
    console.log('backing up now at ' + this.reverseSpeed + ' mph');
}

var ModernCar = function(mpg, reverseSpeed) {
    Car.call(this, mpg, reverseSpeed);
}

ModernCar.prototype = Object.create(Car.prototype);
ModernCar.prototype.costructor = ModernCar;

ModernCar.prototype.startMotor = function() {
    console.log('beep beep');
}

var something = new Vehicle(23, 12);
something.startMotor();


var another = new Car(28, 5);
another.startMotor();
another.reverse();

var modernCar = new ModernCar(32, 15);
modernCar.startMotor();
modernCar.reverse();

console.log(something instanceof Vehicle);
console.log(another instanceof Vehicle);
console.log(modernCar instanceof Vehicle);

console.log(modernCar instanceof ModernCar);
console.log(another instanceof ModernCar);
console.log(something instanceof ModernCar);

console.log(modernCar instanceof Car);
console.log(another instanceof ModernCar);


