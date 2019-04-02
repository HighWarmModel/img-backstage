// const http = require('http')
// const fs = require('fs')
// const httpPort = 8080

// http.createServer((req, res) => {
//   console.log(req)
//   fs.readFile('../dist/index.html', 'utf-8', (err, content) => {
//     if (err) {
//       console.log(err)
//       console.log('We cannot open "index.html" file.')
//     }

//     res.writeHead(200, {
//       'Content-Type': 'text/html; charset=utf-8'
//     })

//     res.end(content)
//   })
// }).listen(httpPort, () => {
//   console.log(httpPort)
//   console.log('Server listening on: http://localhost:%s', httpPort)
// })
// let history = require('connect-history-api-fallback')
let http = require('http')
let express = require('express')
let path = require('path')
let app = express()
let dist = path.resolve('../dist')
app.use(express.static(dist))
app.use((req, res) => {
  res.sendFile(dist + '/index.html')
})
let server = http.createServer(app)
server.listen(process.env.port || 8088, '0.0.0.0', () => {
  console.info('serve started')
})
const onClose = () => {
  server.close(() => {
    process.exit()
  })
}
process.on('SIGINT', onClose)
process.on('SIGIEAM', onClose)
// app.use(history({
//   index: '/index.html',
//   rewrites: [{
//     from: /^\/js|img|css\/.*$/,
//     to: function (context) {
//       return context.parsedUrl.pathname
//     }
//   },
//   {
//     from: /.*/,
//     to: function (context) {
//       console.log(context)
//       return '/index.html'
//     }
//   }
//   ]
// }))
// app.listen(8080)
// let connect = require('connect')
// let path = require('path')
// console.log(__dirname) // 当前文件所在的绝对路径。
// console.log(__filename) // 当前文件的文件名,包括全路径。  __dirname和__filename都是全局对象。
// let dist = path.resolve('../dist')
// console.log(dist + '/index.html')

// const app = connect()

// console.log(app)
// app.listen(8080)
// let express = require('express')
// var app = express()
// app.use(history({
//   index: '../dist/index.html',
//   rewrites: [
//     {
//       from: /^\/js|img|css\/.*$/,
//       to: function (context) {
//         return '../dist' + context.parsedUrl.pathname
//       }
//     }
//   ]
// }))
