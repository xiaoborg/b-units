import _Array from '../array/index'

function getIntervalYear(_startYear = 1900, _endYear = 2050) {
  return _Array.getInterval(_startYear, _endYear)
}

function isLeapYear(_year) {
  const _remainder1 = _year % 400
  const _remainder2 = _year % 4
  return _remainder1 === 0 || _remainder2 === 0
}

export default {
  getIntervalYear: getIntervalYear,
  isLeapYear: isLeapYear
}
