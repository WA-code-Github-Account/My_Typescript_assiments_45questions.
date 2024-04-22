
//DATE: 23-3-24

// Equality Test
console.log("Equality test with strings:", "Mango" === "Mango"); //true
console.log("Equality test with strings:", "Mango" !== "Mango"); //false

//Inequality test
console.log("Inequality test with strings:", ("Apple" as string) !== "orange"); //true
console.log("Inequality test with strings:", "pear" !== "pear"); //false

// Testing lowercase function
console.log("Lowercase function test:", "WHATSAPP".toLowerCase() === "whatsapp"); //true
console.log("Lowercase function test:", ("WHATSAPP" as string) === "whatsapp"); //false

// Numerical tests involving equality 
console.log("Equality test with numbers:", 7 === 7); //true
console.log("Equality test with numbers:", 7 !== 7); //false

// Numerical tests involving inequality 
console.log("Inequality test with numbers:", (5 as number) !== 6); //true
console.log("Inequality test with numbers:", (5 as number) === 6); //false

//greater than test 
console.log("Greater than test:", 11 > 9); //true
console.log("Greater than test:", 9 > 11); //false

//less than test
console.log("Less than test:", 8 < 15);//true
console.log("Less than test:", 15 < 8);//false

//greater than or equal to test
console.log("Greater than or equal to test:", 20 >= 20);//true
console.log("Greater than or equal to test:", 4 >= 9);//false

//less than or equal to
console.log("Less than or equal to test:", 1 <= 6);// true
console.log("Less than or equal to test:", 19 <= 9);//false

// Tests of "AND" operator
console.log("And operator test:", true && true);//true
console.log("And operator test:", true && false);//false

// Tests of  "OR" operator
console.log("Or operator test:", true || false);//true
console.log("Or operator test:", false || false);//false

// Test whether an item is in an array
const fruits :string[] = ["Apple", "Banana", "Mango"];
console.log("Test 'Mango' in the array:", fruits.includes("Mango")); //true
console.log("Test 'Mango' in the array:", fruits.includes("Orange")); //false

// Test whether an item is not in an array
console.log("Testing 'Tarbooz' is not in array:", !fruits.includes("Orange")); //true
console.log("Testing 'Tarbooz' is not in array:", !fruits.includes("Mango")); //false