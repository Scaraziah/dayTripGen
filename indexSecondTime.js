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

let myDest = randomFunction(dest);
let myTrav = randomFunction(trav);
let myFood = randomFunction(food);
let myEnt= randomFunction(entertain);

let myTrip = ("Your destination will be in " + myDest  + " with a mode of transportaion of a " + myTrav  + ". The resturant will be serving " + 
myFood + " and the entertainment will be a " + myEnt  + ".");


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
    while(isTripAcceptable == 2){
        if(mainMenus == "destination"){
            yesOrNo = prompt(`Is ${myDest = randomFunction(dest)} good for you?? Yes or No!`);
            while(yesOrNo == "no"){
                yesOrNo = prompt(`Is ${myDest = randomFunction(dest)} good for you?? Yes or No!`);
            }
            alert(myTrip)
            isTripAcceptable = parseInt(prompt("Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
            return;
        }
        else if(mainMenus == "transportaion"){
            yesOrNo = prompt(`Is ${myTrav = randomFunction(trav)} good for you?? Yes or No!`);
            while(yesOrNo == "no"){
                yesOrNo = prompt(`Is  ${myTrav = randomFunction(trav)} good for you?? Yes or No!`);
            }
            alert(myTrip)
            isTripAcceptable = parseInt(prompt("Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
            return;
        }
        else if(mainMenus == "resturant"){
            yesOrNo = prompt(`Is ${myFood = randomFunction(myFood)} good for you?? Yes or No!`);
            while(yesOrNo == "no"){
                yesOrNo = prompt(`Is ${myFood = randomFunction(myFood)} good for you?? Yes or No!`);
            }
            alert(myTrip)
            isTripAcceptable = parseInt(prompt("Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
            return;
        }
        else if(mainMenus == "entertainment"){
            yesOrNo = prompt(`Is ${myEnt = randomFunction(myEnt)} good for you?? Yes or No!`);
            while(yesOrNo == "no"){
                yesOrNo = prompt(`Is ${myEnt = randomFunction(myEnt)} good for you?? Yes or No!`);
            }
            alert(myTrip)
            isTripAcceptable = parseInt(prompt("Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
            return;
        }
        else{
            return
        }
    }
}

console.log("This is going to be a great day trip. Hope you have a wonderful time at the " + myEnt + ". " + myDest + 
" is a wonderful place and by using the " + myTrav + " you will be able to get between eating " + myFood + " and the " + myEnt + 
" easily.");  
    