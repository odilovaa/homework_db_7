const express = require("express");
const fileUpload = require("express-fileupload")
const cors = require("cors");

const config = require("../config");
const routes = require("./router/index.route");
const errorHandler = require("./middleware/error-handler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());
app.use(cors());
app.use("/api", routes);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server is running on port: ${config.PORT}`);
});