"use strict";
//Written by: WA.siddiqui
//DATE: 23-3-24
Object.defineProperty(exports, "__esModule", { value: true });
// Alien's color define.
let alien_color = 'green';
//  Green color checked. 
if (alien_color === 'green') {
    console.log("Player just earned 5 Rupee!");
}
// Alien's color Changed.
alien_color = 'yellow';
// this code didnt run becaouse condition false .
if (alien_color === 'green') {
    console.log("Player just earned 5 Ruppe!");
}
