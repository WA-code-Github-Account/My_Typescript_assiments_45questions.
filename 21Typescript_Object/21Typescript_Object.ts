
//write a programe that creates objects containing these items.

//datatypes of person objects.
interface person {
    age : number,
    name : string,
    nationality :  string,
    student : Boolean
}
//person objects.
let person: person = {
    age : 30 ,
    name : 'Warda',
    nationality : 'Pkistani',
    student :true
}
//prints person .
console.log(person);

//datatypes of car objects.
interface car {
    colour : string,
    automatic : boolean,
    maker : string,
    model : number
    
}
    //car object.
let car: car = {
     colour : "Red",
    automatic :true,
    maker : "Honda",
    model :1900

}
//print car.
console.log(car);

 
