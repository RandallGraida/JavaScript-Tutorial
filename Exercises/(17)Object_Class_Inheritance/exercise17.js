class Car {
  brand;
  model;

  static storage = [];

  constructor(carDetails){
    this.brand = carDetails.brand;
    this.model = carDetails.model

    Car.storage.push(this);
  }

  displayInfo(){
    console.log(`${this.brand} ${this.model}`);
  }

  speed = 0;
  
  go(){
    this.speed += 5;

    this.displayInfo()
  }

  brake(){

  }
}

const cars = [{
  brand: 'Toyota',
  model: 'Corolla'
}, {
  brand: 'Tesla',
  model: 'Model 3'
}].map(carDetails => {
    return new Car(carDetails);
});

const cars2 = [{
  brand: 'Honda',
  model: 'Civic'
}].map(carDetails => {
  return new Car(carDetails);
});

console.log(Car.storage); 

// Exercise 17b
cars.forEach(car => {car.displayInfo()});
cars2.forEach(car => {car.displayInfo()});