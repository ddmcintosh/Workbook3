"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    ];

 // Who is the Academy Member whose ID is 187?
 let memId187 = academyMembers.filter(a => a.memID == "187");
 for (let i = 0; i < memId187.length; i++) {
    console.log(" This actor has a member id of 187: " + memId187[i].name);
 }




  // Who has have been in at least 3 films?
let actorWith3Films = academyMembers.filter((num) => num.films.length >= 3);
actorWith3Films.forEach((num) => console.log(" These actors have been in more than 3+ movies: " + num.name));



// Who has a name that starts with "Bob"?
let findBob = academyMembers.filter((arrayValue) => arrayValue.name.slice(0,3) == "Bob");
for ( let i = 0; i < findBob.length; i++) {
    console.log(" These are the actors with Bob in their name " + findBob[i].name);
}
// HARDER: Which Academy Members have been in a film
// that starts with "A"