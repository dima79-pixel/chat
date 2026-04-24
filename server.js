const http = require("http");
const fs = require("fs");
const path = require("path");
const pathToIndex = path.join(__dirname, "static", "index.html");
const indexHtmlFile = fs.readFileSync(pathToIndex);

const srver = http.createServer((req, res) => {
  if(req.url === "/"){
    return res.end(indexHtmlFile);

  }
  res.statusCode = 404; 
  return res.end("Eror 404");
});
server.listen(3000);