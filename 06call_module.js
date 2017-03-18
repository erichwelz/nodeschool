var filterFn = require('./06module.js')

let dir = process.argv[2]
let ext = '.' + process.argv[3]

// Calling method after
// var result = (error, data) => {
//   if (error) {
//   }
//   let lineSeparated = data.toString().replace(/,/g,'\n')
//   console.log(lineSeparated);
// };
//
// filterFn(dir, ext, result)

// All in one go
filterFn(dir, ext, (error, data) => {
  if (error) {
  }
  let lineSeparated = data.toString().replace(/,/g,'\n')
  console.log(lineSeparated);
});
