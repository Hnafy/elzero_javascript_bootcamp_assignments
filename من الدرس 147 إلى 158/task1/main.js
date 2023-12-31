class Car{
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run(){
    return `Car Is Running`
  };
  stop(){
    return `Car Is Stopped`
  };
}
let car = new Car("MG",2022,420000);

console.log(`Car One Name Is ${car.n} And Model Is ${car.m} And Price Is ${car.p}`)

console.log(car.run())
// console.log(Car.prototype.run())

// Needed Output
//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"