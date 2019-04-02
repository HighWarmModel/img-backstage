
/**
 * 判断对象类型
 * @param {any} thing 对象
 * @param {void|string|Array<String>} type 类型
 * @returns {string|boolean}
 */
function checkObjectTool (thing, type) {
  const objName = Object.prototype.toString.call(thing).match(/^\[object (.*)\]$/)[1]
  if (type === void 0) {
    return objName
  }
  if (Object.prototype.toString.call(type) === '[object String]') {
    return objName === type
  }
  if (Object.prototype.toString.call(type) === '[object Array]') {
    return type.includes(objName)
  }
}
/**
 * 时间转换
 * @param {JSON} options {
 * datetime: 2019/01/24 16:28:00 // 可以是字符串
 * format: 'YYYY/MM/DD hh:mm:ss' // 支持返回字符串格式 和 为timestamp返回时间戳 默认返回Date格式
 * years: 0 数字 根据type增加或者减少日期时间
  months: 0
  days: 0
  hours: 0
  minutes: 0
  seconds: 0
 * }
 */
function timeChangeoverTool (options) {
  var dd = new Date()
  var datetime = options.datetime || dd.getTime() // 防止有误差和浅拷贝
  var format = options.format

  var year = 0
  var month = 0
  var day = 0
  var hour = 0
  var minute = 0
  var second = 0

  var years = options.years || 0
  var months = options.months || 0
  var days = options.days || 0
  var hours = options.hours || 0
  var minutes = options.minutes || 0
  var seconds = options.seconds || 0
  if (checkObjectTool(datetime) === 'String') {
    var datetimeArr = datetime.split(' ')
    var dateArr = datetimeArr[0].match(/(\d*)-?\/?\.?(\d*)-?\/?\.?(\d*)/)
    var time = datetimeArr[1] ? datetimeArr[1] : '00:00:00'
    var timeArr = time.split(':')
    var len = timeArr.length
    while (len < 3) {
      timeArr.push('00')
      len++
    }
    // time.match(//)
    // (time.indexOf('/') > -1 && (kind='/', true)) || (time.indexOf('-') > -1 && (kind='-',true)) || (time.indexOf('.') > -1 && (kind='.'))
    year = dateArr[1] - 0
    month = dateArr[2] - 0 - 1
    day = dateArr[3] - 0
    hour = timeArr[0] - 0
    minute = timeArr[1] - 0
    second = timeArr[2] - 0
  } else if (checkObjectTool(datetime) === 'Number' || checkObjectTool(datetime) === 'Date') {
    var dt = checkObjectTool(datetime) === 'Number' ? new Date(datetime) : datetime
    year = dt.getFullYear()
    month = dt.getMonth()
    day = dt.getDate()
    hour = dt.getHours()
    minute = dt.getMinutes()
    second = dt.getSeconds()
  }
  dd.setFullYear(year)
  dd.setMonth(month)
  dd.setDate(day)
  dd.setHours(hour)
  dd.setMinutes(minute)
  dd.setSeconds(second)
  dd.setFullYear(dd.getFullYear() + years)
  dd.setMonth(dd.getMonth() + months)
  dd.setDate(dd.getDate() + days)
  dd.setHours(dd.getHours() + hours)
  dd.setMinutes(dd.getMinutes() + minutes)
  dd.setSeconds(dd.getSeconds() + seconds)
  if (!format) {
    return dd
  }
  if (format === 'timestamp') {
    return Date.parse(dd)
  }
  var y = dd.getFullYear()
  var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1) // 获取当前月份的日期，不足10补0
  var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
  var h = dd.getHours() < 10 ? '0' + dd.getHours() : dd.getHours()
  var mi = dd.getMinutes() < 10 ? '0' + dd.getMinutes() : dd.getMinutes()
  var s = dd.getSeconds() < 10 ? '0' + dd.getSeconds() : dd.getSeconds()
  return format.replace('YYYY', y).replace('MM', m).replace('DD', d).replace('hh', h).replace('mm', mi).replace('ss', s)
}
/**
 * 判断是否为整数
 * @param {*} num 值
 * @return {boolean} true 为是 false 否
 */
function judgementIntegerTool (num) {
  return /^[0-9]+$/.test(num)
}
/**
 * 保留小数(默认保留两位小数)
 * @param {String|Number} num 字符串数字 或 数字
 * @param {Number} fix 保留小数
 * @returns {Number} 返回保留小数点的数字
 */
function reservedDecimalTool (num, fix) {
  fix = fix || 2 // 默认保留两位小数
  return (num - 0).toFixed(fix)
}
export {
  checkObjectTool, // 类型判断工具
  timeChangeoverTool, // 时间转换工具
  reservedDecimalTool, // 保留小数
  judgementIntegerTool // 判断是否为整数
}
