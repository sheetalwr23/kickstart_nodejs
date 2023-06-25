const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log(req);

  res.write("<html>");
  res.write("<p>sheetal</p>");
  res.write("</html>");
  // console.log(res);
  // process.exit();
  console.log("sheetal");
});
server.listen(5000);
