"use strict";
//Written by: wa.siddiqui
// date: 16-4-2022
Object.defineProperty(exports, "__esModule", { value: true });
// array for usernames
const usernames = ['admin', 'warda', 'afifa', 'wahida', 'roshna'];
// using forEach method
usernames.forEach(username => {
    // Inside the loop, special greeting for 'admin', For Others printing a Simple greeting
    if (username.toLowerCase() === 'admin') {
        console.log('\n\nHello admin, would you like to see a status report?\n');
    }
    else {
        console.log(`\nHello ${username}, thank you for logging in again.\n`);
    }
});
