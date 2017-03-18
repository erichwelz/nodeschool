var mymodule = require('./06module.js')

let dir = process.argv[2]
let ext = '.' + process.argv[3]


var result = (error, data) => {
  if (error) {
  }
  console.log(data);
};

mymodule(dir, ext, result)
