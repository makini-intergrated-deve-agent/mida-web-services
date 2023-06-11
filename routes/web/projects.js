var express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.render("./projects/index.ejs")
})
module.exports = app;