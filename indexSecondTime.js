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

let myTrip = ("Your destination will be in " + randomFunction(dest) + " with a mode of transportaion of a " + randomFunction(trav) + ". The resturant will be serving " + 
randomFunction(food) + " and the entertainment will be a " + randomFunction(entertain) + ".");

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
            
            console.log("Is " + randomFunction(dest) + " good for you??");
            yesOrNo = prompt("Yes or No");
            switch(yesOrNo){
                case "Yes":
                    isTripAcceptable = parseInt(prompt("Great! Your new trip will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
                    resturant + " and the entertainment will be a " + entertain + ". Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
                    break;
                case "No":
                    console.log("Is " + randomFunction(dest) + " good for you??" + isTripAcceptable);
                    yesOrNo = prompt("Yes or No");
                    break;
                default :
            }
            return
        }
        else if(mainMenus == "transportaion"){
            tran = ranTransport[Math.floor(Math.random() * ranTransport.length)];
            console.log("Is " + tran + " good for you??");
            yesOrNo = prompt("Yes or No");
            switch(yesOrNo){
                case "Yes":
                    isTripAcceptable = parseInt(prompt("Great! Your new trip will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
                    resturant + " and the entertainment will be a " + entertain + ". Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
                    break;
                case "No":
                    tran = ranTransport[Math.floor(Math.random() * ranTransport.length)];
                    isTripAcceptable = parseInt(prompt("Your new trip will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
                    resturant + " and the entertainment will be a " + entertain + ". Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
                    break;
                default :
            }
            return
        }
        else if(mainMenus == "resturant"){
            resturant = ranResturant[Math.floor(Math.random() * ranResturant.length)];
            console.log("Is " + resturant + " good for you??");
            yesOrNo = prompt("Yes or No");
            switch(yesOrNo){
                case "Yes":
                    isTripAcceptable = parseInt(prompt("Your new trip will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
                    resturant + " and the entertainment will be a " + entertain + ". Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
                    break;
                case "No":
                    resturant = ranResturant[Math.floor(Math.random() * ranResturant.length)];
                    isTripAcceptable = parseInt(prompt("Your new trip will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
                    resturant + " and the entertainment will be a " + entertain + ". Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
                    break;
                default :
            }
            return
        }
        else if(mainMenus == "entertainment"){
            entertain = ranEntertainment[Math.floor(Math.random() * ranEntertainment.length)];
            console.log("Is " + entertain + " good for you??");
            yesOrNo = prompt("Yes or No");
            switch(yesOrNo){
                case "Yes":
                    isTripAcceptable = parseInt(prompt("Your new trip will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
                    resturant + " and the entertainment will be a " + entertain + ". Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
                    break;
                case "No":
                    entertain = ranEntertainment[Math.floor(Math.random() * ranEntertainment.length)];
                    isTripAcceptable = parseInt(prompt("Your new trip will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
                    resturant + " and the entertainment will be a " + entertain + ". Is the trip acceptable for you? Press 1 for YES and 2 for NO."));
                    break;
                default :
            }
            return
        }
        else{
            return
        }
    }
}
console.log("This is going to be a great day trip. Hope you have a wonderful time at the " + entertain + ". " + dest + 
" is a wonderful place and by using the " + tran + " you will be able to get between eating " + resturant + " and the " + entertain + 
" easily.");  
    