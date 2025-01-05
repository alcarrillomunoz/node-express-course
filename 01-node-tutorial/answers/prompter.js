const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let item = "Enter your name: ";
let colorQ = "What is your favorite color?";
let color;

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body style="background-color:${color}">
  <p style="font-size:4em; background:linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722); -webkit-background-clip:text; -webkit-text-fill-color:transparent">${item}</p>
  <form method="POST">
  <input name="item"></input>
  <label for="colors"><br>${colorQ}</label>
  <select name="colors" id="colors">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="black">Black</option>
  <option value="white">White</option>
  <option value="yellow">Yellow</option>
  <option value="green">Green</option>
  <option value="pink">Pink</option>
  <option value="purple">Purple</option>
  </select>
  <br>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["item"]) {
        item = body["item"];
        color = body["colors"];
      } else {
        item = "Nothing was entered.";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on("request", (req) => {
  console.log("event received: ", req.method, req.url);
})

server.listen(3000);
console.log("The server is listening on port 3000.");