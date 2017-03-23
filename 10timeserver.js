var net = require('net')
let portNumber = process.argv[2]

var server = net.createServer((socket) => {
  socket.write(time())
  socket.end()
})
server.listen(portNumber)

const time = () => {
  let date = new Date
  // not accounting for Nov/Dec.. would probably used strftime library if for Prod use
  return date.getFullYear() + '-0' + ( date.getMonth() + 1 )+ '-' + date.getDate() + ' ' +
  date.getHours() + ':' + date.getMinutes() + '\n'
}
