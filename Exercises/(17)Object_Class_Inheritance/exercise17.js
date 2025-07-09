// Exercise 17a to 17c
class Car {
  brand;
  model;
  isTrunkOpen;
  acceleration;

  static storage = [];

  constructor(carDetails){
    this.brand = carDetails.brand;
    this.model = carDetails.model;
    this.isTrunkOpen = carDetails.isTrunkOpen;

    Car.storage.push(this);
  }

  speed = 0;
  isTrunkOpen = false;
  

  displayInfo(){
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

    console.log(`${this.brand} ${this.model}, 
      Speed ${this.speed} km/h, Trunk:${trunkStatus}
    `);
  }
 
  go(){
    if (!this.isTrunkOpen){
      this.speed += 5;
    }

    if (this.speed > 200){
      this.speed = 200;
    }
  }

  brake(){
    this.speed -= 5;

    if (this.speed < 0){
      this.speed = 0;
    }
  }

  openTrunk(){
    if (this.speed === 0){
      this.isTrunkOpen = true;
    }
  }

  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

const cars = [{
  brand: 'Toyota',
  model: 'Corolla',
  isTrunkOpen: false
}, {
  brand: 'Tesla',
  model: 'Model 3',
  isTrunkOpen: false
}].map(carDetails => {
    return new Car(carDetails);
});

const cars2 = [{
  brand: 'Honda',
  model: 'Civic',
  isTrunkOpen: false
}].map(carDetails => {
  return new Car(carDetails);
});

console.log(Car.storage); 

cars.forEach(car => {car.go()});
cars.forEach(car => {car.go()});
cars.forEach(car => {car.go()});
cars.forEach(car => {car.brake()});
cars.forEach(car => {car.displayInfo()});

cars2.forEach(car => {car.go()});
cars2.forEach(car => {car.go()});
cars2.forEach(car => {car.go()});
cars2.forEach(car => {car.brake()})
cars2.forEach(car => {car.brake()})
cars2.forEach(car => {car.brake()})
cars2.forEach(car => {car.displayInfo()});


// Exercise 17d
cars2.forEach(car => {car.openTrunk()});
cars2.forEach(car => {car.displayInfo()});

// Exercise 17e 
class RaceCar extends Car {
  acceleration;

  constructor(raceCar){
    super(raceCar);
    this.acceleration = raceCar.acceleration;
  }

  go(){
    this.speed += this.acceleration;

    if (this.speed > 300){
      this.speed = 300;
    }
  }

  displayInfo(){
    console.log(`${this.brand} ${this.model}, 
      Speed ${this.speed} km/h, Race cars do not have a trunk`);
  }

  openTrunk(){
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk(){
    console.log('Race cars do not have a trunk.');
  }
}

const raceCars = [{
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
}].map(raceCar => {return new RaceCar(raceCar)});

raceCars.forEach(raceCar => {raceCar.displayInfo()});