'use strict'

const http = require('http')

http.get(process.argv[2], response => {
  let fullMessage = ''
  response.setEncoding('utf8')
  response.on('data', (data) => {
    fullMessage += data
  })
  response.on('end', () => {
    console.log(fullMessage.length)
    console.log(fullMessage)
  })
})
