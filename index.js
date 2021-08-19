"use strict"

let ranDest = ["Florda", "Japan", "Hawaii", "California"];
let ranResturant = ["steak", "seafood", "PHO", "BBQ"];
let ranTransport = ["bike", "car", "truck", "SUV"];
let ranEntertainment = ["race", "lights and fire works show", "rock consert", "guided museum tour"];

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

let isTripAcceptable = parseInt(prompt("Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
console.log(isTripAcceptable);
let yesOrNo = parseInt(prompt("Press 1 for YES and 2 for NO."));

if(isTripAcceptable == 2){
    console.log("That's not good. Did you not like the destination?");
    console.log(yesOrNo)
    if(yesOrNo == 2){
        console.log("Lets fix that.")
    }
}    
else{
    console.log("That's great. Hope you have a wonderful time at the " + entertain + ". " + dest + 
    " is a wonderful place and by using the " + tran + " you will be able to get between eating " + resturant + " and the " + entertain + 
    " easily.");
}
