"use strict"

let ranDest = ["Florda", "Japan", "Hawaii", "California"];
let ranResturant = ["Steak", "Seafood", "PHO", "BBQ"];
let ranTransport = ["Bike", "Car", "Truck", "SUV"];
let ranEntertainment = ["Live Music", "Fire Works", "Guided Tour", "Museum"];

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
console.log(dest);
console.log(resturant);
console.log(tran);
console.log(entertain);