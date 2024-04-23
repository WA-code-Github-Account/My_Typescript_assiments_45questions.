//Written by: wa,siddiqui
// Roll No. : 00200937

// Array magicians
const magicians: string[] = ["Albus Dumbledore", "Harry Potter", "Dynamo", "Chris Angle"];

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

make_great(magicians);
show_magicians(magicians);
    