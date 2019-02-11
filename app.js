const express = require("express");
const path = require("path");
const app = express();
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const webpackDevMiddleware = require("webpack-dev-middleware");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./server/views"));
app.use(express.static(path.join(__dirname, "public")));

const port = 8000;

mongoose.connect(
  "mongodb://localhost/conduit",
  { useNewUrlParser: true },
  err => {
    if (err) throw err;
    else {
      console.log("connected to mongodb");
    }
  }
);

app.use(cors());

//webpack config
if (process.env.NODE_ENV === "development") {
  console.log("in webpack hot middleware");
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );
}

app.use(bodyParser.json());

app.use(require("./server/routes/index"));

app.listen(port, () => {
  console.log(`app is running on localhost: ${port}`);
});
