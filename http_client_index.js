'use strict'
const http = require('http');

// http.get(process.argv[2], response => {
//   response.setEncoding('utf8');
//   response.on('data', (data) => console.log(data));
// })

// console.log(http.STATUS_CODES);

http.createServer((req, res) => {
  res.write('hello world');
  res.end()
}).listen(8888, () => console.log('app listening on port 8888'));