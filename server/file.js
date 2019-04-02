const fs = require('fs')
const path = require('path')
let file = path.resolve('./module/file')
console.log(file)
fs.readFile(`${file}/test.txt`, 'UTF-8', (err, data) => {
  if (err) {
    console.log('error:' + err)
  } else {
    console.log(data)
  }
})
console.log('end')
