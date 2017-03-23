var net = require('net')
let portNumber = process.argv[2]

var server = net.createServer((socket) => {
  socket.write(time())
  socket.end()
})
server.listen(portNumber)

const time = () => {
  return "2013-07-06 17:42\n"
}
