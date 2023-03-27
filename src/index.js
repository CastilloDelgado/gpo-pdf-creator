// SERVER

const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// settings
app.set("port", process.env.PORT || 3001);
app.set("json spaces", 2);

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// routes
app.use(require("./routes/reports"));

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Server running on port: ${app.get("port")}`);
});
