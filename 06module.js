module.exports = function(dir, ext, callback) {
  var fs = require('fs')

  let extRegex = new RegExp(`.${ext}$`)

  fs.readdir(dir, (err, files) => {
    if (err) {
      throw err;
      console.log('module threw')
    }
      console.log('module success')
    let filtered = files.filter((file => extRegex.test(file) ))
    let lineSeparated = filtered.toString().replace(/,/g,'\n')
    return callback(null, lineSeparated);
  })
}
