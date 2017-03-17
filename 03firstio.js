var fs = require('fs')

let filePath = process.argv[2]
let fileBuffer = fs.readFileSync(filePath)

let numLines = fileBuffer.toString().split('\n').length - 1

console.log(numLines)
