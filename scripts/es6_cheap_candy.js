"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO:
    //
    ];
    //fill the array with 10 candies of various

    // Which candies costs less than $4.00?
    let candyUnder4 = products.filter(p => p.price < 4.00 );
    for (let i = 0; i < candyUnder4.length; i++) {
        console.log(" These cost less than $4: " + candyUnder4[i].product);
    }

// Which candies has "M&M" its name?
let candywithMM = products.find((arrayValue) => arrayValue.product == "M&Ms");
if (candywithMM != undefined) {
    console.log(products[i].product)
}
    else {
        console.log("We have candy with M&Ms in the name: " + candywithMM.products[i].product);
    }

// Do we carry "Swedish Fish"?
let swedishFishInventory = products.find((arrayValue) => arrayValue.product == "Swedish Fish");
if (swedishFishInventory == "Swedish Fish") {
    console.log(" We do have " + products[i].product);
}
else {
    console.log(" We do not carry Swedish Fish");
}