module.exports = (dir, ext, callback) => {
  var fs = require('fs')

  let extRegex = new RegExp(`.${ext}$`)

  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);
    let filtered = files.filter((file => extRegex.test(file) ))
    let lineSeparated = filtered.toString().replace(/,/g,'\n')
    return callback(null, lineSeparated);
  })
}
