var http = require('http')
var bl = require('bl')


let urls = process.argv.slice(2, 5)
console.log(urls)

http.get(urls, (res) => {
  console.log(`Got response: ${res.statusCode}`)
  res.pipe(bl(
    (err, data) => {
    data = data.toString()
    console.log(data)
    })
  )
})
