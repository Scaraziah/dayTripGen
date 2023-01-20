"use strict"

let dest = ["Florda", "Texas", "Cally"];
let trav = ["Moter Bike", "Train", "Plain"];
let food = ["Pizza", "Steak", "Seafood"]
let entertain = ["Bowling", "Fishing", "Sking"]

let x = "";

function randomFunction(n){
    let x = n[Math.floor(Math.random() * n.length)]
    return x 
}

let myTrip = ("Your destination will be in " + randomFunction(dest) + " with a mode of transportaion of a " + randomFunction(trav) + ". The resturant will be serving " + 
randomFunction(food) + " and the entertainment will be a " + randomFunction(entertain) + ".");

console.log(myTrip);


// function runRandom(){

// }