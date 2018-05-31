const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const drilltest = require("./routes/drilltest");

app.use(bodyParser.json());

app.use("/drilltest", drilltest);

app.use(notFound)
app.use(errorHandler)

// eslint-disable-next-line
function notFound(req, res, next) {
  const url = req.originalUrl
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    // Don't log less important (automatic) browser requests
    console.error('[404: Requested file not found] ', url)
  }
  res.status(404).send({error: 'Url not found', status: 404, url})
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//     const err = new Error("Not Found");
//     err.status = 404;
//     next(err);
// });

// // error handler
// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({
//       message: err.message,
//       error: req.app.get("env") === "development" ? err.stack : {}
//     });
// });

module.exports = app;