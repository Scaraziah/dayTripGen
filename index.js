"use strict"

let ranDest = ["Florda", "Japan", "Hawaii", "California"];
let ranResturant = ["steak", "seafood", "PHO", "BBQ"];
let ranTransport = ["bike", "car", "truck", "SUV"];
let ranEntertainment = ["boat ride", "lights and fire works show", "rock consert", "guided museum tour"];

let dest = ranDest[Math.floor(Math.random() * ranDest.length)];
let resturant = ranResturant[Math.floor(Math.random() * ranResturant.length)];
let tran = ranTransport[Math.floor(Math.random() * ranTransport.length)];;
let entertain = ranEntertainment[Math.floor(Math.random() * ranEntertainment.length)];

// let count = "";

// function getRandomSelection(ranDest){
//     count = str[Math.floor(Math.random() * str.length)];
//     return dest
// }    
// getRandomSelection(ranDest);
let myTrip = ("Your destination will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
resturant + " and the entertainment will be a " + entertain + ".");

console.log(myTrip);
