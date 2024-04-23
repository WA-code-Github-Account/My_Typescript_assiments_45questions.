"use strict";
//Written by: wa,siddiqui
// Roll No. : 00200937
Object.defineProperty(exports, "__esModule", { value: true });
// Array magicians
const magicians = ["Albus Dumbledore", "Harry Potter", "Dynamo", "Chris Angle"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
make_great(magicians);
show_magicians(magicians);
