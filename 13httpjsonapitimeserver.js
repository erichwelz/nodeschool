var http = require('http')
var url = require('url')
let portNumber = process.argv[2]

var server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true)

    if ( urlObj.pathname == '/api/parsetime' ) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      if ( "iso" in urlObj.query ) {
        let isoDate = urlObj.query.iso
        return res.send(isoDate)
      }
    }
})
server.listen(portNumber)
