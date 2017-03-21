var http = require('http')
var bl = require('bl')

let urls = process.argv.slice(2, 5)

function callUrl (url) {
  http.get(url, (res) => {
    res.pipe(bl(
      (err, data) => {
      data = data.toString()
      console.log(data)
      urls.shift()
      if ( urls.length > 0 ) {
        callUrl(urls[0])
      }
      })
    )
  })
}

callUrl(urls[0])
