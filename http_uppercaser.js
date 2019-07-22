const http = require('http');

const server = http.createServer((req,res) => {

  let body = '';
  req.setEncoding('utf8');

  req.on('data', (chunk) => {
    body += chunk.toUpperCase();
  })

  req.on('end', () => {
    try {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(body);
      res.end();
    } catch(e) {
      res.statusCode = 400;
      return res.end(`Error: ${e.message}`);
    }
  })
})

server.listen(process.argv[2]);