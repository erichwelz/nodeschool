var fs = require('fs')
    path = require('path')

let filePath = process.argv[2]
let ext = process.argv[3]

let extensionRegex = new RegExp(`${ext}$`)

console.log(`path: ${filePath}\nextension: ${ext}`)

fs.readdir(filePath, (err, files) => {
  if (err) {
    throw err;
  }
  let filtered = files.filter((file => extensionRegex.test(file) ))
  console.log(filtered)
})
