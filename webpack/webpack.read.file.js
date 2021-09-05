const path = require('path')
const fs = require('fs')
function _getFiles() {
  const _path = path.resolve(__dirname, '../src/js')
  const _files = fs.readdirSync(_path)
  const _obj = {}
  _files.forEach(function (_file) {
    _obj[_file.substring(0, _file.indexOf('.'))] = `./src/${_file}`
  })
  return _obj
}
module.exports = {
  getFiles: _getFiles
}
