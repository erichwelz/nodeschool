var fs = require('fs')

let dir = process.argv[2]
let ext = '.' + process.argv[3]
let extensionRegex = new RegExp(`${ext}$`)

fs.readdir(dir, (err, files) => {
  if (err) {
    throw err;
  }
  let filtered = files.filter((file => extensionRegex.test(file) ))
  let lineSeparated = filtered.toString().replace(/,/g,'\n')
  console.log(lineSeparated)
})
