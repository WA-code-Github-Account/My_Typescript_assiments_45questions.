//Written by: wa.siddiqui.
// Roll No. : 00200937
// array for usernames
let usernames = ['admin', 'Warda', 'Afifa', 'Wahida', 'Roshna'];
// Checking User Availiblity 
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Removimg all usernames from the array
    usernames = [];
    console.log("\nAll usernames have been removed." + usernames.length);
}
export {};
