const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const location = process.argv[3];

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(location);
  readStream.on('open', () => {
    readStream.pipe(res);
  })
  readStream.on('error', (err) => {
    res.end(err);
  })
})

server.listen(port, () => console.log(`Server listening on ${port}`));