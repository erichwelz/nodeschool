var http = require('http')
var bl = require('bl')

let urls = process.argv.slice(2, 5)

let urlsLeft = urls.length

function callUrl (url) {
  http.get(url, (res) => {
    res.pipe(bl(
      (err, data) => {
      data = data.toString()
      console.log(data)
      urlsLeft --
      if ( urlsLeft > 0 ) {
        callUrl(urls[3 - urlsLeft])
      }
      })
    )
  })
}

callUrl(urls[3 - urlsLeft])
