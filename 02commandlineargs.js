
let inputArgs = process.argv.slice(2)

// // ES5ish
// let sum = inputArgs.reduce(function(total, num) {
//   return total + +num}, 0)

// ES6
let sum = inputArgs.reduce((total, num) => total + +num, 0)
