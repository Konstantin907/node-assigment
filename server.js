const http = require("http");

const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/barcelona") {
    res.setHeader("Content-type", "text/html"); // Set the header before writing content
    res.write(`<h1>Welcome to Barcelona!</h1> <br>
                <p>[Server]: Here we go</p>`);
  } else if (req.url === "/berlin") {
    res.setHeader("Content-type", "text/html"); // Set the header before writing content
    res.write(`<h1>Welcome to Berlin!</h1> <br>
               <p>[Server]</p>`);
  } else {
    res.setHeader("Content-type", "text/plain"); // Set the header before writing content
    res.write("[Server]: Unknown");
  }
  res.end(); // End the response after writing content
});

server.listen(port, host, () => {
  console.log(`[Server]: I listen at http://${host}:${port}`);
});
