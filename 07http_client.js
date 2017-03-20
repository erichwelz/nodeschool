var http = require('http')

let url = process.argv[2]

http.get(url, (res) => {
  res.setEncoding('utf8')
  console.log(`Got response: ${res.statusCode}`)
  res.on('data', (data) => {
  console.log(data)
  })
})

//Official solution


// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)
