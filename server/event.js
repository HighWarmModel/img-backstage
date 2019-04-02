const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()
myEmitter.on('some_event', () => {
  console.log('这是一个事件！')
})
setTimeout(() => {
  myEmitter.emit('some_event')
}, 1000)
