var express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Blogs")
})
module.exports = app;