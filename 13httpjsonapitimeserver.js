var http = require('http')
var url = require('url')
let portNumber = process.argv[2]

var server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url, true)
  let time = new Date(parsedUrl.query.iso)

  if ( parsedUrl.pathname == '/api/parsetime' ) {
    var result = formatIsoTime(time)
  }

  if ( parsedUrl.pathname == '/api/unixtime' ) {
    var result = formatUnixTime(time)
  }

  if ( result ) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(portNumber)

let formatIsoTime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

let formatUnixTime = (time) => {
  return { unixtime: time.getTime() }
}
