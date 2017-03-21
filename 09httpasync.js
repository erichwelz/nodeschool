var http = require('http')
var bl = require('bl')
// create array if URLs in reverse order so can count down with recursion
let urls = process.argv.slice(2, 5).reverse()
let urlsLeft = 2

let results = []

function callUrl (url) {
  http.get(url, (res) => {
    console.log('function called with URL ' + url);
    res.pipe(bl(
      (err, data) => {
      data = data.toString()
      console.log(data)
      urlsLeft --
      if ( urlsLeft >= 0 ) {
        callUrl(urls[urlsLeft])
      }
      })
    )
  })
}

callUrl(urls[urlsLeft])
