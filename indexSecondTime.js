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

function tripGood(n){
    let x = parseInt(prompt("Great! Your new trip will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
    resturant + " and the entertainment will be a " + entertain + ". Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
    return x
}

let myDest = randomFunction(dest);
let myTrav = randomFunction(trav);
let myFood = randomFunction(food);
let myEnt= randomFunction(entertain);

let myTrip = ("Your destination will be in " + myDest  + " with a mode of transportaion of a " + myTrav  + ". The resturant will be serving " + 
randomFunction(food) + " and the entertainment will be a " + myFood  + ".");

let setTrip = myTrip

console.log(myTrip);

let isTripAcceptable = parseInt(prompt("Is the trip acceptable for you? Press 1 for YES and 2 for NO."));

console.log(isTripAcceptable);

let yesOrNo;
let mainMenus;

while(isTripAcceptable == 2){
    mainMenus = prompt("What did you not like. The destination, transportaion, resturant, or entertainment?");
    happyCheck()
} 

function happyCheck(){
    if(isTripAcceptable == 2){
        if(mainMenus == "destination"){
            do{
                yesOrNo = prompt("Is " + randomFunction(dest) + " good for you?? Yes or No!");
                break;
            }
            while(yesOrNo === "No"){
            }
            console.log(setTrip);
            return
        }
        else if(mainMenus == "transportaion"){
            do{
                yesOrNo = prompt("Is " + randomFunction(trav) + " good for you?? Yes or No!");
                break;
            }
            while(yesOrNo === "No"){
            }
            console.log(setTrip);
            return
        }
        else if(mainMenus == "resturant"){
            do{
                yesOrNo = prompt("Is " + randomFunction(food) + " good for you?? Yes or No!");
                break;
            }
            while(yesOrNo === "No"){
            }
            console.log(setTrip);
            return
        }
        else if(mainMenus == "entertainment"){
            do{
                yesOrNo = prompt("Is " + randomFunction(entertain) + " good for you?? Yes or No!");
                break;
            }
            while(yesOrNo === "No"){
            }
            console.log(setTrip);
            return
        }
        else{
            return
        }
    }
    console.log(isTripAcceptable)
}

console.log("This is going to be a great day trip. Hope you have a wonderful time at the " + myEnt + ". " + myDest + 
" is a wonderful place and by using the " + myTrav + " you will be able to get between eating " + myFood + " and the " + myEnt + 
" easily.");  
    