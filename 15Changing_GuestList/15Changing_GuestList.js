"use strict";
let guest_list = ['sir Ameen', 'sir Daniyal', 'sir Zia', 'sir Hamzah'];
for (let index = 0; index < guest_list.length; index++) {
    console.log('Respected.' + guest_list[index] + ',\n\nit is our pleasure to invite you on Dinner.\n\nThank you!\n\n\n');
}
;
let absent_guest = 'sir Ameen';
let new_guest = 'Governor Sahab';
guest_list[0] = new_guest;
for (let index = 0; index < guest_list.length; index++) {
    console.log('Respected.' + guest_list[index] + ',\n\nit is our pleasure to invite you on Dinner.\n\nThank you!\n\n\n');
}
console.log(` ${absent_guest} is not coming to the party.`);
