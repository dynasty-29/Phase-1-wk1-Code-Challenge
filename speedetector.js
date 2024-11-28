// Write a program that takes the speed of a car as input e.g 80. 
// If the speed is less than 70, it should print “Ok”.
//  Otherwise, for every 5 km/s above the speed limit (70), 
//  it should give the driver one demerit point and print the total number of demerit points.

//    > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

function speedTest() {
    let speed = parseFloat(prompt("What's your current car's speed:"));

    //I want to just make sure they key in a positive value and all practicing debugging
    if (speed < 0) {
        console.log("That's not a actual speed, kindly put a positive value");
        return;
    }
    

    //I want to set some constant values like what speed limit should be 
    const theLimit = 70;

    // also add a value that helps give driver a demerit for anything above the limit
    // I will also calculate the demerit points
    const demeritValue = 5;
    let demeritpoints = Math.floor((speed - theLimit) / demeritValue);

    //First on my if loop i check if they are within speed limit
    if (speed <= theLimit) {
        console.log("You are driving within the limit, you are free to go!");
    } else {
        // i will nest another condition to check if the above is false (above speed limit)
        //if above 12 points they will have thier license suspended 
        //if below i need to let them know they should be in speed limit allowed
        if (demeritpoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`You are ${points}  points above the allowed speed limit. You are required to go to stick to the allowed speed limit`);
        }
    }
}

speedTest();
