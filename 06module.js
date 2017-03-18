var fs = require('fs')

module.exports = (dir, ext, callback) => {
  let extRegex = new RegExp(`.${ext}$`)

  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err);
    }
    let filtered = files.filter((file => extRegex.test(file) ))
    callback(null, filtered);
  })
}
