// Define a new variable type using ES6
// let a: number;
let a = 456;
// Enumerations
// Access with DIRECTIONS.UP
var DIRECTIONS;
(function (DIRECTIONS) {
    DIRECTIONS[DIRECTIONS["UP"] = 0] = "UP";
    DIRECTIONS[DIRECTIONS["DOWN"] = 1] = "DOWN";
    DIRECTIONS[DIRECTIONS["LEFT"] = 2] = "LEFT";
    DIRECTIONS[DIRECTIONS["RIGHT"] = 3] = "RIGHT";
})(DIRECTIONS || (DIRECTIONS = {}));
// Define the value of the new variable
// a = 456;
// Define a new function taking a number and a callback
// function isPair(my_number: number, callback: (number) => void) : boolean {
//     return my_number % 2 === 0;
// }
// To have an optional parameter, add an ? after the name of the parameter
// like b? or options?
// To cast a parameter or a variable, add <the_type> before the parameter or the variable
function isPair(my_number, options) {
    if (typeof my_number !== 'number') {
        my_number = parseInt(my_number, 10);
    }
    return my_number % 2 === 0;
}
// If you don't know the type of the parameter, you can pipe the type
// function isPair(my_number: number | string) : boolean {
//     return my_number % 2 === 0;
// }
// Define a function taking an array of strings and doesn't returns anything
// function hello(t: Array<string>): void {
//     let out = [];
//     for(let item of t) {
//         out.push('Hello' + item);
//     }
// }
// Run a function with a number and a callback
// isPair(2, function(rest) {
//   console.log(rest);
// });
// Run a function with several parameters
// isPair(2, {a: 2, b: 'aze'});
// Log
// console.log(isPair(2));
// Run a function
// hello(['aez', 'aze', '456']);
isPair(2);
isPair(2, { a: 1, b: 'test' });
