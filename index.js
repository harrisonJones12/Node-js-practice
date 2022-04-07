const http = require("http");
// const https = require("http");
// const fs = require("fs");
// const axios = require("axios");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  req.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World!</h1>");
});

// const content = "Some content";

// // fs.writeFile('/Users/mac2015/Desktop/Node-js-practice/new.txt', content, err => {
// //     if(err) {
// //         console.error(err)
// //         return;
// //     }
// // });

// try {
//   fs.writeFileSync("/Users/mac2015/Desktop/Node-js-practice/new.txt", content);
//   //file written successfully
// } catch (err) {
//   console.error(err);
// }

// try {
//   const data = fs.readFileSync(
//     "/Users/mac2015/Desktop/Node-js-practice/new.txt",
//     "utf8"
//   );
//   console.log("new.txt", data);
// } catch (err) {
//   console.error(err);
// }

// axios
//   .get("https://example.com/todos")
//   .then((res) => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

eventEmitter.on("start", () => {
  console.log("started");
});

eventEmitter.emit("start");

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
