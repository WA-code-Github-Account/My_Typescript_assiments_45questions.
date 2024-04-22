let guest_list = ['sir Ameen', 'sir Daniyal', 'sir Zia', 'sir Hamzah'];
//for (let index = 0; index < guest_list.length; index++) {
//   console.log('Respected.' + guest_list[index] + ',\n\nit is our pleasure to invite you on Dinner.\n\nThank you!\n\n\n')
//};
let absent_guest = 'sir Ameen';
let new_guest = 'Governor Sahab';
guest_list[0] = new_guest;
// for (let index = 0; index < guest_list.length; index++) {
// console.log('Respected.' + guest_list[index] + ',\n\nit is our pleasure to invite you on Dinner.\n\nThank you!\n\n\n');
// }
//console.log(` ${absent_guest} is not coming to the party.\n\n`);
//console.log('One good news ! we find one big table for Dinner we are inviting 3 more guests.');
guest_list.unshift('sir Jaffar');
guest_list.splice(2, 0, 'sir Faisal Eidhi');
guest_list.push('sir Bashir Ahmed');
for (let index = 0; index < guest_list.length; index++) {
    console.log('Respected . ' + guest_list[index] + '\n\nit is our pleasure to invite you on Dinner.\n\nThank you!\n\n\n');
}
console.log("\n\nSorry we can not arrange big table, only two people we be invited for Dinner.");
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Respected. ${remove_guest}, You are not invited for Dinner.`);
}
for (let index = 0; index < guest_list.length; index++) {
    console.log('\n\nRespected.' + guest_list[index] + `,\n\n You are still invited.\n\n\ Thank You!\n\n`);
}
guest_list.splice(0, 2);
console.log(guest_list);

