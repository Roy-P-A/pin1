const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 4321;


app.use(express.json());
const userRoutes = require("./routes/userRoutes");


app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  //res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});




app.use("/quotely-service/users", userRoutes);


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
