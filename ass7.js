const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") {
    res.write("<html>");
    res.write("<p>welcome home</p>");
    res.write("</html>");
    return res.end();
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<p>welcome to about us page</p>");
    res.write("</html>");
    return res.end();
  } else if (url === "/node") {
    res.write("<html>");
    res.write("<p>welcome to my node js project</p>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
});
server.listen(5000);
