var http = require('http')
var url = require('url')
let portNumber = process.argv[2]

var server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true)

    if ( urlObj.pathname == '/api/parsetime' ) {
      if ( "iso" in urlObj.query ) {
        var result = formatIsoTime(urlObj.query.iso)
      }
    }

    if ( urlObj.pathname == '/api/unixtime' ) {
      if ( "iso" in urlObj.query ) {
        var result = formatUnixTime(urlObj.query.iso)
      }
    }

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
})
server.listen(portNumber)

let formatIsoTime = (timeIn) => {
  let DateObj = new Date(timeIn)
  let timeOut = {}
  timeOut.hour = DateObj.getHours()
  timeOut.minute = DateObj.getMinutes()
  timeOut.second = DateObj.getSeconds()
  return timeOut
}

let formatUnixTime = (timeIn) => {
  let DateObj = new Date(timeIn)
  return { DateOBj.getTime()
}
