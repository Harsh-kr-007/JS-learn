//   Primitive datatype

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//  JavaScript is a dynamic language and not static
//  which means that variables can hold values of different types during runtime.
const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 3456546594439485454854095443845848548548n



//  Reference(Non primitive)

//  Array, Objects, Functions

const heros = ["ironman", "ronaldo", "messi"]  //Array

let myObj = {
    name: "Harsh",       //Object
    age: 19,

}

const myFunction = function(){
    console.log("Hello World");       //Function
    
}
console.log(typeof heros);

              // Primitive

        // Number => number
        //   String => string
        //   Boolean => boolean
        //   null => object
        //   undefined => undefined
        //   symbol => symbol
        //   bigInt => bigInt

            // Reference

        //   Arrays => object
        //   Function => function
        //   Object => object
