const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.setEncoding('utf8');

    req.on('data', (chunk) => {
      body += chunk.toUpperCase();
    })

    req.on('end', () => {
      try {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(body);
        res.end();
      } catch (e) {
        res.statusCode = 400;
        return res.end(`Error: ${e.message}`);
      }
    })
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('send me a post');
    res.end();
  }
})


server.listen(process.argv[2], () => {
  console.log(`listening on ${process.argv[2]}`);
});