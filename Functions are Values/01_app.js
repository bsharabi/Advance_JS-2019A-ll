


let req=new XMLHttpRequest()

req.open()
console.log(req)
req.onreadystatechange = ()=>{}

/*
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
 if (err) throw err;
 console.log('Saved!');
});

fs.open('mynewfile2.txt', 'w', function (err, file) {
 if (err) throw err;
 console.log(file);
});

//append content at the end of the file:
fs.appendFile('mynewfile1.txt', '\n This is my text.', function (err) {
 if (err) throw err;
 console.log('Updated!');
});


http.createServer(function (req, res) {
 res.writeHead(200, { 'Content-Type': 'text/html' });
 res.end('Hello World!');
}).listen(8080);

http.createServer(function (req, res) {
 //Open a file on the server and return its content:
 fs.readFile('mynewfile1.txt', function (err, data) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(data);
  return res.end();
 });
}).listen(8080);
*/