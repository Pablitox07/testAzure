const express = require("express"); 
const fs = require('fs');
const path = require('path');
const bodyParse = require('body-parser');
const app = express();
const port = 80;

app.get("/", (req, res) => {

    res.send("<h1>PABLITOX APP TEST #1 FRONT DOOR AND VNET INTEGRATION</h1>")
});

app.listen(port, () => {
    console.log("active");
});