const express = require('express');
const morgan = require('morgan');

/// INITIALIZATION
const app = express();
const API_PORT = 8080;

/// IMPORT ROUTES
const authentication = require("./routes/authentication_route");

/// IMPORT MIDDLEWARE
app.use(morgan("dev"));

// USE ROUTES
app.use("/", authentication);

/// LISTEN
app.listen(API_PORT, ()=>{
    console.log(`Cloutendance api is listening on port: ${API_PORT}`);
});