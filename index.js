"use strict"

let ranDest = ["Florda", "Japan", "Hawaii", "California"];
let ranResturant = ["steak", "seafood", "PHO", "BBQ"];
let ranTransport = ["bike", "car", "truck", "SUV"];
let ranEntertainment = ["race", "lights and fire works show", "rock consert", "guided museum tour"];

let dest = ranDest[Math.floor(Math.random() * ranDest.length)];
let resturant = ranResturant[Math.floor(Math.random() * ranResturant.length)];
let tran = ranTransport[Math.floor(Math.random() * ranTransport.length)];
let entertain = ranEntertainment[Math.floor(Math.random() * ranEntertainment.length)];


let fixThat = "Well lets fix that ";

let myTrip = ("Your destination will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
resturant + " and the entertainment will be a " + entertain + ".");

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
            dest = ranDest[Math.floor(Math.random() * ranDest.length)];
            console.log("Is " + dest + " good for you??")
            yesOrNo = prompt("Yes or No")
           
            switch(yesOrNo){
                case "Yes":
                    isTripAcceptable = parseInt(prompt("Great! Your new trip will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
                    resturant + " and the entertainment will be a " + entertain + ". Is the trip acceptable for you? Press 1 for YES and 2 for NO."))
                    break;
                case "No":
                    dest = ranDest[Math.floor(Math.random() * ranDest.length)];
                    isTripAcceptable = parseInt(prompt("Your new trip will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
                    resturant + " and the entertainment will be a " + entertain + ". Is the trip acceptable for you? Press 1 for YES and 2 for NO."))
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
                    console.log("Great lets move on!");
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
        else if(mainMenus == "destination"){
            dest = ranDest[Math.floor(Math.random() * ranDest.length)];
            console.log("Is " + dest + " good for you??")
            yesOrNo = prompt("Yes or No")
            switch(yesOrNo){
                case "Yes":
                    console.log("Great lets move on!")
                    break;
                case "No":
                    dest = ranDest[Math.floor(Math.random() * ranDest.length)];
                    isTripAcceptable = parseInt(prompt("Your new trip will be in " + dest + " with a mode of transportaion of a " + tran + ". The resturant will be serving " + 
                    resturant + " and the entertainment will be a " + entertain + ". Is the trip acceptable for you? Press 1 for YES and 2 for NO."))
                    break;
                default :
            }
            return
        }
    }
}
console.log("This is going to be a great day trip. Hope you have a wonderful time at the " + entertain + ". " + dest + 
" is a wonderful place and by using the " + tran + " you will be able to get between eating " + resturant + " and the " + entertain + 
" easily.");  
    

 // if(yesOrNo == "No"){
            //     dest = ranDest[Math.floor(Math.random() * ranDest.length)];
            //     console.log("Is " + dest + " good for you??")
            //     yesOrNo = prompt("Yes or No")
            // }

    //     else if(mainMenus == "entertainment"){
    //         entertain = ranEntertainment[Math.floor(Math.random() * ranEntertainment.length)];
    //         console.log("Is " + entertain + " good for you?")
    //     }
    //     else if(mainMenus == "transportaion"){
    //         tran = ranTransport[Math.floor(Math.random() * ranTransport.length)];
    //         console.log("Is " + tran + " good for you?")
    //     }
    //     else if(mainMenus == "resturant"){
    //         resturant = ranResturant[Math.floor(Math.random() * ranResturant.length)];
    //         console.log("Is " + resturant + " good for you?")
    //     }
    // }    
    //     else{

// switch(mainMenus){
//     case "Destination":
//         console.log(fixThat);
//         getRandomSelection(dest);
//         console.log("Is " + dest + " good for you?");
//         break;
//     case "Transportaion":
//         console.log(fixThat);
//         getRandomeSelection(dest);
//         console.log("Is " + dest + " good for you?");
//         break;   
// }



    // console.log("That's not good. What did you not like? 1. ");
    // console.log(yesOrNo)
    // if(yesOrNo == 2){
    //     console.log("Lets fix that.")
    // switch(mainMenus){
    // case "destination":
    //     // console.log(fixThat);
    //     getRandomeSelection(dest);
    //     count = dest
    //     console.log("Is " + dest + " good for you?");
    //     break;
    // case "transportaion":
    //     console.log(fixThat + dest);
    //     getRandomeSelection(dest);
    //     console.log("Is " + dest + " good for you?");
    //     break; 
    // }    
    // } 