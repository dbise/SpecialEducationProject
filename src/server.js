// const express = require("express");
// const cors = require('cors')
// const bodyParser = require("body-parser");
//
// const app = express();
//
// app.use(cors());
// // parse requests of content-type: application/json
// app.use(bodyParser.json());
//
// // parse requests of content-type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
//
// // simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to bezkoder application." });
// });
//
// require("./app/routes/customer.routes.js")(app);
//
// // set port, listen for requests
// app.listen(8080, () => {
//     console.log("Server is running on port 8080.");
// });


// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("./db.json");
// const middlewares = jsonServer.defaults();
//
// server.use(middlewares);
//
// // Have all URLS prefixed with a /api
// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//   })
// );
//
// server.use(router);
// server.listen(5000, () => {
//   console.log("JSON Server is running");
// });
