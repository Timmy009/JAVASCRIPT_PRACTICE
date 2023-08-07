`use strict`;


let vehicle = {
    wheels: 4,
    canMove: true
}
let car = {
    seats: 4,
    __proto__: vehicle,

};
let driver = {

    __proto__: car
};

console.log("Car", car)
console.log("Ca Prototype", car.__proto__)
console.log("Does car have toString? ", car.hasOwnProperty("wheels"))
console.log(vehicle.__proto__)
console.log(vehicle)
console.log(car.wheels)
console.log("Does car have toString? ", car.hasOwnProperty("seats"))

console.log(driver.wheels)