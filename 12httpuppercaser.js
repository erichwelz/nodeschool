var http = require('http')
var fs = require('fs')
var map = require('through2-map')
let portNumber = process.argv[2]

var server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('POST only\n')
  }

  req.pipe(map((chunk) => {
   return chunk.toString().toUpperCase()
 })).pipe(res)
})
server.listen(portNumber)
