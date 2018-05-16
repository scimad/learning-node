const http = require('http');

const fn = require('./fn_exprn');

const hostname = 'localhost';
const port = 3000;


fn.add(10,20);
fn.callfn(fn.sayBye,'Everyone');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World\n');
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });




