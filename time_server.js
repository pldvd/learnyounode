var net = require('net')
const port = process.argv[2];
var server = net.createServer(function (socket) {
  // socket handling logic
  let date = new Date()
  let solution = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`

  socket.write(`${solution}\n`)
  socket.end()
})

server.listen(port)