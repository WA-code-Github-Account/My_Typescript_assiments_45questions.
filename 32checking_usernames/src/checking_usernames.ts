
//Name:wa.siddiqui.
//Roll No # 00200973

let current_user : string[] = ['Afifa','Awais','ShahRukh','Warda','Hammad'];

let new_user : string[] = ['Warda', 'Asghar','Raffay', 'Afifa', 'Abdullah'];

new_user.forEach(newusername =>{
   let lowercase: string = newusername.toLowerCase();

   if(current_user.map(c_user => c_user.toLowerCase()).includes(lowercase)){
    console.log(`\nThe Username ${newusername} is not available. please write a different username\n`);
}
else{
console.log(`\nThe username ${newusername} is available\n`);
}
})