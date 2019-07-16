const net = require('net')
const port = process.argv[2]
const server = net.createServer(function (socket) {
  const date = new Date()
  const solution = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`

  socket.end(`${solution}\n`)
})

server.listen(port)
