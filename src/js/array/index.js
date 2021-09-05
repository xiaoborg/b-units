/**
 * get interval
 * @param {*} _start
 * @param {*} _end
 * @returns [1900, 1901, ... , 2050]
 */
function getInterval(_start, _end) {
  if (_start > _end) {
    throw new Error('Parameter error')
    return
  }
  const _arr = []
  for (let i = _start; i <= _end; i++) {
    _arr.push(i)
  }
  return _arr
}
export default {
  getInterval: getInterval
}
