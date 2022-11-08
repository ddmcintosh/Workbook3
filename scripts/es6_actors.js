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
 let memID187 = academyMembers.filter( a => a.memID == 187);
 for ( let i = 0; i < memID187.length; i++) {
     console.log(memID187[i].name);
 }
// Who has have been in at least 3 films?
let actorWith3Films = academyMembers.find((arrayValue => arrayValue.films >= "3");
if (actorWith3Films >= 3) {
    console.log("This actor has been in 3+ movies " + academyMember[i].name);
}
else {
    console.log(" No one is in 3+ movies ");
}

// Who has a name that starts with "Bob"?
// HARDER: Which Academy Members have been in a film
// that starts with "A"