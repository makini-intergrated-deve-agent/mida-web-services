var express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("About")
})
module.exports = app;