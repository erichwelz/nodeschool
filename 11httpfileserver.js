var http = require('http')
var fs = require('fs')
let portNumber = process.argv[2]
let file = process.argv[3]

var server = http.createServer((req, res) => {
  var readStream = fs.createReadStream(file)
  readStream.pipe(res)
})
server.listen(portNumber)
