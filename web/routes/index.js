var express = require('express');
var router = express.Router();

var data = require('../data/dataprovider');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Posts', categories: data.getCategories(), posts: data.getAllPosts() });
});
router.get('/entrada/:id', function(req, res, next) {
  res.render('entrada', { title: 'Entrada', categories: data.getCategories(), post: data.getPostById(req.params.id) });
});

module.exports = router;
