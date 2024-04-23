//Written by: wa.siddiqui.
// Roll No. : 00200937

// Array magicians
const magicians: string[] = ["Albus Dumbledore", "Harry Potter", "Dynamo", "Chris Angel"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);