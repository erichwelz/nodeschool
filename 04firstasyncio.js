var fs = require('fs')

let filePath = process.argv[2]

// // ES5 success
  // fs.readFile(filePath, function (err, content) {
  //     if (err) {
  //       return console.log(err)
  //     }
  //     let numlines = content.toString().split('\n').length - 1
  //     console.log(numlines)
  // })

// ES6
fs.readFile(filePath, (err, content) => {
    if (err) {
      return console.log(err)
    }
    let numlines = content.toString().split('\n').length - 1
    console.log(numlines)
})
