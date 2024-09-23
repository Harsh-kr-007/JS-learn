let score = "33abc"
//console.log(typeof score);
//console.log(typeof(score));    //string

let valueInNumber = Number(score);    
//console.log(typeof valueInNumber);   // number
//console.log(valueInNumber);   //NaN -> not a number

// score = NULL -> Number(score)=0
// score = undefined -> Number(score)=NaN
//"33" => 33
// "33abc" => NaN
//true => 1; false=>0

let isLoggedin = 0;

let booleanIsLoggedIn = Boolean(isLoggedin)
console.log(booleanIsLoggedIn);  //1 => true ; 0 => false
                                 // "" => false ; "Harsh" => true
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

                                


