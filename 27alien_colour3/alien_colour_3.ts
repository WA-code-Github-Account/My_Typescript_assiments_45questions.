//Written by: wa.siddiqui
//DATE: 15-4-24

// Version-1

// Using if-else chain
let alienColor = "green"; 

if (alienColor === "green") {
    console.log("version 1:The player earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("The player earned 10 points.");
} else if (alienColor === "red") {
    console.log("The player earned 15 points.");
} else {
    console.log("Unknown alien color."); 
}

// Version-2

// Using if-else chain
 alienColor = "yellow"; 

if (alienColor === "yellow") {
    console.log("version 2:The player earned 10 points.");
} else if (alienColor === "yellow") {
    console.log("The player earned 10 points.");
} else if (alienColor === "red") {
    console.log("The player earned 15 points.");
} else {
    console.log("Unknown alien color."); 
}
// Version-3

// Using if-else chain
alienColor = "red"; 

if (alienColor === "red") {
    console.log("version 3:The player earned 15 points.");
} else if (alienColor === "yellow") {
    console.log("The player earned 10 points.");
} else if (alienColor === "red") {
    console.log("The player earned 15 points.");
} else {
    console.log("Unknown alien color."); 
}
