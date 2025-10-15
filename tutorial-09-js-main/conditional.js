//example of an if-else statement
//use comparsion and logical opperator
let age = 24;
if (age < 18) {
    console.log("you are permitted to vote,");
    } else if (age >= 18 & age >= 1) {
        console.log("you are not permitted to vote");   
    }   else {
        console.log(" This is impossible");
    }

    //ternary operator
    age >=18 ? console.log("you are permitted to vote") : console.log("you are not permitted to vote");

    //switch statement
    switch(age){
        case age >= 18:
            console.log("you are permitted to vote");
            break;
            default:
                console.log("this is impossible");
                break;
    }