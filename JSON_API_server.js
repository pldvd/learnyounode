const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const requestUrl = url.parse(req.url, true);

  if (requestUrl.pathname === '/api/parsetime' && req.method === 'GET') {
    let dateSent = new Date(requestUrl.query.iso);
    console.log(dateSent);
    const response = {
      hour: dateSent.getHours(),
      minute: dateSent.getMinutes(),
      second: dateSent.getSeconds()
    }

    res.writeHead(200, { 'Content-Type': 'application/JSON' });
    res.end(JSON.stringify(response));
  }
  if (requestUrl.pathname === '/api/unixtime' && req.method === 'GET') {
    let dateSent = new Date(requestUrl.query.iso);
    const response = {
      unixtime: dateSent.valueOf(),
    }

    res.writeHead(200, { 'Content-Type': 'application/JSON' });
    res.end(JSON.stringify(response));
  }
})

server.listen(process.argv[2], () => console.log(`listening on port ${process.argv[2]}`));
