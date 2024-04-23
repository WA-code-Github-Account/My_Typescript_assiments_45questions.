"use strict";
//Written by: wa,siddiqui
// Roll No. : 00200937
Object.defineProperty(exports, "__esModule", { value: true });
// Array 
const magicians = ["Albus Dumbledore", "Harry Potter", "Dynamo", "Chris Angle"];
// Function to create .c.a
function copyArray(arr) {
    return [...arr];
}
// Function to add g.m
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Function to display m.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Create a copy of the original magicians array
const copiedMagicians = copyArray(magicians);
// Call make_great() with the copied array
make_great(copiedMagicians);
// Display the original magicians array
console.log("\n\nThis is my Original Magicians array:");
show_magicians(magicians);
// Display the modified magicians array
console.log("\n\nThis is my Modified copy of magicians array:");
show_magicians(copiedMagicians);
