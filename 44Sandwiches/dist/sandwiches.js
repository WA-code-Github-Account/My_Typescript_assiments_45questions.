"use strict";
//Written by: wa.siddiqui
// Roll No. : 00200937
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(items) {
    console.log("\nMaking a sandwich with #");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich !\n");
}
makeSandwich(["Ham", "Cheese", "Lettuce"]);
makeSandwich(["Chicken patty", "Onion", "Tomato slice"]);
makeSandwich(["Peanut Butter", "choclate"]);
