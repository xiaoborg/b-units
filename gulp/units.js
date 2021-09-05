const yaml = require('js-yaml')
const fs = require('fs')
function showConsole(dsc, val, _symbol) {
  _symbol = _symbol ? _symbol : '*'
  var logSymsbol = ''
  for (let i = 0; i < 20; i++) {
    logSymsbol = logSymsbol + _symbol
  }
  console.log(logSymsbol)
  console.log(dsc + ':' + val)
  console.log(logSymsbol)
}

function loadConfig(file, filePaht) {
  let ymlFile = fs.readFileSync(`${filePaht}/${file}`, 'utf8')
  return yaml.load(ymlFile)
}
module.exports = {
  showConsole: showConsole,
  loadConfig: loadConfig
}
