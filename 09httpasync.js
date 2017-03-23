var http = require('http')
var bl = require('bl')

let urls = process.argv.slice(2, 5)

// Using recursion.. not a great idea
// function callUrl (url) {
//   http.get(url, (res) => {
//     res.pipe(bl(
//       (err, data) => {
//       data = data.toString()
//       console.log(data)
//       urls.shift()
//       if ( urls.length > 0 ) {
//         callUrl(urls[0])
//       }
//       })
//     )
//   })
// }
//
// callUrl(urls[0])


// Fully ES6 method
var results = []
var count = 0

let printResults = () => {
 results.forEach((result) => {
   console.log(result);
 })
}

let callUrl = (url, index) => {
  http.get(url, (res) => {
    res.pipe(bl(
      (err, data) => {
      data = data.toString()
      results[index] = data
      // Need to implement explicit counter or check array for valid content as results[10] = 1
      // automatically creates an array of length 11
      count ++
      if ( count == urls.length ) {
        printResults()
      }
    }))
  })
}

urls.forEach((url, index) => {
  callUrl(url, index);
})
