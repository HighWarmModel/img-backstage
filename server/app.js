const http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
  res.write('<h1>Node.js我们已经有服务器了！</h1>')
  res.end('<p>在下告辞</p>')
}).listen(5858)
