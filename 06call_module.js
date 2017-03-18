var mymodule = require('./06module.js')

let dir = process.argv[2]
let ext = '.' + process.argv[3]


var result = function(error, data) {
  if (error) {
  }
  console.log('function success')
  console.log(data);
};

console.log(mymodule(dir, ext, result))
