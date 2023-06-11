var express = require('express');
var router = express.Router();
const aboutRoute = require('./web/about');
const projectsRoutes = require('./web/projects');
const blogsRoutes = require('./web/blogs');
const apiRoutes=require('./api/api');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api', apiRoutes);
router.use('/about', aboutRoute);
router.use('/projects', projectsRoutes);
router.use('/blogs', blogsRoutes);
router.get('*', (req, res) => {
  res.send("404 |Not found")
})

module.exports = router;
