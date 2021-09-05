import _Year from './year'

function isBigMonth(_month) {
  return !([1, 3, 5, 7, 8, 10, 12].findIndex(n => n === _month) === -1)
}

function getMonthMaxCount(_year, _month) {
  let _maxCount
  const _isLeapYear = _Year.isLeapYear(_year)
  const _isBigMonth = isBigMonth(_month)
  const _isFebruary = _month === 2

  if (_isFebruary) {
    if (_isLeapYear) {
      _maxCount = 29
    } else {
      _maxCount = 28
    }
  } else {
    if (_isBigMonth) {
      _maxCount = 31
    } else {
      _maxCount = 30
    }
  }
  return _maxCount
}

export default {
  isBigMonth: isBigMonth,
  getMonthMaxCount: getMonthMaxCount
}
