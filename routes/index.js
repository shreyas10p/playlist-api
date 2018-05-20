var express = require('express');
var router = express.Router();
/*
* CONTROLLERS
* */
const indexController = require('../controllers/IndexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to playlist api application");
});

/*
* Index Controller Routes
* */
router.get("/data/yt",indexController.getYoutubeData);

module.exports = router;